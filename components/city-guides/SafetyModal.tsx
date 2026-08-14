"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Flag } from "lucide-react";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { useEscapeKey } from "@/lib/hooks/useEscapeKey";
import { easeOut } from "@/lib/motion";

type SafetyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const patterns = [
  { title: "Payment redirection", description: "being asked to pay a new or \"updated\" account at the last minute." },
  { title: "Credential requests", description: "anyone asking for your password, bank login, or one-time codes." },
  { title: "Pressure to pay before viewing", description: "urgency framed as the only way to \"secure\" a room." },
  {
    title: "A listing that doesn't match on arrival",
    description: "different address, condition, or provider than declared.",
  },
  { title: "Unsafe or unaccompanied viewings", description: "any viewing that feels unsafe to attend." },
];

export function SafetyModal({ isOpen, onClose }: SafetyModalProps) {
  const [reported, setReported] = useState(false);
  const [wasOpen, setWasOpen] = useState(isOpen);
  const panelRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(panelRef, onClose);
  useLockBodyScroll(isOpen);
  useEscapeKey(onClose);

  // Reset the "reported" state once the modal closes — adjusted during
  // render, per React's "storing information from previous renders"
  // pattern, rather than in an effect.
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (!isOpen) setReported(false);
  }

  useEffect(() => {
    if (!reported) return;
    const id = setTimeout(() => setReported(false), 2500);
    return () => clearTimeout(id);
  }, [reported]);

  return (
    <AnimatePresence>
      {isOpen && (
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
            aria-label="Safety guidance"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 px-6 pt-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Safety Guidance</span>
                <h2 className="mt-1.5 font-heading text-xl font-medium text-brand-navy sm:text-2xl">
                  If something feels wrong, stop and check.
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-navy transition-colors hover:bg-black/5"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto px-6 py-5">
              <p className="text-sm leading-relaxed text-neutral-600">
                These are the most common patterns reported across city guides. None of them are ever
                a normal part of a legitimate Zoiko Rooms rental.
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {patterns.map((pattern) => (
                  <li key={pattern.title} className="rounded-lg border border-[#E9E0D3] bg-brand-cream/60 px-4 py-3 text-sm text-brand-navy">
                    <span className="font-semibold">{pattern.title}</span> — {pattern.description}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                If you&apos;re in immediate danger, contact local emergency services first. For anything
                else, report it so we can review and restrict the listing or account.
              </p>
            </div>

            <div className="flex flex-wrap justify-end gap-2 border-t border-[#E9E0D3] px-6 py-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[#E9E0D3] bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => setReported(true)}
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
              >
                {reported ? (
                  <>
                    <Check className="h-4 w-4" />
                    Reported
                  </>
                ) : (
                  <>
                    <Flag className="h-4 w-4" />
                    Report a concern
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
