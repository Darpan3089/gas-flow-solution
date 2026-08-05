"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/data/catalog";
import { cn } from "@/lib/cn";

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

/**
 * Single-open accordion. Buttons carry aria-expanded/aria-controls, and the
 * answer panels stay in the DOM as collapsed regions only while animating out,
 * so assistive tech never reads a hidden answer.
 */
export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-brand-border rounded-xl border border-brand-border bg-brand-surface", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left group"
              >
                <span
                  className={cn(
                    "text-base font-semibold transition-colors",
                    isOpen ? "text-brand-green" : "text-brand-ink group-hover:text-brand-green",
                  )}
                >
                  {item.question}
                </span>
                <Plus
                  className={cn(
                    "w-5 h-5 shrink-0 mt-0.5 transition-transform duration-200",
                    isOpen ? "rotate-45 text-brand-green" : "text-brand-subtle",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-brand-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
