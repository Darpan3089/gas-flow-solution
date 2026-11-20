"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ProfileIcon } from "@/components/ui/ProfileIcon";
import { company, primaryPhone } from "@/data/company";
import { industries, servicePhases, services } from "@/data/profile";

/**
 * Every word of substance on this page comes from `@/data/profile` — the same
 * source About reads. Nothing is retyped here; if a service description needs
 * to change, it changes there and both pages follow.
 */
export function ServicesContent() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pt-20">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.kimpexflow.com/img/worker2.jpg"
          alt="Engineer servicing a gas regulating skid"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/70 to-brand-bg/40" />

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-brand-ink tracking-tight mb-6"
          >
            Complete lifecycle support for{" "}
            <span className="text-brand-navy">gas distribution systems.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto font-light leading-relaxed"
          >
            From the first sizing calculation to the calibration visit years after
            handover — designed, built, commissioned and maintained by one team,
            under one point of responsibility.
          </motion.p>
        </div>
      </section>

      {/* Phase rail — the three stages, as an at-a-glance contents strip */}
      <Section className="-mt-14 z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicePhases.map((phase, idx) => (
            <motion.a
              key={phase.slug}
              href={`#${phase.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border-t-2 border-t-brand-navy/25 hover:border-t-brand-navy/60 hover:shadow-lg transition-all group"
            >
              <span className="text-brand-navy font-mono text-xs font-bold tracking-widest">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h2 className="text-brand-ink text-xl font-bold mt-3 mb-2 group-hover:text-brand-navy transition-colors">
                {phase.title}
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed">{phase.blurb}</p>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* The nine services, grouped by phase */}
      {servicePhases.map((phase, phaseIdx) => (
        <Section
          key={phase.slug}
          id={phase.slug}
          className={
            phaseIdx % 2 === 0
              ? "scroll-mt-28"
              : "scroll-mt-28 bg-brand-surface-alt border-y border-brand-border"
          }
        >
          <div className="max-w-3xl mb-14">
            <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
              {String(phaseIdx + 1).padStart(2, "0")} — {phase.title}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">{phase.blurb}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {phase.services.map((service, idx) => (
              <motion.article
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="scroll-mt-28 bg-brand-surface border border-brand-border rounded-2xl p-8 hover:shadow-lg hover:border-brand-navy/40 transition-all"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="shrink-0 w-12 h-12 rounded-xl bg-brand-navy-soft flex items-center justify-center">
                    <ProfileIcon icon={service.icon} className="w-6 h-6 text-brand-navy" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-ink leading-snug mb-2">
                      {service.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{service.summary}</p>
                  </div>
                </div>

                <ul className="space-y-3 pt-5 border-t border-brand-border">
                  {service.detail.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-brand-navy shrink-0 mt-1" />
                      <span className="text-brand-muted text-sm leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>
      ))}

      {/* Who we do it for */}
      <Section>
        <div className="max-w-3xl mb-12">
          <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
            Where We Work
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            The same nine services, across gas utilities and process industry
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-3 rounded-full bg-brand-surface border border-brand-border text-brand-ink text-sm font-medium hover:border-brand-navy/50 hover:text-brand-navy transition-colors"
            >
              {industry}
            </span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-32">
        <div className="glass-navy rounded-3xl px-8 py-14 md:px-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 max-w-3xl mx-auto leading-tight">
            Need an AMC, a calibration visit, or a station uprated?
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us what is installed and what it needs to do. We will tell you which
            of the {services.length} services applies — and where none does, we will
            say that too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-navy-dark transition-colors rounded-lg shadow-lg shadow-brand-navy/20"
            >
              Request a service visit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:+${primaryPhone.e164}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-surface border border-brand-border text-brand-ink font-bold uppercase tracking-widest text-sm hover:border-brand-navy hover:text-brand-navy transition-colors rounded-lg"
            >
              <Phone className="w-4 h-4" /> {primaryPhone.display}
            </a>
          </div>
          <p className="text-brand-subtle text-sm mt-8">
            Or email{" "}
            <a
              href={`mailto:${company.email.sales}`}
              className="text-brand-navy font-medium hover:text-brand-navy-dark transition-colors"
            >
              {company.email.sales}
            </a>
          </p>
        </div>
      </Section>

    </div>
  );
}
