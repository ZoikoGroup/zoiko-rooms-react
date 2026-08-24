"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface DistributionModelCard {
  title: string;
  institutionRole: string;
  participantSees: string;
  warningText: string;
}

const models: DistributionModelCard[] = [
  {
    title: "Audience catalog",
    institutionRole: "Makes approved rooms visible to a defined cohort.",
    participantSees: "Browse scoped current supply.",
    warningText: "Catalog access is not eligibility, allocation, or funding.",
  },
  {
    title: "Referral / invitation",
    institutionRole: "Invites a person to search or begin a journey.",
    participantSees: "Source, expiry, data visibility, alternatives.",
    warningText: "No room or outcome guarantee.",
  },
  {
    title: "Managed workflow",
    institutionRole: "Institution or partner coordinates selected steps.",
    participantSees: "Named owner and service scope.",
    warningText: "No broader authority implied.",
  },
  {
    title: "Nomination",
    institutionRole: "Nominates a participant or room for review.",
    participantSees: "Proposed path with criteria and next action.",
    warningText: "Nomination is not final approval or agreement.",
  },
  {
    title: "Allocation",
    institutionRole: "Assigns/proposes exact capacity under rules.",
    participantSees: "Room, dates, costs, alternatives, acceptance, expiry.",
    warningText: "No coercive acceptance or suitability guarantee.",
  },
  {
    title: "Subsidy / allowance / voucher",
    institutionRole: "Contributes under current approval.",
    participantSees: "Covered/excluded amounts and participant share.",
    warningText: "Funding not confirmed until approved.",
  },
  {
    title: "Direct billing",
    institutionRole: "Accepts approved charges.",
    participantSees: "Billing scope and participant balance.",
    warningText: "No assumption all costs are covered.",
  },
  {
    title: "Support-only",
    institutionRole: "Provides guidance without supply or decision control.",
    participantSees: "Support route and limits, clearly.",
    warningText: "No provider, room, funding, or allocation authority.",
  },
];

export default function CanonicalDistributionModelsSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            {t("CANONICAL DISTRIBUTION MODELS")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Choose the model, never blur the boundary")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl mx-auto">
            {t(
              "Every model carries its own institution role, participant experience, and a required limitation shown alongside it. Click any model for the full detail.",
            )}
          </p>
        </div>

        {/* 8 Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {models.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE6DF] shadow-xs flex flex-col justify-between space-y-5 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              {/* Content Block */}
              <div className="space-y-4">
                <h3 className="text-base font-serif font-bold text-[#14213D]">
                  {t(card.title)}
                </h3>

                <div className="space-y-2 text-xs leading-relaxed">
                  <p className="text-[#555E68]">
                    <span className="font-bold text-[#14213D]">
                      {t("Institution role:")}
                    </span>{" "}
                    {t(card.institutionRole)}
                  </p>
                  <p className="text-[#555E68]">
                    <span className="font-bold text-[#14213D]">
                      {t("Participant sees:")}
                    </span>{" "}
                    {t(card.participantSees)}
                  </p>
                </div>
              </div>

              {/* Warning Divider & Footer Text */}
              <div className="pt-3 border-t border-dashed border-[#E3DEC3] flex items-start gap-1.5">
                <span className="text-[11px] leading-tight text-[#8A6A24] shrink-0">
                  ▲
                </span>
                <p className="text-[11px] font-medium text-[#8A6A24] leading-tight">
                  {t(card.warningText)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
