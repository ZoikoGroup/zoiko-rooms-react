"use client";

import React from "react";
import { motion } from "framer-motion";

interface IntegrationRow {
  title: string;
  description: string;
}

const integrationData: IntegrationRow[] = [
  {
    title: "Approved sources",
    description:
      "Identity, organization/provider, property/room, licensing/registration, document, payment-recipient, policy, case, or support source categories only.",
  },
  {
    title: "Authorization",
    description:
      "Named source owner, service identity, minimum scopes, environment, effective period, review, and revocation.",
  },
  {
    title: "Provenance",
    description:
      "Every imported field retains source system, source record, retrieval time, effective date, and confidence where applicable.",
  },
  {
    title: "Freshness",
    description:
      "Sync cadence, source timestamps, stale thresholds, failure state, dependent action effect, and owner.",
  },
  {
    title: "Writes",
    description:
      "Authorized system of record, human review for consequential changes, idempotency, version/conflict checks, rollback.",
  },
  {
    title: "Decision boundary",
    description:
      "An integration can deliver evidence/status but cannot silently become the final decision owner unless explicitly designed and approved with human oversight.",
  },
];

export default function IntegrationDecisionSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            10
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              An integration can deliver evidence. It cannot silently become the
              decision.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
              Approved sources, scoped authorization, stable identifiers, and
              full provenance &mdash; with a human decision owner unless
              explicitly designed and approved otherwise.
            </p>
          </div>
        </div>

        {/* Rows Breakdown */}
        <div className="space-y-0 pl-0 sm:pl-10">
          {integrationData.map((row, idx) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-5 border-b border-[#EAE6DF] text-xs sm:text-sm items-start"
            >
              {/* Row Title */}
              <div className="md:col-span-4">
                <h3 className="font-bold text-[#14213D] leading-snug">
                  {row.title}
                </h3>
              </div>

              {/* Row Description */}
              <div className="md:col-span-8">
                <p className="text-[#555E68] leading-relaxed">
                  {row.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Action CTA */}
          <div className="pt-8">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              See Source Conflict &amp; Precedence Rules
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
