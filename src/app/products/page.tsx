import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CatalogBrowser } from "@/components/products/CatalogBrowser";
import { CategoryIcon } from "@/components/products/CategoryIcon";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { catalogEntries, categories, totalProductCount } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Product Catalogue | Gas Flow Solutions",
  description:
    "Gas pressure regulators, filters, solenoid and safety valves, metering systems, control stations and combustion equipment for industrial gas installations.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Product Catalogue | Gas Flow Solutions",
    description:
      "Regulation, filtration, safety, metering and control equipment for industrial and utility gas networks.",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-brand-bg">
      <div className="container mx-auto max-w-7xl px-6 pt-8 md:px-12">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      </div>

      {/* Hero */}
      <header className="container mx-auto max-w-7xl px-6 pt-10 pb-14 md:px-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-navy">
          Product Catalogue
        </p>
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-brand-ink md:text-6xl">
          Equipment for every stage of the{" "}
          <span className="bg-gradient-to-r from-brand-navy to-brand-navy-light bg-clip-text text-transparent">
            gas chain
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-muted">
          {totalProductCount} products across {categories.length} categories — regulation,
          filtration, safety, measurement and complete control stations. Everything is sized against
          your actual duty rather than sold from a shelf, so tell us the conditions and we will
          specify the unit.
        </p>
      </header>

      {/* Category shortcuts */}
      <section aria-labelledby="browse-heading" className="border-y border-brand-border bg-brand-surface-alt py-12">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <h2 id="browse-heading" className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-subtle">
            Browse by category
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/products/${category.slug}`}
                  className="group flex h-full items-center gap-3 rounded-xl border border-brand-border bg-brand-surface px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-brand-navy/40 hover:shadow-lg hover:shadow-brand-navy/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-navy/20 bg-brand-navy-soft">
                    <CategoryIcon icon={category.icon} className="w-5 h-5 text-brand-navy" />
                  </span>
                  <span className="flex-1 text-sm font-semibold leading-snug text-brand-ink transition-colors group-hover:text-brand-navy">
                    {category.name}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 text-brand-subtle transition-all group-hover:translate-x-0.5 group-hover:text-brand-navy"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Browser */}
      <section aria-label="Product results" className="container mx-auto max-w-7xl px-6 py-16 md:px-12">
        {/* useSearchParams inside CatalogBrowser needs a boundary for static prerender. */}
        <Suspense
          fallback={
            <div
              className="h-96 animate-pulse rounded-xl border border-brand-border bg-brand-surface"
              aria-hidden="true"
            />
          }
        >
          <CatalogBrowser entries={catalogEntries} />
        </Suspense>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-brand-border bg-brand-surface-alt py-16">
        <div className="container mx-auto max-w-3xl px-6 text-center md:px-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-ink">
            Not sure which unit fits your duty?
          </h2>
          <p className="mb-8 text-brand-muted">
            Send us inlet and outlet pressure, required flow, line size and gas composition. Our
            application engineers will size the equipment and return a costed proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-navy-dark hover:shadow-lg hover:shadow-brand-navy/25"
          >
            Talk to an engineer
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
