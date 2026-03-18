"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronRight, Factory, ShieldCheck, Zap, Cog, Activity, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

// Animated Counter Component
function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 5;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
        {count}<span className="text-brand-orange">+</span>
      </div>
      <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Client Logos Array
  const clients = ["ExxonMobil", "Chevron", "Shell", "BP", "TotalEnergies", "ConocoPhillips", "ENI", "Equinor"];

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      
      {/* 1. Hero Section (Parallax & Video/Image Bg) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1542360663-8f4020bd5e65?q=80&w=2600&auto=format&fit=crop"
            alt="Industrial Gas Plant at Twilight"
            fill
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark z-10" />
        </motion.div>

        <div className="container relative z-20 px-6 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-sm font-medium text-gray-200 uppercase tracking-widest">Next-Gen Industrial Engineering</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Engineering the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-orange">Gas Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light"
          >
            Precision pipeline architecture, cutting-edge machinery, and an unwavering commitment to safety & scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services" className="px-8 py-4 bg-brand-orange rounded-full text-white font-semibold hover:bg-orange-600 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center gap-2">
              Explore Services <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
              Contact Engineering Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. About Preview / Stats */}
      <Section className="relative z-20 -mt-20 border-b border-gray-800 pb-24">
        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
            <AnimatedCounter value={25} label="Years of Excellence" />
            <AnimatedCounter value={400} label="Global Clients" />
            <AnimatedCounter value={1200} label="Projects Delivered" />
          </div>
        </div>
      </Section>

      {/* 3. Products Section */}
      <Section>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Industrial-Grade Products
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Engineered for severe environments. Built to exceed international compliance protocols and maximize operational runtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Flow Metering Skids", desc: "High-precision volumetric and mass flow measurement systems.", img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop" },
            { title: "Gas Regulation Stations", desc: "Automated pressure reduction with modular safety features.", img: "https://images.unsplash.com/photo-1574689049596-1e6a92d4cbab?q=80&w=800&auto=format&fit=crop" },
            { title: "Compression Units", desc: "Heavy-duty rotary and reciprocating compressors for pipeline transport.", img: "https://images.unsplash.com/photo-1618055663784-06ebba211910?q=80&w=800&auto=format&fit=crop" },
          ].map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-brand-blue border border-gray-800"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={product.img} alt={product.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">{product.title}</h3>
                <p className="text-gray-400 mb-6">{product.desc}</p>
                <Link href="/products" className="text-brand-orange font-medium flex items-center gap-2 group/link">
                  View Specifications <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. Services Section */}
      <Section className="bg-brand-blue relative overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] w-[40%] h-[40%] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[40%] h-[40%] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Lifecycle Support</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From initial architectural schematics to deployment and predictive maintenance, our engineering divisions provide end-to-end operational assurance.
            </p>
            <div className="space-y-6">
              {[
                { icon: Factory, title: "EPC Contracting", desc: "Turnkey engineering, procurement, and construction." },
                { icon: ShieldCheck, title: "Safety Auditing", desc: "Rigorous compliance checks and stress testing." },
                { icon: Activity, title: "Predictive Maintenance", desc: "AI-driven diagnostics to prevent systemic failure." }
              ].map((service, idx) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="shrink-0 p-3 bg-brand-dark rounded-lg border border-gray-700 h-fit">
                    <service.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-400 text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]"
          >
            <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop" alt="Engineering Team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* 5. Clients Marquee */}
      <section className="py-20 border-y border-gray-800 bg-brand-dark/50 overflow-hidden">
        <div className="container mx-auto px-6 mb-10 text-center">
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Trusted by Global Energy Leaders</p>
        </div>
        <div className="flex w-[200%] md:w-[150%] animate-[marquee_20s_linear_infinite]">
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex-1 text-center py-4">
              <span className="text-2xl md:text-3xl font-black text-gray-800 tracking-tighter hover:text-gray-600 transition-colors cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Sticky CTA Banner */}
      <section className="py-32 relative overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Speak with our senior engineers today to architect a custom flow solution optimized for your specific operational parameters.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-brand-dark font-bold text-lg rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-lg shadow-emerald-900/50 group">
              Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add Custom Animations inline for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
