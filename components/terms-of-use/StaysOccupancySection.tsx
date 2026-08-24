"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function StaysOccupancySection() {
  const { t } = useLanguage();
  return (
    <section
      id="stays-and-occupancy"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          08
        </span>
        <span>{t("Stays, occupancy & participant responsibilities")}</span>
      </h2>

      {/* "In short" Highlight Box with custom styling */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: use the room for its agreed purpose, follow house rules, and respect co-occupants.",
          )}
        </p>
      </div>

      {/* Bullet Points List */}
      <ul className="space-y-3 text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed list-disc pl-5">
        <li>
          {t("Use the room and shared spaces only for the lawful, agreed purpose.")}
        </li>
        <li>
          {t("Follow reasonable, lawfully set house rules and occupancy limits.")}
        </li>
        <li>
          {t("Take reasonable care of the property and report damage or hazards promptly.")}
        </li>
        <li>
          {t(
            "Respect co-occupants, neighbours and guests, consistent with our Community Standards.",
          )}
        </li>
        <li>
          {t("Understand that Zoiko Rooms support has boundaries — we are not an emergency service.")}
        </li>
      </ul>
    </section>
  );
}
