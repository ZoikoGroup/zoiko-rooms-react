"use client";

import React from "react";
import { motion } from "framer-motion";

interface ControlRow {
  area: string;
  requiredControl: string;
}

export default function SafetyControlsSection() {
  const controlsData: ControlRow[] = [
    {
      area: "Institutional branding",
      requiredControl:
        "Current relationship and display authority \u2014 no fake university, employer, or public-sector endorsement",
    },
    {
      area: "Invitations and cohorts",
      requiredControl:
        "Signed/current invitation source, purpose, audience, expiry, and identity match",
    },
    {
      area: "Eligibility / allocations",
      requiredControl:
        "Declared criteria, human owner, participant alternatives, and no hidden sensitive inference",
    },
    {
      area: "Funding / direct billing",
      requiredControl:
        "Current payer/payee, coverage, participant responsibility, and change controls",
    },
    {
      area: "Integrations",
      requiredControl:
        "Approved authorization, minimum scopes, secrets, monitoring, and revocation",
    },
    {
      area: "Insider misuse",
      requiredControl:
        "Least privilege, elevated-access control, separation of duties, and access review",
    },
  ];

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <h2 className="text-2xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight">
            Organizations and Zoiko Rooms Pro safety controls
          </h2>
        </div>

        {/* Structured Table Layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full overflow-x-auto"
        >
          <table className="w-full border-collapse text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-[#EAE6DF]">
                <th className="py-3 px-2 text-[10px] font-bold tracking-wider text-[#7A838E] uppercase w-1/3">
                  AREA
                </th>
                <th className="py-3 px-2 text-[10px] font-bold tracking-wider text-[#7A838E] uppercase w-2/3">
                  REQUIRED CONTROL
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE6DF]">
              {controlsData.map((row) => (
                <tr
                  key={row.area}
                  className="hover:bg-white/40 transition-colors duration-150"
                >
                  <td className="py-4 px-2 text-xs sm:text-sm font-semibold text-[#14213D] align-top pr-6">
                    {row.area}
                  </td>
                  <td className="py-4 px-2 text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed align-top">
                    {row.requiredControl}
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
