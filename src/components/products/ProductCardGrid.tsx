"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import type { CatalogEntry } from "@/data/catalog";
import { productHref } from "@/data/catalog";
import { ProductImage } from "./ProductImage";
import { cn } from "@/lib/cn";

interface ProductCardGridProps {
  entry: CatalogEntry;
  onQuickView: (entry: CatalogEntry) => void;
  /** Stagger index within the current page of results. */
  index?: number;
}

/** Grid-view product card. */
export function ProductCardGrid({ entry, onQuickView, index = 0 }: ProductCardGridProps) {
  const { product, category } = entry;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.04 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-brand-border bg-brand-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover-glow"
    >
      <div className="relative">
        <ProductImage
          src={product.image}
          alt={product.name}
          icon={category.icon}
          series={product.series}
          seed={product.slug}
          className="h-48 w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        {/* Quick view sits above the image and is reachable by keyboard at all times. */}
        <button
          type="button"
          onClick={() => onQuickView(entry)}
          className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white/90 px-3 py-1.5 text-xs font-bold text-brand-ink opacity-0 shadow-sm backdrop-blur-sm transition-all hover:bg-brand-green hover:text-white focus-visible:opacity-100 group-hover:opacity-100"
        >
          <Eye className="w-3.5 h-3.5" aria-hidden="true" />
          Quick view
          <span className="sr-only">of {product.name}</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Link
          href={`/products/${category.slug}`}
          className="mb-2 self-start text-[11px] font-bold uppercase tracking-widest text-brand-green hover:text-brand-green-dark transition-colors"
        >
          {category.name}
        </Link>

        <h3 className="mb-2 text-lg font-bold tracking-tight text-brand-ink transition-colors group-hover:text-brand-green">
          {/* Stretched link: the whole card is the primary target, but Quick View
              and the category link sit above it via z-index. */}
          <Link href={productHref(category.slug, product.slug)} className="before:absolute before:inset-0">
            {product.name}
          </Link>
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-brand-muted line-clamp-3">{product.tagline}</p>

        <div className="mt-auto flex items-center justify-between border-t border-brand-border pt-4">
          <span className="font-mono text-xs font-semibold text-brand-subtle">{product.series}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-green">
            View details
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/** List-view row — same data, denser layout for scanning long result sets. */
export function ProductCardList({ entry, onQuickView, index = 0 }: ProductCardGridProps) {
  const { product, category } = entry;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.03 }}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-brand-border bg-brand-surface p-5 transition-all duration-300 hover:border-brand-green/30 hover-glow sm:flex-row"
    >
      <ProductImage
        src={product.image}
        alt={product.name}
        icon={category.icon}
        series={product.series}
        seed={product.slug}
        className="h-40 w-full shrink-0 rounded-lg sm:h-32 sm:w-48"
        sizes="(max-width: 640px) 100vw, 192px"
      />

      <div className="flex flex-1 flex-col">
        <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
          <Link
            href={`/products/${category.slug}`}
            className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-brand-green hover:text-brand-green-dark transition-colors"
          >
            {category.name}
          </Link>
          <span className="font-mono text-xs text-brand-subtle">{product.series}</span>
        </div>

        <h3 className="mb-1.5 text-lg font-bold tracking-tight text-brand-ink transition-colors group-hover:text-brand-green">
          <Link href={productHref(category.slug, product.slug)} className="before:absolute before:inset-0">
            {product.name}
          </Link>
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-brand-muted line-clamp-2">{product.tagline}</p>

        <div className="mt-auto flex flex-wrap items-center gap-3">
          <Link
            href={productHref(category.slug, product.slug)}
            className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-green px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-green-dark"
          >
            View details
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => onQuickView(entry)}
            className={cn(
              "relative z-10 inline-flex items-center gap-1.5 rounded-full border border-brand-border px-4 py-2",
              "text-xs font-bold text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green",
            )}
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            Quick view
            <span className="sr-only">of {product.name}</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
