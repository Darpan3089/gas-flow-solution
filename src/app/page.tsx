"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Settings, Maximize, Activity, ShieldAlert, CheckCircle2 } from "lucide-react";

// Components
import { Section } from "@/components/ui/Section";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { StatsBar } from "@/components/ui/StatsBar";
import { ClientLogoSlider } from "@/components/ui/ClientLogoSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg overflow-hidden">
      {/* 🔹 1. HERO SECTION & STATS BAR */}
      <section className="relative h-[90vh] flex items-center border-b border-brand-border">
        <Image src="https://www.kimpexflow.com/img/banner1.png" alt="Industrial Flow Systems" fill className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-brand-bg/30 z-10" />

        <div className="container relative z-20 px-6 max-w-7xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-green-soft border border-brand-green/25 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Precision Engineered Systems</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-brand-ink leading-tight mb-6">
              Advanced Gas Flow <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-teal">
                & Metering Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-brand-muted font-light max-w-2xl mb-10 leading-relaxed">
              Engineering highly precise measurement, control, and automation infrastructure for the toughest industrial environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="#contact" className="px-8 py-4 bg-brand-green text-white font-black uppercase tracking-widest text-sm hover:bg-brand-green-dark transition-all shadow-lg shadow-brand-green/20 hover:shadow-xl hover:shadow-brand-green/30 border border-brand-green flex items-center justify-center gap-2">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#about" className="px-8 py-4 bg-white border border-brand-border text-brand-ink font-bold uppercase tracking-widest text-sm hover:border-brand-green hover:text-brand-green transition-colors flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Bar at the bottom of hero */}
        <StatsBar />
      </section>

      {/* Spacer for mobile where StatsBar isn't absolute */}
      <div className="h-0 md:h-16" />

      {/* 🔹 3. CORE SOLUTIONS */}
      <Section className="py-32 bg-brand-surface-alt relative z-20 border-b border-brand-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h3 className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4">Our Expertise</h3>
            <h2 className="text-4xl md:text-5xl font-black text-brand-ink">Measure. Manage. Protect.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SolutionCard
              title="Gas Measurement"
              description="Deliver absolute accuracy in custody transfer and process monitoring with our advanced volumetric and mass flow arrays."
              icon={Maximize}
              imgUrl="https://www.kimpexflow.com/img/solution1.png"
              delay={0}
            />
            <SolutionCard
              title="Flow Regulation"
              description="Automated, heavy-duty pressure reduction and flow control stations engineered to manage severe grid fluctuations."
              icon={Settings}
              imgUrl="https://www.kimpexflow.com/img/solution2.jpg"
              delay={0.1}
            />
            <SolutionCard
              title="Automation"
              description="Real-time cryptographic telemetry, SCADA integration, and predictive automation to optimize operational matrices."
              icon={Activity}
              imgUrl="https://www.kimpexflow.com/img/solution3.jpg"
              delay={0.2}
            />
            <SolutionCard
              title="Safety & Calibration"
              description="NABL-traceable calibration, slam-shut security implementation, and rigorous auditing to ensure zero-fail operations."
              icon={ShieldAlert}
              imgUrl="https://www.kimpexflow.com/img/worker7.png"
              delay={0.3}
            />
          </div>
        </div>
      </Section>

      {/* 🔹 4. PRODUCTS OVERVIEW */}
      <Section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4">Industrial Hardware</h3>
              <h2 className="text-4xl md:text-5xl font-black text-brand-ink">Precision Instruments & Heavy Infrastructure</h2>
            </div>
            <Link href="#contact" className="text-brand-green font-bold uppercase tracking-widest text-sm hover:text-brand-green-dark transition-colors border-b border-transparent hover:border-brand-green pb-1 flex items-center gap-2">
              View Full Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Turbine Gas Meters – FMT Series", desc: "High-flow turbine meters engineered for precise industrial measurement." },
              { title: "Pressure Regulators – ERG-SR", desc: "High-performance double-stage arrays with redundant safety." },
              { title: "MacR6 – Gas Data Logger", desc: "Compact logging device and telemetry by ISO/AGA standards." }
            ].map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-brand-border bg-brand-surface p-10 hover:border-brand-green/40 hover:shadow-lg hover:shadow-brand-green/5 transition-all"
              >
                <div className="w-12 h-12 bg-brand-green-soft border border-brand-green/20 mb-8 font-mono text-brand-green flex items-center justify-center text-xl font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-2xl font-bold text-brand-ink mb-4">{prod.title}</h4>
                <p className="text-brand-muted font-light tracking-wide">{prod.desc}</p>

                <div className="mt-8 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-colors">
                    <ArrowRight className="w-4 h-4 text-brand-subtle group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 🔹 5. SERVICES & WHY CHOOSE US */}
      <Section className="py-32 bg-brand-surface-alt border-y border-brand-border relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Services List */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4">Lifecycle Support</h3>
              <h2 className="text-4xl md:text-5xl font-black text-brand-ink mb-10">End-to-End Engineering Services</h2>

              <div className="space-y-8">
                {[
                  { title: "Calibration & Testing", detail: "Eliminating drift through certified laboratory-grade testing." },
                  { title: "Turnkey Installation (EPC)", detail: "From schematics to welding and absolute commissioning." },
                  { title: "Preventive Maintenance", detail: "Scheduled diagnostics, filter changes, and part servicing." },
                  { title: "Engineering Consulting", detail: "Architectural design for optimal pressure drop & CAPEX efficiency." }
                ].map((srv, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-8 h-8 rounded-full border-2 border-brand-green/30 flex items-center justify-center shrink-0 group-hover:border-brand-green transition-colors">
                      <div className="w-2 h-2 bg-brand-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-ink mb-1 group-hover:text-brand-green transition-colors">{srv.title}</h4>
                      <p className="text-brand-muted font-light">{srv.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-surface border border-brand-border p-12 relative shadow-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-2xl" />
              <h3 className="text-2xl font-bold text-brand-ink mb-8">Why Choose Us</h3>
              <ul className="space-y-6">
                {[
                  "High Accuracy Systems (Zero-tolerance precision)",
                  "Total Industry Compliance (ISO, OISD, PNGRB)",
                  "Dedicated Expert Engineers (Rapid response team)",
                  "End-to-End Reliable Support (From design to maintenance)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-brand-muted font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-brand-border">
                <Link href="#contact" className="text-brand-green font-bold uppercase tracking-widest text-sm hover:text-brand-green-dark transition-colors flex items-center gap-2">
                  Speak to an Engineer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* 🔹 6. INDUSTRIES SERVED */}
      <Section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brand-ink">Sectors We Empower</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Heavy Manufacturing", img: "https://www.kimpexflow.com/img/bg-manufacturer1.jpg" },
              { label: "Oil & Gas Downstream", img: "https://www.kimpexflow.com/img/Oil%20&%20Gas.jpg" },
              { label: "Commercial Utilities", img: "https://www.kimpexflow.com/img/worker2.jpg" }
            ].map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-80 overflow-hidden cursor-pointer bg-brand-surface border border-brand-border"
              >
                <Image src={ind.img} alt={ind.label} fill className="object-cover opacity-70 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-t from-white via-white/70 to-transparent group-hover:via-white/40 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-brand-ink text-center transform group-hover:-translate-y-2 transition-transform duration-500">{ind.label}</h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-green scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 🔹 8 & 9. TESTIMONIALS & ABOUT */}
      <Section className="py-24 bg-brand-surface-alt border-y border-brand-border">
        <TestimonialSlider />
        <div className="mt-20 pt-16 border-t border-brand-border max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ClientLogoSlider />
          <div>
            <h3 className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4">Our Vision</h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6">
              We don't just supply equipment; we architect secure, fail-safe pulmonary systems for industrial operations. Our mission is to set the definitive standard for flow accuracy and safety across the subcontinent.
            </p>
            <Link href="/about" className="text-brand-ink font-bold underline decoration-brand-green underline-offset-8 hover:text-brand-green transition-colors">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </Section>

      {/* 🔹 10. CONTACT SECTION */}
      <section id="contact" className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Contact Info */}
            <div>
              <h2 className="text-5xl font-black text-brand-ink mb-6">Ready to upgrade your infrastructure?</h2>
              <p className="text-xl text-brand-green mb-12">Speak with our experts today.</p>

              <div className="space-y-8 text-brand-muted font-mono text-sm leading-loose">
                <div>
                  <strong className="text-brand-ink uppercase tracking-widest block mb-2 font-sans font-bold">Headquarters</strong>
                  Industrial Zone, Sector 4<br />
                  Tech Park Avenue, 40001
                </div>
                <div>
                  <strong className="text-brand-ink uppercase tracking-widest block mb-2 font-sans font-bold">Contact Direct</strong>
                  Main: +91 800-GAS-FLOW<br />
                  Support: support@gasflowsolutions.in
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-brand-surface p-10 border border-brand-border shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name *" className="w-full bg-brand-surface-alt border-b border-brand-border px-4 py-4 text-brand-ink focus:outline-none focus:border-brand-green transition-colors placeholder:text-brand-subtle" />
                  <input type="text" placeholder="Company Name" className="w-full bg-brand-surface-alt border-b border-brand-border px-4 py-4 text-brand-ink focus:outline-none focus:border-brand-green transition-colors placeholder:text-brand-subtle" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="email" placeholder="Email Address *" className="w-full bg-brand-surface-alt border-b border-brand-border px-4 py-4 text-brand-ink focus:outline-none focus:border-brand-green transition-colors placeholder:text-brand-subtle" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-brand-surface-alt border-b border-brand-border px-4 py-4 text-brand-ink focus:outline-none focus:border-brand-green transition-colors placeholder:text-brand-subtle" />
                </div>
                <textarea rows={4} placeholder="Tell us about your technical requirements..." className="w-full bg-brand-surface-alt border-b border-brand-border px-4 py-4 text-brand-ink focus:outline-none focus:border-brand-green transition-colors resize-none placeholder:text-brand-subtle" />
                <button type="button" className="w-full bg-brand-green text-white font-black tracking-widest uppercase py-5 hover:bg-brand-green-dark transition-all">
                  Transmit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
