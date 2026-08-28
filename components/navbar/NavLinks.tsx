"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { navSections } from "@/lib/nav-data";
import { easeOut } from "@/lib/motion";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.98,
    transition: { duration: 0.15, ease: easeOut },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: easeOut } },
};

// The dropdown panel below is `position: fixed` and centered on screen so it
// never overflows off-screen for nav items near the edge — but that visually
// detaches it from the trigger's own bounding box, so a naive onMouseLeave
// (which fires on the mouse crossing that box, not on DOM nesting) closes it
// the instant the cursor travels from the trigger down into the panel. A
// short close delay, cancelled on re-entry into either the trigger or the
// panel, gives the cursor time to make that trip.
const CLOSE_DELAY_MS = 200;

export function NavLinks() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useLanguage();
  useOnClickOutside(navRef, () => setOpenKey(null));

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpenKey(null), CLOSE_DELAY_MS);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  return (
    <nav ref={navRef} className="hidden min-w-0 items-center justify-center overflow-x-auto 2xl:flex">
      {navSections.map((section) => {
        const isOpen = openKey === section.key;

        return (
          <div
            key={section.key}
            className="relative shrink-0"
            onMouseEnter={() => {
              cancelClose();
              setOpenKey(section.key);
            }}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setOpenKey(isOpen ? null : section.key)}
              aria-expanded={isOpen}
              className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-navy/5 xl:px-3"
            >
              {t(section.label)}
              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                  className="fixed left-1/2 top-16 z-40 mt-3 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl shadow-brand-navy/10 sm:top-14"
                >
                  <motion.div
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 p-6"
                  >
                    {section.columns.map((column, columnIndex) => (
                      <div
                        key={column.title}
                        className={`w-72 ${
                          columnIndex === 0 ? "pr-6" : "border-l border-black/10 pl-6"
                        }`}
                      >
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                          {t(column.title)}
                        </p>
                        <ul className="flex flex-col gap-0.5">
                          {column.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <motion.li key={item.label} variants={itemVariants}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpenKey(null)}
                                  className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-brand-red/5"
                                >
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1E7DA] text-[#A85A34] transition-colors duration-200 group-hover:bg-brand-red group-hover:text-white">
                                    <Icon className="h-4 w-4" />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block whitespace-nowrap text-sm font-semibold text-[#1B2438] transition-colors duration-200 group-hover:text-brand-red">
                                      {t(item.label)}
                                    </span>
                                    <span className="block text-xs text-neutral-500">
                                      {t(item.description)}
                                    </span>
                                  </span>
                                </Link>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex w-64 shrink-0 flex-col bg-[#1B2438] p-6"
                  >
                    <motion.p
                      variants={itemVariants}
                      className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#C99A78]"
                    >
                      {t("Find Your Fit")}
                    </motion.p>
                    <motion.p
                      variants={itemVariants}
                      className="font-heading text-lg font-medium text-white"
                    >
                      {t(section.fit.title)}
                    </motion.p>
                    <div className="mt-4 flex flex-col divide-y divide-white/10">
                      {section.fit.links.map((link) => (
                        <motion.div key={link.label} variants={itemVariants}>
                          <Link
                            href={link.href}
                            onClick={() => setOpenKey(null)}
                            className="group flex items-center justify-between gap-2 py-3 text-sm text-white/85 transition-colors hover:text-white"
                          >
                            {t(link.label)}
                            <ArrowRight className="h-4 w-4 shrink-0 text-white/50 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
