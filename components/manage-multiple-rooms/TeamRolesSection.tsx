"use client";

import React from "react";

export default function TeamRolesSection() {
  const cards = [
    {
      title: "Multiple team members",
      description:
        "Role-based access to an exact tenant, portfolio, property, room, or program scope.",
    },
    {
      title: "Multiple providers",
      description:
        "Provider authority stays separate from organization access and operational delegation.",
    },
    {
      title: "Approvals & exports",
      description:
        "High-impact actions may require Action Review; export rights are separate from view rights.",
    },
    {
      title: "Elevated access & offboarding",
      description:
        "Just-in-time access is bounded, attributable, and audited. Offboarding never orphans rooms or cases.",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12 lg:p-16 antialiased text-[#111827]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Side: Image with rounded corners */}
        <div className="lg:col-span-5 w-full overflow-hidden">
          <img
            src="/images/multiple/1.png"
            alt="Luxury bedroom interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content & Cards */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Top Tagline */}
          <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-3">
            TEAM, ROLES &amp; AUTHORITY
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] tracking-tight leading-[1.2] mb-8">
            Everyone gets exactly the access their role needs — nothing more.
          </h2>

          {/* Feature Cards List */}
          <div className="w-full flex flex-col gap-3.5">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E7EB] shadow-xs flex items-start gap-3.5"
              >
                {/* Blue bullet dot */}
                <span className="w-2 h-2 rounded-full bg-[#0F2D6B] mt-2 shrink-0" />
                <div className="flex flex-col">
                  <h3 className="font-bold text-[15px] text-[#1B2539]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#6B675F] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
