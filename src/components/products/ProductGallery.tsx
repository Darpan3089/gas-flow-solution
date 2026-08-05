"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { IconKey } from "@/data/catalog";
import { ProductImage } from "./ProductImage";
import { cn } from "@/lib/cn";

interface ProductGalleryProps {
  name: string;
  series: string;
  icon: IconKey;
  image?: string;
  gallery?: string[];
  slug: string;
}

/**
 * Large image with a thumbnail strip. Where no photography exists yet, the
 * strip shows three schematic views generated from different seeds so the
 * gallery still reads as a gallery rather than a broken image.
 */
export function ProductGallery({ name, series, icon, image, gallery, slug }: ProductGalleryProps) {
  const views = image || gallery?.length
    ? [image, ...(gallery ?? [])].filter((src): src is string => Boolean(src)).map((src, i) => ({
        src,
        seed: `${slug}-${i}`,
        label: i === 0 ? "Product view" : `View ${i + 1}`,
      }))
    : [
        { src: undefined, seed: `${slug}-front`, label: "Front elevation" },
        { src: undefined, seed: `${slug}-section`, label: "Sectional view" },
        { src: undefined, seed: `${slug}-detail`, label: "Connection detail" },
      ];

  const [active, setActive] = useState(0);
  const current = views[active];

  return (
    <div>
      <motion.div
        key={active}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden rounded-2xl border border-brand-border"
      >
        <ProductImage
          src={current.src}
          alt={`${name} — ${current.label}`}
          icon={icon}
          series={series}
          seed={current.seed}
          priority
          className="aspect-4/3 w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {views.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3" role="group" aria-label={`${name} images`}>
          {views.map((view, index) => (
            <button
              key={view.seed}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              aria-label={`Show ${view.label}`}
              className={cn(
                "overflow-hidden rounded-xl border transition-all",
                index === active
                  ? "border-brand-green ring-2 ring-brand-green/20"
                  : "border-brand-border hover:border-brand-green/40",
              )}
            >
              <ProductImage
                src={view.src}
                alt={`${name} — ${view.label} thumbnail`}
                icon={icon}
                seed={view.seed}
                className="aspect-4/3 w-full"
                sizes="(max-width: 1024px) 30vw, 160px"
              />
            </button>
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-xs text-brand-subtle">{current.label}</p>
    </div>
  );
}
