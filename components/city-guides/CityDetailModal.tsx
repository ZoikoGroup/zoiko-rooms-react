"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Flag, Check } from "lucide-react";
import { ImageFade } from "@/components/ui";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { useEscapeKey } from "@/lib/hooks/useEscapeKey";
import { easeOut } from "@/lib/motion";
import { cityTabs, type City, type CityTabKey } from "./data";

type CityDetailModalProps = {
  city: City | null;
  tab: CityTabKey;
  onTabChange: (tab: CityTabKey) => void;
  onClose: () => void;
  onOpenSafety: () => void;
};

export function CityDetailModal({ city, tab, onTabChange, onClose, onOpenSafety }: CityDetailModalProps) {
  const isOpen = city !== null;
  const [displayCity, setDisplayCity] = useState<City | null>(city);
  const [reported, setReported] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(panelRef, onClose);
  useLockBodyScroll(isOpen);
  useEscapeKey(onClose);

  // Keep showing the last city's content during the close animation instead
  // of blanking out — adjusted during render, per React's "storing
  // information from previous renders" pattern, rather than in an effect.
  if (city && city !== displayCity) {
    setDisplayCity(city);
  }

  useEffect(() => {
    if (!reported) return;
    const id = setTimeout(() => setReported(false), 2500);
    return () => clearTimeout(id);
  }, [reported]);

  return (
    <AnimatePresence>
      {isOpen && displayCity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-brand-ink/50 px-4 py-10 sm:py-16"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${displayCity.name} guide`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative h-[220px] w-full">
              <ImageFade src={displayCity.image} alt={displayCity.name} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020]/80 via-[#0A1020]/10 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-navy transition-colors hover:bg-white"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-5 left-6 text-white">
                <p className="font-heading text-2xl font-semibold sm:text-[28px]">{displayCity.name}</p>
                <p className="mt-1 text-sm text-white/80">
                  {displayCity.country} · {displayCity.reviewed} ·{" "}
                  {displayCity.status === "current" ? "Current" : "Review due"}
                </p>
              </div>
            </div>

            <div className="flex gap-1 overflow-x-auto border-b border-[#E9E0D3] px-4 pt-3 sm:px-6">
              {cityTabs.map((t) => {
                const isActive = t.key === tab;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => onTabChange(t.key)}
                    className={`whitespace-nowrap border-b-2 px-3 py-2.5 text-sm font-semibold transition-colors ${
                      isActive ? "border-brand-navy text-brand-navy" : "border-transparent text-neutral-500 hover:text-brand-navy"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <div className="max-h-[45vh] overflow-y-auto px-4 py-6 sm:px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: easeOut }}
                >
                  {tab === "overview" && (
                    <>
                      <p className="text-[15px] leading-relaxed text-neutral-600">{displayCity.overview}</p>
                      <p className="mt-4 text-xs text-neutral-400">{displayCity.sources}</p>
                    </>
                  )}

                  {tab === "basics" && (
                    <ul className="flex flex-col gap-2">
                      {displayCity.basics.map((item) => (
                        <li key={item} className="rounded-lg border border-[#E9E0D3] bg-brand-cream/60 px-4 py-3 text-sm text-brand-navy">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {tab === "costs" && (
                    <>
                      <div className="flex flex-col gap-2">
                        {displayCity.costs.map((row) => (
                          <div
                            key={row.label}
                            className="flex items-center justify-between gap-4 rounded-lg border border-[#E9E0D3] bg-brand-cream/60 px-4 py-3"
                          >
                            <span className="text-sm font-semibold text-brand-navy">{row.label}</span>
                            <span className="shrink-0 text-sm text-neutral-500">{row.value}</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs text-neutral-400">
                        Illustrative, sourced figures — not a live quote. Original currency preserved.
                      </p>
                    </>
                  )}

                  {tab === "transport" && <p className="text-[15px] leading-relaxed text-neutral-600">{displayCity.transport}</p>}
                  {tab === "international" && (
                    <p className="text-[15px] leading-relaxed text-neutral-600">{displayCity.international}</p>
                  )}
                  {tab === "accessibility" && (
                    <p className="text-[15px] leading-relaxed text-neutral-600">{displayCity.accessibility}</p>
                  )}

                  {tab === "safety" && (
                    <>
                      <ul className="flex flex-col gap-2">
                        {displayCity.safety.map((item) => (
                          <li key={item} className="rounded-lg border border-[#E9E0D3] bg-brand-cream/60 px-4 py-3 text-sm text-brand-navy">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-neutral-600">
                        See the full{" "}
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onOpenSafety();
                          }}
                          className="font-semibold text-brand-red hover:opacity-70"
                        >
                          Safety Guidance
                        </button>{" "}
                        for what to do next.
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap justify-end gap-2 border-t border-[#E9E0D3] px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setReported(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[#E9E0D3] bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5"
              >
                {reported ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    Reported
                  </>
                ) : (
                  <>
                    <Flag className="h-4 w-4" />
                    Report an issue
                  </>
                )}
              </button>
              <Link
                href="/find-a-room/search-rooms"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
              >
                Search current rooms here
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
