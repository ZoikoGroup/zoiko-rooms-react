"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function UserTypesSection() {
  const { t } = useLanguage();
  const userTypes = [
    {
      role: "Room seeker / renter",
      responsibility:
        "Truthful applications, respectful conduct, payment obligations under the agreement.",
    },
    {
      role: "Provider / landlord / host",
      responsibility:
        "Lawful authority to list, accurate listings, habitability and access obligations.",
    },
    {
      role: "Authorized subletter",
      responsibility:
        "Must hold and evidence the lawful right to sublet before listing.",
    },
    {
      role: "Organization participant",
      responsibility:
        "Acts within the scope of authority granted by the organization account.",
    },
  ];

  return (
    <section
      id="user-types"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          05
        </span>
        <span>{t("User types & responsibilities")}</span>
      </h2>

      {/* "In short" Highlight Box with custom styling */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: different roles carry different responsibilities under these Terms.",
          )}
        </p>
      </div>

      {/* 2x2 Grid Layout for User Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userTypes.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFDF9] rounded-2xl border border-[#EAE6DF] p-6 shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)] flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <span className="text-sm text-[#7A7467] font-normal max-w-[70px]">
                {t(item.role)}
              </span>
              <p className="text-[13.5px] font-bold text-[#101C33] text-left sm:text-right flex-1 leading-snug">
                {t(item.responsibility)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
