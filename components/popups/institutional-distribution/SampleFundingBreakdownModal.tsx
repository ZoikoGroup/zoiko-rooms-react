"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SampleFundingBreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTalkToZoiko?: () => void;
}

const breakdownItems = [
  { label: "Monthly room rent:", value: "$1,500 per month" },
  { label: "Security deposit:", value: "$1,500" },
  { label: "Required move-in fee:", value: "$100" },
  { label: "Estimated utilities:", value: "$150 per month" },
  {
    label: "Institution contribution:",
    value: "$900 per month for the first three months",
  },
  {
    label: "Participant recurring responsibility:",
    value: "$750 estimated per month during the contribution period",
  },
  {
    label: "Participant upfront responsibility:",
    value: "$1,600 unless the approved program also covers the deposit or fee",
  },
];

export default function SampleFundingBreakdownModal({
  isOpen,
  onClose,
  onTalkToZoiko,
}: SampleFundingBreakdownModalProps) {
  // Lock background page scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Backdrop Overlay with onClick to close */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs cursor-pointer"
      >
        {/* Modal Card Container */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-[#FAF8F5] sm:bg-white rounded-3xl max-w-2xl w-full text-[#14213D] shadow-2xl relative border border-[#EAE6DF] overflow-hidden flex flex-col cursor-default"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F3EFEA] hover:bg-[#EAE6DF] flex items-center justify-center text-[#555E68] hover:text-[#14213D] transition-colors cursor-pointer z-10"
          >
            &#x2715;
          </button>

          {/* Modal Content Area */}
          <div className="p-6 sm:p-10 space-y-5 overflow-y-auto max-h-[85vh]">
            {/* Top Category Label & Title Header */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
                SAMPLE FUNDING BREAKDOWN
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#14213D]">
                Generic institutional funding example &mdash; USD
              </h2>
            </div>

            {/* Yellow Disclaimer Banner */}
            <div className="bg-[#FAF0D9] border border-[#F3E2B8] rounded-xl p-3.5 sm:p-4 flex items-start gap-2.5">
              <span className="text-sm shrink-0 leading-none mt-0.5">⚠️</span>
              <p className="text-xs sm:text-[13px] font-medium text-[#8A6A24] leading-relaxed">
                These amounts demonstrate contribution and participant
                responsibility only. They are not Zoiko Rooms prices,
                institution funding promises, market averages, tax advice,
                benefits advice, or affordability guidance.
              </p>
            </div>

            {/* Funding Breakdown List */}
            <div className="space-y-2.5 pt-1">
              {breakdownItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#FAF8F5] border border-[#EAE6DF] rounded-2xl p-3.5 sm:p-4 flex items-center"
                >
                  <p className="text-xs sm:text-sm text-[#14213D] leading-relaxed font-normal">
                    <strong className="font-bold">{item.label}</strong>{" "}
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:px-10 sm:py-6 border-t border-[#EAE6DF] bg-white flex justify-end">
            <button
              type="button"
              onClick={onTalkToZoiko || onClose}
              className="bg-[#1C2C5E] hover:bg-[#14213D] text-white text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-2"
            >
              Talk to Zoiko Rooms &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
