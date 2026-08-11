"use client";

import { useState } from "react";
import Image from "next/image";

type Client = {
  /** Wordmark shown until a logo file exists, and the image's alt text. */
  name: string;
  /** File under `public/logos/`. Drop the file in and it replaces the wordmark. */
  logo: string;
};

const clients: Client[] = [
  { name: "TATA STEEL", logo: "/logos/tata-steel.svg" },
  { name: "RELIANCE INDUSTRIES", logo: "/logos/reliance-industries.svg" },
  { name: "INDIAN OIL", logo: "/logos/indian-oil.svg" },
  { name: "BHARAT PETROLEUM", logo: "/logos/bharat-petroleum.svg" },
  { name: "GAIL INDIA", logo: "/logos/gail-india.svg" },
  { name: "ADANI GAS", logo: "/logos/adani-gas.svg" },
  { name: "JINDAL STEEL", logo: "/logos/jindal-steel.svg" },
  { name: "L&T HYDROCARBON", logo: "/logos/lt-hydrocarbon.svg" },
  { name: "HINDALCO", logo: "/logos/hindalco.svg" },
];

/**
 * Renders the logo image, falling back to the plain wordmark if the file is
 * missing — so the strip stays intact while logos are still being collected.
 */
function ClientLogo({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-2xl font-black text-brand-ink tracking-widest uppercase whitespace-nowrap">
        {client.name}
      </span>
    );
  }

  return (
    <Image
      src={client.logo}
      alt={client.name}
      width={200}
      height={64}
      unoptimized
      onError={() => setFailed(true)}
      className="h-12 w-auto max-w-40 object-contain grayscale"
    />
  );
}

export function ClientLogoSlider() {
  return (
    <div className="w-full overflow-hidden bg-brand-surface py-12 border-y border-brand-border relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-surface to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-surface to-transparent z-10" />

      <div className="flex w-[200%] gap-12 items-center animate-[marquee_30s_linear_infinite]">
        {[...clients, ...clients].map((client, idx) => (
          <div
            key={idx}
            className="flex-1 shrink-0 flex justify-center items-center h-16 opacity-50 hover:opacity-100 transition-opacity"
          >
            <ClientLogo client={client} />
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
