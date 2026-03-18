"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Settings2, Gauge, Shield, Droplet } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "metering",
      title: "Flow Metering Systems",
      desc: "Ultra-precise mass and volumetric flow measurement skids designed for custody transfer and internal allocation.",
      features: ["0.05% Accuracy Class", "Cryogenic to +400°C", "Integrated Flow Computers"],
      icon: Gauge,
      img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "regulation",
      title: "Pressure Regulation",
      desc: "Modular pressure reduction stations capable of handling volatile grid fluctuations autonomously.",
      features: ["Redundant Safety Shut-offs", "Silent Operation Tech", "Smart Grid Ready"],
      icon: Settings2,
      img: "https://images.unsplash.com/photo-1574689049596-1e6a92d4cbab?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "compression",
      title: "Gas Compression",
      desc: "High-horsepower reciprocating and centrifugal compressors built for continuous duty across massive transport networks.",
      features: ["Anti-Surge Control", "Vibration Analytics", "Zero-Emission Seals"],
      icon: Droplet,
      img: "https://images.unsplash.com/photo-1618055663784-06ebba211910?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "filtration",
      title: "Advanced Filtration",
      desc: "Multi-stage coalescing and dry gas filters removing nominal particles down to 0.3 microns.",
      features: ["ASME U-Stamp Certified", "Quick-Opening Closures", "Automated Draining"],
      icon: Shield,
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pt-28 pb-20">
      
      <div className="container mx-auto px-6 max-w-7xl mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
        >
          <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">Hardware Portfolio</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6"
        >
          Engineered to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">Outperform</span>
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 max-w-7xl space-y-32">
        {products.map((product, idx) => (
          <Section key={product.id} className="!py-0">
            <div className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center`}>
              
              <div className="w-full md:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, rotate: idx % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden glass p-2"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image src={product.img} alt={product.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <product.icon className="w-12 h-12 text-brand-orange mb-6 bg-brand-orange/10 p-2 rounded-xl" />
                  <h2 className="text-4xl font-bold text-white mb-6">{product.title}</h2>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-brand-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-brand-orange text-white font-bold rounded-full transition-all group border border-gray-700 hover:border-brand-orange">
                    Request Specifications <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>

            </div>
          </Section>
        ))}
      </div>

    </div>
  );
}
