"use client";

import React from "react";

export default function MediaResourcesSection() {
  const cards = [
    {
      icon: "🖼️",
      title: "Brand assets",
      description: "Approved logos and usage guidelines for editorial use.",
      actionText: "Open assets",
      link: "#brand-assets",
    },
    {
      icon: "📄",
      title: "Press releases",
      description: "Approved public release documents, where available.",
      actionText: "View releases",
      link: "#press-releases",
    },
    {
      icon: "✉️",
      title: "Press contact",
      description: "Reach the Zoiko Rooms communications team for inquiries.",
      actionText: "Contact us",
      link: "#press-contact",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-12">
          {/* Eyebrow Label with Accent Color #D91414 */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Media Resources
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
            For press and media inquiries
          </h2>
        </div>

        {/* 3 Media Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7E5E4] p-8 shadow-xs flex flex-col items-center text-center transition-all hover:shadow-md"
            >
              {/* Icon */}
              <div className="text-2xl mb-4" aria-hidden="true">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#1C1917] mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-[#6B6F76] leading-relaxed font-normal mb-4">
                {card.description}
              </p>

              {/* Action Button */}
              <a
                href={card.link}
                className="mt-auto inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#E7E5E4] bg-white text-xs font-bold text-[#1C1917] hover:bg-[#FAF6F0] transition-colors"
              >
                {card.actionText} <span className="text-xs">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Dark Callout / CTA Banner */}
        <div className="w-full bg-[#16233F] rounded-3xl p-10 sm:p-14 text-center text-white flex flex-col items-center shadow-md">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight mb-3">
            Stay current with approved Zoiko Rooms news.
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal mb-8 max-w-xl">
            Browse the latest stories, filter by topic, or check the archive for
            previous announcements.
          </p>
          <a
            href="#latest-news"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#182232] font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors shadow-xs"
          >
            Browse Latest News
          </a>
        </div>
      </div>
    </div>
  );
}
