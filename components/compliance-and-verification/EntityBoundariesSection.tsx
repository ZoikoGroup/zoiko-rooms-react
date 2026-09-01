"use client";

import React from "react";
import { motion } from "framer-motion";

interface EntityRow {
  entity: string;
  mayBeVerified: string;
  mustRemainSeparate: string;
}

const entityData: EntityRow[] = [
  {
    entity: "Organization",
    mayBeVerified:
      "Legal/operating identity, approved name, current existence/status source, relationship, program, billing or data role.",
    mustRemainSeparate:
      "Representative authority, provider authority, room authority, payment authority, compliance in every jurisdiction.",
  },
  {
    entity: "Representative",
    mayBeVerified:
      "Identity match, organization relationship, role, permitted actions, effective period, delegation, signer/admin status.",
    mustRemainSeparate:
      "Organization identity and authority over property, room, payment, or data.",
  },
  {
    entity: "Provider",
    mayBeVerified:
      "Identity, business/individual type, relationship to property/room, listing/management authority, contact and service role.",
    mustRemainSeparate:
      "Property ownership, room facts, availability, safety, financial stability, endorsement.",
  },
  {
    entity: "Property",
    mayBeVerified:
      "Canonical identity, relationship to provider, evidence set, address/access controls, permitted uses or required facts.",
    mustRemainSeparate:
      "Room availability, condition, suitability, occupancy, pricing, universal legal compliance.",
  },
  {
    entity: "Room / bed",
    mayBeVerified:
      "Canonical identity, provider authority, Room Passport evidence, facts, availability, restrictions, source and freshness.",
    mustRemainSeparate:
      "Property-wide status, participant suitability, guaranteed safety, future availability.",
  },
  {
    entity: "Signer",
    mayBeVerified:
      "Identity, party, document/version, signing scope, effective authority, limitations and expiry.",
    mustRemainSeparate:
      "General administration, payment, publishing, or provider authority.",
  },
  {
    entity: "Payer / payee",
    mayBeVerified:
      "Billing entity, payment recipient, bank/payment route ownership under approved process, amount/action scope.",
    mustRemainSeparate:
      "Agreement authority, room authority, financial health or general identity assurance.",
  },
  {
    entity: "Administrator / integration",
    mayBeVerified:
      "Tenant, role, scopes, environment, source systems, read/write actions, review and revocation.",
    mustRemainSeparate:
      "Underlying business truth or permission beyond granted scopes.",
  },
];

export default function EntityBoundariesSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            02
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              Ten entity types, each with its own verifiable boundary.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl">
              What can be confirmed for an entity is deliberately narrow &mdash;
              and what must remain a separate status is stated just as clearly.
            </p>
          </div>
        </div>

        {/* Rows Breakdown */}
        <div className="space-y-0 pl-0 sm:pl-10">
          {entityData.map((row, idx) => (
            <motion.div
              key={row.entity}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-[#EAE6DF] text-xs sm:text-sm"
            >
              {/* Entity Title */}
              <div className="md:col-span-3">
                <h3 className="font-bold text-[#14213D] leading-snug">
                  {row.entity}
                </h3>
              </div>

              {/* May Be Verified */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  MAY BE VERIFIED
                </span>
                <p className="text-[#555E68] leading-relaxed">
                  {row.mayBeVerified}
                </p>
              </div>

              {/* Must Remain Separate */}
              <div className="md:col-span-5 space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  MUST REMAIN SEPARATE
                </span>
                <p className="text-[#555E68] leading-relaxed">
                  {row.mustRemainSeparate}
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
              See the Full Verification Taxonomy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
