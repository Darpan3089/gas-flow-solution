"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { CheckCircle2, Award, Users, Globe2 } from "lucide-react";

export default function About() {
  const stats = [
    { value: "25+", label: "Years Experience", icon: Award },
    { value: "500+", label: "Expert Engineers", icon: Users },
    { value: "100+", label: "Patented Tech", icon: CheckCircle2 },
    { value: "40+", label: "Countries Served", icon: Globe2 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pt-20">
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600&auto=format&fit=crop"
          alt="Engineering Laboratory"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
        
        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Pioneers in <span className="text-brand-orange">Precision.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            We don&apos;t just build infrastructure; we engineer resilience, efficiency, and the future of industrial ecosystems.
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <Section className="-mt-16 z-20 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl text-center border-t border-brand-orange/20 hover:border-brand-orange/50 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-brand-orange mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
             <Image src="https://images.unsplash.com/photo-1565514020179-0c6ca803b0c2?q=80&w=1000&auto=format&fit=crop" alt="Industrial Facility" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Legacy of Innovation</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Founded in 1998, GasFlow Solutions began with a singular mission: to eliminate structural vulnerabilities in cross-continental pipelines. What started as a boutique engineering firm has evolved into a global titan of industrial infrastructure.
              </p>
              <p>
                From sub-zero Siberian compression units to high-pressure desert transfer stations, our proprietary alloys and patented sensor networks have redefined what it means to be operational under extreme duress.
              </p>
              <div className="pt-6 border-t border-gray-800">
                <blockquote className="italic text-gray-400 pl-4 border-l-4 border-brand-orange">
                  &quot;Engineering is not merely about constructing what works; it is about architecting systems that refuse to fail.&quot;
                  <br /><span className="text-brand-green font-semibold not-italic text-sm mt-2 block">— Dr. O. L. Heinrich, Chief Technical Officer</span>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

    </div>
  );
}
