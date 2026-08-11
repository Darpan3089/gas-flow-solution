import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

const description =
  "Sizing and selection, commissioning, calibration and testing, spares and after-sales support for industrial gas pressure control and metering equipment.";

export const metadata: Metadata = {
  title: "Engineering & Lifecycle Services | Gas Flow Solutions",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Engineering & Lifecycle Services | Gas Flow Solutions",
    description,
    url: "/services",
    type: "website",
  },
};

export default function Page() {
  return <ServicesContent />;
}
