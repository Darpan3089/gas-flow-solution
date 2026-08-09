import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { IconKey, Product } from "@/data/catalog";
import { productHref } from "@/data/catalog";
import { ProductImage } from "./ProductImage";

interface FeaturedProductsProps {
  products: Product[];
  categorySlug: string;
  icon: IconKey;
}

/**
 * Fills the sub-category slot for a single-product category — a browsing
 * grid has nothing to browse, so a showcase card takes its place instead.
 * `SubCategoryGrid` covers the 2+ case, so the two never render together.
 */
export function FeaturedProducts({ products, categorySlug, icon }: FeaturedProductsProps) {
  if (products.length !== 1) return null;

  const product = products[0];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink">Featured Products</h2>
          <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-16 bg-brand-border" />
            <span className="h-1 w-10 rounded-full bg-brand-green" />
            <span className="h-px w-16 bg-brand-border" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <ArrowLeft
            className="hidden h-6 w-6 shrink-0 text-brand-border md:block"
            aria-hidden="true"
          />

          <Link
            href={productHref(categorySlug, product.slug)}
            className="group flex w-full max-w-sm flex-col items-center rounded-2xl border border-brand-border bg-brand-surface p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-lg"
          >
            <div className="relative mb-5 h-44 w-full overflow-hidden rounded-lg">
              <ProductImage
                src={product.image}
                alt={product.name}
                icon={icon}
                series={product.series}
                seed={product.slug}
                className="h-full w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
                fit="contain"
                overlay={false}
              />
            </div>

            <span className="mb-4 h-0.5 w-10 rounded-full bg-brand-green/40" aria-hidden="true" />

            <h3 className="mb-2 text-lg font-bold text-brand-ink transition-colors group-hover:text-brand-green">
              {product.name}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-brand-muted line-clamp-2">
              {product.tagline}
            </p>

            <span className="mt-auto inline-flex items-center gap-2 rounded-lg bg-brand-ink px-7 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover:bg-brand-green">
              Details
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </Link>

          <ArrowRight
            className="hidden h-6 w-6 shrink-0 text-brand-border md:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
