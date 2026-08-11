import type { MetadataRoute } from "next";
import { categories, catalogEntries, categoryHref, productHref } from "@/data/catalog";
import { company } from "@/data/company";

/**
 * Sitemap for every route the site actually serves.
 *
 * Catalogue entries are derived rather than listed, so adding a product to
 * `@/data/catalog` puts it in the sitemap with no further edit — the same
 * single-source rule the nav and the detail routes already follow.
 *
 * `lastModified` uses build time. The content is static and ships with the
 * deployment, so a build is precisely when any of it can have changed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => `${company.url}${path}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: url("/products"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/about"), lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/services"), lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/contact"), lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/privacy"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: url("/terms"), lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: url(categoryHref(category.slug)),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // The commercial heart of the site — these are the pages worth ranking.
  const productRoutes: MetadataRoute.Sitemap = catalogEntries.map((entry) => ({
    url: url(productHref(entry.category.slug, entry.product.slug)),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
