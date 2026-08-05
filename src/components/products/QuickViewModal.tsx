"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import type { CatalogEntry } from "@/data/catalog";
import { productHref } from "@/data/catalog";
import { ProductImage } from "./ProductImage";

interface QuickViewModalProps {
  entry: CatalogEntry | null;
  onClose: () => void;
}

/**
 * Quick view dialog. Handles the three things a hand-rolled modal usually gets
 * wrong: Escape to close, focus moved into the panel on open and returned to
 * the trigger on close, and the background locked from scrolling underneath.
 */
export function QuickViewModal({ entry, onClose }: QuickViewModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!entry) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused.current?.focus();
    };
  }, [entry, onClose]);

  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            aria-label="Close quick view"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-brand-ink/40 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-view-title"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-brand-border bg-brand-surface shadow-2xl shadow-brand-ink/10 focus:outline-none"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close quick view"
              className="absolute right-4 top-4 z-10 rounded-full border border-brand-border bg-white/90 p-2 text-brand-muted backdrop-blur-sm transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>

            <ProductImage
              src={entry.product.image}
              alt={entry.product.name}
              icon={entry.category.icon}
              series={entry.product.series}
              seed={entry.product.slug}
              className="h-52 w-full rounded-t-2xl"
              sizes="(max-width: 768px) 100vw, 768px"
            />

            <div className="p-6 md:p-8">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-green">
                {entry.category.name} · {entry.product.series}
              </p>

              <h2 id="quick-view-title" className="mb-3 text-2xl font-bold tracking-tight text-brand-ink">
                {entry.product.name}
              </h2>

              <p className="mb-6 text-sm leading-relaxed text-brand-muted">{entry.product.overview}</p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-subtle">
                    Key features
                  </h3>
                  <ul className="space-y-2">
                    {entry.product.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-muted">
                        <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-brand-green" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-subtle">
                    At a glance
                  </h3>
                  <dl className="space-y-2">
                    {entry.product.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label} className="flex justify-between gap-4 border-b border-brand-border pb-2 text-sm">
                        <dt className="text-brand-subtle">{spec.label}</dt>
                        <dd className="text-right font-medium text-brand-ink">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={productHref(entry.category.slug, entry.product.slug)}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
                >
                  Full specifications
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-border px-6 py-3 text-sm font-bold text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green"
                >
                  Request a quote
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
