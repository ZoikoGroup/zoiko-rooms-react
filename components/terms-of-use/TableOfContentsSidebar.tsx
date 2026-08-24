"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export interface TocItem {
  id: string;
  number: string;
  title: string;
}

export const tocItems: TocItem[] = [
  { id: "about-these-terms", number: "1", title: "About these Terms" },
  { id: "who-you-contract-with", number: "2", title: "Who you contract with" },
  {
    id: "eligibility-and-accounts",
    number: "3",
    title: "Eligibility & accounts",
  },
  { id: "platform-role", number: "4", title: "Platform role" },
  { id: "user-types", number: "5", title: "User types" },
  { id: "listings-and-search", number: "6", title: "Listings & search" },
  {
    id: "applications-and-agreements",
    number: "7",
    title: "Applications & agreements",
  },
  { id: "stays-and-occupancy", number: "8", title: "Stays & occupancy" },
  { id: "fees-and-payments", number: "9", title: "Fees & payments" },
  {
    id: "cancellations-and-disputes",
    number: "10",
    title: "Cancellations & disputes",
  },
  {
    id: "verification-and-safety",
    number: "11",
    title: "Verification & safety",
  },
  { id: "fair-housing", number: "12", title: "Fair housing" },
  { id: "community-standards", number: "13", title: "Community standards" },
  {
    id: "reviews-content-and-ip",
    number: "14",
    title: "Reviews, content & IP",
  },
  { id: "third-party-services", number: "15", title: "Third-party services" },
  { id: "suspension-and-appeals", number: "16", title: "Suspension & appeals" },
  {
    id: "disclaimers-and-liability",
    number: "17",
    title: "Disclaimers & liability",
  },
  {
    id: "law-disputes-and-rights",
    number: "18",
    title: "Law, disputes & rights",
  },
  {
    id: "changes-to-these-terms",
    number: "19",
    title: "Changes to these Terms",
  },
  { id: "contact-and-notices", number: "20", title: "Contact & notices" },
];

export default function TableOfContentsSidebar() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("about-these-terms");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for sticky top header

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(tocItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-10 space-y-8 font-sans antialiased">
      <div>
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#A39B8B] uppercase block mb-4">
          {t("ON THIS PAGE")}
        </span>

        {/* Vertical Stepper List */}
        <nav className="relative border-l border-[#EAE6DF] space-y-1">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`group relative flex items-baseline gap-2.5 pl-4 py-1 text-xs transition-colors duration-150 ${
                  isActive
                    ? "font-bold text-[#C8202C]"
                    : "text-[#5C5B57] hover:text-[#101C33]"
                }`}
              >
                {/* Active Red Accent Bar */}
                {isActive && (
                  <span className="absolute -left-[1.5px] top-0 bottom-0 w-[3px] bg-[#C8202C] rounded-full" />
                )}

                <span
                  className={`font-mono text-[11px] w-4 text-right flex-shrink-0 ${
                    isActive
                      ? "text-[#C8202C]"
                      : "text-[#A39B8B] group-hover:text-[#101C33]"
                  }`}
                >
                  {item.number}
                </span>

                <span className="truncate">{t(item.title)}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
