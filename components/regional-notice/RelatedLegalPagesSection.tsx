"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface LegalLink {
  title: string;
  href: string;
}

const legalLinks: LegalLink[] = [
  { title: "Terms of Use", href: "/terms-of-use" },
  { title: "Privacy Notice", href: "/privacy-notice" },
  { title: "Cookie Notice", href: "/cookie-notice" },
  { title: "Cookie Preferences", href: "#" },
  { title: "Fair Housing & Anti-Discrimination", href: "/fair-housing" },
  { title: "Community Standards", href: "/community-standards" },
  { title: "Payment Terms", href: "/payment-terms" },
  { title: "Your Privacy Choices", href: "/privacy-choices" },
];

export default function RelatedLegalPagesSection() {
  return (
    <section className="w-full bg-[#FFFDF8] text-[#14213D] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Red Kicker with Line Accent */}
        <div className="flex items-center gap-2">
          <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            RELATED LEGAL PAGES
          </span>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group bg-[#FFFDF9] rounded-2xl px-6 py-5 border border-[#EAE6DF] shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)] flex items-center justify-between gap-3 transition-all duration-200 hover:border-[#D1C9BC]"
            >
              <span className="text-xs sm:text-sm font-bold text-[#101C33] group-hover:text-[#C8202C] transition-colors">
                {link.title}
              </span>
              <ArrowRight className="w-4 h-4 text-[#101C33] group-hover:text-[#C8202C] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
