"use client";

import { motion } from "framer-motion";
import { Gauge, Flame, Settings2, Activity } from "lucide-react";

export function InteractiveFlowSimulation() {
  const steps = [
    { id: 1, title: "High Pressure Intake", icon: Gauge, detail: "City Gas Station / Pipeline" },
    { id: 2, title: "Active/Monitor Regulation", icon: Settings2, detail: "Safeguard Pressure Drop" },
    { id: 3, title: "Precision Metering", icon: Activity, detail: "Volumetric Flow Logging" },
    { id: 4, title: "Plant Output", icon: Flame, detail: "Burner/Furnace Feed" }
  ];

  return (
    <div className="w-full relative py-12">
      {/* Simulation Container */}
      <div className="glass-green rounded-3xl p-8 relative overflow-hidden">
        {/* Animated particle flow in background */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 z-0">
          <motion.div
            className="h-full w-24 bg-gradient-to-r from-transparent via-brand-green to-transparent blur-sm shadow-[0_0_15px_rgba(57,255,20,0.8)]"
            animate={{ x: ["-100%", "800%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-dark/80 backdrop-blur-md rounded-xl p-6 border border-gray-700 flex flex-col items-center text-center relative group hover:border-brand-green transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors border border-gray-800 group-hover:border-brand-green/50">
                <step.icon className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white font-bold mb-2">{step.title}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest">{step.detail}</p>

              {/* Connector dots for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-4 text-brand-green">
                  ↓
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
