"use client";

import React from "react";
import { motion } from "framer-motion";

interface GovernanceRoleRow {
  role: string;
  permittedActions: string;
  exclusions: string;
}

const governanceRoles: GovernanceRoleRow[] = [
  {
    role: "Portfolio owner",
    permittedActions:
      "Approve hierarchy, operating model, role assignments, major changes and closure.",
    exclusions: "No automatic payment, compliance, or record-edit authority.",
  },
  {
    role: "Portfolio administrator",
    permittedActions:
      "Create/manage portfolios, properties, rooms, assignments and configuration.",
    exclusions:
      "No self-approval of high-risk authority, pricing, publication, or deletion.",
  },
  {
    role: "Property / room editor",
    permittedActions:
      "Edit scoped room facts, media, availability, restrictions and maintenance.",
    exclusions:
      "No provider authority, global publishing, payment, or role changes.",
  },
  {
    role: "Availability operator",
    permittedActions:
      "Create/confirm holds, blocks, release, capacity and date changes within scope.",
    exclusions: "No agreement override or unreviewed conflicting commitment.",
  },
  {
    role: "Pricing operator",
    permittedActions:
      "Propose rent, fees, bills, discounts and effective dates.",
    exclusions: "No self-approval of material change or agreement rewrite.",
  },
  {
    role: "Publisher / distributor",
    permittedActions:
      "Preview and release approved records to authorized channels/audiences.",
    exclusions: "No source-record or authority override.",
  },
  {
    role: "Maintenance operator",
    permittedActions:
      "Create issues, restrict affected actions, coordinate tasks, propose restoration.",
    exclusions:
      "No self-certification of high-risk restoration where review is required.",
  },
  {
    role: "Importer / integration operator",
    permittedActions:
      "Run approved mappings, imports, syncs, retries and reconciliation.",
    exclusions: "No scope expansion, unsafe merge, or bypass of Action Review.",
  },
  {
    role: "Reviewer / approver",
    permittedActions:
      "Review consequential changes within an assigned domain and limit.",
    exclusions: "Cannot approve its own high-risk change.",
  },
  {
    role: "Auditor / support / privacy",
    permittedActions:
      "View authorized evidence, audit, incidents and cases by purpose.",
    exclusions: "No unrelated editing or broad participant access.",
  },
];

export default function RolesAndActionReviewSection() {
  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            ROLES &amp; ACTION REVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Separation of duties on every consequential change.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl mx-auto">
            No single role can approve its own high-risk change. Publishing,
            pricing, availability, provider changes, and archival actions route
            through an accountable reviewer.
          </p>
        </div>

        {/* Feature Split - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Left Column Image */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative w-full rounded-3xl overflow-hidden shadow-[0_4px_12px_#1B2A4A29] border border-[#EAE6DF] bg-[#F5F2EC]"
            >
              <img
                src="/images/portfolio/image.png"
                alt="Smiling person sitting next to luggage in a cozy living area"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="text-xl sm:text-2xl font-serif max-w-80 font-bold text-[#14213D] leading-snug">
              Accountability stays visible, not implied.
            </h3>
            <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-xl">
              Every consequential action names its actor, its scope, and the
              reviewer who signed off &mdash; so nothing high-risk moves on one
              person&apos;s judgment alone.
            </p>
          </div>
        </div>

        {/* Governance Roles Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-[#EAE6DF] shadow-xs overflow-hidden max-w-6xl mx-auto"
        >
          {/* Table Header */}
          <div className="bg-[#1C2C5E] text-white px-6 py-3.5 grid grid-cols-1 md:grid-cols-12 gap-4 text-[11px] font-bold tracking-wider uppercase">
            <div className="md:col-span-3">ROLE</div>
            <div className="md:col-span-5">TYPICAL PERMITTED ACTIONS</div>
            <div className="md:col-span-4">EXPLICIT EXCLUSIONS</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EAE6DF]">
            {governanceRoles.map((row) => (
              <div
                key={row.role}
                className="px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center text-xs"
              >
                <div className="md:col-span-3 font-bold text-[#14213D]">
                  {row.role}
                </div>
                <div className="md:col-span-5 text-[#555E68] leading-relaxed">
                  {row.permittedActions}
                </div>
                <div className="md:col-span-4 text-[#C8202C] leading-relaxed">
                  {row.exclusions}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="/pro/compliance-and-verification"
            className="hover:bg-[#E5D5C2] text-[#1B2A4A] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95 inline-flex items-center justify-center"
          >
            Review Governance
          </a>
        </div>
      </div>
    </section>
  );
}
