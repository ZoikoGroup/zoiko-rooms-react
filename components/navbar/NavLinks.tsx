"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navSections } from "@/lib/nav-data";
import { easeOut } from "@/lib/motion";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";

export function NavLinks() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  useOnClickOutside(navRef, () => setOpenKey(null));

  return (
    <nav
      ref={navRef}
      className="hidden items-center lg:flex"
      onMouseLeave={() => setOpenKey(null)}
    >
      {navSections.map((section) => {
        const isOpen = openKey === section.key;
        return (
          <div
            key={section.key}
            className="relative shrink-0"
            onMouseEnter={() => setOpenKey(section.key)}
          >
            <button
              type="button"
              onClick={() => setOpenKey(isOpen ? null : section.key)}
              aria-expanded={isOpen}
              className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-navy/5 xl:px-3"
            >
              {section.label}
              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: easeOut }}
                  className="absolute left-0 top-full z-40 mt-2 w-64 rounded-2xl border border-black/5 bg-white p-2 shadow-xl"
                >
                  {section.links.map((link, i) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpenKey(null)}
                      className={`block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-brand-navy/5 hover:text-brand-navy ${
                        i === 0 ? "font-semibold text-brand-navy" : "text-neutral-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
