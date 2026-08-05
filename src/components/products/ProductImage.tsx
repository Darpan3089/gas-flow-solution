import Image from "next/image";
import type { IconKey } from "@/data/catalog";
import { CategoryIcon } from "./CategoryIcon";
import { cn } from "@/lib/cn";

interface ProductImageProps {
  src?: string;
  alt: string;
  icon: IconKey;
  /** Series code stamped onto the placeholder, e.g. "GR-S". */
  series?: string;
  /** Feeds the deterministic placeholder variation. */
  seed?: string;
  className?: string;
  /** Sets `priority` on the underlying next/image for above-the-fold usage. */
  priority?: boolean;
  sizes?: string;
}

/** Cheap deterministic hash so a given product always draws the same schematic. */
function hash(seed: string) {
  let value = 0;
  for (let i = 0; i < seed.length; i += 1) {
    value = (value * 31 + seed.charCodeAt(i)) % 100000;
  }
  return value;
}

/**
 * Renders the product photograph when one exists, and an original
 * blueprint-style schematic placeholder when it does not — so the catalog
 * looks intentional before any photography is commissioned.
 *
 * Real images lazy-load by default (next/image), and the placeholder is inline
 * SVG, so neither path costs a network round trip on first paint.
 */
export function ProductImage({
  src,
  alt,
  icon,
  series,
  seed = alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
}: ProductImageProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-brand-surface-alt", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
        />
        {/* Light theme: fade to white so ink-coloured text stays legible on top. */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
      </div>
    );
  }

  const variant = hash(seed);
  const rings = 3 + (variant % 3);
  const offset = variant % 40;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-brand-surface-alt to-brand-green-soft",
        className,
      )}
      role="img"
      aria-label={`${alt} — illustration placeholder`}
    >
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full text-brand-green"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`grid-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
          </pattern>
        </defs>

        <rect width="400" height="300" fill={`url(#grid-${variant})`} />

        {/* Flow axis through the body */}
        <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
        <line
          x1="0"
          y1="150"
          x2="400"
          y2="150"
          stroke="currentColor"
          strokeWidth="14"
          opacity="0.08"
        />

        {/* Concentric body section — ring count varies per product */}
        {Array.from({ length: rings }).map((_, i) => (
          <circle
            key={i}
            cx={200 + (offset - 20)}
            cy="150"
            r={30 + i * 22}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            opacity={0.3 - i * 0.05}
          />
        ))}

        {/* Bonnet / actuator stack above the axis */}
        <rect
          x={175 + (offset - 20)}
          y="46"
          width="50"
          height="58"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.28"
        />
        <line
          x1={200 + (offset - 20)}
          y1="104"
          x2={200 + (offset - 20)}
          y2="150"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.28"
        />

        {/* Flange faces */}
        <line x1="70" y1="122" x2="70" y2="178" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <line x1="330" y1="122" x2="330" y2="178" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 border border-brand-green/20 shadow-sm">
          <CategoryIcon icon={icon} className="w-6 h-6 text-brand-green" />
        </span>
        {series && (
          <span className="px-2.5 py-1 rounded-full bg-white/80 border border-brand-border text-[11px] font-bold tracking-widest uppercase text-brand-subtle">
            {series}
          </span>
        )}
      </div>
    </div>
  );
}
