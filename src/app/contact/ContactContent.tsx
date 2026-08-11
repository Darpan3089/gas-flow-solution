"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { company } from "@/data/company";
import { submitInquiry } from "@/lib/inquiry/submit";
import type { InquiryErrors } from "@/lib/inquiry/types";

export function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<InquiryErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    setFieldErrors({});

    const result = await submitInquiry({ ...formData, source: "Contact page" });

    if (result.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "", website: "" });
      return;
    }

    setStatus("idle");
    setError(result.message);
    setFieldErrors(result.errors ?? {});
  };

  const inputClasses = "w-full bg-white border border-brand-border rounded-xl px-5 py-4 text-brand-ink placeholder-brand-subtle focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all";

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pt-32 pb-20">
      
      <Section className="!py-0">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-brand-ink mb-6"
          >
            Initiate a <span className="text-brand-navy">Consultation</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-brand-muted"
          >
            Direct access to our senior engineering and architectural procurement teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="glass p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold text-brand-ink mb-8">Talk to us</h3>

              <div className="space-y-6">
                {company.address && (
                  <div>
                    <h4 className="text-brand-navy text-sm font-semibold uppercase tracking-wider mb-2">Address</h4>
                    <p className="text-brand-muted">
                      {company.address.lines.map((line) => <span key={line} className="block">{line}</span>)}
                      <span className="block">{company.address.city}, {company.address.state} {company.address.postcode}</span>
                    </p>
                  </div>
                )}
                <div>
                  <h4 className="text-brand-navy text-sm font-semibold uppercase tracking-wider mb-2">Phone</h4>
                  {company.phones.map((phone) => (
                    <p key={phone.e164} className="text-brand-muted text-lg">
                      <a href={`tel:+${phone.e164}`} className="hover:text-brand-navy transition-colors">{phone.display}</a>
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="text-brand-navy text-sm font-semibold uppercase tracking-wider mb-2">Email</h4>
                  <p className="text-brand-muted">
                    <a href={`mailto:${company.email.sales}`} className="hover:text-brand-navy transition-colors">{company.email.sales}</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
             {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur z-10 flex flex-col items-center justify-center text-center p-8"
                >
                  <CheckCircle2 className="w-20 h-20 text-brand-navy mb-6" />
                  <h3 className="text-3xl font-bold text-brand-ink mb-4">Request Received</h3>
                  <p className="text-brand-muted">An engineering consultant will contact you within 24 operational hours.</p>
                </motion.div>
             )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
              {/* Honeypot — hidden from humans, irresistible to bots. */}
              <div aria-hidden="true" className="sr-only">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={e => setFormData({...formData, website: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" id="name" required placeholder="Full Name" className={inputClasses} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  {fieldErrors.name && <p className="mt-1.5 text-xs font-medium text-brand-navy">{fieldErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Corporate Email</label>
                  <input type="email" id="email" required placeholder="Corporate Email" className={inputClasses} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  {fieldErrors.email && <p className="mt-1.5 text-xs font-medium text-brand-navy">{fieldErrors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="company" className="sr-only">Company / Organization</label>
                <input type="text" id="company" placeholder="Company / Organization" className={inputClasses} value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Project Specifications</label>
                <textarea id="message" required rows={5} placeholder="Project Specifications & Requirements" className={`${inputClasses} resize-none`} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                {fieldErrors.message && <p className="mt-1.5 text-xs font-medium text-brand-navy">{fieldErrors.message}</p>}
              </div>

              {error && (
                <p role="alert" className="flex items-start gap-2 rounded-xl border border-brand-navy/25 bg-brand-navy-soft px-5 py-4 text-sm text-brand-ink">
                  <AlertCircle className="mt-0.5 w-4 h-4 shrink-0 text-brand-navy" aria-hidden="true" />
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-brand-navy text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-brand-navy-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>Sending <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /></>
                ) : (
                  <>Send enquiry <Send className="w-5 h-5" aria-hidden="true" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </Section>

    </div>
  );
}
