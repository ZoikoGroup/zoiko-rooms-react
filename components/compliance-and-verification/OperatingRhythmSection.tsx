"use client";

import React from "react";
import { motion } from "framer-motion";

interface OperatingPhase {
  number: string;
  title: string;
  description: string;
}

const phases: OperatingPhase[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Entities, actions, requirements, sources, roles, volumes, risks.",
  },
  {
    number: "02",
    title: "Policy design",
    description:
      "Registry, evidence alternatives, statuses, reasons, permissions.",
  },
  {
    number: "03",
    title: "Data / process audit",
    description:
      "Existing subjects, decisions, expiries, duplicates, conflicts.",
  },
  {
    number: "04",
    title: "Configure",
    description: "Tenant, roles, requirements, evidence schemas, queues.",
  },
  {
    number: "05",
    title: "Migrate / validate",
    description: "Map subjects, evidence, statuses — no unproven migration.",
  },
  {
    number: "06",
    title: "Pilot",
    description: "Limited scope, enhanced review, fairness testing, rollback.",
  },
  {
    number: "07",
    title: "Launch",
    description: "Current requirements, reviewers, support, monitoring ready.",
  },
  {
    number: "08",
    title: "Operate",
    description:
      "Quality sampling, renewal, incidents, fairness, integrations.",
  },
  {
    number: "09",
    title: "Renew / exit",
    description: "Close requirements cleanly — no orphaned status or access.",
  },
];

export default function OperatingRhythmSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            11
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              From policy design to a governed operating rhythm.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
              A nine-phase model moves your verification program from discovery
              through pilot to steady-state operation, with a tested rollback
              path throughout.
            </p>
          </div>
        </div>

        {/* 9-Phase Grid */}
        <div className="pl-0 sm:pl-10 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="space-y-2 border-t border-[#EAE6DF] pt-4"
              >
                <span className="text-xs font-bold text-[#B24A3B] block">
                  {phase.number}
                </span>
                <h3 className="font-bold text-[#14213D] text-sm leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs text-[#555E68] leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-4">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              Request the Procurement &amp; Assurance Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
