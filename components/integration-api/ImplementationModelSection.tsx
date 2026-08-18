"use client";

import React from "react";
import { motion } from "framer-motion";

interface ImplementationStage {
  title: string;
  description: string;
}

const stages: ImplementationStage[] = [
  {
    title: "Discover",
    description: "Purpose, owners, systems, and volumes.",
  },
  {
    title: "Architecture",
    description: "Pattern, environments, source rules.",
  },
  {
    title: "Design",
    description: "Mappings, validation, Action Review.",
  },
  {
    title: "Build",
    description: "Clients, credentials, dashboards.",
  },
  {
    title: "Validate",
    description: "Conformance, security, rollback tests.",
  },
  {
    title: "Pilot",
    description: "Controlled data, enhanced monitoring.",
  },
  {
    title: "Launch",
    description: "Production authorization, on-call.",
  },
];

export default function ImplementationModelSection() {
  return (
    <section className="w-full bg-[#EEDFC5] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
              IMPLEMENTATION MODEL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-medium max-w-3xl text-[#14213D] leading-tight">
            From first conversation to a governed, operating connection.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
            Every integration moves through the same nine stages &mdash; nothing
            skips discovery, and nothing launches without a tested exit.
          </p>
        </div>

        {/* Timeline Stepper Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative pt-6"
        >
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[29px] left-2 right-2 h-[1px] bg-[#EAE6DF] z-0" />

          {/* 7 Stages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-6 relative z-10">
            {stages.map((stage, idx) => (
              <div
                key={stage.title}
                className="space-y-3 flex flex-col justify-start"
              >
                {/* Timeline Dot */}
                <div className="relative flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#1A2E6E] inline-block shrink-0" />
                </div>

                {/* Stage Title & Description */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#14213D]">
                    {stage.title}
                  </h3>
                  <p className="text-[11px] text-[#555E68] leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
