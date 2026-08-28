"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { navSections, languageOptions, currencyOptions } from "@/lib/nav-data";
import { Button } from "@/components/ui";
import { useSearchModal } from "@/components/search";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { NavPillDropdown } from "./NavPillDropdown";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { open: openSearch } = useSearchModal();
  const { language, setLanguage, t } = useLanguage();
  useLockBodyScroll(isOpen);

useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount flag to gate the createPortal call, not a render loop
  setMounted(true);
}, []);

  const menu = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-brand-ink/40"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-brand-cream p-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-xl text-brand-navy">{t("Menu")}</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-brand-navy/5"
              >
                <X className="h-6 w-6 text-brand-navy" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                openSearch();
                setIsOpen(false);
              }}
              className="mt-6 flex items-center gap-2 rounded-full border border-brand-navy/10 px-4 py-3 text-sm font-medium text-brand-navy"
            >
              <Search className="h-4 w-4" /> {t("Search rooms")}
            </button>

            <div className="mt-6 flex flex-col divide-y divide-brand-navy/10">
              {navSections.map((section) => {
                const isSectionOpen = openKey === section.key;
                return (
                  <div key={section.key} className="py-2">
                    <button
                      type="button"
                      onClick={() => setOpenKey(isSectionOpen ? null : section.key)}
                      aria-expanded={isSectionOpen}
                      className="flex w-full items-center justify-between py-2 text-left text-base font-medium text-brand-navy"
                    >
                      {t(section.label)}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isSectionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isSectionOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: easeOut }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pb-2 pl-2">
                            {section.columns.flatMap((column) => column.items).map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg px-2 py-2 text-sm text-neutral-600 hover:bg-brand-navy/5"
                              >
                                {t(item.label)}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-brand-navy/10 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                {t("Preferences")}
              </span>
              <div className="flex items-center gap-1.5">
                <NavPillDropdown
                  storageKey="zoiko-language"
                  ariaLabel="Select language"
                  options={languageOptions}
                  value={language}
                  onSelect={setLanguage}
                />
                <NavPillDropdown storageKey="zoiko-currency" ariaLabel="Select currency" options={currencyOptions} />
              </div>
            </div>

            <Button
              href="#"
              variant="secondary"
              className="mt-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              {t("Sign in")}
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="2xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-navy/5"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Portaled to <body> — the sticky header's backdrop-blur creates a
          containing block for `fixed` descendants, which would clip this panel. */}
      {mounted && createPortal(menu, document.body)}
    </div>
  );
}
