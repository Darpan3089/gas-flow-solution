/**
 * Shape of the product catalog.
 *
 * Everything here must stay JSON-serializable: catalog objects are read in
 * server components and handed straight to client components (the browser,
 * quick view, inquiry form), so no functions, class instances or React
 * elements. Icons are therefore referenced by key and resolved against the
 * map in `@/components/products/CategoryIcon`.
 */

/** Key into the lucide icon map in `CategoryIcon`. */
export type IconKey =
  | "regulator"
  | "governor"
  | "filter"
  | "solenoid"
  | "shutoff"
  | "relief"
  | "slamshut"
  | "meter"
  | "station"
  | "train"
  | "measurement"
  | "accessory"
  | "burner";

export interface SpecRow {
  label: string;
  value: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * A datasheet / certificate entry. `href` is intentionally absent until real
 * PDFs exist — the UI renders an unavailable-yet state rather than a dead link.
 */
export interface TechnicalDocument {
  title: string;
  kind: "Datasheet" | "Manual" | "Certificate" | "Drawing";
  /** Display-only hint, e.g. "PDF · 1.2 MB". */
  meta: string;
  href?: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Series/model code shown as an eyebrow, e.g. "GR-S". */
  series: string;
  /** Optional heading used to group products within a category listing. */
  group?: string;
  /** One-line marketing hook. Keep under ~120 characters. */
  tagline: string;
  /** Two to three sentences of positioning copy. */
  overview: string;
  features: string[];
  specs: SpecRow[];
  applications: string[];
  /**
   * Image src: either a root-relative path into `public/` (e.g.
   * "/products/r-series/main.webp") or a remote URL — remote hosts must also
   * be allowlisted in `next.config.ts`. Omit to render the generated
   * schematic placeholder.
   */
  image?: string;
  gallery?: string[];
  documents?: TechnicalDocument[];
  faqs?: FaqItem[];
}

export interface Category {
  slug: string;
  name: string;
  icon: IconKey;
  /** One-line marketing hook used on cards and the nav. */
  tagline: string;
  /** Longer positioning copy for the category hero. */
  overview: string;
  features: string[];
  /** Range-level envelope — individual products narrow these. */
  specs: SpecRow[];
  applications: string[];
  industries: string[];
  benefits: Benefit[];
  cta: { label: string; href: string };
  faqs: FaqItem[];
  products: Product[];
}

/** A product paired with the category it belongs to, for flat listings. */
export interface CatalogEntry {
  product: Product;
  category: Pick<Category, "slug" | "name" | "icon">;
}
