"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/catalog";
import { productHref } from "@/data/catalog";
import { ProductImage } from "./ProductImage";
import { cn } from "@/lib/cn";

interface ProductCategoryTabsProps {
  categories: Category[];
  /** Category slug selected by default — usually the page's own category. */
  initialSlug: string;
}

/**
 * Tabbed browser across every category, so a visitor can pivot from one
 * range to another without leaving the page. Switching tabs is client-side
 * only (all category data is already in hand); each card still links out to
 * its real product detail route.
 */
export function ProductCategoryTabs({ categories, initialSlug }: ProductCategoryTabsProps) {
  const [activeSlug, setActiveSlug] = useState(initialSlug);
  const active = categories.find((category) => category.slug === activeSlug) ?? categories[0];

  return (
    <section id="categories" className="scroll-mt-24 py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink">Product Categories</h2>
          <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-16 bg-brand-border" />
            <span className="h-1 w-10 rounded-full bg-brand-navy" />
            <span className="h-px w-16 bg-brand-border" />
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Product categories"
          className="mb-10 flex overflow-x-auto rounded-xl border border-brand-border bg-brand-surface"
        >
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              role="tab"
              aria-selected={category.slug === activeSlug}
              onClick={() => setActiveSlug(category.slug)}
              className={cn(
                "shrink-0 border-r border-brand-border px-5 py-4 text-sm font-bold whitespace-nowrap transition-colors last:border-r-0",
                category.slug === activeSlug
                  ? "bg-brand-ink text-white"
                  : "text-brand-muted hover:bg-brand-surface-alt hover:text-brand-navy",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {active.products.map((product) => (
            <Link
              key={product.slug}
              href={productHref(active.slug, product.slug)}
              className="group flex flex-col items-center rounded-2xl border border-brand-border bg-brand-surface p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-lg"
            >
              <div className="relative mb-5 h-40 w-full overflow-hidden rounded-lg">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  icon={active.icon}
                  series={product.series}
                  seed={product.slug}
                  className="h-full w-full"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  fit="contain"
                  overlay={false}
                />
              </div>

              <span className="mb-4 h-0.5 w-10 rounded-full bg-brand-navy/40" aria-hidden="true" />

              <h3 className="mb-2 line-clamp-2 text-base font-bold text-brand-ink transition-colors group-hover:text-brand-navy">
                {product.name}
              </h3>
              <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-brand-muted">
                {product.tagline}
              </p>

              <span className="mt-auto inline-flex items-center gap-2 rounded-lg bg-brand-ink px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover:bg-brand-navy">
                Details
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
