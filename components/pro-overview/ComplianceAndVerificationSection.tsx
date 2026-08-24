"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Evidence record",
    description:
      "Type, object scope, source, collector, dates, reviewer, and retention \u2014 every field sourced.",
  },
  {
    title: "Fairness by design",
    description:
      "Proportional, time-bound restrictions with human review \u2014 no protected-trait profiling.",
  },
  {
    title: "Claim boundary",
    description:
      "Zoiko Rooms Pro displays current evidence. It never promises total legal compliance or safety.",
  },
];

interface StatusBadge {
  label: string;
  style: string;
  dotColor: string;
}

const statusBadges: StatusBadge[] = [
  {
    label: "Current",
    style: "bg-[#E6F4EA] text-[#137333]",
    dotColor: "bg-[#137333]",
  },
  {
    label: "Expiring",
    style: "bg-[#FEF7E0] text-[#B06000]",
    dotColor: "bg-[#B06000]",
  },
  {
    label: "Information needed",
    style: "bg-[#F1F3F4] text-[#5F6368]",
    dotColor: "bg-[#5F6368]",
  },
  {
    label: "Restricted",
    style: "bg-[#FCE8E6] text-[#C5221F]",
    dotColor: "bg-[#C5221F]",
  },
];

export default function ComplianceAndVerificationSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header Block */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
              {t("Compliance & Verification")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[26px] font-serif font-bold text-[#14213D] leading-tight">
              {t(
                "Identity, authority, and evidence stay reviewable — not a badge taken on faith."
              )}
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
              {t(
                "Provider identity, listing authority, and room evidence move through a named lifecycle. High-risk changes — bank recipient, legal party, room identity, signer — always route through Action Review."
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
              href="#explore-compliance"
              className="inline-block bg-transparent hover:bg-white text-[#14213D] text-xs font-semibold px-6 py-3 rounded-full border border-[#14213D] transition-colors shadow-xs"
            >
              {t("Explore Compliance & Verification")}
            </a>
          </div>
        </div>

        {/* Right Column: Image with Overlaid Badges & Tagline */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[2rem] overflow-hidden border border-[#EAE6DF] shadow-md bg-white"
          >
            {/* Visual Container */}
            <div className="relative w-full h-[360px] sm:h-[420px]">
              <Image
                src="/images/pro-overview/2.png"
                alt={t("Compliance and Verification Demonstration")}
                fill
                className="object-cover object-center"
                priority
              />

              {/* Status Pills Overlay */}
              <div className="absolute bottom-12 left-0 right-0 px-4 flex flex-wrap justify-center items-center gap-2 z-10">
                {statusBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-xs shadow-xs ${badge.style}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${badge.dotColor}`}
                    />
                    {t(badge.label)}
                  </span>
                ))}
              </div>

              {/* Italic Bottom Caption */}
              <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                <span className="text-xs font-serif italic text-white/90 drop-shadow-sm">
                  {t("Named evidence, reviewer, and review path at every stage")}
                </span>
              </div>

              {/* Gradient Overlay for bottom text clarity */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
