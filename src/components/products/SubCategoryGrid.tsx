"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { IconKey, Product } from "@/data/catalog";
import { categoryHref, productHref } from "@/data/catalog";
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
 * card linking to the group-filtered range) plus one tile per ungrouped
 * product (linking straight to its detail page). Encounter order is
 * preserved so the grid reads in the same order as the category's product
 * list.
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
        href: `${categoryHref(categorySlug)}?group=${encodeURIComponent(group)}#range`,
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
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-brand-ink">Sub-Categories</h2>
        <p className="mb-10 text-brand-muted">Browse our range by product type.</p>

        <div className="grid gap-6 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.key}
              href={tile.href}
              className="group rounded-2xl border border-brand-border bg-brand-surface overflow-hidden transition-all hover:border-brand-green/30 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden bg-brand-surface-alt">
                <ProductImage
                  src={tile.image}
                  alt={tile.name}
                  icon={icon}
                  series={tile.series}
                  seed={tile.key}
                  className="h-full w-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-4 text-lg font-bold text-brand-ink group-hover:text-brand-green transition-colors">
                  {tile.name}
                </h3>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-green">
                  DETAILS
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
