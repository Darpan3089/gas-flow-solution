/**
 * Shape of a website enquiry, shared by the three forms, the route handler and
 * the mail transport.
 *
 * Every form on the site posts this same payload to `/api/inquiry`; the only
 * difference between them is which optional fields they collect. `product` is
 * set by the per-product form so the enquiry arrives already labelled.
 */
export interface InquiryPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  /** Product the enquiry came from, e.g. "R Series – Gas Pressure Regulator (R Series)". */
  product?: string;
  message: string;
  /** Which form it came from — used only in the subject line and the log. */
  source?: string;
  /**
   * Honeypot. Hidden from humans by CSS, so a non-empty value means a bot filled
   * it in. Named `website` because that is what scrapers expect to find.
   */
  website?: string;
}

/** Field-level validation errors, keyed by field name. */
export type InquiryErrors = Partial<Record<keyof InquiryPayload, string>>;

export type InquiryResult =
  | { ok: true }
  | { ok: false; message: string; errors?: InquiryErrors };
