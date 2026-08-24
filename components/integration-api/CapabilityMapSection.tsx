"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  Square,
  FileText,
  PieChart,
  Check,
  LayoutGrid,
  FileSignature,
  DollarSign,
  Hexagon,
  LifeBuoy,
} from "lucide-react";

interface CapabilityCard {
  title: string;
  description: string;
  highlightText: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

const capabilityCards: CapabilityCard[] = [
  {
    title: "Organizations & identity",
    description:
      "Organization, representative, role, membership, and access review — synced from your identity provider or directory.",
    highlightText: "Identity proof stays separate from application permission.",
    icon: <Square className="w-4 h-4 text-[#14213D] rotate-45" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
  {
    title: "Portfolio & rooms",
    description:
      "Providers, properties, units, rooms, Room Passports, media, and maintenance state from your PMS or inventory system.",
    highlightText:
      "Provider and room authority required before any publish or write.",
    icon: <FileText className="w-4 h-4 text-[#14213D]" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
  {
    title: "Availability & costs",
    description:
      "Date capacity, holds, blocks, reservations, rates, deposits, fees, and utilities from PMS, channel, or pricing systems.",
    highlightText: "Every write passes a transactional conflict check first.",
    icon: <PieChart className="w-4 h-4 text-[#14213D]" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
  {
    title: "Compliance & verification",
    description:
      "Requirement, evidence metadata, status, expiry, and review — the same tiered evidence shown on a Room Passport.",
    highlightText: "No universal trust score; documents stay purpose-limited.",
    icon: <Check className="w-4 h-4 text-[#14213D]" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
  {
    title: "Applications & decisions",
    description:
      "Application, criterion version, evidence status, decision, reason, and review from CRM or admissions systems.",
    highlightText: "A human stays the decision owner — always.",
    icon: <LayoutGrid className="w-4 h-4 text-[#14213D]" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
  {
    title: "Agreements & signatures",
    description:
      "Agreement, party, version, amendment, signature, cancellation, and renewal from contract or e-signature systems.",
    highlightText:
      "Correct parties, authority, and version are required before commit.",
    icon: <FileSignature className="w-4 h-4 text-[#14213D]" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
  {
    title: "Payments & finance",
    description:
      "Obligations, invoices, payment states, receipts, refunds, and reconciliation from payment or finance systems.",
    highlightText:
      "No credential exchange; recipient checks are separated by design.",
    icon: <DollarSign className="w-4 h-4 text-[#14213D]" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
  {
    title: "Institutional distribution",
    description:
      "Programs, audiences, invitations, eligibility, allocations, funding, and reporting for universities and employers.",
    highlightText: "Tenant isolation and no cross-program discoverability.",
    icon: <Hexagon className="w-4 h-4 text-[#14213D]" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
  {
    title: "Support & incidents",
    description:
      "Case category, severity, owner, and resolution state exchanged with your support or incident tooling.",
    highlightText: "No unrestricted message or complaint content replication.",
    icon: <LifeBuoy className="w-4 h-4 text-[#14213D]" />,
    iconBgColor: "bg-[#EAE4DC]",
  },
];

export default function CapabilityMapSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#EEDFC5] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1A2E6E] uppercase">
              {t("CAPABILITY MAP")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Nine domains, each with its own boundary.")}
          </h2>
         <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
  {t(
    "Every connection sits inside one of these domains. Statuses stay separate even when a single integration touches more than one — an availability sync can't quietly pick up payment authority.",
  )}
</p>
        </div>

        {/* 9 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="bg-[#FBF7EF] rounded-2xl p-6 sm:p-7 border border-[#EAE6DF] shadow-xs flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                {/* Icon */}
                <div
                  className={`w-8 h-8 rounded-lg bg-[#F2DED2] flex items-center justify-center shrink-0`}
                >
                  {card.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-base font-serif font-bold text-[#14213D]">
                    {t(card.title)}
                  </h3>
                  <p className="text-xs text-[#555E68] leading-relaxed">
                    {t(card.description)}
                  </p>
                </div>
              </div>

              {/* Bottom Highlighted Callout Box */}
              <div className="bg-[#F2DED2] p-3 rounded-lg border border-[#F2E4D8]">
                <p className="text-[11px] font-mono text-[#1A2E6E] leading-relaxed">
                  {t(card.highlightText)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
