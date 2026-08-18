"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const lifecycleSteps: StepItem[] = [
  {
    number: "01",
    title: "Design",
    description: "Program record, models, responsibility map.",
  },
  {
    number: "02",
    title: "Configure",
    description: "Audience, criteria, catalog, quotas, roles.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Invitations, catalog visibility, funding live.",
  },
  {
    number: "04",
    title: "Operate",
    description: "Allocations, exceptions, reporting, service.",
  },
  {
    number: "05",
    title: "Review / close",
    description: "Renew, change, or close with no orphaned case.",
  },
];

export default function ProgramLifecycleSection() {
  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            PROGRAM LIFECYCLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            A governed path from design to closure
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl mx-auto">
            No program moves forward with unsupported authority, excess data,
            stale supply, or an unresolved material change.
          </p>
        </div>

        {/* 5 Columns Sequential Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pt-2">
          {lifecycleSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="space-y-3 text-left"
            >
              {/* Step Number */}
              <span className="text-sm font-bold text-[#C8202C] block">
                {step.number}
              </span>

              {/* Step Title & Description */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#14213D]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#555E68] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
