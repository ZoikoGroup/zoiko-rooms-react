"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ProviderAuthoritySection() {
  const { t } = useLanguage();
  const ctaHref = "/how-it-works/verification-authority"; // Dynamic link for bottom button

  const sequenceSteps = [
    { label: "Provider", isHighlighted: false },
    { label: "Relationship", isHighlighted: false },
    { label: "Property", isHighlighted: false },
    { label: "Room", isHighlighted: false },
    { label: "Evidence", isHighlighted: false },
    { label: "Market rules", isHighlighted: false },
    { label: "Listing eligibility", isHighlighted: true },
  ];

  const statusBadges = [
    {
      label: "Needed",
      bg: "bg-[#F3EFEA]",
      text: "text-[#555E68]",
      dot: "bg-[#7A838E]",
    },
    {
      label: "Submitted",
      bg: "bg-[#F3EFEA]",
      text: "text-[#555E68]",
      dot: "bg-[#7A838E]",
    },
    {
      label: "Under review",
      bg: "bg-[#FFF7E6]",
      text: "text-[#A0610D]",
      dot: "bg-[#A0610D]",
    },
    {
      label: "Verified",
      bg: "bg-[#EAF7EE]",
      text: "text-[#1E7A44]",
      dot: "bg-[#1E7A44]",
    },
    {
      label: "Conditional",
      bg: "bg-[#FFF7E6]",
      text: "text-[#A0610D]",
      dot: "bg-[#A0610D]",
    },
    {
      label: "Expired",
      bg: "bg-[#FDE8E8]",
      text: "text-[#C0272D]",
      dot: "bg-[#C0272D]",
    },
    {
      label: "Rejected",
      bg: "bg-[#FDE8E8]",
      text: "text-[#C0272D]",
      dot: "bg-[#C0272D]",
    },
    {
      label: "Action required",
      bg: "bg-[#EBF3FB]",
      text: "text-[#2B6CB0]",
      dot: "bg-[#2B6CB0]",
    },
  ];

  return (
    <section className="w-full bg-[#EFE1D0] text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 w-full">
          <span className="text-[11px] font-bold tracking-widest text-[#C0272D] uppercase block">
            {t("PROVIDER AUTHORITY")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("We establish your authority to offer the room — not only your identity.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
            {t(
              "Identity confirms who you are. Provider authority confirms why you — specifically — may offer this specific room.",
            )}
          </p>
        </div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#EAE6DF] space-y-8"
        >
          {/* Top Process Flow (Sequence Steps) */}
          <div className="overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center justify-between min-w-[700px] gap-2">
              {sequenceSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div
                    className={`px-7 py-3 rounded-[14px] text-xs font-semibold whitespace-nowrap transition-all ${
                      step.isHighlighted
                        ? "bg-[#1B2A4A] text-white shadow-sm"
                        : "bg-[#F8F2E8] text-[#14213D] border border-[#ECDFC9]"
                    }`}
                  >
                    {t(step.label)}
                  </div>

                  {/* Arrow Connector */}
                  {idx < sequenceSteps.length - 1 && (
                    <span className="text-gray-300 text-xs font-light px-0.5">
                      &rarr;
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Bottom Status Badges Row */}
          <div className="space-y-3">
            <p className="text-xs text-[#555E68] font-normal">
              {t('Authority evidence moves through explicit states — never "fully verified":')}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {statusBadges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium border border-transparent ${badge.bg} ${badge.text}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${badge.dot}`}
                  ></span>
                  <span>{t(badge.label)}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href={ctaHref}
            className="px-6 py-3 rounded-full border border-[#14213D] text-[#14213D] hover:bg-[#14213D] hover:text-white transition-all duration-200 text-xs font-semibold tracking-wide whitespace-nowrap active:scale-95 shadow-sm"
          >
            {t("How Verification & Authority Work")}
          </a>
        </div>
      </div>
    </section>
  );
}
