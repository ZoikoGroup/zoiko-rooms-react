"use client";

import React from "react";
import { motion } from "framer-motion";

interface SupportRow {
  domain: string;
  commonIssues: string;
  route: string;
}

export default function OrganizationsProSupportSection() {
  const supportData: SupportRow[] = [
    {
      domain: "Universities",
      commonIssues:
        "Referral, eligibility, allocation, contribution, term dates",
      route: "University program owner + Zoiko organization support",
    },
    {
      domain: "Employers",
      commonIssues: "Invitation, allowance, direct billing, assignment change",
      route: "Employer/mobility owner + Zoiko organization support",
    },
    {
      domain: "Healthcare",
      commonIssues: "Workforce access, dates, funding \u2014 no clinical data",
      route: "Healthcare workforce owner + Zoiko support",
    },
    {
      domain: "Relocation & Mobility",
      commonIssues: "Case owner, shortlist, handoff, funding, closure",
      route: "Mobility owner + Zoiko support",
    },
    {
      domain: "Portfolio & Availability",
      commonIssues:
        "Hierarchy, Room Passport, availability, import, publishing",
      route: "Pro Operations",
    },
    {
      domain: "Integrations & API",
      commonIssues: "Connection, authorization, mapping, webhook, error",
      route: "Integration Support / Security",
    },
  ];

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <h2 className="text-2xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Organizations and Zoiko Rooms Pro support
          </h2>
        </div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full overflow-x-auto"
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#EAE6DF]">
                <th className="py-3 px-2 text-[10px] font-bold tracking-wider text-[#7A838E] uppercase w-1/5">
                  DOMAIN
                </th>
                <th className="py-3 px-2 text-[10px] font-bold tracking-wider text-[#7A838E] uppercase w-2/5">
                  COMMON ISSUES
                </th>
                <th className="py-3 px-2 text-[10px] font-bold tracking-wider text-[#7A838E] uppercase w-2/5">
                  ROUTE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE6DF]">
              {supportData.map((row) => (
                <tr
                  key={row.domain}
                  className="hover:bg-white/40 transition-colors duration-150"
                >
                  <td className="py-4 px-2 text-xs sm:text-sm font-semibold text-[#14213D] align-top pr-4">
                    {row.domain}
                  </td>
                  <td className="py-4 px-2 text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed align-top pr-6">
                    {row.commonIssues}
                  </td>
                  <td className="py-4 px-2 text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed align-top">
                    {row.route}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
