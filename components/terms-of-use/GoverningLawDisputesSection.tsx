"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function GoverningLawDisputesSection() {
  const { t } = useLanguage();
  return (
    <section
      id="law-disputes-and-rights"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          18
        </span>
        <span>{t("Governing law, disputes & mandatory rights")}</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: the governing law and dispute route depend on your region, and your mandatory local rights are preserved.",
          )}
        </p>
      </div>

      {/* Regional Rules Container Card */}
      <div className="bg-[#FFFDF8] border border-[#EAE6DF] rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-serif font-normal text-[#101C33] mb-6">
          {t("Regional rules — England")}
        </h3>

        <div className="space-y-6">
          {/* Row 1: Governing Law */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-6 border-b border-dashed border-[#EAE6DF]">
            <span className="font-bold text-sm text-[#101C33]">
              {t("Governing law")}
            </span>
            <span className="md:col-span-2 text-sm text-[#5C5B57] leading-relaxed">
              {t(
                "The laws of England and Wales, without prejudice to any mandatory consumer protections of your country of residence.",
              )}
            </span>
          </div>

          {/* Row 2: Courts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-6 border-b border-dashed border-[#EAE6DF]">
            <span className="font-bold text-sm text-[#101C33]">{t("Courts")}</span>
            <span className="md:col-span-2 text-sm text-[#5C5B57] leading-relaxed">
              {t(
                "The courts of England and Wales have jurisdiction, alongside any mandatory right you have to bring proceedings in your own country of residence.",
              )}
            </span>
          </div>

          {/* Row 3: Alternative dispute resolution */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-6 border-b border-dashed border-[#EAE6DF]">
            <span className="font-bold text-sm text-[#101C33]">
              {t("Alternative dispute resolution")}
            </span>
            <span className="md:col-span-2 text-sm text-[#5C5B57] leading-relaxed">
  {t(
    "Where a currently available, legally applicable ADR scheme exists for your dispute, it's linked from our Regional Legal Notices.",
  )}
</span>
          </div>

          {/* Row 4: Class or jury waivers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            <span className="font-bold text-sm text-[#101C33]">
              {t("Class or jury waivers")}
            </span>
            <span className="md:col-span-2 text-sm text-[#5C5B57] leading-relaxed">
              {t(
                "Not applied in England — only used elsewhere where enforceable and specifically approved.",
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
