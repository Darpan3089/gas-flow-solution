import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/components/products/FaqAccordion";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { ProductCategoryTabs } from "@/components/products/ProductCategoryTabs";
import { SubCategoryGrid } from "@/components/products/SubCategoryGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { categories, getCategory } from "@/data/catalog";

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
      <FeaturedProducts products={category.products} categorySlug={category.slug} icon={category.icon} />

      {/* Product Categories */}
      <ProductCategoryTabs categories={categories} initialSlug={category.slug} />

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
