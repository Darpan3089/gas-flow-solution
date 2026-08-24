"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { company } from "@/data/company";

/**
 * Everything on this page comes from the company profile — no invented figures,
 * founding dates or credentials. Keep it that way; see `src/data/company.ts`.
 */
const PRODUCTS = [
  "City Gate Stations (CGS)",
  "District Regulating Stations (DRS)",
  "Metering & Regulating Stations (MRS)",
  "Service Regulating Modules (SRM)",
  "Industrial Gas Pressure Regulating Skids",
  "Metering Skids",
  "Pressure Reduction Stations (PRS)",
  "Gas Filter Skids",
  "Gas Pressure Control Panels",
  "Customized Gas Distribution Solutions",
];

const SERVICES = [
  "System design & engineering",
  "Manufacturing & assembly",
  "Supply of regulators, slam shut valves, filters, flow meters & accessories",
  "Installation & commissioning",
  "Performance testing & calibration",
  "Annual Maintenance Contracts (AMC)",
  "Preventive & breakdown maintenance",
  "Technical support & training",
  "System upgradation and modernization",
];

const INDUSTRIES = [
  "City Gas Distribution (CGD)",
  "Natural Gas Transmission",
  "Industrial Manufacturing",
  "Power Generation",
  "Steel & Metals",
  "Glass & Ceramics",
  "Food Processing",
  "Textiles",
  "Commercial Gas Distribution",
  "LPG & Alternative Fuels",
];

const DIFFERENTIATORS = [
  {
    title: "Experienced engineering team",
    body: "Engineers and technicians who have specified, built and commissioned regulating and metering systems in the field.",
  },
  {
    title: "Customized for every application",
    body: "Stations and skids configured around your inlet pressure, flow range, site constraints and metering requirements.",
  },
  {
    title: "Strict quality control",
    body: "In-house manufacturing with inspection and testing at every stage of assembly before despatch.",
  },
  {
    title: "Standards compliance",
    body: "Systems designed and built to the applicable national and international standards for gas distribution equipment.",
  },
  {
    title: "Safe, energy-efficient systems",
    body: "Precise pressure control and over-pressure protection engineered in, not added on.",
  },
  {
    title: "Timely project execution",
    body: "Schedules committed against realistic manufacturing and commissioning plans, and met.",
  },
  {
    title: "Complete after-sales support",
    body: "AMC, preventive and breakdown maintenance, calibration and spares for the life of the installation.",
  },
  {
    title: "Cost-effective and customer-focused",
    body: "Solutions scoped to what the site actually needs, with a single point of responsibility throughout.",
  },
];

const LIFECYCLE = [
  { icon: Gauge, label: "Design & Engineering" },
  { icon: Factory, label: "Manufacturing & Assembly" },
  { icon: Wrench, label: "Installation & Commissioning" },
  { icon: ShieldCheck, label: "Testing, Calibration & AMC" },
];

export function AboutContent() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pt-20">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.kimpexflow.com/img/bg-manufacturer1.jpg"
          alt="Gas regulating and metering system manufacturing"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/70 to-brand-bg/40" />

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-brand-ink tracking-tight mb-6"
          >
            Engineering Reliable{" "}
            <span className="text-brand-navy">Gas Distribution.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto font-light"
          >
            Reliable gas pressure regulation, metering and distribution systems —
            engineered, manufactured and supported end to end.
          </motion.p>
        </div>
      </section>

      {/* Lifecycle strip — replaces the old floating stats */}
      <Section className="-mt-16 z-20 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {LIFECYCLE.map((step, idx) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl text-center border-t-2 border-t-brand-navy/25 hover:border-t-brand-navy/60 transition-colors"
            >
              <step.icon className="w-8 h-8 text-brand-navy mx-auto mb-4" />
              <p className="text-brand-ink text-sm font-semibold leading-snug">{step.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Who we are */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://www.kimpexflow.com/img/worker2.jpg"
              alt="Assembly of a gas pressure regulating skid"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
              Who We Are
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
              Complete engineering solutions, source to end user
            </h2>
            <div className="space-y-6 text-brand-muted leading-relaxed text-lg">
              <p>
                {company.name} (GFS) is a designer, manufacturer and supplier of high-quality
                natural gas pressure regulating and metering systems for the City Gas
                Distribution (CGD), industrial, commercial and energy sectors. We provide
                complete engineering solutions for safe, reliable and efficient gas
                distribution networks, ensuring optimum performance from source to end user.
              </p>
              <p>
                With a strong focus on engineering excellence, product quality and customer
                satisfaction, we manufacture customized gas pressure regulating stations and
                metering skids that comply with national and international standards. Our team
                delivers end-to-end solutions — from system design and manufacturing to
                installation, commissioning, testing and after-sales service.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Products */}
      <Section className="bg-brand-surface-alt border-y border-brand-border">
        <div className="max-w-3xl mb-14">
          <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
            What We Build
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
            Regulating and metering systems
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Every system is designed for precise pressure control, accurate gas measurement,
            maximum operational safety and long-term reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.08 }}
              className="flex items-start gap-4 bg-brand-surface border border-brand-border rounded-xl p-5 hover:shadow-lg hover:border-brand-navy/40 transition-all"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-brand-navy-soft flex items-center justify-center">
                <Gauge className="w-4 h-4 text-brand-navy" />
              </span>
              <span className="text-brand-ink text-sm font-medium leading-snug pt-2">
                {product}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold text-sm hover:text-brand-navy-dark transition-colors"
          >
            Browse the full product range <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
              Our Services
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
              Lifecycle support for your network
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              We stay with a system after it is commissioned — calibration, maintenance,
              spares and upgrades, under one point of responsibility.
            </p>
          </div>

          <ul className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 content-start">
            {SERVICES.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-brand-surface-alt border-y border-brand-border">
        <div className="max-w-3xl mb-12">
          <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
            Industries We Serve
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            Trusted across gas utilities and process industry
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="px-5 py-3 rounded-full bg-brand-surface border border-brand-border text-brand-ink text-sm font-medium hover:border-brand-navy/50 hover:text-brand-navy transition-colors"
            >
              {industry}
            </span>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <div className="max-w-3xl mb-14">
          <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
            Why Gas Flow Solutions
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            What you get when you work with us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.08 }}
              className="bg-brand-surface border border-brand-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-navy mb-4" />
              <h4 className="text-brand-ink font-semibold mb-2 leading-snug">{item.title}</h4>
              <p className="text-brand-muted text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Commitment */}
      <Section className="pb-32">
        <div className="glass-navy rounded-3xl px-8 py-14 md:px-16 md:py-20 text-center">
          <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
            Our Commitment
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 max-w-3xl mx-auto leading-tight">
            Engineering reliable gas distribution for a safer, smarter future
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            We are committed to delivering innovative, reliable and safe gas distribution
            solutions that help our customers operate efficiently while maintaining the
            highest standards of safety and performance — a trusted partner for gas utilities
            and industrial customers, through world-class products, responsive service and
            continuous technical innovation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-navy-dark transition-colors rounded-lg shadow-lg shadow-brand-navy/20"
          >
            Talk to our team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

    </div>
  );
}
