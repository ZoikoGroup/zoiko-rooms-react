"use client";

import React from "react";
import { motion } from "framer-motion";

interface PolicyRequirement {
  title: string;
  description: React.ReactNode;
}

const requirements: PolicyRequirement[] = [
  {
    title: "Identity",
    description: (
      <>
        Confirms the submitted subject matches an approved identity source or
        controlled account.{" "}
        <strong className="text-[#14213D] font-semibold">Not</strong> a
        character, safety, financial, or general trust judgment.
      </>
    ),
  },
  {
    title: "Organization relationship",
    description: (
      <>
        Confirms representative&ndash;provider&ndash;organization relationship
        and effective scope.{" "}
        <strong className="text-[#14213D] font-semibold">Does not</strong> prove
        property or room authority.
      </>
    ),
  },
  {
    title: "Provider / listing authority",
    description: (
      <>
        Confirms the provider may manage, publish, reserve, allocate, agree, or
        support the exact inventory.{" "}
        <strong className="text-[#14213D] font-semibold">Does not</strong> prove
        room facts or future availability.
      </>
    ),
  },
  {
    title: "Property / room evidence",
    description: (
      <>
        Confirms specified facts, documents, inspection results, source dates,
        and limitations.{" "}
        <strong className="text-[#14213D] font-semibold">No</strong> universal
        legal, safety, accessibility, or suitability certification.
      </>
    ),
  },
  {
    title: "Signing authority",
    description: (
      <>
        Confirms signer, party, document, version, amount/term limits, and
        effective period.{" "}
        <strong className="text-[#14213D] font-semibold">Not</strong> general
        organization administration.
      </>
    ),
  },
  {
    title: "Payment authority",
    description: (
      <>
        Confirms payer/payee, recipient, amount/action scope, route, and
        separation of duties.{" "}
        <strong className="text-[#14213D] font-semibold">Not</strong> financial
        advice or creditworthiness.
      </>
    ),
  },
  {
    title: "Data / admin authority",
    description: (
      <>
        Confirms tenant, role, scopes, purpose, environment, and access period.{" "}
        <strong className="text-[#14213D] font-semibold">Not</strong> underlying
        business authority.
      </>
    ),
  },
  {
    title: "Ongoing monitoring",
    description: (
      <>
        Detects expiry, changes, contradictions, incidents, source failure, or
        revocation.{" "}
        <strong className="text-[#14213D] font-semibold">Not</strong> continuous
        surveillance or permanent scoring.
      </>
    ),
  },
];

export default function PolicyRequirementsSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            03
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              Every requirement is a named, versioned, owned policy &mdash; not
              an ad hoc check.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
              Each requirement declares its entity, action, context, purpose,
              accepted evidence, freshness rules, decision owner, and exactly
              which permissions it affects.
            </p>
          </div>
        </div>

        {/* Requirements Table / List */}
        <div className="space-y-0 pl-0 sm:pl-10">
          {requirements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-5 border-b border-[#EAE6DF] text-xs sm:text-sm items-start"
            >
              {/* Requirement Title */}
              <div className="md:col-span-4">
                <h3 className="font-bold text-[#14213D] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Requirement Description */}
              <div className="md:col-span-8">
                <p className="text-[#555E68] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Callout Box & Action CTA */}
          <div className="pt-8 space-y-6">
            {/* Secure Evidence Collection Callout */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="border-l-2 border-[#B24A3B] pl-5 py-0.5 space-y-1.5"
            >
              <span className="text-[10px] font-bold tracking-widest text-[#B24A3B] uppercase block">
                SECURE EVIDENCE COLLECTION
              </span>
              <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-3xl">
                Purpose is shown before collection. Minimum fields are preferred
                over full documents where feasible. Uploads run through
                authenticated, encrypted, malware-scanned routes. Zoiko never
                asks for source-system, email, bank, or government-portal
                passwords.
              </p>
            </motion.div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                type="button"
                className="bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                Review the Evidence Record Contract
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
