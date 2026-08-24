"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function VerificationSafetySection() {
  const { t } = useLanguage();
  return (
    <section
      id="verification-and-safety"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          11
        </span>
        <span>{t("Verification, trust & safety")}</span>
      </h2>

      {/* "In short" Highlight Box with custom styling */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: verification means exactly what's shown, nothing more — and it's not a guarantee of safety.",
          )}
          In short: verification means exactly what&apos;s shown, nothing more
          &mdash; and it&apos;s not a guarantee of safety.
        </p>
      </div>

      {/* Paragraph Content */}
     <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        {t(
          "Where a listing or provider shows a verification badge or evidence tier, that reflects the specific checks actually performed — never treat it as a general guarantee of safety, legality, or suitability. Report safety or trust concerns through our Community Standards reporting tools; if you're in immediate danger, contact local emergency services first.",
        )}
      </p>
    </section>
  );
}
