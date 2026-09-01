"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Approved categories",
    description:
      "Portfolio, CRM, e-sign, finance, organization, identity, support, and BI systems \u2014 governed use only.",
  },
  {
    title: "Events & monitoring",
    description:
      "Signed webhooks, retry, deduplication, freshness, and dead-letter handling.",
  },
  {
    title: "Clean revocation",
    description:
      "Stop reads/writes/events, rotate credentials, reconcile, and export or delete data on exit.",
  },
];

interface IntegrationRow {
  label: string;
  badgeText: string;
  badgeStyle: string;
  dotColor: string;
}

const integrationRows: IntegrationRow[] = [
  {
    label: "Portfolio feed",
    badgeText: "Active \u00B7 synced 4m ago",
    badgeStyle: "bg-[#E6F4EA] text-[#137333]",
    dotColor: "bg-[#137333]",
  },
  {
    label: "Payment ledger",
    badgeText: "Active",
    badgeStyle: "bg-[#E6F4EA] text-[#137333]",
    dotColor: "bg-[#137333]",
  },
  {
    label: "CRM connector",
    badgeText: "Degraded \u00B7 retrying",
    badgeStyle: "bg-[#FEF7E0] text-[#B06000]",
    dotColor: "bg-[#B06000]",
  },
  {
    label: "Legacy import",
    badgeText: "Paused by owner",
    badgeStyle: "bg-[#F1F3F4] text-[#5F6368]",
    dotColor: "bg-[#5F6368]",
  },
];

export default function IntegrationsAndApiSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header Block */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
              {t("Integrations & API")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[27px] font-serif font-bold text-[#14213D] leading-tight">
              {t("Connect current systems without weakening source, security, or operational control.")}
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
              {t(
                "Every integration has a named owner, minimum scopes, and explicit source-of-truth rules. Consequential writes go through review, idempotency, and audit — never silent system-of-record changes."
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
              href="/pro/integration-api"
              className="inline-block bg-transparent hover:bg-white text-[#14213D] text-xs font-semibold px-6 py-3 rounded-full border border-[#14213D] transition-colors shadow-xs"
            >
              {t("Explore Integrations & API")}
            </a>
          </div>
        </div>

        {/* Right Column: Sample Integration Status Card */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-[2rem] p-6 sm:p-8 border border-[#EAE6DF] shadow-md space-y-6 mt-4 lg:mt-12"
          >
            <span className="text-[11px] font-mono text-[#736B62] block">
              {t("Sample integration status · demonstration data")}
            </span>

            <div className="divide-y divide-[#F0ECE1]">
              {integrationRows.map((row) => (
                <div
                  key={row.label}
                  className="py-4 flex items-center justify-between gap-4 first:pt-2 last:pb-2"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
