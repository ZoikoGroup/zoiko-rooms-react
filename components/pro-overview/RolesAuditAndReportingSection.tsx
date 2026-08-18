"use client";

import React from "react";
import { motion } from "framer-motion";

interface RoleCard {
  title: string;
  description: string;
}

const roles: RoleCard[] = [
  {
    title: "Organization owner",
    description:
      "Account configuration and approved markets \u2014 not unrestricted participant or payment access.",
  },
  {
    title: "Portfolio administrator",
    description:
      "Portfolios, properties, rooms, and operations \u2014 not signer or payment authority.",
  },
  {
    title: "Compliance reviewer",
    description:
      "Identity, authority, and evidence review \u2014 not payment execution.",
  },
  {
    title: "Decision owner",
    description:
      "Named application, allocation, or exception decisions under approved criteria.",
  },
  {
    title: "Authorized signer",
    description: "Signs an exact agreement version for a named legal party.",
  },
  {
    title: "Payment approver",
    description:
      "Approves or executes charges under limits \u2014 never self-approval.",
  },
  {
    title: "Integration administrator",
    description:
      "Connections, scopes, and monitoring \u2014 not business decisions.",
  },
  {
    title: "Auditor / read-only",
    description:
      "Approved records, evidence, and reports \u2014 no operational writes.",
  },
];

export default function RolesAuditAndReportingSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
            ROLES, AUDIT &amp; REPORTING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#14213D] leading-tight">
            Authority before capability &mdash; for every role, every time
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
            No user, system, automation, organization, or partner can act beyond
            their current identity, role, object, program, market, and time
            scope.
          </p>
        </div>

        {/* Decorative Divider Bar */}
        <div className="w-full h-2.5 bg-[#FAF3E8]/80 rounded-full border border-[#EAE2D8]" />

        {/* 8 Roles Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-5 border border-[#EAE6DF] shadow-xs flex flex-col justify-start space-y-1.5"
            >
              <h3 className="text-xs font-serif font-bold text-[#14213D] leading-snug">
                {role.title}
              </h3>
              <p className="text-[11px] text-[#555E68] leading-relaxed font-normal">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
