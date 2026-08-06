/**
 * Assembles the product catalog and exposes the lookup helpers every product
 * route uses.
 *
 * Scope note: the catalog is deliberately limited to ranges verified against
 * the reference supplier's published catalogue. Categories that were dropped in
 * that audit — safety shut-off valves, pressure control stations, gas train
 * components and spare parts — are intentionally absent rather than pending.
 */

import type { CatalogEntry, Category, Product } from "./types";
import { gasPressureRegulators } from "./regulators";
import { gasFilters } from "./filtration";
import { safetyReliefValves, slumShutValves, solenoidValves } from "./valves";
import { gasAirPressureSwitch, gasMeters } from "./metering";
import { burnerEquipments, zeroGovernor } from "./components";

export * from "./types";

/** Order here is the order of the Products dropdown and the listing page. */
export const categories: Category[] = [
  gasPressureRegulators,
  gasFilters,
  solenoidValves,
  gasMeters,
  safetyReliefValves,
  slumShutValves,
  zeroGovernor,
  gasAirPressureSwitch,
  burnerEquipments,
];

/** Flat list of every product paired with its category — the listing page's source. */
export const catalogEntries: CatalogEntry[] = categories.flatMap((category) =>
  category.products.map((product) => ({
    product,
    category: { slug: category.slug, name: category.name, icon: category.icon },
  })),
);

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string): Product | undefined {
  return getCategory(categorySlug)?.products.find((product) => product.slug === productSlug);
}

/**
 * Siblings first (they are the closest match by function), topped up with
 * products from other categories so the strip is never sparse on a small
 * category.
 */
export function getRelatedProducts(
  categorySlug: string,
  productSlug: string,
  limit = 3,
): CatalogEntry[] {
  const siblings = catalogEntries.filter(
    (entry) => entry.category.slug === categorySlug && entry.product.slug !== productSlug,
  );
  const others = catalogEntries.filter((entry) => entry.category.slug !== categorySlug);
  return [...siblings, ...others].slice(0, limit);
}

/** Every (category, product) slug pair — used to statically generate detail routes. */
export function allProductParams() {
  return catalogEntries.map((entry) => ({
    category: entry.category.slug,
    product: entry.product.slug,
  }));
}

export const totalProductCount = catalogEntries.length;

export function categoryHref(categorySlug: string) {
  return `/products/${categorySlug}`;
}

export function productHref(categorySlug: string, productSlug: string) {
  return `/products/${categorySlug}/${productSlug}`;
}
