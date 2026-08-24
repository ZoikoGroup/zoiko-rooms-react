"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface ObjectIdentifierRow {
  object: string;
  canonicalRequirement: string;
  externalMapping: string;
}

const tableData: ObjectIdentifierRow[] = [
  {
    object: "Organization / tenant",
    canonicalRequirement:
      "Stable ID, legal/display identity, status, environment, roles.",
    externalMapping:
      "External org ID, source, effective dates, merge/split history.",
  },
  {
    object: "Person / account",
    canonicalRequirement:
      "Stable subject and account IDs, role memberships, access status.",
    externalMapping:
      "Approved immutable subject ID \u2014 never email- or name-only matching.",
  },
  {
    object: "Provider / portfolio / property",
    canonicalRequirement:
      "Stable hierarchy, ownership relationships, status and source.",
    externalMapping:
      "External hierarchy IDs, relationship dates, conflict handling.",
  },
  {
    object: "Room / bed / Room Passport",
    canonicalRequirement:
      "Stable inventory ID, parent, facts, evidence, versions, publish state.",
    externalMapping: "External room ID, source system, duplicate prevention.",
  },
  {
    object: "Availability / capacity claim",
    canonicalRequirement:
      "Resource, date/time zone, quantity, owner, expiry, version.",
    externalMapping:
      "External availability ID and idempotency key where supplied.",
  },
  {
    object: "Agreement / signature",
    canonicalRequirement:
      "Stable agreement and version IDs, parties, dates, signature state.",
    externalMapping:
      "External contract/envelope IDs, completed-copy reference.",
  },
  {
    object: "Payment / refund / dispute",
    canonicalRequirement:
      "Stable obligation and transaction IDs, payer, recipient, status.",
    externalMapping:
      "Processor/ERP references \u2014 never mapped by amount or date alone.",
  },
];

export default function ObjectsAndIdentifiersSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#FBF7EF] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1A2E6E] uppercase">
              {t("OBJECTS & IDENTIFIERS")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Stable IDs in, governed mappings out.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
            {t(
              "Zoiko Rooms and your external IDs stay distinct and linked deliberately — never guessed from a name, an email, or an amount.",
            )}
          </p>
        </div>

        {/* Objects & Identifiers Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#EEDFC5] border-b border-[#EAE6DF]">
                  <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[28%]">
                    {t("OBJECT")}
                  </th>
                  <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[36%]">
                    {t("CANONICAL REQUIREMENT")}
                  </th>
                  <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[36%]">
                    {t("EXTERNAL MAPPING")}
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#EAE6DF]">
                {tableData.map((item) => (
                  <tr
                    key={item.object}
                    className="hover:bg-[#FAF8F5]/60 transition-colors"
                  >
                    <td className="py-5 px-6 font-serif font-bold text-sm text-[#14213D] align-top">
                      {t(item.object)}
                    </td>
                    <td className="py-5 px-6 text-xs text-[#555E68] leading-relaxed align-top">
                      {t(item.canonicalRequirement)}
                    </td>
                    <td className="py-5 px-6 text-xs text-[#555E68] leading-relaxed align-top">
                      {t(item.externalMapping)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Callout Box (Identifier Rule) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="bg-[#1C2C3E] text-white p-6 sm:p-7 rounded-2xl space-y-2 shadow-sm"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#4ADE80] uppercase block">
            {t("IDENTIFIER RULE")}
          </span>
          <p className="text-xs sm:text-sm text-[#EDE6DA] leading-relaxed font-normal">
            {t(
              "Names, email addresses, room labels, URLs, amounts, and dates are never safe primary identifiers for a consequential write. Every write resolves through a stable ID and a governed mapping — not a best guess.",
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
