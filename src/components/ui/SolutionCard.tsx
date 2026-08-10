"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: any;
  imgUrl: string;
  delay?: number;
}

export function SolutionCard({ title, description, icon: Icon, imgUrl, delay = 0 }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      className="group relative flex flex-col bg-brand-surface border border-brand-border hover:border-brand-navy/50 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-500 overflow-hidden"
    >
      {/* Heavy Industrial Image Block */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image src={imgUrl} alt={title} fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0 group-hover:opacity-70 transition-opacity duration-500" />
      </div>

      {/* Content Block */}
      <div className="p-8 relative z-10 flex flex-col grow -mt-16">
        <div className="w-16 h-16 bg-white border-r border-t border-brand-navy/30 flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-navy/80 transition-colors">
          <Icon className="w-8 h-8 text-brand-navy" />
        </div>

        <h3 className="text-2xl font-bold text-brand-ink mb-4 group-hover:text-brand-navy transition-colors">{title}</h3>
        <p className="text-brand-muted font-light leading-relaxed mb-8 flex-grow">{description}</p>

        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-ink group-hover:text-brand-navy transition-colors">
          Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hover Accent Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-navy scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500" />
    </motion.div>
  );
}
