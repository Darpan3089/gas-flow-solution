import type { TechnicalDocument } from "./types";

/**
 * Every product exposes the same four-document set. The files themselves do
 * not exist yet, so entries deliberately carry no `href` — the documents panel
 * renders them as "available on request" instead of linking nowhere. Add an
 * `href` per product once real PDFs are hosted.
 */
export function docsFor(name: string): TechnicalDocument[] {
  return [
    { title: `${name} — Technical Datasheet`, kind: "Datasheet", meta: "PDF · on request" },
    { title: `${name} — Installation & Maintenance Manual`, kind: "Manual", meta: "PDF · on request" },
    { title: `${name} — Dimensional Drawing`, kind: "Drawing", meta: "DWG / PDF · on request" },
    { title: `${name} — Declaration of Conformity`, kind: "Certificate", meta: "PDF · on request" },
  ];
}

/** Category CTA used across the catalog — kept in one place so it stays consistent. */
export const quoteCta = { label: "Request a Quote", href: "/contact" };
