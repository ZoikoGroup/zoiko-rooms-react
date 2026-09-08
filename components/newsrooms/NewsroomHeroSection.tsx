"use client";

import React from "react";
import Image from "next/image";

export default function NewsroomHeroSection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#1C1917]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#FBF6ED] to-[#F3E9DA] rounded-3xl overflow-hidden shadow-xs w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] sm:min-h-[460px]">
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start">
              {/* Eyebrow Label with Accent Color #D91414 */}
              <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-3">
                Newsroom
              </p>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-[38px] font-serif font-bold text-[#16233F] leading-tight tracking-tight mb-5">
                News and updates from Zoiko Rooms.
              </h1>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal mb-8 max-w-lg">
                The official destination for approved Zoiko Rooms announcements
                — product updates, company news, safety and trust improvements,
                and partnerships, with publication dates and correction status
                shown where applicable.
              </p>

              {/* Primary Action Button */}
              <a
                href="/news"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1E3A8A] text-white font-semibold text-xs sm:text-sm hover:bg-[#152C6F] transition-colors shadow-xs"
              >
                Browse latest news
              </a>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full w-full">
              <Image
                src="/images/newsroom/hero.png"
                alt="Newsroom monitoring center with live displays"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
