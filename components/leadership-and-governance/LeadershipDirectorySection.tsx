"use client";

import React from "react";
import Image from "next/image";

export default function LeadershipDirectorySection() {
  const leaders = [
    {
      name: "Daniel Okafor",
      role: "Chief Executive Officer",
      description:
        "Overall direction and accountability for Zoiko Rooms' operations, governance, and public commitments.",
      tag: "Executive leadership",
    },
    {
      name: "Marcus Chen",
      role: "Chief Operating Officer",
      description:
        "Portfolio operations, provider relationships, and day-to-day platform delivery.",
      tag: "Operations & Portfolio",
    },
    {
      name: "Priya Nakamura",
      role: "Chief Trust & Safety Officer",
      description:
        "Verification standards, evidence review, and platform-wide safety accountability.",
      tag: "Trust, Safety & Compliance",
    },
    {
      name: "Elena Voss",
      role: "General Counsel",
      description:
        "Corporate governance, legal accountability, and regulatory relationships.",
      tag: "People & Legal",
    },
    {
      name: "Tomás Reyes",
      role: "Chief People Officer",
      description:
        "Workforce strategy, culture, and organizational accountability.",
      tag: "People & Legal",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Leadership Directory
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight mb-3">
            Current leadership team
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            Sample directory · demonstration data for this design. Production
            names, titles, and images resolve from the current approved
            Leadership Registry.
          </p>
        </div>

        {/* 6 Grid Cards Container (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Leader Cards (1 to 5) */}
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-6 shadow-xs flex flex-col items-start transition-all hover:shadow-md"
            >
              {/* Profile Image Container */}
              <div className="w-full relative aspect-4/3 rounded-xl overflow-hidden bg-[#F5F5F4] mb-2">
                <Image
                  src="/images/leadership/profile.png"
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-base font-bold text-[#1C1917] mb-0.5">
                {leader.name}
              </h3>
              <p className="text-xs font-semibold text-[#1E3A8A] mb-3">
                {leader.role}
              </p>

              {/* Description */}
              <p className="text-xs text-[#78716C] leading-relaxed font-normal mb-5 flex-1">
                {leader.description}
              </p>

              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEBE2] text-[#9C9588] text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9C9588]" />
                {leader.tag}
              </div>
            </div>
          ))}

          {/* Special CTA Card (Slot 6) */}
          <div className="bg-white rounded-2xl border border-[#E7E5E4] p-8 shadow-xs flex flex-col items-center justify-center text-center min-h-[320px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1917] mb-2">
              Looking for a specific role?
            </h3>
            <p className="text-xs text-[#78716C] leading-relaxed font-normal mb-6 max-w-[220px]">
              Not every accountable role has a public profile. Reach the right
              team through our approved contact routes.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#1C1917] text-[#1C1917] font-semibold text-xs hover:bg-[#1C1917] hover:text-white transition-colors"
            >
              Contact Zoiko Rooms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
