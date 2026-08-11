import type { MetadataRoute } from "next";
import { company } from "@/data/company";

/**
 * Everything on this site is public marketing material, so the only disallow is
 * the enquiry endpoint — it is POST-only and has nothing to index, but keeping
 * crawlers off it avoids noise in the logs and in the rate limiter.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${company.url}/sitemap.xml`,
    host: company.url,
  };
}
