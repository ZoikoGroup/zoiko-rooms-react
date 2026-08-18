"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ReferralInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTalkToZoiko?: () => void;
}

const exampleFlowSteps = [
  "Institution sends an invitation with a defined expiry.",
  "Participant opens the invitation and reviews visible data scope.",
  "Participant proceeds independently — or ignores it with no penalty.",
];

export default function ReferralInvitationModal({
  isOpen,
  onClose,
  onTalkToZoiko,
}: ReferralInvitationModalProps) {
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
          className="bg-[#FAF8F5] sm:bg-white rounded-3xl max-w-xl w-full text-[#14213D] shadow-2xl relative border border-[#EAE6DF] overflow-hidden flex flex-col cursor-default h-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-[#F3EFEA] hover:bg-[#EAE6DF] flex items-center justify-center text-[#555E68] hover:text-[#14213D] transition-colors cursor-pointer z-10"
          >
            &#x2715;
          </button>

          {/* Modal Header & Content */}
          <div className="p-5 sm:p-6 space-y-3.5">
            {/* Top Badges & Title Header */}
            <div className="space-y-1.5 pr-6">
              <span className="text-[10px] font-bold tracking-widest text-[#C8202C] uppercase block">
                DISTRIBUTION MODEL
              </span>

              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#D5D8EE] bg-[#EEF1FA] text-[#1C2C5E] text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C2C5E]" />
                  Institutional model
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#14213D] pt-0.5">
                Referral / invitation
              </h2>
            </div>

            {/* Institution Role Block */}
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold tracking-wider text-[#8C9BB0] uppercase block">
                INSTITUTION ROLE
              </span>
              <p className="text-xs text-[#555E68] leading-relaxed">
                The institution invites a person to search or begin a journey —
                a nudge, not a guarantee.
              </p>
            </div>

            {/* Participant Experience Block */}
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold tracking-wider text-[#8C9BB0] uppercase block">
                PARTICIPANT EXPERIENCE
              </span>
              <p className="text-xs text-[#555E68] leading-relaxed">
                Participants see the referral source, its expiry, what data
                becomes visible, and their alternatives.
              </p>
            </div>

            {/* Yellow Limitation Banner */}
            <div className="bg-[#FAF0D9] border border-[#F3E2B8] rounded-xl p-2.5 sm:p-3 flex items-start gap-2">
              <span className="text-xs shrink-0 leading-none mt-0.5">⚠️</span>
              <p className="text-[11px] sm:text-xs font-medium text-[#8A6A24] leading-relaxed">
                <strong className="font-bold">Required limitation:</strong> No
                room or outcome guarantee comes with a referral.
              </p>
            </div>

            {/* Example Flow List */}
            <div className="space-y-2 pt-0.5">
              <span className="text-[10px] font-bold tracking-wider text-[#8C9BB0] uppercase block">
                EXAMPLE FLOW
              </span>

              <div className="space-y-1.5">
                {exampleFlowSteps.map((stepText) => (
                  <div
                    key={stepText}
                    className="bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1C2C5E] shrink-0" />
                    <p className="text-xs font-medium text-[#14213D] leading-snug">
                      {stepText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-3.5 sm:px-6 sm:py-3.5 border-t border-[#EAE6DF] bg-white flex justify-end">
            <button
              type="button"
              onClick={onTalkToZoiko || onClose}
              className="bg-[#1C2C5E] hover:bg-[#14213D] text-white text-xs font-bold py-2.5 px-6 rounded-full transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-2"
            >
              Talk to Zoiko Rooms &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
