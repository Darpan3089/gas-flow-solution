import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

const description =
  "Who we are, what we supply, and the standards our gas control and metering equipment is built to.";

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
