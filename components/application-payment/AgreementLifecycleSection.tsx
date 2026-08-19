"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LifecycleStep {
  number: string;
  title: string;
  description: string;
}

const lifecycleSteps: LifecycleStep[] = [
  {
    number: "01",
    title: "Draft",
    description:
      "Initial terms populated from the application and room record.",
  },
  {
    number: "02",
    title: "Proposed change",
    description: "Any edit creates a new, clearly diffed version.",
  },
  {
    number: "03",
    title: "Signature authority",
    description: "Named signer confirmed for each party and version.",
  },
  {
    number: "04",
    title: "Accepted / signed",
    description: "Final version locked, with full change history preserved.",
  },
  {
    number: "05",
    title: "Dispute / cancellation",
    description: "Handled as a governed exception, not a silent deletion.",
  },
];

export default function AgreementLifecycleSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            AGREEMENT LIFECYCLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Versioned from draft to signed
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
            Every proposed change creates a new version &mdash; nothing about a
            signed agreement changes silently.
          </p>
        </div>

        {/* Two Column Layout: Image Left, Step Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-[380px] sm:h-[460px] rounded-[2rem] overflow-hidden border border-[#EAE6DF] shadow-md"
            >
              <Image
                src="/images/application/image.png"
                alt="Agreement signing process"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column: Step Cards List */}
          <div className="lg:col-span-7 space-y-3">
            {lifecycleSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white/80 rounded-2xl p-4 sm:p-5 border border-[#EAE6DF] shadow-xs flex items-center gap-4 sm:gap-6"
              >
                {/* Step Number */}
                <span className="text-xs sm:text-sm font-mono font-bold text-[#DC2626] shrink-0 leading-tight">
                  {step.number}
                </span>

                {/* Content Block */}
                <div className="space-y-0.5">
                  <h3 className="text-sm font-serif font-bold text-[#14213D] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
