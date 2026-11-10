"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Flame, X } from "lucide-react";

const SHOW_DELAY_MS = 1200;

const HIGHLIGHTS = [
  "20% off all bookings, Nov 27 – 30",
  "Zero booking fees when confirmed before Nov 30",
  "Promo code BF20 applied automatically at checkout",
] as const;

export function BlackFridayPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
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
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md cursor-pointer"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-195 cursor-default rounded-[28px] bg-gradient-to-br from-[#e0392d] via-[#e0b062] to-[#e0392d] p-[2px]"
          >
            <div className="relative grid grid-cols-1 overflow-hidden rounded-[26px] bg-[#0d1220] text-white sm:grid-cols-2">
              {/* Ambient glow blobs */}
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#e0392d]/30 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#e0b062]/25 blur-3xl" />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Left: image panel */}
              <div className="relative hidden min-h-75 sm:block">
                <Image
                  src="/images/black/1.png"
                  alt="Renter settling into a verified Zoiko Rooms listing"
                  fill
                  sizes="(min-width: 640px) 330px, 0px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-[#0d1220]/10 to-transparent" />

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px 0px rgba(224,57,45,0.0)",
                      "0 0 24px 4px rgba(224,57,45,0.55)",
                      "0 0 0px 0px rgba(224,57,45,0.0)",
                    ],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-4 top-4 -rotate-3 rounded-xl border-2 border-[#e0392d] bg-[#0d1220]/95 px-4 py-2.5 text-center"
                >
                  <p className="flex items-center justify-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#e0392d]">
                    <Flame className="h-3 w-3" />
                    Black Friday
                  </p>
                  <p className="text-2xl font-extrabold leading-7">20% OFF</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#e0b062]">
                    Nov 27 – 30
                  </p>
                </motion.div>
              </div>

              {/* Right: content panel */}
              <div className="relative flex flex-col justify-center gap-4 p-6 sm:p-8">
                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e0392d]/40 bg-[#e0392d]/10 px-3.5 py-1.5 text-xs font-semibold text-[#ff8a80]">
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#3ddc84]" />
                  Black Friday Special · Ends Soon
                </p>

                <h2 className="font-serif text-3xl font-bold leading-tight sm:text-[34px]">
                  Find the room.{" "}
                  <span className="bg-gradient-to-r from-[#e0b062] to-[#f3d08c] bg-clip-text text-transparent">
                    Feel at home.
                  </span>
                </h2>

                <p className="text-sm leading-relaxed text-white/70">
                  Secure a verified room backed by transparent evidence — and save
                  20% site-wide while Black Friday rates last.
                </p>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-sm text-white/40 line-through">$29/mo</span>
                  <ArrowRight className="h-3.5 w-3.5 text-white/40" />
                  <span className="text-lg font-extrabold text-[#e0b062]">$23.20/mo</span>
                  <span className="ml-auto rounded-full bg-[#3ddc84]/15 px-2.5 py-1 text-[11px] font-bold text-[#3ddc84]">
                    SAVE 20%
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {HIGHLIGHTS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0392d]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px 0px rgba(224,57,45,0.0)",
                      "0 0 28px 2px rgba(224,57,45,0.5)",
                      "0 0 0px 0px rgba(224,57,45,0.0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-1 rounded-xl"
                >
                  <Link
                    href="/black-friday"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-center gap-2 rounded-xl bg-[#e0392d] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c42f24]"
                  >
                    Claim BF Deal
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
