"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import { submitInquiry } from "@/lib/inquiry/submit";
import type { InquiryErrors } from "@/lib/inquiry/types";

interface InquiryFormProps {
  /** Pre-fills the subject line so the enquiry arrives with context. */
  productName: string;
  className?: string;
}

type Status = "idle" | "sending" | "sent";

const FIELD_CLASS =
  "w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-2.5 text-sm text-brand-ink " +
  "placeholder:text-brand-subtle focus:border-brand-navy focus:outline-none focus:ring-2 " +
  "focus:ring-brand-navy/20 transition-colors";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-brand-navy">{message}</p>;
}

/**
 * Product enquiry form. Posts to `/api/inquiry`, which mails the enquiry on and
 * logs it first so nothing is lost if the transport is down.
 */
export function InquiryForm({ productName, className }: InquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<InquiryErrors>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    setStatus("sending");
    setError(null);
    setFieldErrors({});

    const result = await submitInquiry({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      phone: String(form.get("phone") ?? ""),
      product: productName,
      message: String(form.get("message") ?? ""),
      website: String(form.get("website") ?? ""),
      source: "Product enquiry",
    });

    if (result.ok) {
      setStatus("sent");
      return;
    }

    setStatus("idle");
    setError(result.message);
    setFieldErrors(result.errors ?? {});
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        className={cn(
          "flex flex-col items-center text-center gap-3 rounded-xl border border-brand-navy/25 bg-brand-navy-soft p-8",
          className,
        )}
      >
        <CheckCircle2 className="w-10 h-10 text-brand-navy" aria-hidden="true" />
        <p className="text-lg font-bold text-brand-ink">Enquiry received</p>
        <p className="text-sm text-brand-muted max-w-sm">
          Our application engineers will review your requirements for {productName} and respond
          within one working day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("rounded-xl border border-brand-border bg-brand-surface p-6 md:p-8", className)}
    >
      <h3 className="text-xl font-bold text-brand-ink">Request a quotation</h3>
      <p className="mt-1.5 mb-6 text-sm text-brand-muted">
        Tell us the duty and we will come back with a sized proposal for {productName}.
      </p>

      {/* Honeypot — hidden from humans, irresistible to bots. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="inquiry-website">Website</label>
        <input id="inquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inquiry-name" className="block mb-1.5 text-sm font-semibold text-brand-ink">
            Full name <span className="text-brand-navy">*</span>
          </label>
          <input id="inquiry-name" name="name" type="text" required autoComplete="name" className={FIELD_CLASS} />
          <FieldError message={fieldErrors.name} />
        </div>

        <div>
          <label htmlFor="inquiry-company" className="block mb-1.5 text-sm font-semibold text-brand-ink">
            Company
          </label>
          <input
            id="inquiry-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label htmlFor="inquiry-email" className="block mb-1.5 text-sm font-semibold text-brand-ink">
            Email <span className="text-brand-navy">*</span>
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD_CLASS}
          />
          <FieldError message={fieldErrors.email} />
        </div>

        <div>
          <label htmlFor="inquiry-phone" className="block mb-1.5 text-sm font-semibold text-brand-ink">
            Phone
          </label>
          <input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" className={FIELD_CLASS} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="inquiry-product" className="block mb-1.5 text-sm font-semibold text-brand-ink">
            Product
          </label>
          <input
            id="inquiry-product"
            name="product"
            type="text"
            defaultValue={productName}
            readOnly
            className={cn(FIELD_CLASS, "bg-brand-surface-alt text-brand-muted")}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="inquiry-message" className="block mb-1.5 text-sm font-semibold text-brand-ink">
            Application details <span className="text-brand-navy">*</span>
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            rows={4}
            required
            placeholder="Inlet and outlet pressure, required flow, line size, gas composition, ambient conditions…"
            className={cn(FIELD_CLASS, "resize-y")}
          />
          <FieldError message={fieldErrors.message} />
        </div>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-lg border border-brand-navy/25 bg-brand-navy-soft px-4 py-3 text-sm text-brand-ink"
        >
          <AlertCircle className="mt-0.5 w-4 h-4 shrink-0 text-brand-navy" aria-hidden="true" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3 text-sm font-bold text-white transition-all hover:bg-brand-navy-dark hover:shadow-lg hover:shadow-brand-navy/25 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send enquiry
            <Send className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
