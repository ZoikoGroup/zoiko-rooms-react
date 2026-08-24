"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function WhoYouContractWithSection() {
  const { t } = useLanguage();
  return (
    <section
      id="who-you-contract-with"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          02
        </span>
        <span>{t("Who you contract with")}</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t("In short: your contracting entity, and how to reach us, depend on your region.")}
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed mb-8">
        {t(
          `The Zoiko Rooms entity you contract with is determined by your country or region of use, as shown in the Regional Schedule for your market. Where more than one Zoiko entity is involved in a transaction — for example, a separate payments entity — each plays a distinct legal role, and this document doesn't use an ambiguous "we" to blur that distinction.`,
        )}
      </p>

      {/* Key-Value Details Card */}
      <div className="bg-[#FFFDF9] rounded-2xl border border-[#EAE6DF] p-6 shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)] divide-y divide-dashed divide-[#EAE6DF]">
        <div className="pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs sm:text-sm text-[#7A7467] font-normal">
            {t("Contracting entity (England)")}
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#101C33]">
            Zoiko Rooms UK Ltd.
          </span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs sm:text-sm text-[#7A7467] font-normal">
            {t("Registered office")}
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#101C33]">
            London, United Kingdom
          </span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs sm:text-sm text-[#7A7467] font-normal">
            {t("Legal notices route")}
          </span>
          <a
            href="mailto:legal@zoikorooms.example"
            className="text-xs sm:text-sm font-bold text-[#101C33] hover:text-[#C8202C] transition-colors"
          >
            legal@zoikorooms.example
          </a>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs sm:text-sm text-[#7A7467] font-normal">
            {t("Full regional detail")}
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8C2C1D] hover:underline"
          >
            <span>{t("Regional Legal Notices")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}