"use client";

import React from "react";

export default function WhyConsiderZoikoSection() {
  const cards = [
    {
      image: "/images/careers/3.png",
      title: "How teams work",
      description:
        "Cross-functional teams pair product, trust & safety, and operations closely — specific work arrangements are confirmed at the role level, not assumed company-wide.",
    },
    {
      image: "/images/careers/4.png",
      title: "Learning & growth",
      description:
        "We invest in role-specific onboarding and mentorship. We don't promise a fixed promotion timeline or budget — those vary by team and level.",
    },
    {
      image: "/images/careers/5.png",
      title: "What we're building",
      description: (
        <>
          A governed, evidence-based room-rental platform — see our{" "}
          <a
            href="#about"
            className="text-[#D91414] font-semibold hover:underline"
          >
            About page
          </a>{" "}
          for the full company mission and current milestones.
        </>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#FAF8F5]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        {/* Top Dark Banner Callout */}
        <div className="bg-[#182232] rounded-3xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white leading-tight max-w-md">
            What you see here reflects currently open, approved roles — nothing
            more.
          </h3>
          <p className="text-xs sm:text-sm text-[#919EAB] leading-relaxed font-normal max-w-xl">
            Compensation, benefits, and workplace type are shown only where a
            role explicitly discloses them. We don't promise remote flexibility,
            promotion timelines, or perks that don't apply to your specific
            role.
          </p>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          {/* Eyebrow Label */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-3">
            Why Consider Zoiko Rooms
          </p>

          {/* Main Title */}
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight mb-4">
            What it's like to work here
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            Only what applies to your specific role and location is shown at the
            job detail level — this section is general context, not a guarantee.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] rounded-2xl border border-[#E7DFD3] overflow-hidden flex flex-col shadow-xs transition-all hover:shadow-md"
            >
              {/* Card Image */}
              <div className="w-full h-48 bg-[#E7DFD3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#1C1917] mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
