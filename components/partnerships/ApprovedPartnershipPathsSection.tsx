"use client";

import React from "react";
import Image from "next/image";

export default function ApprovedPartnershipPathsSection() {
  const paths = [
    {
      badge: "OPEN",
      high: false,
      title: "Institutional & Relocation Partners",
      description:
        "For universities, employers, and healthcare systems placing people into verified housing through Zoiko Rooms Pro's institutional distribution tools.",
      bestFit:
        "organizations that regularly place students, staff, or clinicians into housing near a campus or site.",
      prerequisites:
        "confirmed institutional need for recurring room placement. Specific onboarding criteria are confirmed during evaluation.",
      primaryAction: "Start interest form",
      secondaryAction: "Learn about Institutional Programs →",
      secondaryLink: "#institutional-programs",
      image: "/images/partnerships/7.png",
    },
    {
      badge: "OPEN",
      high: false,
      title: "Technology & Integration Partners",
      description:
        "For companies building on or connecting to Zoiko Rooms through the governed integrations & API platform — property, availability, verification, or payments systems.",
      bestFit:
        "teams with an existing housing, PMS, payments, or identity system that needs a scoped, auditable connection.",
      prerequisites:
        "a defined integration purpose and the ability to operate within our authorization and data-governance model.",
      primaryAction: "Start interest form",
      image: "/images/partnerships/8.png",
    },
    {
      badge: "OPEN",
      high: false,
      title: "Property & Portfolio Partners",
      description:
        "For letting agents, property managers, and portfolio operators who want to list verified rooms at scale through Zoiko Rooms Pro.",
      bestFit:
        "organizations managing multiple properties or rooms who need governed listing and compliance tools, not a single manual listing.",
      prerequisites:
        "lawful authority to list the relevant properties. Portfolio size and market criteria are confirmed during evaluation, not fixed in advance.",
      primaryAction: "Start interest form",
      secondaryAction: "See Zoiko Rooms Pro →",
      secondaryLink: "#zoiko-rooms-pro",
      image: "/images/partnerships/9.png",
    },
    {
      badge: "SUBJECT TO REVIEW",
      high: true,
      title: "General Partnership Interest",
      description:
        "For collaboration ideas that don't fit the categories above — we won't invent a category to fit your pitch, but we will still take a look.",
      bestFit:
        "anyone with a genuine collaboration idea relevant to housing, relocation, or the Zoiko Rooms platform.",
      prerequisites:
        "none fixed in advance — every general inquiry goes through the same initial review stage described below.",
      primaryAction: "Start interest form",
      image: "/images/partnerships/ten.png",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#f6efe3]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start w-full max-w-2xl mr-auto mb-12">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              Approved Partnership Paths
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            Choose the path that matches what you're building.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            These are the relationship categories currently open for evaluation.
            If none of them fit, use the general partnership interest path
            instead of guessing at a category that doesn't exist.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] rounded-3xl border border-[#E7DFD3] overflow-hidden shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                {/* Header Image Box with Badge */}
                <div className="relative w-full h-48 sm:h-56 bg-gray-200 overflow-hidden">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Status Badge */}
                  <span
                    className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${path.high ? "bg-[#F3E6C9] text-[#A8721F]" : "bg-[#E1EEE5] text-[#3E7A5D]"} text-[#1C1917] backdrop-blur-xs border border-black/5`}
                  >
                    {path.badge}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1917] mb-3">
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal mb-6">
                    {path.description}
                  </p>

                  {/* Highlight Box for Best Fit & Prerequisites */}
                  <div className="bg-[#F2DED2] rounded-xl p-4 sm:p-5 space-y-3 mb-6">
                    <p className="text-xs text-[#78716C] leading-relaxed">
                      <strong className="text-[#1C1917] font-semibold">
                        Best fit:
                      </strong>{" "}
                      {path.bestFit}
                    </p>
                    {/* <p className="text-xs text-[#78716C] leading-relaxed">
                      <strong className="text-[#1C1917] font-semibold">
                        Prerequisites:
                      </strong>{" "}
                      {path.prerequisites}
                    </p> */}
                  </div>
                  <p className="text-xs text-[#78716C] leading-relaxed">
                    <strong className="text-[#1C1917] font-semibold">
                      Prerequisites:
                    </strong>{" "}
                    {path.prerequisites}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    path.badge === "SUBJECT TO REVIEW"
                      ? "border border-[#182232] text-[#182232] bg-transparent hover:bg-[#182232] hover:text-white"
                      : "bg-[#182232] text-white hover:bg-[#0f172a]"
                  }`}
                >
                  {path.primaryAction}
                </button>

                {"secondaryAction" in path && path.secondaryAction && (
                  <a
                    href={path.secondaryLink}
                    className="text-xs font-semibold text-[#1C1917] hover:text-[#D91414] transition-colors"
                  >
                    {path.secondaryAction}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
