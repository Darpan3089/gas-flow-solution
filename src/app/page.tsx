import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

/**
 * Server shell so this route can carry its own metadata — `HomeContent` is a
 * client component (framer-motion throughout) and client components cannot
 * export `metadata`, so previously every one of these pages silently inherited
 * the root layout's title and description.
 */

const description =
  "Gas pressure regulators, filters, solenoid and safety valves, gas meters and burner equipment for industrial and commercial gas installations. Built to EN 334, EN 14382 and PED 2014/68/EU.";

export const metadata: Metadata = {
  title: "Gas Flow Solutions | Gas Regulators, Filters & Metering",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gas Flow Solutions | Gas Regulators, Filters & Metering",
    description,
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return <HomeContent />;
}
