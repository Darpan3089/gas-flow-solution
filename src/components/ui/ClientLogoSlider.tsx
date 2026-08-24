import Image from "next/image";

type Client = {
  /** Alt text only — the strip is logos, no wordmarks. */
  name: string;
  /** File under `public/logos/`. */
  logo: string;
  /** Intrinsic pixel size, so next/image reserves the right aspect ratio. */
  width: number;
  height: number;
};

const clients: Client[] = [
  { name: "IRM Energy", logo: "/logos/irm-energy.svg", width: 112, height: 47 },
  { name: "Indian Oil Corporation Limited", logo: "/logos/iocl.jpg", width: 420, height: 382 },
  { name: "IOAGPL", logo: "/logos/ioagpl.png", width: 151, height: 98 },
  { name: "Megha City Gas Distribution Pvt Ltd", logo: "/logos/megha-city-gas.png", width: 140, height: 67 },
  { name: "HCG Distribution Pvt Ltd", logo: "/logos/hcg-distribution.jpg", width: 1888, height: 462 },
  { name: "GNGPL", logo: "/logos/gngpl.png", width: 150, height: 113 },
  { name: "HPOIL Gas", logo: "/logos/hpoil.png", width: 70, height: 79 },
  { name: "Vadodara Gas Limited", logo: "/logos/vgl.png", width: 126, height: 126 },
  { name: "Paharpur Cooling Towers", logo: "/logos/paharpur-cooling-towers.png", width: 142, height: 77 },
  { name: "Haridwar Natural Gas", logo: "/logos/haridwar-natural-gas.png", width: 120, height: 120 },
  { name: "KEC International", logo: "/logos/kec-international.png", width: 195, height: 108 },
  { name: "Naveriya Gas Private Limited", logo: "/logos/naveriya-gas.png", width: 252, height: 122 },
  { name: "L&T Special Steel and Heavy Forging", logo: "/logos/lt-special-steel.png", width: 531, height: 531 },
];

export function ClientLogoSlider() {
  return (
    <div className="w-full overflow-hidden bg-brand-surface py-12 border-y border-brand-border relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-surface to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-surface to-transparent z-10" />

      {/*
        `w-max` (not a fixed percentage) is what keeps the loop seamless: the
        list is rendered twice, so the duplicate starts at exactly -50%.
      */}
      <div className="flex w-max gap-12 items-center animate-[marquee_45s_linear_infinite]">
        {[...clients, ...clients].map((client, idx) => (
          /*
            Fixed 160x64 slot with the logo capped inside it. The marks range
            from square badges to a 4:1 wordmark, so capping both axes is what
            keeps them optically the same weight — height alone would let the
            wide ones run three times the width of the round ones.
          */
          <div key={idx} className="shrink-0 w-40 h-16 flex items-center justify-center">
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              unoptimized
              className="max-h-14 max-w-36 w-auto h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
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
