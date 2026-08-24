"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ThirdPartyServicesSection() {
  const { t } = useLanguage();
  return (
    <section
      id="third-party-services"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          15
        </span>
        <span>{t("Third-party services & external links")}</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: partner services like payment processors and maps have their own terms, and their own responsibility boundary.",
          )}
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        {t(
          "Zoiko Rooms integrates third-party services — payment processors, identity verification providers, maps, messaging tools — that operate under their own terms. We're responsible for our own platform conduct; third-party providers are responsible for theirs, within the boundary disclosed at the point of use.",
        )}
      </p>
    </section>
  );
}
