"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface FeatureCard {
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    title: "Portfolio hierarchy",
    description:
      "Organization → portfolio → property → room → offer, with stable identifiers and transfer history.",
  },
  {
    title: "Bulk actions & imports",
    description:
      "Scope preview, validation, dry run, conflict detection, idempotency, rollback, and audit.",
  },
  {
    title: "Data-quality queue",
    description:
      "Missing, stale, conflicting, expiring, and materially changed fields routed to an owner.",
  },
];

interface PassportRow {
  label: string;
  badgeText: string;
  badgeStyle: string;
  dotColor: string;
}

const passportRows: PassportRow[] = [
  {
    label: "Address",
    badgeText: "Regulatory verified",
    badgeStyle: "bg-[#E6F4EA] text-[#137333]",
    dotColor: "bg-[#137333]",
  },
  {
    label: "Room dimensions",
    badgeText: "Document verified",
    badgeStyle: "bg-[#FEF7E0] text-[#B06000]",
    dotColor: "bg-[#B06000]",
  },
  {
    label: "Availability freshness",
    badgeText: "Source confirmed 2h ago",
    badgeStyle: "bg-[#E6F4EA] text-[#137333]",
    dotColor: "bg-[#137333]",
  },
  {
    label: "Furnishings",
    badgeText: "Provider declared",
    badgeStyle: "bg-[#F1F3F4] text-[#5F6368]",
    dotColor: "bg-[#5F6368]",
  },
  {
    label: "Maintenance status",
    badgeText: "Open · owner assigned",
    badgeStyle: "bg-[#F1F3F4] text-[#5F6368]",
    dotColor: "bg-[#5F6368]",
  },
];

export default function PortfolioAndAvailabilitySection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Text Content & Feature List */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
              {t("Portfolio & Availability")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[27px] font-serif font-bold text-[#14213D] leading-tight">
              {t("Operate properties, rooms, and Room Passports without losing the evidence behind each field.")}
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
              {t(
                "The Room Passport stays the canonical room record — facts, media, access, condition, costs, and availability are sourced, dated, and owned, even as bulk changes and imports move fast."
              )}
            </p>
          </div>

          {/* Feature List Cards */}
          <div className="space-y-4">
            {features.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white/80 rounded-2xl p-5 border border-[#EAE6DF] shadow-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A2E6E] shrink-0" />
                  <h3 className="text-sm font-bold text-[#14213D]">
                    {t(item.title)}
                  </h3>
                </div>
                <p className="text-xs text-[#555E68] leading-relaxed pl-3.5 font-normal">
                  {t(item.description)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="/pro/portfolio"
              className="inline-block bg-transparent hover:bg-white text-[#14213D] text-xs font-semibold px-6 py-3 rounded-full border border-[#14213D] transition-colors shadow-xs"
            >
              {t("Explore Portfolio & Availability")}
            </a>
          </div>
        </div>

        {/* Right Column: Room Passport Preview Card */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-[2rem] overflow-hidden border border-[#EAE6DF] shadow-md"
          >
            {/* Top Room Image */}
            <div className="relative w-full h-[220px] sm:h-[260px]">
              <Image
                src="/images/pro-overview/1.png"
                alt={t("Sample Room Passport")}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Passport Data List */}
            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-[11px] font-mono text-[#736B62] block">
                {t("Sample Room Passport · demonstration data")}
              </span>

              <div className="divide-y divide-[#F0ECE1]">
                {passportRows.map((row) => (
                  <div
                    key={row.label}
                    className="py-3.5 flex items-center justify-between gap-4 first:pt-1 last:pb-1"
                  >
                    <span className="text-xs font-medium text-[#555E68]">
                      {t(row.label)}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium ${row.badgeStyle}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${row.dotColor}`}
                      />
                      {t(row.badgeText)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
