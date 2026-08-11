"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Briefcase, ClipboardCheck, Network, ShieldAlert, BookOpen } from "lucide-react";
import Link from "next/link";
// using a placeholder icon, let's substitute Toolz with Settings
import { Settings } from "lucide-react";

export function ServicesContent() {
  const services = [
    {
      title: "EPC Contracting",
      desc: "Turnkey Engineering, Procurement, and Construction for complex gas infrastructure.",
      icon: Briefcase,
    },
    {
      title: "Consulting & Feasibility",
      desc: "Pre-FEED and FEED studies to guarantee economic and technical viability of mega-projects.",
      icon: BookOpen,
    },
    {
      title: "Predictive Maintenance",
      desc: "AI-driven diagnostics utilizing continuous sensor data to forecast and prevent failure.",
      icon: Network,
    },
    {
      title: "Safety Auditing",
      desc: "Comprehensive HAZOP studies and compliance verification for global standards.",
      icon: ShieldAlert,
    },
    {
      title: "Custom Fabrication",
      desc: "In-house metallurgical engineering and welding for bespoke high-pressure vessels.",
      icon: Settings,
    },
    {
      title: "Site Commissioning",
      desc: "Rigorous start-up procedures, loop checks, and performance guarantee testing.",
      icon: ClipboardCheck,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pt-32 pb-20 overflow-hidden relative">

      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-navy-light/20 rounded-full blur-[150px] opacity-40 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/20 rounded-full blur-[150px] opacity-30 translate-y-1/2 -translate-x-1/2" />

      <Section className="relative z-10 !pt-0">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-brand-ink mb-8 leading-tight tracking-tight"
          >
            Capabilities Beyond <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-navy-light">Construction</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-muted leading-relaxed"
          >
            We deploy specialized engineering task forces to solve the most complex fluid dynamics and containment challenges in the modern world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl hover:border-brand-navy/50 hover:shadow-[0_16px_40px_rgba(27, 80, 141,0.12)] transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-navy-soft flex items-center justify-center mb-8 border border-brand-navy/20 group-hover:border-brand-navy transition-colors">
                <service.icon className="w-8 h-8 text-brand-navy" />
              </div>
              <h3 className="text-2xl font-bold text-brand-ink mb-4">{service.title}</h3>
              <p className="text-brand-muted leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link href="/contact" className="text-brand-navy text-sm font-bold uppercase tracking-wider flex items-center gap-2 group/link">
                Inquire <span className="w-6 h-px bg-brand-navy transition-all group-hover/link:w-12" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

    </div>
  );
}
