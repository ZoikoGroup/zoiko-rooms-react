"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function RequirementsPricingSection() {
  const { t } = useLanguage();
  const ctaHref = "/list-a-room/requirements-pricing"; // Dynamic link for button

  const requirementsList = [
    {
      title: "Market rules",
      description:
        "Requirements vary by city and country \u2014 shown for your specific location.",
    },
    {
      title: "Provider type & arrangement",
      description:
        "Live-in, landlord/agent and sublet paths carry different evidence needs.",
    },
    {
      title: "Evidence & licensing",
      description:
        "Some markets require registration or licensing before publication.",
    },
    {
      title: "Approved charges",
      description:
        "Any provider fee or optional service is shown clearly before you commit.",
    },
  ];

  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 w-full">
          <span className="text-[11px] font-bold tracking-widest text-[#C0272D] uppercase block">
            {t("REQUIREMENTS & PRICING")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Know what is required before you commit.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-xl">
            {t(
              "What's required depends on your market, provider type, property arrangement and applicable licensing.",
            )}
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAE6DF] flex flex-col justify-center divide-y divide-gray-100"
          >
            {requirementsList.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start space-x-3.5 ${
                  index === 0
                    ? "pb-4"
                    : index === requirementsList.length - 1
                      ? "pt-4"
                      : "py-4"
                }`}
              >
                {/* Green Check Icon Circle */}
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#EAF7EE] flex items-center justify-center flex-shrink-0 text-[#1E7A44]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>

                {/* Text Block */}
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-[#14213D] leading-snug">
                    {t(item.title)}
                  </h3>
                  <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                    {t(item.description)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Card: Dark Navy CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#14213D] text-white rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                {t("See current charges for your market")}
              </h3>
              <p className="text-xs sm:text-sm text-[#A0AEC0] leading-relaxed font-normal">
                {t(
                  "Standard listing charges and optional services are shown on the Requirements & Pricing page before you commit to anything — no hidden or preselected upgrades.",
                )}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={ctaHref}
                className="w-full w-full inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#14213D] text-xs font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
              >
                {t("View Requirements & Pricing")} &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
