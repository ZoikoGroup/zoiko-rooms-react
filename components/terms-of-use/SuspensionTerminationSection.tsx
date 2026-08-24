"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function SuspensionTerminationSection() {
  const { t } = useLanguage();
  return (
    <section
      id="suspension-and-appeals"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          16
        </span>
        <span>{t("Suspension, restrictions, termination & appeals")}</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t("In short: restrictions scale with risk, and you can appeal a decision.")}
        </p>
      </div>

      {/* Paragraph Content */}
    <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
  {t(
    "We may restrict, suspend, or close an account where these Terms, our Community Standards, or applicable law require it, using notice where appropriate and immediate action where safety or legal risk requires it. Closing your account doesn't erase existing obligations — such as an outstanding payment or agreement — that arose before closure. You can appeal a decision through the process described in our Community Standards.",
  )}
</p>
    </section>
  );
}
