import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

const description =
  "Gas Flow Solutions is a leading designer, manufacturer and supplier of natural gas pressure regulating and metering systems — CGS, DRS, MRS, SRM and custom skids — for CGD, industrial, commercial and energy customers.";

export const metadata: Metadata = {
  title: "About Us | Gas Flow Solutions",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Gas Flow Solutions",
    description,
    url: "/about",
    type: "website",
  },
};

export default function Page() {
  return <AboutContent />;
}
