import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { company } from "@/data/company";
import { services } from "@/data/profile";

const description =
  "Complete lifecycle support for gas distribution systems — design and engineering, manufacturing, installation and commissioning, performance testing and calibration, AMC, preventive and breakdown maintenance, training and system upgradation.";

export const metadata: Metadata = {
  title: "Services | Gas Flow Solutions",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Gas Flow Solutions",
    description,
    url: "/services",
    type: "website",
  },
};

/**
 * One `Service` entry per offering, so a search engine can surface an
 * individual service (AMC and calibration are the ones people search by name)
 * rather than only the page as a whole. Built from the same array the page
 * renders, so the two cannot disagree.
 */
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Services — ${company.name}`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      serviceType: service.title,
      provider: { "@type": "Organization", name: company.name, url: company.url },
      areaServed: company.address?.country ?? undefined,
      url: `${company.url}/services#${service.slug}`,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
