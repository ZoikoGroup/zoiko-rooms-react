"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface EntityRow {
  label: string;
  value: string;
  isLink?: boolean;
  href?: string;
}

const entityRows: EntityRow[] = [
  {
    label: "Contracting entity",
    value: "Zoiko Rooms UK Ltd.",
  },
  {
    label: "Trading / brand name",
    value: "Zoiko Rooms",
  },
  {
    label: "Registered office",
    value: "London, United Kingdom",
  },
  {
    label: "Platform role",
    value: "Online platform — intermediary",
  },
  {
    label: "Payment services provided by",
    value: "Zoiko Payments Europe Ltd. (authorized PSP)",
  },
  {
    label: "Legal & support contact",
    value: "legal@zoikorooms.example",
    isLink: true,
    href: "mailto:legal@zoikorooms.example",
  },
];

export default function WhoYouContractWithSection() {
  return (
    <section className="w-full text-[#14213D] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="space-y-3">
          {/* Red Kicker with Line Accent */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
              WHO YOU CONTRACT WITH
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#101C33] leading-tight tracking-tight">
            One page, several entities &mdash; kept distinct.
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-[#5C5B57] font-normal leading-relaxed max-w-155">
            Your Zoiko Rooms platform services for this transaction are provided
            by{" "}
            <span className="font-semibold text-[#101C33]">
              the verified legal entity below
            </span>
            . Where the brand owner, operator, and payment provider differ, we
            show each separately.
          </p>
        </div>

        {/* Card Container with Figma Dual Drop Shadow */}
        <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)]">
          <div className="divide-y divide-dashed divide-[#E2DCD1]">
            {entityRows.map((row, index) => (
              <div
                key={index}
                className="py-3.5 sm:py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
              >
                {/* Left Label */}
                <span className="text-xs sm:text-sm text-[#948872] font-normal">
                  {row.label}
                </span>

                {/* Right Value */}
                {row.isLink ? (
                  <a
                    href={row.href}
                    className="text-xs sm:text-sm font-bold text-[#101C33] hover:text-[#C8202C] transition-colors text-left sm:text-right"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="text-xs sm:text-sm font-bold text-[#101C33] text-left sm:text-right">
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note Box */}
        <div className="bg-[#EFE2C8] rounded-xl p-4 sm:px-5 sm:py-3.5">
          <p className="text-xs text-[#5E5445] font-normal leading-relaxed">
            Where more than one entity is involved, each plays a distinct legal
            role &mdash; this page never uses an ambiguous &quot;we&quot; to
            cover all of them at once.
          </p>
        </div>

        {/* Terms Link */}
        <div className="pt-1">
          <a
            href="/legal/terms-of-use"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#93321F] hover:underline"
          >
            <span>View Terms of Use</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
