import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, FileText, Wrench } from "lucide-react";
import { CategoryIcon } from "@/components/products/CategoryIcon";
import { DocumentList } from "@/components/products/DocumentList";
import { FaqAccordion } from "@/components/products/FaqAccordion";
import { InquiryForm } from "@/components/products/InquiryForm";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductImage } from "@/components/products/ProductImage";
import { SpecTable } from "@/components/products/SpecTable";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  allProductParams,
  getCategory,
  getProduct,
  getRelatedProducts,
  productHref,
} from "@/data/catalog";
import { docsFor } from "@/data/catalog/shared";

interface ProductPageProps {
  params: Promise<{ category: string; product: string }>;
}

/** All detail routes prerender — the catalog is fully known at build time. */
export function generateStaticParams() {
  return allProductParams();
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category: categorySlug, product: productSlug } = await params;
  const category = getCategory(categorySlug);
  const product = getProduct(categorySlug, productSlug);

  if (!category || !product) return { title: "Product Not Found | Gas Flow Solutions" };

  const title = `${product.name} (${product.series}) | Gas Flow Solutions`;
  return {
    title,
    description: product.tagline,
    alternates: { canonical: productHref(category.slug, product.slug) },
    openGraph: {
      title,
      description: product.tagline,
      type: "website",
      ...(product.image ? { images: [product.image] } : {}),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category: categorySlug, product: productSlug } = await params;
  const category = getCategory(categorySlug);
  const product = getProduct(categorySlug, productSlug);

  if (!category || !product) notFound();

  const related = getRelatedProducts(category.slug, product.slug, 3);
  const documents = product.documents ?? docsFor(product.name);
  // Product-specific answers first, topped up with the category's so the section
  // is never thin on models that carry no FAQ of their own.
  const faqs = [...(product.faqs ?? []), ...category.faqs].slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.series,
    description: product.overview,
    category: category.name,
    brand: { "@type": "Brand", name: "Gas Flow Solutions" },
    ...(product.image ? { image: product.image } : {}),
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="bg-brand-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="container mx-auto max-w-7xl px-6 pt-8 md:px-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category.name, href: `/products/${category.slug}` },
            { label: product.name },
          ]}
        />
      </div>

      {/* Hero: gallery + summary */}
      <header className="container mx-auto max-w-7xl px-6 pt-10 pb-16 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ProductGallery
            name={product.name}
            series={product.series}
            icon={category.icon}
            image={product.image}
            gallery={product.gallery}
            slug={product.slug}
          />

          <div>
            <Link
              href={`/products/${category.slug}`}
              className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green transition-colors hover:text-brand-green-dark"
            >
              <CategoryIcon icon={category.icon} className="w-4 h-4" />
              {category.name}
            </Link>

            <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-brand-ink md:text-5xl">
              {product.name}
            </h1>

            <p className="mb-5 font-mono text-sm font-semibold text-brand-subtle">
              Series {product.series}
              {product.group && <span className="text-brand-subtle"> · {product.group}</span>}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-brand-muted">{product.tagline}</p>
            <p className="mb-8 leading-relaxed text-brand-muted">{product.overview}</p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Link
                href="#inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/25"
              >
                Request a quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="#documents"
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-7 py-3.5 text-sm font-bold text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Datasheets
              </Link>
            </div>

            {/* Headline figures, so the key numbers are visible without scrolling */}
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-brand-border bg-brand-border">
              {product.specs.slice(0, 4).map((spec) => (
                <div key={spec.label} className="bg-brand-surface p-4">
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-subtle">
                    {spec.label}
                  </dt>
                  <dd className="text-sm font-bold text-brand-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      {/* Features + applications */}
      <section
        aria-labelledby="features-heading"
        className="border-y border-brand-border bg-brand-surface-alt py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-8">
              <h2 id="features-heading" className="mb-6 text-2xl font-bold tracking-tight text-brand-ink">
                Key features
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted">
                    <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-brand-green" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-border bg-brand-surface p-8">
              <div className="mb-6 flex items-center gap-3">
                <Wrench className="w-5 h-5 text-brand-green" aria-hidden="true" />
                <h2 className="text-2xl font-bold tracking-tight text-brand-ink">Applications</h2>
              </div>
              <ul className="space-y-3">
                {product.applications.map((application) => (
                  <li key={application} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications + documents */}
      <section aria-labelledby="specifications-heading" className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <div>
              <h2 id="specifications-heading" className="mb-3 text-3xl font-bold tracking-tight text-brand-ink">
                Technical specifications
              </h2>
              <p className="mb-6 text-brand-muted">
                Confirmed against your duty at order stage — send us the operating conditions and we
                will verify the selection.
              </p>
              <SpecTable rows={product.specs} caption={`${product.name} specifications`} />
            </div>

            <div id="documents" className="scroll-mt-28">
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-brand-ink">
                Technical documents
              </h2>
              <p className="mb-6 text-brand-muted">
                Datasheets, installation manuals, drawings and conformity declarations.
              </p>
              <DocumentList documents={documents} productName={product.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="border-y border-brand-border bg-brand-surface-alt py-16 md:py-20"
        >
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <h2 id="related-heading" className="mb-10 text-3xl font-bold tracking-tight text-brand-ink">
              Related products
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((entry) => (
                <article
                  key={`${entry.category.slug}-${entry.product.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-brand-border bg-brand-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover-glow"
                >
                  <ProductImage
                    src={entry.product.image}
                    alt={entry.product.name}
                    icon={entry.category.icon}
                    series={entry.product.series}
                    seed={entry.product.slug}
                    className="h-40 w-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-green">
                      {entry.category.name}
                    </p>
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-brand-ink transition-colors group-hover:text-brand-green">
                      <Link
                        href={productHref(entry.category.slug, entry.product.slug)}
                        className="before:absolute before:inset-0"
                      >
                        {entry.product.name}
                      </Link>
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-muted line-clamp-2">
                      {entry.product.tagline}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry + FAQ */}
      <section aria-labelledby="inquiry-heading" className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div id="inquiry" className="scroll-mt-28">
              <h2 id="inquiry-heading" className="mb-3 text-3xl font-bold tracking-tight text-brand-ink">
                Enquire about this product
              </h2>
              <p className="mb-6 text-brand-muted">
                The more detail you give on the duty, the more precise the proposal comes back.
              </p>
              <InquiryForm productName={`${product.name} (${product.series})`} />
            </div>

            <div>
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-brand-ink">
                Frequently asked questions
              </h2>
              <p className="mb-6 text-brand-muted">
                What engineers most often ask when specifying this equipment.
              </p>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
