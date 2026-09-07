"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply?: () => void;
}

const responsibilities: string[] = [
  "Design and maintain services powering Room Passport evidence and availability.",
  "Partner with Trust & Safety and Product on data-quality and freshness guarantees.",
  "Participate in on-call rotation for platform reliability.",
];

const requirements: string[] = [
  "3+ years of backend engineering experience in a production environment.",
];

export default function JobDetailsModal({
  isOpen,
  onClose,
  onApply,
}: JobDetailsModalProps) {
  const router = useRouter();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
          {/* Semi-transparent Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#EAE6DF] shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F5F3EF] hover:bg-[#EAE6DF] text-[#101C33] flex items-center justify-center text-base transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Scrollable Content Container */}
            <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-left">
              {/* Badges */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#2D5B46] bg-[#EAF3ED] border border-[#D5E6DA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D5B46]" />
                  Open
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#855B28] bg-[#FDF8EE] border border-[#F5E6CC] border-dashed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#855B28]" />
                  Full-time
                </span>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-[25px] font-serif font-bold text-[#101C33] tracking-tight leading-snug">
                  Backend Engineer, Room Passport Platform
                </h2>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-[#101C33]">
                  <div className="flex items-center gap-1.5">
                    <span>📍</span>
                    <span>Berlin, Germany</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🏢</span>
                    <span>Hybrid</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>👥</span>
                    <span>Engineering</span>
                  </div>
                </div>
              </div>

              <hr className="border-[#EAE6DF]" />

              {/* Role Summary */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold tracking-wider text-[#9A9EA6] uppercase">
                  Role Summary
                </h3>
                <p className="text-sm sm:text-sm text-[#6B6F76] leading-relaxed">
                  You'll help build and scale the systems behind Room Passport
                  evidence, availability, and provider authority — the
                  foundation every other Zoiko Rooms surface depends on.
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold tracking-wider text-[#9A9EA6] uppercase">
                  Responsibilities
                </h3>
                <div className="space-y-2.5">
                  {responsibilities.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E6DFD3] text-[13px] text-[#16233F]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold tracking-wider text-[#8A8880] uppercase">
                  Requirements
                </h3>
                <div className="space-y-2.5">
                  {requirements.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E6DFD3] text-xs sm:text-sm text-[#16233F]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="p-6 sm:px-10 border-t border-[#EAE6DF] bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8A8880] font-medium">
                Requisition ID: REQ-2026-114
              </span>
              <button
                type="button"
                onClick={()=>router.push("https://app.zoikorooms.com/account/login")}
                className="w-full sm:w-auto bg-[#1C2C5E] hover:bg-[#101C33] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                Apply for this role <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
