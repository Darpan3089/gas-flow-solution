import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";
import { company } from "@/data/company";

const description = `Talk to our engineers about gas regulators, filters, valves and metering. Call ${company.phones[0].display} or email ${company.email.sales}.`;

export const metadata: Metadata = {
  title: "Contact Us | Gas Flow Solutions",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Gas Flow Solutions",
    description,
    url: "/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactContent />;
}
