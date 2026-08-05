"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const incrementTime = (duration / value) * 5;

      const timer = setInterval(() => {
        start += Math.ceil(value / 30) || 1;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-brand-ink tracking-tighter">
      {count}<span className="text-brand-green">{suffix}</span>
    </div>
  );
}

export function StatsBar() {
  const stats = [
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 20, suffix: "+", label: "Enterprise Clients" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Safety Record" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-6 z-30 hidden md:block"
    >
      <div className="border border-brand-border rounded-none shadow-[0_20px_50px_rgba(15,23,42,0.08)] grid grid-cols-4 divide-x divide-brand-border overflow-hidden">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-8 text-center bg-white/90 backdrop-blur-xl hover:bg-brand-green-soft transition-colors duration-500">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            <div className="text-xs text-brand-subtle font-bold uppercase tracking-widest mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
