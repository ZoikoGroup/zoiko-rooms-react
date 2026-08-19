"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SubsidyAllowanceVoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTalkToZoiko?: () => void;
}

const exampleFlowSteps = [
  "Institution defines covered cost categories and amount/formula.",
  "Approval is authorized by a named decision owner.",
  "Participant sees contribution and their share before committing to payment.",
];

export default function SubsidyAllowanceVoucherModal({
  isOpen,
  onClose,
  onTalkToZoiko,
}: SubsidyAllowanceVoucherModalProps) {
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

          {/* Modal Header & Content */}
          <div className="p-6 sm:p-10 space-y-6 overflow-y-auto max-h-[85vh]">
            {/* Top Badges & Title Header */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
                DISTRIBUTION MODEL
              </span>

              {/* Institutional Model Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D5D8EE] bg-[#EEF1FA] text-[#1C2C5E] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#1C2C5E]" />
                Institutional model
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#14213D] pt-1">
                Subsidy / allowance / voucher
              </h2>
            </div>

            {/* Institution Role Block */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold tracking-wider text-[#8C9BB0] uppercase block">
                INSTITUTION ROLE
              </span>
              <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
                The institution contributes toward cost under current,
                authorized approval.
              </p>
            </div>

            {/* Participant Experience Block */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold tracking-wider text-[#8C9BB0] uppercase block">
                PARTICIPANT EXPERIENCE
              </span>
              <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
                Participants see exactly what&apos;s covered, what&apos;s
                excluded, and their own remaining share.
              </p>
            </div>

            {/* Yellow Limitation Banner */}
            <div className="bg-[#FAF0D9] border border-[#F3E2B8] rounded-xl p-3.5 sm:p-4 flex items-start gap-2.5">
              <span className="text-sm shrink-0 leading-none mt-0.5">⚠️</span>
              <p className="text-xs sm:text-[13px] font-medium text-[#8A6A24] leading-relaxed">
                <strong className="font-bold">Required limitation:</strong>{" "}
                Funding is not confirmed until current authorization completes.
              </p>
            </div>

            {/* Example Flow List */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] font-bold tracking-wider text-[#8C9BB0] uppercase block">
                EXAMPLE FLOW
              </span>

              <div className="space-y-2.5">
                {exampleFlowSteps.map((stepText) => (
                  <div
                    key={stepText}
                    className="bg-[#FAF8F5] border border-[#EAE6DF] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#1C2C5E] shrink-0" />
                    <p className="text-xs sm:text-sm font-medium text-[#14213D] leading-normal">
                      {stepText}
                    </p>
                  </div>
                ))}
              </div>
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
