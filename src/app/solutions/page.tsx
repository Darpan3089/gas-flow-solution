import type { Metadata } from "next";
import { SolutionsContent } from "./SolutionsContent";
import { company } from "@/data/company";
import { systems } from "@/data/profile";

const description =
  "City Gate Stations (CGS), District Regulating Stations (DRS), Metering & Regulating Stations (MRS), Service Regulating Modules (SRM), pressure reduction stations, metering and filter skids — designed, manufactured, tested and commissioned by Gas Flow Solutions.";

export const metadata: Metadata = {
  title: "Systems & Solutions | Gas Flow Solutions",
  description,
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Systems & Solutions | Gas Flow Solutions",
    description,
    url: "/solutions",
    type: "website",
  },
};

/**
 * One entry per system so a search for "city gate station manufacturer" can
 * match the individual station type rather than only the page. Built from the
 * same array the page renders, so the two cannot disagree.
 *
 * `Product` rather than `Service`: these are things manufactured and supplied.
 * The lifecycle work around them is marked up as `Service` on `/services`.
 */
const systemsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Systems & Solutions — ${company.name}`,
  itemListElement: systems.map((system, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: system.abbr ? `${system.name} (${system.abbr})` : system.name,
      description: system.overview,
      category: "Gas pressure regulating and metering systems",
      manufacturer: { "@type": "Organization", name: company.name, url: company.url },
      url: `${company.url}/solutions#${system.slug}`,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(systemsJsonLd) }}
      />
      <SolutionsContent />
    </>
  );
}
