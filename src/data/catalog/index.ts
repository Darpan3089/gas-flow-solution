/**
 * Assembles the product catalog and exposes the lookup helpers every product
 * route uses. Category order here is the order shown in the nav and on the
 * listing page — it runs from the core control hardware outward to systems,
 * instrumentation and consumables.
 */

import type { CatalogEntry, Category, Product } from "./types";
import { gasPressureRegulators } from "./regulators";
import { gasFilters } from "./filtration";
import { reliefValves, safetyShutOffValves, slamShutValves, solenoidValves } from "./valves";
import { gasMeasurementEquipment, gasMeteringSystems } from "./metering";
import { gasTrainComponents, pressureControlStations } from "./systems";
import { accessoriesAndSpares, burnerEquipment } from "./components";

export * from "./types";

export const categories: Category[] = [
  gasPressureRegulators,
  gasFilters,
  solenoidValves,
  safetyShutOffValves,
  reliefValves,
  slamShutValves,
  gasMeteringSystems,
  pressureControlStations,
  gasTrainComponents,
  gasMeasurementEquipment,
  burnerEquipment,
  accessoriesAndSpares,
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
