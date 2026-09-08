"use client";

import React from "react";
import Image from "next/image";

export default function FeaturedStorySection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-10">
          {/* Eyebrow Label with Accent Color #D91414 */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-2">
            Featured
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
            Latest approved story
          </h2>
        </div>

        {/* Featured Story Banner Card */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg min-h-[400px] sm:min-h-[420px] flex items-center justify-center p-6 sm:p-12 text-center group cursor-pointer">
          {/* Background Image */}
          <Image
            src="/images/newsroom/bg.png"
            alt="Room Passport evidence tiers preview"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority
          />

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A10200D] to-[#0A1020E5]" />

          {/* Foreground Overlay Content */}
          <div className="relative z-10 max-w-2xl flex flex-col items-center text-white">
            {/* Category Pill Tag */}
            <span className="inline-block px-3 py-1 mb-5 rounded-full bg-[#EEF0F8] text-[10px] font-bold uppercase tracking-wider text-[#1C1917] backdrop-blur-xs">
              Product
            </span>

            {/* Article Headline */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
              Room Passport evidence tiers now show inspection recency at a
              glance
            </h3>

            {/* Subtitle / Teaser */}
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal mb-6 max-w-xl">
              A visible freshness indicator on every evidence tag helps seekers
              and providers see exactly how current a room's verification status
              is, without leaving the listing.
            </p>

            {/* Publication Date */}
            <p className="text-[11px] font-medium text-[#9EB3EE]">
              Published 2 Sep 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
