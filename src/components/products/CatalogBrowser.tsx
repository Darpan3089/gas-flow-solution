"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGrid, List, Search, SlidersHorizontal, X } from "lucide-react";
import type { CatalogEntry } from "@/data/catalog";
import { categories } from "@/data/catalog";
import { ProductCardGrid, ProductCardList } from "./ProductCardGrid";
import { QuickViewModal } from "./QuickViewModal";
import { CategoryIcon } from "./CategoryIcon";
import { cn } from "@/lib/cn";

interface CatalogBrowserProps {
  entries: CatalogEntry[];
  /** Hides the category filter on pages that are already scoped to one. */
  showCategoryFilter?: boolean;
  pageSize?: number;
}

type ViewMode = "grid" | "list";

const ALL = "all";

/** Fields a query is matched against, joined once per entry and cached. */
function searchIndex(entry: CatalogEntry) {
  return [
    entry.product.name,
    entry.product.series,
    entry.product.tagline,
    entry.product.group ?? "",
    entry.category.name,
    entry.product.applications.join(" "),
    entry.product.features.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

export function CatalogBrowser({
  entries,
  showCategoryFilter = true,
  pageSize = 9,
}: CatalogBrowserProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");
  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);
  const [quickView, setQuickView] = useState<CatalogEntry | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // The URL is the source of truth for the category and group, so deep links
  // like /products?category=gas-filters or a nav-menu link to a product group
  // and browser back/forward work without an effect mirroring params into state.
  const activeCategory = searchParams.get("category") ?? ALL;
  const activeGroup = searchParams.get("group");

  const indexed = useMemo(
    () => entries.map((entry) => ({ entry, haystack: searchIndex(entry) })),
    [entries],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return indexed
      .filter(({ entry }) => activeCategory === ALL || entry.category.slug === activeCategory)
      .filter(({ entry }) => !activeGroup || entry.product.group === activeGroup)
      .filter(({ haystack }) => !needle || haystack.includes(needle))
      .map(({ entry }) => entry);
  }, [indexed, activeCategory, activeGroup, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  // Clamp rather than reset: a filter change that shortens the list keeps the
  // user on the last valid page instead of silently showing nothing.
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const availableCategories = useMemo(() => {
    const present = new Set(entries.map((entry) => entry.category.slug));
    return categories.filter((category) => present.has(category.slug));
  }, [entries]);

  const selectCategory = (slug: string) => {
    setPage(1);
    setFiltersOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    if (slug === ALL) params.delete("category");
    else params.set("category", slug);
    // A group belongs to one category, so any category change invalidates it.
    params.delete("group");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const clearGroup = () => {
    setPage(1);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("group");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const goToPage = (next: number) => {
    setPage(next);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hasActiveFilters =
    activeCategory !== ALL || activeGroup !== null || query.trim().length > 0;

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 lg:max-w-md">
          <label htmlFor="catalog-search" className="sr-only">
            Search products
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 w-4 h-4 -translate-y-1/2 text-brand-subtle"
            aria-hidden="true"
          />
          <input
            id="catalog-search"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search by product, series or application…"
            className="w-full rounded-full border border-brand-border bg-brand-surface py-3 pl-11 pr-4 text-sm text-brand-ink placeholder:text-brand-subtle transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
          />
        </div>

        <div className="flex items-center gap-3">
          {showCategoryFilter && (
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
              Filter
            </button>
          )}

          <p className="hidden text-sm text-brand-subtle sm:block" role="status" aria-live="polite">
            <span className="font-semibold text-brand-ink">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "product" : "products"}
          </p>

          <div
            className="flex items-center gap-1 rounded-full border border-brand-border bg-brand-surface p-1"
            role="group"
            aria-label="Result view"
          >
            {(
              [
                { mode: "grid" as const, Icon: LayoutGrid, label: "Grid view" },
                { mode: "list" as const, Icon: List, label: "List view" },
              ]
            ).map(({ mode, Icon, label }) => (
              <button
                key={mode}
                type="button"
                onClick={() => setView(mode)}
                aria-pressed={view === mode}
                aria-label={label}
                className={cn(
                  "rounded-full p-2 transition-colors",
                  view === mode
                    ? "bg-brand-green text-white"
                    : "text-brand-subtle hover:text-brand-green",
                )}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeGroup && (
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="text-sm text-brand-subtle">Showing range:</span>
          <button
            type="button"
            onClick={clearGroup}
            className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green-soft px-4 py-1.5 text-sm font-semibold text-brand-green transition-colors hover:border-brand-green"
          >
            {activeGroup}
            <X className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="sr-only">Remove range filter</span>
          </button>
        </div>
      )}

      <div className={cn("gap-8", showCategoryFilter && "lg:grid lg:grid-cols-[15rem_1fr]")}>
        {showCategoryFilter && (
          <aside
            className={cn(
              "mb-6 lg:mb-0 lg:block",
              filtersOpen ? "block" : "hidden",
            )}
            aria-label="Category filter"
          >
            <div className="rounded-xl border border-brand-border bg-brand-surface p-4 lg:sticky lg:top-28">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-subtle">
                  Categories
                </h2>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      selectCategory(ALL);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green hover:text-brand-green-dark"
                  >
                    <X className="w-3 h-3" aria-hidden="true" />
                    Clear
                  </button>
                )}
              </div>

              <ul className="space-y-0.5">
                <li>
                  <button
                    type="button"
                    onClick={() => selectCategory(ALL)}
                    aria-pressed={activeCategory === ALL}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
                      activeCategory === ALL
                        ? "bg-brand-green-soft text-brand-green"
                        : "text-brand-muted hover:bg-brand-green-soft hover:text-brand-green",
                    )}
                  >
                    All products
                    <span className="text-xs text-brand-subtle">{entries.length}</span>
                  </button>
                </li>

                {availableCategories.map((category) => {
                  const count = entries.filter((entry) => entry.category.slug === category.slug).length;
                  const isActive = activeCategory === category.slug;

                  return (
                    <li key={category.slug}>
                      <button
                        type="button"
                        onClick={() => selectCategory(category.slug)}
                        aria-pressed={isActive}
                        className={cn(
                          "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
                          isActive
                            ? "bg-brand-green-soft text-brand-green"
                            : "text-brand-muted hover:bg-brand-green-soft hover:text-brand-green",
                        )}
                      >
                        <CategoryIcon icon={category.icon} className="w-4 h-4 shrink-0" />
                        <span className="flex-1 leading-snug">{category.name}</span>
                        <span className="text-xs text-brand-subtle">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        )}

        <div>
          {visible.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl border border-dashed border-brand-border bg-brand-surface p-12 text-center"
            >
              <Search className="mx-auto mb-4 w-8 h-8 text-brand-subtle" aria-hidden="true" />
              <p className="mb-1.5 text-lg font-bold text-brand-ink">No matching products</p>
              <p className="mx-auto mb-6 max-w-md text-sm text-brand-muted">
                Try a broader search term, or clear the filters to browse the full range. If you
                cannot find what you need, our engineers will source or specify it.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  selectCategory(ALL);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
              >
                Clear filters
              </button>
            </motion.div>
          ) : view === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((entry, index) => (
                <ProductCardGrid
                  key={`${entry.category.slug}-${entry.product.slug}`}
                  entry={entry}
                  index={index}
                  onQuickView={setQuickView}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {visible.map((entry, index) => (
                <ProductCardList
                  key={`${entry.category.slug}-${entry.product.slug}`}
                  entry={entry}
                  index={index}
                  onQuickView={setQuickView}
                />
              ))}
            </div>
          )}

          {pageCount > 1 && (
            <nav
              aria-label="Product pagination"
              className="mt-10 flex items-center justify-center gap-2"
            >
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="rounded-full border border-brand-border p-2.5 text-brand-muted transition-colors hover:border-brand-green hover:text-brand-green disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-brand-border disabled:hover:text-brand-muted"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>

              {Array.from({ length: pageCount }).map((_, i) => {
                const pageNumber = i + 1;
                const isCurrent = pageNumber === currentPage;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => goToPage(pageNumber)}
                    aria-label={`Page ${pageNumber}`}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "min-w-10 rounded-full px-3.5 py-2 text-sm font-bold transition-colors",
                      isCurrent
                        ? "bg-brand-green text-white"
                        : "border border-brand-border text-brand-muted hover:border-brand-green hover:text-brand-green",
                    )}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                aria-label="Next page"
                className="rounded-full border border-brand-border p-2.5 text-brand-muted transition-colors hover:border-brand-green hover:text-brand-green disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-brand-border disabled:hover:text-brand-muted"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </nav>
          )}
        </div>
      </div>

      <QuickViewModal entry={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}
