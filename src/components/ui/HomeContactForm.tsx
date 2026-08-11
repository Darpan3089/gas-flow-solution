"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { submitInquiry } from "@/lib/inquiry/submit";
import type { InquiryErrors } from "@/lib/inquiry/types";

/**
 * The homepage contact block's form.
 *
 * Visually distinct from the contact page's (underlined fields on a tinted
 * ground rather than bordered cards) but posts the same payload to the same
 * `/api/inquiry` endpoint.
 */

const FIELD =
  "w-full bg-brand-surface-alt border-b border-brand-border px-4 py-4 text-brand-ink " +
  "focus:outline-none focus:border-brand-navy transition-colors placeholder:text-brand-subtle";

const EMPTY = { name: "", company: "", email: "", phone: "", message: "", website: "" };

export function HomeContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<InquiryErrors>({});

  const set = (key: keyof typeof EMPTY) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setError(null);
    setFieldErrors({});

    const result = await submitInquiry({ ...values, source: "Homepage" });

    if (result.ok) {
      setStatus("sent");
      setValues(EMPTY);
      return;
    }

    setStatus("idle");
    setError(result.message);
    setFieldErrors(result.errors ?? {});
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="bg-brand-surface p-10 border border-brand-border shadow-sm flex flex-col items-center justify-center text-center gap-4 min-h-[420px]"
      >
        <CheckCircle2 className="w-14 h-14 text-brand-navy" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-brand-ink">Enquiry received</h3>
        <p className="text-brand-muted max-w-sm">
          Thank you — one of our engineers will come back to you within one working day.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-brand-surface p-10 border border-brand-border shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot — hidden from humans, irresistible to bots. */}
        <div aria-hidden="true" className="sr-only">
          <label htmlFor="home-website">Website</label>
          <input
            id="home-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={set("website")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="home-name" className="sr-only">Full name</label>
            <input id="home-name" type="text" required placeholder="Full Name *" className={FIELD} value={values.name} onChange={set("name")} />
            {fieldErrors.name && <p className="mt-1.5 text-xs font-medium text-brand-navy">{fieldErrors.name}</p>}
          </div>
          <div>
            <label htmlFor="home-company" className="sr-only">Company name</label>
            <input id="home-company" type="text" placeholder="Company Name" className={FIELD} value={values.company} onChange={set("company")} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="home-email" className="sr-only">Email address</label>
            <input id="home-email" type="email" required placeholder="Email Address *" className={FIELD} value={values.email} onChange={set("email")} />
            {fieldErrors.email && <p className="mt-1.5 text-xs font-medium text-brand-navy">{fieldErrors.email}</p>}
          </div>
          <div>
            <label htmlFor="home-phone" className="sr-only">Phone number</label>
            <input id="home-phone" type="tel" placeholder="Phone Number" className={FIELD} value={values.phone} onChange={set("phone")} />
          </div>
        </div>

        <div>
          <label htmlFor="home-message" className="sr-only">Your requirements</label>
          <textarea id="home-message" rows={4} required placeholder="Tell us about your technical requirements..." className={`${FIELD} resize-none`} value={values.message} onChange={set("message")} />
          {fieldErrors.message && <p className="mt-1.5 text-xs font-medium text-brand-navy">{fieldErrors.message}</p>}
        </div>

        {error && (
          <p role="alert" className="flex items-start gap-2 border border-brand-navy/25 bg-brand-navy-soft px-4 py-3 text-sm text-brand-ink">
            <AlertCircle className="mt-0.5 w-4 h-4 shrink-0 text-brand-navy" aria-hidden="true" />
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-brand-navy text-white font-black tracking-widest uppercase py-5 hover:bg-brand-navy-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {status === "sending" ? (
            <>Sending <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /></>
          ) : (
            "Send enquiry"
          )}
        </button>
      </form>
    </div>
  );
}
