"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { IconKey, Product } from "@/data/catalog";
import { productHref } from "@/data/catalog";
import { ProductImage } from "./ProductImage";

interface SubCategoryGridProps {
  products: Product[];
  categorySlug: string;
  icon: IconKey;
}

interface Tile {
  key: string;
  name: string;
  href: string;
  image?: string;
  series?: string;
}

/**
 * One tile per group (products sharing a `group` collapse into a single
 * card linking to the first member's detail page) plus one tile per
 * ungrouped product (linking straight to its own detail page). Encounter
 * order is preserved so the grid reads in the same order as the category's
 * product list.
 */
function tilesFor(categorySlug: string, products: Product[]): Tile[] {
  const groupMembers = new Map<string, Product[]>();
  for (const product of products) {
    if (!product.group) continue;
    if (!groupMembers.has(product.group)) groupMembers.set(product.group, []);
    groupMembers.get(product.group)!.push(product);
  }

  const seenGroups = new Set<string>();
  const tiles: Tile[] = [];
  for (const product of products) {
    const group = product.group;
    if (group) {
      if (seenGroups.has(group)) continue;
      seenGroups.add(group);
      const members = groupMembers.get(group)!;
      tiles.push({
        key: group,
        name: group,
        href: productHref(categorySlug, members[0].slug),
        image: members.find((member) => member.image)?.image,
      });
    } else {
      tiles.push({
        key: product.slug,
        name: product.name,
        href: productHref(categorySlug, product.slug),
        image: product.image,
        series: product.series,
      });
    }
  }
  return tiles;
}

/** Nothing to browse below a single card, so the section only earns its place with 2+. */
export function SubCategoryGrid({ products, categorySlug, icon }: SubCategoryGridProps) {
  const tiles = tilesFor(categorySlug, products);

  if (tiles.length < 2) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink">Sub-Categories</h2>
          <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-16 bg-brand-border" />
            <span className="h-1 w-10 rounded-full bg-brand-navy" />
            <span className="h-px w-16 bg-brand-border" />
          </div>
          <p className="mt-4 text-brand-muted">Browse our range by product type.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.key}
              href={tile.href}
              className="group flex flex-col items-center rounded-2xl border border-brand-border bg-brand-surface p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-lg"
            >
              <div className="relative mb-5 h-44 w-full overflow-hidden rounded-lg">
                <ProductImage
                  src={tile.image}
                  alt={tile.name}
                  icon={icon}
                  series={tile.series}
                  seed={tile.key}
                  className="h-full w-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  fit="contain"
                  overlay={false}
                />
              </div>

              <span className="mb-4 h-0.5 w-10 rounded-full bg-brand-navy/40" aria-hidden="true" />

              <h3 className="mb-5 min-h-[3.5rem] text-lg font-bold text-brand-ink transition-colors group-hover:text-brand-navy">
                {tile.name}
              </h3>

              <span className="mt-auto inline-flex items-center gap-2 rounded-lg bg-brand-ink px-7 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover:bg-brand-navy">
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
