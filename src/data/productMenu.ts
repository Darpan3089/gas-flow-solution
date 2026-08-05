/**
 * Taxonomy behind the Products dropdown in the Navbar.
 *
 * This is now a projection of the real catalog rather than a hand-kept list —
 * adding a category or product to `@/data/catalog` puts it in the desktop
 * dropdown and the mobile accordion automatically. The href helpers are
 * re-exported from the catalog so every link in the app resolves through one
 * definition of a product URL.
 */

import { categories } from "@/data/catalog";

export { categoryHref, productHref } from "@/data/catalog";

export interface ProductMenuItem {
  name: string;
  slug: string;
}

export interface ProductMenuCategory {
  name: string;
  slug: string;
  /** Present only for categories that open a submenu. */
  items?: ProductMenuItem[];
}

export const productMenu: ProductMenuCategory[] = categories.map((category) => ({
  name: category.name,
  slug: category.slug,
  items: category.products.map((product) => ({
    name: product.name,
    slug: product.slug,
  })),
}));
