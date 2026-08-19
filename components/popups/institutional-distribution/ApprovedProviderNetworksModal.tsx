"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ApprovedProviderNetworksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTalkToZoiko?: () => void;
}

export default function ApprovedProviderNetworksModal({
  isOpen,
  onClose,
  onTalkToZoiko,
}: ApprovedProviderNetworksModalProps) {
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
      {/* Backdrop Overlay (Click outside to close) */}
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

          {/* Modal Content Area */}
          <div className="p-5 sm:p-7 space-y-4">
            {/* Top Category Label & Title Header */}
            <div className="space-y-1.5 pr-6">
              <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
                CAPABILITY
              </span>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#14213D]">
                Approved provider networks
              </h2>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed font-normal">
              Approved provider networks let an institution work with a vetted
              set of providers under a framework or preferred-network
              relationship, with the same Room Passport evidence and authority
              checks as the open marketplace.
            </p>

            {/* Yellow Limitation Banner */}
            <div className="bg-[#FAF0D9] border border-[#F3E2B8] rounded-xl p-3 sm:p-3.5 flex items-start gap-2.5">
              <span className="text-sm shrink-0 leading-none mt-0.5">⚠️</span>
              <p className="text-xs sm:text-[13px] font-medium text-[#8A6A24] leading-relaxed">
                Network inclusion does not prove universal quality, compliance,
                safety, or room suitability.
              </p>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:px-7 sm:py-4 border-t border-[#EAE6DF] bg-white flex justify-end">
            <button
              type="button"
              onClick={onTalkToZoiko || onClose}
              className="bg-[#1C2C5E] hover:bg-[#14213D] text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-full transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-2"
            >
              Talk to Zoiko Rooms &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
