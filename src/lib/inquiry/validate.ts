import type { InquiryErrors, InquiryPayload } from "./types";

/**
 * Server-side validation for an enquiry.
 *
 * Hand-rolled rather than pulling in a schema library: the payload is six short
 * fields and the rules below are the whole specification. Client-side `required`
 * attributes are a convenience, not a guarantee — this is the check that counts.
 */

/** Deliberately permissive. Real addresses are verified by replying to them, not by regex. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Control characters, stripped so a value cannot break out of a mail header. */
const CONTROL_CHARS = new RegExp("[\u0000-\u001F\u007F]", "g");

const LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  phone: 40,
  product: 200,
  message: 5000,
  source: 60,
} as const;

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL_CHARS, " ").trim().slice(0, max);
}

export function validateInquiry(
  input: unknown,
): { ok: true; data: InquiryPayload } | { ok: false; errors: InquiryErrors } {
  const raw = (input ?? {}) as Record<string, unknown>;
  const errors: InquiryErrors = {};

  const data: InquiryPayload = {
    name: clean(raw.name, LIMITS.name),
    email: clean(raw.email, LIMITS.email),
    company: clean(raw.company, LIMITS.company) || undefined,
    phone: clean(raw.phone, LIMITS.phone) || undefined,
    product: clean(raw.product, LIMITS.product) || undefined,
    message: clean(raw.message, LIMITS.message),
    source: clean(raw.source, LIMITS.source) || undefined,
    website: clean(raw.website, 200) || undefined,
  };

  if (data.name.length < 2) {
    errors.name = "Please give your name.";
  }
  if (!EMAIL.test(data.email)) {
    errors.email = "Please give a valid email address so we can reply.";
  }
  if (data.message.length < 10) {
    errors.message = "Please tell us a little more about what you need.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data };
}
