"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Search, X } from "lucide-react";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { useEscapeKey } from "@/lib/hooks/useEscapeKey";
import { easeOut } from "@/lib/motion";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const popularSearches = [
  "New York, NY",
  "Boston, MA",
  "San Francisco, CA",
  "Austin, TX",
  "Rooms near universities",
  "Healthcare housing",
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useOnClickOutside(panelRef, onClose);
  useLockBodyScroll(isOpen);
  useEscapeKey(onClose);

  useEffect(() => {
    if (isOpen) {
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
    // Clear query on close - deferred to avoid setState in effect warning
    setTimeout(() => setQuery(""), 0);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center bg-brand-ink/50 px-4 pt-24 sm:pt-32"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search rooms"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
          >
            <div className="flex items-center gap-3 rounded-full border border-black/10 px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-brand-navy" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search by city, university, or neighborhood"
                className="w-full bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400 sm:text-base"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-brand-navy/5 hover:text-brand-navy"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                Popular searches
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setQuery(item)}
                    className="flex items-center gap-1.5 rounded-full bg-brand-navy/5 px-3 py-1.5 text-sm text-brand-navy transition-colors hover:bg-brand-navy/10"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
