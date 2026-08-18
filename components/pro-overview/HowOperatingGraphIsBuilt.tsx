"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Establish scope",
    description:
      "Organizations, portfolios, properties, rooms, markets, programs, roles, systems, and outcomes.",
  },
  {
    number: "02",
    title: "Confirm authority",
    description:
      "Provider, manager, representative, inventory, signer, payment, decision, and integration authority.",
  },
  {
    number: "03",
    title: "Build records",
    description:
      "Canonical Room Passports, availability, complete costs, policies, evidence, sources, and dates.",
  },
  {
    number: "04",
    title: "Configure workflows",
    description:
      "Applications, decisions, reservations, agreements, payments, distribution, support, and exceptions.",
  },
  {
    number: "05",
    title: "Connect systems",
    description:
      "Approved identities, portfolio, availability, finance, organization, support, and reporting systems.",
  },
  {
    number: "06",
    title: "Operate with review",
    description:
      "Queues, ownership, service levels, action review, separation of duties, and auditable changes.",
  },
  {
    number: "07",
    title: "Measure governed outcomes",
    description:
      "Availability, data quality, applications, agreements, payments, service, exceptions, and access.",
  },
  {
    number: "08",
    title: "Reconfirm or close",
    description:
      "Authority, roles, rooms, relationships, connections, retention, open money, and unresolved cases.",
  },
];

export default function HowOperatingGraphIsBuilt() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            HOW THE OPERATING GRAPH IS BUILT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#14213D] leading-tight">
            From scope to reconfirmation, <br /> every step keeps ownership explicit
          </h2>
        </div>

        {/* 8 Steps Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 pt-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="space-y-2 flex flex-col justify-start"
            >
              {/* Step Number */}
              <span className="text-xs font-mono font-bold text-[#DC2626]">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-base font-serif font-bold text-[#14213D] leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
