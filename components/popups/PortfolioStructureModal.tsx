"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface PortfolioStructureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreRoomPassports?: () => void;
}

interface BulletItem {
  boldTitle: string;
  description: string;
}

const portfolioStructureItems: BulletItem[] = [
  {
    boldTitle: "Organization / tenant:",
    description:
      "stable ID, legal/display name, tenant owner, data region, status.",
  },
  {
    boldTitle: "Provider:",
    description:
      "stable ID, provider type, authority scope, effective period, responsible role, status.",
  },
  {
    boldTitle: "Portfolio:",
    description:
      "stable ID, parent, owner, scope, currency/time-zone defaults, status.",
  },
  {
    boldTitle: "Property / building:",
    description:
      "stable ID, private address, public location rules, owner/operator, access, status.",
  },
  {
    boldTitle: "Unit / household:",
    description:
      "stable ID, parent property, occupancy/capacity, shared spaces, responsible role.",
  },
  {
    boldTitle: "Room:",
    description:
      "stable ID, parent, room type, provider authority, Passport version, status.",
  },
  {
    boldTitle: "Bed / space:",
    description:
      "stable ID, parent room, capacity, exclusivity/shared rules, occupancy, status.",
  },
];

export default function PortfolioStructureModal({
  isOpen,
  onClose,
  onExploreRoomPassports,
}: PortfolioStructureModalProps) {
  // Lock background scroll and handle Escape key
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
          {/* Backdrop */}
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
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#F5EFE6] hover:bg-[#EAE6DF] text-[#101C33] flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="space-y-6 text-left">
              {/* Header Group */}
              <div className="space-y-2 pr-8">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#C8202C] uppercase block">
                  PORTFOLIO STRUCTURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#101C33] leading-snug">
                  Canonical objects, from organization to bed
                </h2>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-xs sm:text-sm text-[#5C5B57] leading-relaxed font-normal list-disc pl-5">
                {portfolioStructureItems.map((item) => (
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
                    if (onExploreRoomPassports) {
                      onExploreRoomPassports();
                    } else {
                      onClose();
                    }
                  }}
                  className="bg-transparent hover:bg-white text-[#101C33] text-xs font-semibold px-6 py-3 rounded-full border border-[#101C33] transition-colors shadow-xs cursor-pointer"
                >
                  Explore Room Passports
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
