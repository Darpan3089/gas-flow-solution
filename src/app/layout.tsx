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

export const metadata: Metadata = {
  title: "Gas Flow Solutions | Engineering the Future",
  description: "Premium industrial solutions for gas plants, pipelines, and engineering machinery.",
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
