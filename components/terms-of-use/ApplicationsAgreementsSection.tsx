"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ApplicationsAgreementsSection() {
  const { t } = useLanguage();
  return (
    <section
      id="applications-and-agreements"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          07
        </span>
        <span>{t("Applications, viewings, offers & agreements")}</span>
      </h2>

      {/* "In short" Highlight Box with custom styling */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: the application and agreement process must use accurate information, and the resulting agreement is between you and the other party.",
          )}
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        {t(
          "Applications must contain lawful, accurate information. Viewings — in person or virtual — should be conducted respectfully and safely. An offer becomes binding only once accepted in the manner your Regional Schedule and the specific transaction require; a transaction snapshot capturing the terms you agreed to is retained and available to you.",
        )}
      </p>
    </section>
  );
}
