"use client";

import { motion } from "framer-motion";

export function AnimatedPipelineBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
      {/* Faint schematic grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,150,105,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(5,150,105,0.06)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)]" />

      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
        <defs>
          <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(5, 150, 105, 0)" />
            <stop offset="50%" stopColor="rgba(5, 150, 105, 0.9)" />
            <stop offset="100%" stopColor="rgba(5, 150, 105, 0)" />
          </linearGradient>
          <filter id="neonSubtle">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static Background Pipes */}
        <path d="M -100 150 L 300 150 L 300 400 L 800 400 L 800 200 L 1500 200" stroke="#cbd5e1" strokeWidth="8" fill="none" strokeLinejoin="round" />
        <path d="M 400 -100 L 400 300 L 900 300 L 900 600 L 1400 600" stroke="#cbd5e1" strokeWidth="6" fill="none" strokeLinejoin="round" />
        <path d="M -50 600 L 500 600 L 500 800 L 1200 800 L 1200 500" stroke="#cbd5e1" strokeWidth="10" fill="none" strokeLinejoin="round" />

        {/* Animated Gas Flow within Pipes */}
        <motion.path
          d="M -100 150 L 300 150 L 300 400 L 800 400 L 800 200 L 1500 200"
          stroke="url(#glowLine)"
          strokeWidth="4"
          fill="none"
          strokeLinejoin="round"
          filter="url(#neonSubtle)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M 400 -100 L 400 300 L 900 300 L 900 600 L 1400 600"
          stroke="url(#glowLine)"
          strokeWidth="3"
          fill="none"
          strokeLinejoin="round"
          filter="url(#neonSubtle)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
        />

        <motion.path
          d="M -50 600 L 500 600 L 500 800 L 1200 800 L 1200 500"
          stroke="url(#glowLine)"
          strokeWidth="5"
          fill="none"
          strokeLinejoin="round"
          filter="url(#neonSubtle)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2.5 }}
        />
      </svg>
    </div>
  );
}
