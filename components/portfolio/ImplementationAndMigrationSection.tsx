"use client";

import React from "react";
import { motion } from "framer-motion";

interface MigrationPhase {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const migrationPhases: MigrationPhase[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Hierarchy, providers, sources, room counts and success criteria.",
    isActive: true,
  },
  {
    number: "02",
    title: "Inventory audit",
    description:
      "Duplicates, orphans, missing authority, stale or conflicting sources.",
    isActive: true,
  },
  {
    number: "03",
    title: "Model & map",
    description:
      "Canonical hierarchy, identifiers, Passport fields and source of truth.",
    isActive: true,
  },
  {
    number: "04",
    title: "Clean & prepare",
    description: "Correct duplicates, archive dead records, define unknowns.",
  },
  {
    number: "05",
    title: "Configure",
    description:
      "Tenant, roles, portfolios, fields, workflows and notifications.",
  },
  {
    number: "06",
    title: "Test migration",
    description:
      "Dry run, preview, and an evidence-backed test pass with rollback.",
  },
  {
    number: "07",
    title: "Pilot",
    description:
      "Limited portfolio and channels with enhanced monitoring and support.",
  },
  {
    number: "08",
    title: "Launch",
    description:
      "Controlled cutover or coexistence, with monitoring and support ready.",
  },
  {
    number: "09",
    title: "Operate",
    description:
      "Freshness, conflicts, exceptions, imports and reporting in a steady rhythm.",
  },
  {
    number: "10",
    title: "Renew / exit",
    description:
      "Reconfirm authority, roles, sources and obligations \u2014 no orphaned access.",
  },
];

export default function ImplementationAndMigrationSection() {
  return (
    <section className="w-full bg-[#EFE1D0] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            IMPLEMENTATION &amp; MIGRATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            From discovery to a governed operating rhythm.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl mx-auto">
            A ten-phase model moves a portfolio from spreadsheets and
            disconnected systems into one governed record, with a tested
            rollback path at every phase.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-xs border border-[#EAE6DF] bg-[#F5F2EC]"
          >
            <img
              src="/images/portfolio/last.png"
              alt="Person participating in a remote video consultation call on a laptop"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        {/* 10 Phases Timeline Grid (5 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto pt-2">
          {migrationPhases.map((phase, idx) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.025 }}
              className="space-y-3 flex flex-col justify-start"
            >
              {/* Top Accent Bar */}
              <div
                className={`h-0.5 w-full rounded-full ${
                  phase.isActive ? "bg-[#C8202C]" : "bg-[#E2DDD5]"
                }`}
              />

              {/* Step Details */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-[#C8202C] block">
                  {phase.number}
                </span>
                <h3 className="text-sm font-serif font-bold text-[#14213D]">
                  {phase.title}
                </h3>
                <p className="text-[11px] text-[#555E68] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-4">
          <button
            type="button"
            className="hover:bg-[#E5D5C2] text-[#1B2A4A] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95"
          >
            Start a Discovery Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
