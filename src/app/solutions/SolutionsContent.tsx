"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { CategoryIcon } from "@/components/products/CategoryIcon";
import { company, primaryPhone } from "@/data/company";
import { categoryHref, getCategory } from "@/data/catalog";
import { systems, systemsPromise } from "@/data/profile";

/**
 * The station- and skid-level range, one anchored section per system.
 *
 * The point of this page is the level it sits at: `/products` sells components,
 * this sells the assembled station a CGD or plant buyer actually tenders for.
 * Each section closes by linking down into the catalog categories it is built
 * from, which is the only place those two levels are connected in the UI.
 */

/** Resolves a `builtFrom` slug to the catalog category, dropping any that no longer exists. */
function componentsOf(slugs: string[]) {
  return slugs
    .map((slug) => getCategory(slug))
    .filter((category): category is NonNullable<typeof category> => Boolean(category));
}

export function SolutionsContent() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pt-20">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.kimpexflow.com/img/bg-manufacturer1.jpg"
          alt="Gas pressure regulating and metering skid under assembly"
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
            Regulating and metering systems,{" "}
            <span className="text-brand-navy">source to end user.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto font-light leading-relaxed"
          >
            {systemsPromise}
          </motion.p>
        </div>
      </section>

      {/* Contents — the pressure chain, in network order */}
      <Section className="-mt-14 z-20 pb-16">
        <div className="glass rounded-2xl p-8 md:p-10">
          <h2 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-6">
            The Range
          </h2>
          <div className="flex flex-wrap gap-3">
            {systems.map((system) => (
              <a
                key={system.slug}
                href={`#${system.slug}`}
                className="group px-5 py-3 rounded-full bg-brand-surface border border-brand-border text-brand-ink text-sm font-medium hover:border-brand-navy/50 hover:text-brand-navy transition-colors"
              >
                {system.abbr ?? system.name}
                {system.abbr && (
                  <span className="text-brand-subtle group-hover:text-brand-navy/70 font-normal transition-colors">
                    {" "}
                    · {system.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* One section per system */}
      {systems.map((system, idx) => {
        const components = componentsOf(system.builtFrom);
        const isAlt = idx % 2 === 1;

        return (
          <Section
            key={system.slug}
            id={system.slug}
            className={
              isAlt
                ? "scroll-mt-28 bg-brand-surface-alt border-y border-brand-border"
                : "scroll-mt-28"
            }
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Identity */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs font-bold text-brand-navy tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {system.abbr && (
                      <span className="px-3 py-1 rounded-md bg-brand-navy-soft text-brand-navy text-xs font-bold tracking-wider">
                        {system.abbr}
                      </span>
                    )}
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold text-brand-ink leading-tight mb-4">
                    {system.name}
                  </h2>

                  <p className="text-brand-subtle text-sm font-medium tracking-wide mb-6 pb-6 border-b border-brand-border">
                    {system.role}
                  </p>

                  <p className="text-brand-muted text-lg leading-relaxed">{system.overview}</p>
                </motion.div>
              </div>

              {/* Scope + components */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-brand-surface border border-brand-border rounded-2xl p-8 h-full flex flex-col"
                >
                  <h3 className="text-brand-ink font-semibold mb-6">A typical build includes</h3>
                  <ul className="space-y-4 mb-8">
                    {system.includes.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-navy shrink-0 mt-1" />
                        <span className="text-brand-muted text-sm leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>

                  {components.length > 0 && (
                    <div className="mt-auto pt-6 border-t border-brand-border">
                      <h4 className="text-brand-subtle text-xs font-bold tracking-widest uppercase mb-4">
                        Built from
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {components.map((category) => (
                          <Link
                            key={category.slug}
                            href={categoryHref(category.slug)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-navy-soft border border-transparent text-brand-navy text-xs font-semibold hover:border-brand-navy/40 transition-colors"
                          >
                            <CategoryIcon icon={category.icon} className="w-3.5 h-3.5" />
                            {category.name}
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {components.length === 0 && (
                    <div className="mt-auto pt-6 border-t border-brand-border">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-brand-navy font-semibold text-sm hover:text-brand-navy-dark transition-colors"
                      >
                        Tell us what you need <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>

            </div>
          </Section>
        );
      })}

      {/* Every system gets the same lifecycle */}
      <Section className="bg-brand-surface-alt border-y border-brand-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-4">
              Beyond the Build
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
              Every system on this page comes with the same lifecycle
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              Design and engineering, manufacture and test, installation and commissioning,
              then calibration, AMC and maintenance for as long as it runs — one point of
              responsibility across all of it.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-navy font-semibold text-sm hover:text-brand-navy-dark transition-colors"
            >
              See what each service covers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://www.kimpexflow.com/img/worker2.jpg"
              alt="Commissioning a gas regulating station"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-32">
        <div className="glass-navy rounded-3xl px-8 py-14 md:px-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6 max-w-3xl mx-auto leading-tight">
            Tell us the pressures and the flow. We will tell you the station.
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Inlet and outlet pressure, peak and minimum flow, and where it has to fit — that
            is enough for us to come back with a configuration and a drawing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-navy-dark transition-colors rounded-lg shadow-lg shadow-brand-navy/20"
            >
              Request a configuration <ArrowRight className="w-4 h-4" />
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
