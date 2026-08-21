"use client";

import React from "react";

interface NoticeCard {
  status: "ACTIVE" | "CONDITIONAL";
  title: string;
  subtitle: string;
}

const noticesData: NoticeCard[] = [
  {
    status: "ACTIVE",
    title: "Contracting entity",
    subtitle: "Effective 17 Aug 2026",
  },
  {
    status: "ACTIVE",
    title: "Housing & property",
    subtitle: "England private renting",
  },
  {
    status: "ACTIVE",
    title: "Consumer & marketplace",
    subtitle: "Effective 17 Aug 2026",
  },
  {
    status: "ACTIVE",
    title: "Payments & tax reporting",
    subtitle: "UK platform reporting",
  },
  {
    status: "ACTIVE",
    title: "Privacy & platform",
    subtitle: "Links to Privacy Notice",
  },
  {
    status: "ACTIVE",
    title: "Disputes & redress",
    subtitle: "England court & ADR routes",
  },
  {
    status: "CONDITIONAL",
    title: "Right to Rent",
    subtitle: "Applies to landlord workflow",
  },
  {
    status: "CONDITIONAL",
    title: "Online safety",
    subtitle: "Applies where in scope",
  },
];

export default function ApplicableNoticesSection() {
  return (
    <section className="w-full bg-[#FFFDF8] text-[#14213D] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Area */}
        <div className="space-y-2">
          {/* Red Kicker with Line Accent */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
              APPLICABLE NOTICES
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#101C33] leading-tight tracking-tight">
            Only what&apos;s active for your context.
          </h2>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {noticesData.map((notice, index) => {
            const isActive = notice.status === "ACTIVE";

            return (
              <div
                key={index}
                className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#EAE6DF] shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)] flex flex-col justify-between space-y-3"
              >
                {/* Status Indicator */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-[#3E7A5D]" : "bg-[#B0702A]"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase ${
                      isActive ? "text-[#3E7A5D]" : "text-[#B0702A]"
                    }`}
                  >
                    {notice.status}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#101C33] leading-snug">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-[#A39B8B] font-normal leading-normal">
                    {notice.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}