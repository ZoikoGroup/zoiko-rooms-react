"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface NoticeCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const cardsData: NoticeCard[] = [
  {
    title: "Consumer & marketplace",
    description:
      "Hosts are shown as either a private individual or a trader — never presented as one when they're the other. Pricing and pre-contract information follow UK consumer-protection pricing controls.",
    linkText: "View consumer notice",
    href: "#",
  },
  {
    title: "Payments & tax reporting",
    description:
      "In some markets, platform operators are required to collect, verify and report information about hosts or rental income to tax authorities. This does not determine your personal tax liability.",
    linkText: "View Payment Terms",
    href: "/legal/payment-terms",
  },
  {
    title: "Privacy & online platform",
    description:
      "Local controller and supervisory-authority details, plus links to the rights and choices workflow — handled on their own dedicated pages, not duplicated here.",
    linkText: "Privacy Notice · Your Privacy Choices",
    href: "/legal/privacy-notice",
  },
];

export default function ConsumerPaymentsPrivacySection() {
  return (
    <section className="w-full text-[#14213D] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="space-y-2">
          {/* Red Kicker with Line Accent */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
              CONSUMER, PAYMENTS &amp; PRIVACY NOTICES
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#101C33] leading-tight tracking-tight max-w-xl">
            Three more things worth knowing before you transact.
          </h2>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-[#EAE6DF] shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#101C33]">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[#7A7467] font-normal leading-relaxed">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C2C1D] hover:underline"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer Box */}
        <div className="bg-[#F2DED2] rounded-[9px] p-4 sm:px-6 sm:py-4">
          <p className="text-[14.5px] text-[#93321F] font-normal leading-relaxed">
            Platform reporting is a disclosure about how Zoiko Rooms handles
            host information with tax authorities &mdash; it is not tax advice,
            and it doesn&apos;t mean any tax has been settled on your behalf.
          </p>
        </div>
      </div>
    </section>
  );
}
