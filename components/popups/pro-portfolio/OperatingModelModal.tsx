"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface OperatingModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplorePortfolioStructure?: () => void;
}

interface BulletItem {
  boldTitle: string;
  description: string;
}

const hierarchyRules: BulletItem[] = [
  {
    boldTitle: "Stable identifiers:",
    description:
      "internal immutable IDs; public IDs and external references mapped separately.",
  },
  {
    boldTitle: "Parent-child integrity:",
    description:
      "no room without an approved parent property/unit context; no circular or orphaned relationships.",
  },
  {
    boldTitle: "Many-to-many relationships:",
    description:
      "provider, manager, owner, institution, channel and service relationships modeled separately with scope and dates.",
  },
  {
    boldTitle: "Legal and operational names:",
    description:
      "legal entity, public brand, property name, internal code and external system references are all preserved.",
  },
  {
    boldTitle: "Canonical identity rule:",
    description:
      "a property, room or bed must not receive a new identity merely because it enters another spreadsheet, channel, institution, integration, provider relationship or reporting structure.",
  },
];

export default function OperatingModelModal({
  isOpen,
  onClose,
  onExplorePortfolioStructure,
}: OperatingModelModalProps) {
  // Lock background scrolling and handle Escape key press
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
            className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#EAE6DF] shadow-2xl z-10 overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#F5EFE6] hover:bg-[#EAE6DF] text-[#14213D] flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="space-y-6 text-left">
              {/* Kicker & Title */}
              <div className="space-y-2 pr-8">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#C8202C] uppercase block">
                  OPERATING MODEL
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#101C33] leading-snug">
                  Portfolio hierarchy rules behind the operating view
                </h2>
              </div>

              {/* Bulleted Points */}
              <ul className="space-y-3 text-xs sm:text-sm text-[#5C5B57] leading-relaxed font-normal list-disc pl-5">
                {hierarchyRules.map((item) => (
                  <li key={item.boldTitle} className="pl-1">
                    <strong className="font-bold text-[#101C33]">
                      {item.boldTitle}
                    </strong>{" "}
                    {item.description}
                  </li>
                ))}
              </ul>

              {/* Bottom Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onExplorePortfolioStructure) {
                      onExplorePortfolioStructure();
                    } else {
                      onClose();
                    }
                  }}
                  className="bg-transparent hover:bg-white text-[#101C33] text-xs font-semibold px-6 py-3 rounded-full border border-[#101C33] transition-colors shadow-xs cursor-pointer"
                >
                  Explore Portfolio Structure
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
