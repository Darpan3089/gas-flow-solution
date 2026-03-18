"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppCTA() {
  return (
    <motion.a
      href="https://wa.me/1234567890" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-brand-green text-white rounded-full shadow-lg hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-20" />
    </motion.a>
  );
}
