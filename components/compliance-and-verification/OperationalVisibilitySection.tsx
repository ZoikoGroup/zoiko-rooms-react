"use client";

import React from "react";
import { motion } from "framer-motion";

interface MetricCard {
  title: string;
  description: string;
}

const metricCards: MetricCard[] = [
  {
    title: "Requirement health",
    description: "Active versions, owners, reviews due, gaps.",
  },
  {
    title: "Verification pipeline",
    description:
      "Not started \u2192 pending \u2192 verified \u2192 expired counts.",
  },
  {
    title: "Expiry / renewal",
    description: "Due windows, affected actions, backlog.",
  },
  {
    title: "Evidence quality",
    description: "Source coverage, freshness, conflicts, duplicates.",
  },
  {
    title: "Authority health",
    description: "Organizations, representatives, providers, signers.",
  },
  {
    title: "Room / property impact",
    description: "Listings and agreements affected by status.",
  },
  {
    title: "Incidents / disputes",
    description: "Open severity, restrictions, owner, age, outcome.",
  },
  {
    title: "Access / export",
    description: "Elevated roles, sensitive views, revocations.",
  },
  {
    title: "Integrations",
    description: "Source freshness, errors, quarantines, reconciliation.",
  },
  {
    title: "Fairness / accessibility",
    description: "Requirement burden, alternatives, support usage.",
  },
];

export default function OperationalVisibilitySection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            09
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] max-w-250 leading-tight">
              Operational visibility, without turning people into scores.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
              The dashboard reports pipeline health, expiry, evidence quality,
              and incidents &mdash; never a global trustworthiness or
              participant risk score.
            </p>
          </div>
        </div>

        {/* Dashboard Grid Container */}
        <div className="pl-0 sm:pl-10 space-y-8">
          <div className="bg-[#FAF8F5] border border-[#EAE6DF] rounded-2xl overflow-hidden divide-y md:divide-y-0 divide-[#EAE6DF] shadow-xs">
            {/* Grid 5-columns on desktop, 2-columns on tablet, 1-column on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE6DF]">
              {metricCards.slice(0, 5).map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="p-5 sm:p-6 space-y-2 min-h-[140px]"
                >
                  <h3 className="font-bold text-[#14213D] text-xs sm:text-sm leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#555E68] leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Row Divider for Desktop */}
            <div className="hidden md:block w-full h-[1px] bg-[#EAE6DF]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE6DF]">
              {metricCards.slice(5, 10).map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: (idx + 5) * 0.03 }}
                  className="p-5 sm:p-6 space-y-2 min-h-[140px]"
                >
                  <h3 className="font-bold text-[#14213D] text-xs sm:text-sm leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#555E68] leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Permitted vs Prohibited Callout */}
          <div className="space-y-6 pt-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="border-l-2 border-[#B24A3B] pl-5 py-0.5 space-y-1.5"
            >
              <span className="text-[10px] font-bold tracking-widest text-[#B24A3B] uppercase block">
                PERMITTED VS. PROHIBITED
              </span>
              <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-3xl">
                <strong className="text-[#14213D] font-bold">Permitted:</strong>{" "}
                requirement completion, expiry rates, reviewer workload,
                incident categories in aggregate.{" "}
                <strong className="text-[#14213D] font-bold">
                  Prohibited:
                </strong>{" "}
                global trustworthiness scores, character/intent inference,
                employee productivity ranking, protected-trait profiling.
              </p>
            </motion.div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                type="button"
                className="bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                See the Full Reporting Boundary
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
