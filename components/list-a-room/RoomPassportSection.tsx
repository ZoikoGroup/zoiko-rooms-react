"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function RoomPassportSection() {
  const { t } = useLanguage();
  const ctaHref = "#"; // Dynamic link for button

  const passportRows = [
    {
      label: "Room type & size",
      badge: "Document verified",
      bg: "bg-[#FFF7E6]",
      text: "text-[#A0610D]",
      dot: "bg-[#A0610D]",
      border: "border-[#FFE7BA]",
    },
    {
      label: "Shared spaces",
      badge: "Provider declared",
      bg: "bg-[#F3EFEA]",
      text: "text-[#555E68]",
      dot: "bg-[#7A838E]",
      border: "border-[#EAE6DF]",
    },
    {
      label: "Lockability",
      badge: "Physical inspection",
      bg: "bg-[#EAF7EE]",
      text: "text-[#1E7A44]",
      dot: "bg-[#1E7A44]",
      border: "border-[#D3EED9]",
    },
    {
      label: "Monthly price & deposit",
      badge: "Provider declared",
      bg: "bg-[#F3EFEA]",
      text: "text-[#555E68]",
      dot: "bg-[#7A838E]",
      border: "border-[#EAE6DF]",
    },
    {
      label: "Provider authority",
      badge: "Verified",
      bg: "bg-[#EAF7EE]",
      text: "text-[#1E7A44]",
      dot: "bg-[#1E7A44]",
      border: "border-[#D3EED9]",
    },
  ];

  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Typography & Action */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          {/* Eyebrow Label */}
          <span className="text-[11px] font-bold tracking-widest text-[#C0272D] uppercase block">
            {t("THE ROOM PASSPORT")}
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-[1.18] tracking-tight">
            {t("Give room seekers a clearer picture before they commit.")}
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-[#555E68] leading-relaxed font-normal">
            {t(
              "The Room Passport is the structured digital record for your room — covering room, shared-space, commercial and evidence details. Provider-declared information is shown separately from document-verified, remote-evidence, physical-inspection and regulatory-source detail, wherever those states exist.",
            )}
          </p>

          {/* Call-to-Action Button */}
          <div className="pt-2">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center bg-[#1B2A4A] hover:bg-[#0D1629] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
            >
              {t("Preview a Room Passport")}
            </a>
          </div>
        </div>

        {/* Right Column: Sample Passport Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-[500px] bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-[#EAE6DF] space-y-4"
          >
            {/* Header / Sub-title */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#555E68]">
                {t("SAMPLE PASSPORT • DEMONSTRATION DATA")}
              </span>
              <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
            </div>

            {/* Structured Rows */}
            <div className="divide-y divide-gray-100">
              {passportRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3.5 text-xs sm:text-sm font-medium text-[#14213D]"
                >
                  <span>{t(row.label)}</span>

                  <span
                    className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${row.bg} ${row.text} ${row.border}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${row.dot}`}
                    ></span>
                    <span>{t(row.badge)}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
