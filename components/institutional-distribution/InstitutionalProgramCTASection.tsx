"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

// Import corresponding modal popups
import AllocationModal from "../popups/institutional-distribution/AllocationModal";
import SampleFundingBreakdownModal from "../popups/institutional-distribution/SampleFundingBreakdownModal";

export default function InstitutionalProgramCTASection() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<
    "allocation" | "sampleFunding" | null
  >(null);

  const closeModal = () => setActiveModal(null);

  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#F0E4D8] rounded-3xl p-10 sm:p-16 text-center space-y-8 border border-[#E5DACD]"
        >
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-serif font-bold text-[#14213D] leading-snug max-w-3xl mx-auto">
            {t(
              "Design your institutional program around current authority and participant rights.",
            )}
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Primary Dark Button */}
            <button
              type="button"
              onClick={() => setActiveModal("allocation")}
              className="bg-[#1C2C5E] hover:bg-[#14213D] text-white text-xs sm:text-sm font-semibold py-3.5 px-7 rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              {t("Explore Distribution Models")}
            </button>

            {/* Secondary Red Outlined Button */}
            <button
              type="button"
              onClick={() => setActiveModal("sampleFunding")}
              className="bg-transparent hover:bg-white/40 text-[#C8202C] text-xs sm:text-sm font-semibold py-3.5 px-7 rounded-full border border-[#C8202C] transition-all duration-200 cursor-pointer active:scale-95"
            >
              {t("Talk to Zoiko Rooms")}
            </button>
          </div>

          {/* Subtext */}
          <p className="text-[11px] sm:text-xs text-[#7A838E] font-medium tracking-wide">
            {t(
              "No commitment required — governed discovery starts with a conversation.",
            )}
          </p>
        </motion.div>
      </div>

      {/* POPUP MODALS */}
      <AllocationModal
        isOpen={activeModal === "allocation"}
        onClose={closeModal}
      />
      <SampleFundingBreakdownModal
        isOpen={activeModal === "sampleFunding"}
        onClose={closeModal}
      />
    </section>
  );
}
