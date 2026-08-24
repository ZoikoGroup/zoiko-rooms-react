"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

// Import all distribution & capability modal components
import AllocationModal from "../popups/institutional-distribution/AllocationModal";
import SubsidyAllowanceVoucherModal from "../popups/institutional-distribution/SubsidyAllowanceVoucherModal";
import ApprovedProviderNetworksModal from "../popups/institutional-distribution/ApprovedProviderNetworksModal";
import IntegrationsApiModal from "../popups/institutional-distribution/IntegrationsApiModal";
import SampleFundingBreakdownModal from "../popups/institutional-distribution/SampleFundingBreakdownModal";
import AudienceCatalogModal from "../popups/institutional-distribution/AudienceCatalogModal";
import ReferralInvitationModal from "../popups/institutional-distribution/ReferralInvitationModal";

const filterTabs = [
  "Audience-specific catalogs",
  "Referral & invitation programs",
  "Managed allocation workflows",
  "Subsidies & direct billing",
  "Approved provider networks",
  "Institutional integrations",
];

export default function GovernedRoomSupplySection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Audience-specific catalogs");

  // Modal active states covering all distribution and capability options
  const [activeModal, setActiveModal] = useState<
    | "audience"
    | "referral"
    | "allocation"
    | "subsidy"
    | "approvedNetworks"
    | "integrations"
    | "sampleFunding"
    | null
  >(null);

  const closeModal = () => setActiveModal(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case "Audience-specific catalogs":
        setActiveModal("audience");
        break;
      case "Referral & invitation programs":
        setActiveModal("referral");
        break;
      case "Managed allocation workflows":
        setActiveModal("allocation");
        break;
      case "Subsidies & direct billing":
        setActiveModal("subsidy");
        break;
      case "Approved provider networks":
        setActiveModal("approvedNetworks");
        break;
      case "Institutional integrations":
        setActiveModal("integrations");
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full font-sans antialiased">
      {/* SECTION 1: Dark background image hero container */}
      <section
        className="
          relative w-full min-h-screen
          bg-[#0D1526]
          text-white
          px-4 sm:px-8 md:px-12 lg:px-16
          pt-12 sm:pt-16
          pb-28 sm:pb-36
        "
      >
        {/* Background Image Layer */}
        <img
          src="/images/institutional-distribution/hero.png"
          alt={t("Hero Background")}
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60"
        />

        {/* Dark Gradient Overlays for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#070B14/90] to-transparent z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810/80] via-transparent to-[#070B14] z-1 pointer-events-none" />

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column Text & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Badge with Bar Chart Icon */}
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF1F] text-white text-xs font-medium backdrop-blur-md border border-white/10 shadow-md">
                  {/* Bar Chart Icon */}
                  <svg
                    className="w-3.5 h-3.5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Zoiko Rooms Pro
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl lg:text-[44px] max-w-140 font-serif font-bold text-white leading-[1.18] tracking-tight">
                {t("Distribute governed room supply to the right audiences, with")}{" "}
                <span className="text-[#9EB3EE]">
                  {t("clear eligibility, allocation, funding, and control.")}
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-[15px] text-[#DCE0EA] font-normal leading-relaxed max-w-135">
                {t(
                  "Create program-specific catalogs and journeys for universities, employers, healthcare organizations, relocation teams, and public-sector programs — without duplicating canonical room records or weakening participant agency.",
                )}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveModal("allocation")}
                  className="bg-[#1A2E6E] hover:bg-[#153061] text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-full transition-all duration-200 cursor-pointer shadow-md active:scale-95"
                >
                  {t("Explore Distribution Models")}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("sampleFunding")}
                  className="hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-full border border-white/15 transition-all duration-200 cursor-pointer backdrop-blur-md active:scale-95"
                >
                  {t("Talk to Zoiko Rooms")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Transparent background section containing overlapping card and banner */}
      <section className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 pb-20 -mt-16 sm:-mt-20 z-20">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* Floating White Filter Card */}
          <div className="bg-white text-[#1E2022] rounded-2xl p-6 sm:p-8 shadow-xl border border-black/5 space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#7A838E] uppercase block">
              {t("CHOOSE A DISTRIBUTION NEED")}
            </span>

            <div className="flex flex-wrap gap-2.5 max-w-5xl">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabClick(tab)}
                    className={`text-xs font-bold py-2.5 px-4 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#1A2E6E] text-white shadow-xs"
                        : "text-[#555E68] hover:bg-[#EAE6DF] hover:text-[#14213D]"
                    }`}
                  >
                    {t(tab)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dark Banner Block */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#16233F] border border-white/10 rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start shadow-xl"
          >
            {/* Left Headline */}
            <div className="md:col-span-5">
              <h2 className="text-2xl md:text-[30px] font-serif font-bold text-white leading-snug">
                {t(
                  "Institutional access never automatically means entitlement, approval, allocation, or guaranteed supply.",
                )}
              </h2>
            </div>

            {/* Right Sub-features with Modal Triggers */}
            <div className="md:col-span-7 md:mt-15 flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-12 pt-1 md:pt-1">
              <div
                onClick={() => setActiveModal("audience")}
                className="flex-1 space-y-1.5 cursor-pointer group"
              >
                <span className="text-[10px] font-bold tracking-wider text-[#8FA3D9] group-hover:text-white transition-colors uppercase block">
                  {t("EVERY VIEW STAYS SCOPED")} &rarr;
                </span>

                <p className="text-xs text-[#C6CCDE] leading-relaxed max-w-[260px]">
                  {t(
                    "Relationship, audience, criteria, and decision owner are shown at every step.",
                  )}
                </p>
              </div>

              <div
                onClick={() => setActiveModal("integrations")}
                className="flex-1 space-y-1.5 cursor-pointer group"
              >
                <span className="text-[10px] font-bold tracking-wider text-[#8FA3D9] group-hover:text-white transition-colors uppercase block">
                  {t("NO HIDDEN SURVEILLANCE")} &rarr;
                </span>

                <p className="text-xs text-[#C6CCDE] leading-relaxed max-w-[260px]">
                  {t(
                    "Distribution never becomes participant profiling or behavior tracking.",
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALL ATTACHED MODALS */}
      <AudienceCatalogModal
        isOpen={activeModal === "audience"}
        onClose={closeModal}
      />
      <ReferralInvitationModal
        isOpen={activeModal === "referral"}
        onClose={closeModal}
      />
      <AllocationModal
        isOpen={activeModal === "allocation"}
        onClose={closeModal}
      />
      <SubsidyAllowanceVoucherModal
        isOpen={activeModal === "subsidy"}
        onClose={closeModal}
      />
      <ApprovedProviderNetworksModal
        isOpen={activeModal === "approvedNetworks"}
        onClose={closeModal}
      />
      <IntegrationsApiModal
        isOpen={activeModal === "integrations"}
        onClose={closeModal}
      />
      <SampleFundingBreakdownModal
        isOpen={activeModal === "sampleFunding"}
        onClose={closeModal}
      />
    </div>
  );
}
