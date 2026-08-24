"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function FairHousingSection() {
  const { t } = useLanguage();
  return (
    <section
      id="fair-housing"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          12
        </span>
        <span>{t("Fair housing & anti-discrimination")}</span>
      </h2>

      {/* "In short" Highlight Box with custom styling */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: our Fair Housing policy is incorporated here in full, and applies to every listing, search, and decision.",
          )}
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed mb-6">
        {t(
          "Our Fair Housing & Anti-Discrimination policy is incorporated into these Terms by reference and applies to listings, search, messaging, applications, screening, pricing and housing decisions. It prohibits discrimination based on protected characteristics under applicable law and platform policy, which may be broader than local statutory minimums.",
        )}
      </p>

      {/* Action Link */}
      <div>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#93321F] hover:underline"
        >
          <span>{t("Read the full Fair Housing policy")}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
