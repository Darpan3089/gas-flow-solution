"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const inputClasses = "w-full bg-brand-dark/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all";

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark pt-32 pb-20">
      
      <Section className="!py-0">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Initiate a <span className="text-brand-orange">Consultation</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-gray-400"
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
              <h3 className="text-2xl font-bold text-white mb-8">Global Headquarters</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-brand-orange text-sm font-semibold uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-gray-300">123 Industrial Ave, Tech District<br/>CityCorp Sector, 90210</p>
                </div>
                <div>
                  <h4 className="text-brand-green text-sm font-semibold uppercase tracking-wider mb-2">Direct Line</h4>
                  <p className="text-gray-300 text-lg">+1 (800) 555-FLOW</p>
                </div>
                <div>
                  <h4 className="text-brand-orange text-sm font-semibold uppercase tracking-wider mb-2">Technical Support</h4>
                  <p className="text-gray-300">engineering@gasflow.com</p>
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
                  className="absolute inset-0 bg-brand-dark/95 backdrop-blur z-10 flex flex-col items-center justify-center text-center p-8"
                >
                  <CheckCircle2 className="w-20 h-20 text-brand-green mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">Request Received</h3>
                  <p className="text-gray-300">An engineering consultant will contact you within 24 operational hours.</p>
                </motion.div>
             )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" id="name" required placeholder="Full Name" className={inputClasses} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Corporate Email</label>
                  <input type="email" id="email" required placeholder="Corporate Email" className={inputClasses} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="sr-only">Company / Organization</label>
                <input type="text" id="company" placeholder="Company / Organization" className={inputClasses} value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Project Specifications</label>
                <textarea id="message" required rows={5} placeholder="Project Specifications & Requirements" className={`${inputClasses} resize-none`} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
              </div>
              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-brand-orange text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-orange-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>Processing <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><AlertCircle className="w-5 h-5" /></motion.span></>
                ) : (
                  <>Submit Inquiry <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </Section>

    </div>
  );
}
