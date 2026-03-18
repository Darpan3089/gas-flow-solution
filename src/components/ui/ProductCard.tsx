"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export function ProductCard({ title, description, features, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full bg-brand-blue rounded-xl border border-gray-800 transition-all duration-300 hover:border-brand-green/30 hover-glow overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-green">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>

      <div className="p-8 flex-grow">
        <div className="w-12 h-12 rounded-lg bg-brand-dark flex items-center justify-center border border-gray-700 mb-6 group-hover:border-brand-green/50 transition-colors">
          <div className="w-4 h-4 rounded-full bg-brand-green animate-pulse shadow-[0_0_10px_#39FF14]" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-brand-green transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-brand-green mr-3 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 pt-0 mt-auto">
        <button className="text-brand-green font-semibold text-sm flex items-center gap-2 group/btn uppercase tracking-wider">
          View Technical Specs
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
        </button>
      </div>
    </motion.div>
  );
}
