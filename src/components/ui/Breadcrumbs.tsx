import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export interface Crumb {
  label: string;
  /** Omit on the final crumb — the current page is not a link. */
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
  /** Absolute site origin, needed for valid BreadcrumbList item URLs. */
  origin?: string;
}

/**
 * Server component: renders the visible trail plus a matching BreadcrumbList
 * JSON-LD block, so search results can show the hierarchy.
 */
export function Breadcrumbs({ items, className, origin = "" }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${origin}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className={cn("text-sm mb-1", className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-brand-subtle">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-brand-navy transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-ink font-medium" aria-current={isLast ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
