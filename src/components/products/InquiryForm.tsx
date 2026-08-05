"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/cn";

interface InquiryFormProps {
  /** Pre-fills the subject line so the enquiry arrives with context. */
  productName: string;
  className?: string;
}

type Status = "idle" | "sending" | "sent";

const FIELD_CLASS =
  "w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-2.5 text-sm text-brand-ink " +
  "placeholder:text-brand-subtle focus:border-brand-green focus:outline-none focus:ring-2 " +
  "focus:ring-brand-green/20 transition-colors";

/**
 * Product enquiry form.
 *
 * PLACEHOLDER: like the site's contact form, this fakes success on a timer and
 * does not transmit anything. Wire the submit handler to a real endpoint (route
 * handler, form service or CRM webhook) before launch.
 */
export function InquiryForm({ productName, className }: InquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        className={cn(
          "flex flex-col items-center text-center gap-3 rounded-xl border border-brand-green/25 bg-brand-green-soft p-8",
          className,
        )}
      >
        <CheckCircle2 className="w-10 h-10 text-brand-green" aria-hidden="true" />
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inquiry-name" className="block mb-1.5 text-sm font-semibold text-brand-ink">
            Full name <span className="text-brand-green">*</span>
          </label>
          <input id="inquiry-name" name="name" type="text" required autoComplete="name" className={FIELD_CLASS} />
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
            Email <span className="text-brand-green">*</span>
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD_CLASS}
          />
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
            Application details <span className="text-brand-green">*</span>
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            rows={4}
            required
            placeholder="Inlet and outlet pressure, required flow, line size, gas composition, ambient conditions…"
            className={cn(FIELD_CLASS, "resize-y")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3 text-sm font-bold text-white transition-all hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/25 disabled:cursor-not-allowed disabled:opacity-70"
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
