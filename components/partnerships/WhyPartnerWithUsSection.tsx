"use client";

import React from "react";
import Image from "next/image";

export default function WhyPartnerWithUsSection() {
  const cards = [
    {
      title: "A verified housing marketplace",
      description:
        "Zoiko Rooms is built around evidence-based verification for rooms, providers, and renters — a foundation partners can build on rather than around.",
      image: "/images/partnerships/4.png",
    },
    {
      title: "Governed integration infrastructure",
      description:
        "Technical collaboration runs through the same scoped, auditable connection model our platform uses internally — never an informal side channel.",
      image: "/images/partnerships/5.png",
    },
    {
      title: "A transparent evaluation framework",
      description:
        "Every path goes through the same visible stages — no back-channel deals, no undisclosed criteria that change depending on who's asking.",
      image: "/images/partnerships/6.png",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start w-full mr-auto mb-12">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              Why Partner With Us
            </p>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[36px] max-w-3xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            What collaboration with Zoiko Rooms is built on.
          </h2>

          {/* Subtitle / Sub-description */}
          <p className="text-xs sm:text-sm text-[#78716C] max-w-xl leading-relaxed font-normal">
            These are the value themes we can stand behind today — not projected numbers or guaranteed outcomes.
          </p>
        </div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] rounded-2xl border border-[#E7DFD3] overflow-hidden shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                {/* Image Top Banner */}
                <div className="relative w-full aspect-16/9 bg-gray-200 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Text Content */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1917] leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}