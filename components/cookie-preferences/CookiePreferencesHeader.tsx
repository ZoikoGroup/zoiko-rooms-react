"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function CookiePreferencesHeader() {
  const { t } = useLanguage();
  return (
    <section className="w-full text-[#14213D] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Title & Subtitle */}
        <div className="space-y-3">
          {/* Red Kicker with Line Accent */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
              {t("LEGAL · PRIVACY CONTROL")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#101C33] leading-tight tracking-tight">
            {t("Cookie Preferences")}
          </h1>

          {/* Bold Sub-headline */}
          <h2 className="text-sm sm:text-base font-bold text-[#101C33]">
            {t("Choose how Zoiko Rooms uses optional technologies")}
          </h2>

          {/* Descriptive Body Text */}
          <p className="text-xs sm:text-sm text-[#5C5B57] font-normal leading-relaxed max-w-2xl">
            {t(
              "Essential technologies keep Zoiko Rooms secure and working. Optional technologies may support preferences, measurement, personalisation, advertising or external services. Your available controls depend on the rules that apply to your location and the technology's purpose.",
            )}
          </p>
        </div>

        {/* Global Privacy Control Alert Badge */}
        <div className="bg-[#E2F0E8] border border-[#C5E1D2] rounded-xl px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F] flex-shrink-0" />
            <span className="text-xs font-bold text-[#2D6A4F]">
              {t("Privacy signal detected: Global Privacy Control")}
            </span>
          </div>
          <a
            href="#"
            className="text-xs font-bold text-[#8C2C1D] hover:underline flex-shrink-0"
          >
            {t("What this means")}
          </a>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl">
            {/* Reject Button */}
            <button
              type="button"
              className="w-full py-3.5 px-6 rounded-full border border-[#101C33] text-xs sm:text-sm font-bold text-[#101C33] bg-[#FFFDF8] hover:bg-[#101C33]/5 transition-colors cursor-pointer"
            >
              {t("Reject non-essential")}
            </button>

            {/* Accept Button */}
            <button
              type="button"
              className="w-full py-3.5 px-6 rounded-full bg-[#241C14] text-xs sm:text-sm font-bold text-white hover:bg-[#2C241D] transition-colors cursor-pointer shadow-xs"
            >
              {t("Accept all")}
            </button>
          </div>

          {/* Subtext Note */}
          <p className="text-[11px] text-[#A39B8B] font-normal leading-relaxed">
            {t('Changes below are not applied until you select "Save preferences".')}
          </p>
        </div>
      </div>
    </section>
  );
}
