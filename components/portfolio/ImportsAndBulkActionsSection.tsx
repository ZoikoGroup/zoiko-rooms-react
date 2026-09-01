"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepCard {
  number: string;
  title: string;
  description: string;
}

const workflowSteps: StepCard[] = [
  {
    number: "01",
    title: "Prepare",
    description:
      "Template/schema version, field definitions, and required fields.",
  },
  {
    number: "02",
    title: "Upload & parse",
    description:
      "Secure channel, checksum, encoding and referential-integrity validation.",
  },
  {
    number: "03",
    title: "Map & match",
    description:
      "Source fields to canonical objects; stable identifiers first, no unsafe fuzzy merge.",
  },
  {
    number: "04",
    title: "Preview",
    description:
      "Create/update/merge/archive counts and conflicts \u2014 no commit yet.",
  },
  {
    number: "05",
    title: "Action Review",
    description:
      "Required for material price, availability, identity, authority or high-volume changes.",
  },
  {
    number: "06",
    title: "Commit",
    description: "Idempotent job, batch ID, atomicity and concurrency control.",
  },
  {
    number: "07",
    title: "Partial failure",
    description:
      "Successful and failed records separated with a clear retry path.",
  },
  {
    number: "08",
    title: "Notify & reconcile",
    description:
      "Affected operators, providers, and channels informed; delivery compared.",
  },
  {
    number: "09",
    title: "Rollback",
    description:
      "Revert safe changes or run controlled compensating actions with full audit.",
  },
  {
    number: "10",
    title: "Audit trail",
    description: "Every batch, actor and outcome preserved for review.",
  },
];

interface BulkActionRiskCard {
  title: string;
  risk: string;
}

const bulkActionCards: BulkActionRiskCard[] = [
  {
    title: "Create rooms",
    risk: "duplicate identity, missing authority, incomplete Passport, unintended publication.",
  },
  {
    title: "Update availability",
    risk: "overbooking, missing holds/agreements, stale source, channel conflict.",
  },
  {
    title: "Change prices / fees",
    risk: "participant impact, wrong currency/period, incomplete totals.",
  },
  {
    title: "Publish / unpublish",
    risk: "unauthorized channel/audience, missing evidence, stale cache.",
  },
  {
    title: "Merge / split rooms",
    risk: "identity/history, agreements, payments and analytics references.",
  },
  {
    title: "Restrict / restore",
    risk: "safety/privacy/authority, with reviewer and restoration test.",
  },
];

export default function ImportsAndBulkActionsSection() {
  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            IMPORTS &amp; BULK ACTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[30px] font-serif font-bold text-[#14213D] leading-tight">
            Validate, preview, review, commit &mdash; and roll back safely.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl mx-auto">
            Partial failure is always visible. Imports and bulk actions isolate
            failed records and never report full success when some items did not
            change.
          </p>
        </div>

        {/* 10 Step Grid (5x2 layout on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto pt-2">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.025 }}
              className="bg-white rounded-2xl p-5 border border-[#EAE6DF] shadow-xs space-y-2 flex flex-col justify-start"
            >
              <span className="text-xs font-bold text-[#C8202C] block">
                {step.number}
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-serif font-bold text-[#14213D]">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#555E68] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6 Risk Action Cards Grid (3x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto pt-2">
          {bulkActionCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs space-y-1.5 flex flex-col justify-start"
            >
              <h3 className="text-sm font-serif font-bold text-[#14213D]">
                {card.title}
              </h3>
              <p className="text-xs text-[#555E68] leading-relaxed">
                <span className="font-semibold text-[#14213D]">Risk:</span>{" "}
                {card.risk}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="/contact-us"
            className="hover:bg-[#E5D5C2] text-[#1B2A4A] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95 inline-flex items-center justify-center"
          >
            Explore Bulk Operations
          </a>
        </div>
      </div>
    </section>
  );
}
