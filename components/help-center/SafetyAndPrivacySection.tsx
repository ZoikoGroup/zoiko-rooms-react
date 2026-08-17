"use client";

import React from "react";
import { motion } from "framer-motion";

interface SafetyRow {
  scenario: string;
  immediateAction: string;
  supportRoute: string;
}

export default function SafetyAndPrivacySection() {
  const safetyData: SafetyRow[] = [
    {
      scenario: "Payment redirection / unknown recipient",
      immediateAction:
        "Don't pay; verify current recipient in your account; secure your account",
      supportRoute: "Payments + Trust & Safety",
    },
    {
      scenario: "Credential / one-time-code request",
      immediateAction:
        "Don't share; end contact; reset credentials; revoke sessions",
      supportRoute: "Identity/Security + Trust & Safety",
    },
    {
      scenario: "False listing / unauthorized room",
      immediateAction:
        "Stop the transaction; preserve messages; report the exact record",
      supportRoute: "Trust & Safety + Provider Operations",
    },
    {
      scenario: "Unsafe viewing / access",
      immediateAction:
        "Leave or avoid the location; contact a trusted person or local emergency help",
      supportRoute: "Trust & Safety; external emergency services",
    },
    {
      scenario: "Harassment / discrimination",
      immediateAction:
        "Stop contact where safe; preserve evidence; block/report",
      supportRoute: "Trust & Safety; fairness/privacy owner",
    },
    {
      scenario: "Immediate danger",
      immediateAction: "Use local emergency services",
      supportRoute:
        "External emergency services; a Zoiko case may follow but is not emergency response",
    },
  ];

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <h2 className="text-2xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Safety and privacy
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
          <table className="w-full border-collapse text-left min-w-[640px]">
            <thead>
              <tr className="border-b border-[#EAE6DF]">
                <th className="py-3 px-2 text-[10px] font-bold tracking-wider text-[#7A838E] uppercase w-1/5">
                  SCENARIO
                </th>
                <th className="py-3 px-2 text-[10px] font-bold tracking-wider text-[#7A838E] uppercase w-2/5">
                  IMMEDIATE ACTION
                </th>
                <th className="py-3 px-2 text-[10px] font-bold tracking-wider text-[#7A838E] uppercase w-2/5">
                  SUPPORT ROUTE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE6DF]">
              {safetyData.map((row) => (
                <tr
                  key={row.scenario}
                  className="hover:bg-white/40 transition-colors duration-150"
                >
                  <td className="py-4 px-2 text-xs sm:text-sm font-semibold text-[#14213D] align-top pr-4">
                    {row.scenario}
                  </td>
                  <td className="py-4 px-2 text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed align-top pr-6">
                    {row.immediateAction}
                  </td>
                  <td className="py-4 px-2 text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed align-top">
                    {row.supportRoute}
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
