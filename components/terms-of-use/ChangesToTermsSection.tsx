"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ChangesToTermsSection() {
  const { t } = useLanguage();
  return (
    <section
      id="changes-to-these-terms"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          19
        </span>
        <span>{t("Changes to these Terms")}</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: material changes get a future effective date, clear notice, and — where required — your fresh acceptance.",
          )}
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        {t(
          "We may update these Terms. Material changes are published with a clear change summary and a future effective date, and we notify affected users appropriate to the change and your region. Where re-acceptance is legally required, you'll see a clear review step before the change applies to you; if you don't agree, you may need to stop using the affected service. Prior versions remain archived, and a transaction snapshot from an earlier version is never silently rewritten by a later one.",
        )}
      </p>
    </section>
  );
}
