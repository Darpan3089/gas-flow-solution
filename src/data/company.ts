/**
 * Single source of truth for who we are and how to reach us.
 *
 * Before this existed the site stated three company names, three addresses,
 * two countries and four contact numbers — none of which agreed with each
 * other. Every component that shows a name, address, phone or email now reads
 * from here, so there is exactly one place to change them.
 *
 * Rules for this file: nothing goes in that is not verifiably true. If a value
 * is not yet confirmed, leave it `null` and let the UI omit that line rather
 * than invent a placeholder — a plausible-looking fake is worse than an absence.
 */

export interface Phone {
  /** E.164, digits only after the +, for `tel:` and `wa.me` links. */
  e164: string;
  /** How it should read on screen. */
  display: string;
  label: string;
}

export const company = {
  /** Trading name, as it should appear in body copy. */
  name: "Gas Flow Solutions",
  /** Used in the copyright line. Set to the registered entity once confirmed. */
  legalName: "Gas Flow Solutions",
  domain: "www.gfs-india.in",
  /**
   * Canonical origin, no trailing slash. `www` is the canonical host — point the
   * apex at it with a redirect so a page is never reachable at two URLs.
   * Feeds `metadataBase`, so every relative canonical and OG image resolves here.
   */
  url: "https://www.gfs-india.in",

  email: {
    sales: "sales@gfs-india.in",
  },

  phones: [
    { e164: "918866088389", display: "+91 88660 88389", label: "Sales" },
    { e164: "919726268804", display: "+91 97262 68804", label: "Sales" },
  ] as Phone[],

  /**
   * Registered address. Keep the null union — every consumer guards on it, so an
   * address can be pulled back out without touching the components.
   */
  address: {
    lines: ["736-A, Prime Industrial Estate", "Manjusar, Savali Road"],
    city: "Vadodara",
    state: "Gujarat",
    postcode: "391775",
    country: "India",
  } as null | {
    lines: string[];
    city: string;
    state: string;
    postcode: string;
    country: string;
  },

  /** Public profiles. Empty until real accounts exist; the UI hides the row. */
  social: {} as Partial<Record<"linkedin" | "facebook" | "instagram" | "twitter", string>>,
} as const;

/** Primary number — the one used for the WhatsApp button and the headline `tel:` link. */
export const primaryPhone: Phone = company.phones[0];

export function whatsAppHref(message?: string): string {
  const base = `https://wa.me/${primaryPhone.e164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Flattens the address for a single-line display. Returns null when unset. */
export function addressLine(): string | null {
  if (!company.address) return null;
  const { lines, city, state, postcode, country } = company.address;
  return [...lines, `${city}, ${state} ${postcode}`, country].join(", ");
}
