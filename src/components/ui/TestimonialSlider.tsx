"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Gas Flow Solutions entirely redesigned our pressure architectures. Their execution was flawless, and the resulting efficiency saved us tremendous OPEX.",
    author: "Chief Engineer",
    company: "Manufacturing Plant"
  },
  {
    quote: "The most reliable telemetry integration we've experienced. Their team understands the critical nature of down-to-the-minute data accuracy.",
    author: "Operations Director",
    company: "Energy Utilities Pvt. Ltd."
  },
  {
    quote: "Absolute precision from schematics to commissioning. Their slam-shut valves and regulatory systems give us 100% operational confidence.",
    author: "Plant Head",
    company: "Petrochemicals Inc."
  }
];

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto text-center px-6">
      <Quote className="w-16 h-16 text-brand-green/20 mx-auto mb-8" />
      
      <div className="h-[200px] md:h-[150px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <blockquote className="text-xl md:text-3xl text-gray-300 font-light italic mb-8 leading-snug">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="text-brand-green font-bold uppercase tracking-widest text-sm">
              {testimonials[current].author}
              <span className="text-gray-500 font-medium mx-2">|</span>
              <span className="text-gray-400">{testimonials[current].company}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? "bg-brand-green w-6" : "bg-gray-700"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
