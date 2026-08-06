/**
 * Taxonomy behind the Products dropdown in the Navbar.
 *
 * This is now a projection of the real catalog rather than a hand-kept list —
 * adding a category or product to `@/data/catalog` puts it in the desktop
 * dropdown and the mobile accordion automatically. The href helpers are
 * re-exported from the catalog so every link in the app resolves through one
 * definition of a product URL.
 */

import { categories, categoryHref, productHref } from "@/data/catalog";
import type { Category } from "@/data/catalog";

export { categoryHref, productHref } from "@/data/catalog";

export interface ProductMenuItem {
  name: string;
  /** Menu items carry their own href: a product page, or a group-filtered category range. */
  href: string;
}

export interface ProductMenuCategory {
  name: string;
  slug: string;
  /** Present only for categories that open a submenu. */
  items?: ProductMenuItem[];
}

/**
 * Products that share a `group` collapse into a single submenu entry named
 * after the group — the menu advertises the range ("Spring Loaded Gas
 * Pressure Regulators"), and the link lands on the category's range section
 * filtered to that group, where the individual models are laid out as cards.
 * Ungrouped (or sole-member) products keep their own direct link.
 */
function itemsFor(category: Category): ProductMenuItem[] {
  const groupSizes = new Map<string, number>();
  for (const product of category.products) {
    if (product.group) groupSizes.set(product.group, (groupSizes.get(product.group) ?? 0) + 1);
  }

  const seenGroups = new Set<string>();
  const items: ProductMenuItem[] = [];
  for (const product of category.products) {
    const group = product.group;
    if (group && (groupSizes.get(group) ?? 0) > 1) {
      if (seenGroups.has(group)) continue;
      seenGroups.add(group);
      items.push({
        name: group,
        href: `${categoryHref(category.slug)}?group=${encodeURIComponent(group)}#range`,
      });
    } else {
      items.push({ name: product.name, href: productHref(category.slug, product.slug) });
    }
  }
  return items;
}

/**
 * A category whose only product carries the category's own name is a leaf —
 * a submenu there would just repeat the label the cursor is already on, so it
 * links straight to the category page instead.
 */
function isLeaf(products: { name: string }[], categoryName: string) {
  return products.length <= 1 && (products[0]?.name ?? categoryName) === categoryName;
}

export const productMenu: ProductMenuCategory[] = categories.map((category) => ({
  name: category.name,
  slug: category.slug,
  items: isLeaf(category.products, category.name) ? undefined : itemsFor(category),
}));
