"use client";

import { motion } from "framer-motion";

export function ClientLogoSlider() {
  const industries = [
    "TATA STEEL", "RELIANCE INDUSTRIES", "INDIAN OIL", 
    "BHARAT PETROLEUM", "GAIL INDIA", "ADANI GAS", 
    "JINDAL STEEL", "L&T HYDROCARBON", "HINDALCO"
  ];

  return (
    <div className="w-full overflow-hidden bg-brand-blue py-12 border-y border-gray-800 relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-blue to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-blue to-transparent z-10" />
      
      <div className="flex w-[200%] gap-12 items-center animate-[marquee_30s_linear_infinite]">
        {[...industries, ...industries].map((logo, idx) => (
          <div key={idx} className="flex-1 shrink-0 flex justify-center opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-2xl font-black text-white tracking-widest uppercase">
              {logo}
            </span>
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
