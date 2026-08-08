import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Factory, Wrench } from "lucide-react";
import { CatalogBrowser } from "@/components/products/CatalogBrowser";
import { CategoryIcon } from "@/components/products/CategoryIcon";
import { FaqAccordion } from "@/components/products/FaqAccordion";
import { SpecTable } from "@/components/products/SpecTable";
import { SubCategoryGrid } from "@/components/products/SubCategoryGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { catalogEntries, categories, getCategory } from "@/data/catalog";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

/** Every category is known at build time, so all routes prerender as static HTML. */
export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) return { title: "Product Not Found | Gas Flow Solutions" };

  const title = `${category.name} | Gas Flow Solutions`;
  return {
    title,
    description: category.tagline,
    alternates: { canonical: `/products/${category.slug}` },
    openGraph: { title, description: category.tagline, type: "website" },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const entries = catalogEntries.filter((entry) => entry.category.slug === category.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.tagline,
    hasPart: category.products.map((product) => ({
      "@type": "Product",
      name: product.name,
      sku: product.series,
      description: product.tagline,
      brand: { "@type": "Brand", name: "Gas Flow Solutions" },
    })),
  };

  return (
    <div className="bg-brand-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto max-w-7xl px-6 pt-8 md:px-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category.name },
          ]}
        />
      </div>


      {/* Sub-Categories */}
      <SubCategoryGrid products={category.products} categorySlug={category.slug} icon={category.icon} />

      {/* Specifications */}
      <section
        aria-labelledby="specs-heading"
        className="border-y border-brand-border bg-brand-surface-alt py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <h2 id="specs-heading" className="mb-4 text-3xl font-bold tracking-tight text-brand-ink">
                Technical specifications
              </h2>
              <p className="leading-relaxed text-brand-muted">
                The figures below describe the envelope of the whole range. Individual models cover
                narrower bands — open a product for its own limits, or send us your duty and we will
                confirm the exact selection.
              </p>
            </div>
            <SpecTable rows={category.specs} caption={`${category.name} range specifications`} />
          </div>
        </div>
      </section>

      {/* Applications + industries */}
      <section aria-labelledby="applications-heading" className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-8">
              <div className="mb-5 flex items-center gap-3">
                <Wrench className="w-5 h-5 text-brand-green" aria-hidden="true" />
                <h2 id="applications-heading" className="text-xl font-bold text-brand-ink">
                  Applications
                </h2>
              </div>
              <ul className="space-y-3">
                {category.applications.map((application) => (
                  <li key={application} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-border bg-brand-surface p-8">
              <div className="mb-5 flex items-center gap-3">
                <Factory className="w-5 h-5 text-brand-green" aria-hidden="true" />
                <h2 className="text-xl font-bold text-brand-ink">Industries served</h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.industries.map((industry) => (
                  <li
                    key={industry}
                    className="rounded-full border border-brand-border bg-brand-surface-alt px-3.5 py-1.5 text-sm text-brand-muted"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        aria-labelledby="benefits-heading"
        className="border-y border-brand-border bg-brand-surface-alt py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <h2 id="benefits-heading" className="mb-10 text-3xl font-bold tracking-tight text-brand-ink">
            Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {category.benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-brand-border bg-brand-surface p-7 transition-all hover:border-brand-green/30 hover-glow"
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green-soft font-mono text-sm font-bold text-brand-green">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2.5 text-lg font-bold text-brand-ink">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Range */}
      <section id="range" aria-labelledby="range-heading" className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <h2 id="range-heading" className="mb-2 text-3xl font-bold tracking-tight text-brand-ink">
            The {category.name.toLowerCase()} range
          </h2>
          <p className="mb-10 text-brand-muted">
            {category.products.length} {category.products.length === 1 ? "model" : "models"} in this
            category.
          </p>

          <Suspense
            fallback={
              <div
                className="h-96 animate-pulse rounded-xl border border-brand-border bg-brand-surface"
                aria-hidden="true"
              />
            }
          >
            <CatalogBrowser entries={entries} showCategoryFilter={false} pageSize={6} />
          </Suspense>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-brand-border bg-brand-surface-alt py-16 md:py-20"
      >
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <h2 id="faq-heading" className="mb-3 text-3xl font-bold tracking-tight text-brand-ink">
            Frequently asked questions
          </h2>
          <p className="mb-8 text-brand-muted">
            Common questions from engineers specifying {category.name.toLowerCase()}.
          </p>
          <FaqAccordion items={category.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-border py-16">
        <div className="container mx-auto max-w-3xl px-6 text-center md:px-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-ink">
            Ready to specify your {category.name.toLowerCase()}?
          </h2>
          <p className="mb-8 text-brand-muted">
            Share your operating conditions and our engineers will size the equipment, confirm the
            options and issue a costed proposal.
          </p>
          <Link
            href={category.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/25"
          >
            {category.cta.label}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
