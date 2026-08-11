import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { company } from "@/data/company";

const description =
  "Premium industrial solutions for gas plants, pipelines, and engineering machinery.";

export const metadata: Metadata = {
  // Without this, relative canonicals and OG images resolve against
  // http://localhost:3000 — which is what the build was warning about.
  metadataBase: new URL(company.url),
  title: "Gas Flow Solutions | Engineering the Future",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: company.name,
    url: company.url,
    title: "Gas Flow Solutions",
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Flow Solutions",
    description,
  },
};

/**
 * Organization data for search engines and knowledge panels. Built from
 * `company.ts` so it can never drift from what the footer shows, and so it
 * gains the address automatically once that is filled in.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.legalName,
  url: company.url,
  logo: `${company.url}/GFS_LOGO.svg`,
  email: company.email.sales,
  telephone: company.phones.map((phone) => `+${phone.e164}`),
  ...(company.address
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.lines.join(", "),
          addressLocality: company.address.city,
          addressRegion: company.address.state,
          postalCode: company.address.postcode,
          addressCountry: company.address.country,
        },
      }
    : {}),
  ...(Object.keys(company.social).length > 0 ? { sameAs: Object.values(company.social) } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-brand-bg text-brand-ink flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>
        <WhatsAppCTA />
        <Footer />
      </body>
    </html>
  );
}
