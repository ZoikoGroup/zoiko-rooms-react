"use client";

import React from "react";
import Image from "next/image";

export default function PartnershipsHeroSection() {
  return (
    <div className="flex items-center justify-center py-12 md:py-16 text-[#1C1917] bg-[#f6efe3]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        <div className="overflow-hidden w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] p-6 sm:p-10 lg:p-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start">
              {/* Eyebrow Label with Accent Color #D91414 */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-0.5 bg-[#D91414]" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
                  Partnerships
                </p>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] leading-tight tracking-tight mb-5">
                Build meaningful partnerships with Zoiko Rooms.
              </h1>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal mb-8 max-w-lg">
                Zoiko Rooms welcomes approved forms of collaboration across
                housing, technology, and institutional relocation — evaluated
                openly, with clear fit and clear boundaries.
              </p>

              {/* Primary Action Button */}
              <a
                href="#partnership-paths"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0E2F73] text-white font-semibold text-xs sm:text-sm hover:bg-[#0f172a] transition-colors shadow-xs"
              >
                Explore partnership paths
              </a>
            </div>

            {/* Right Multi-Image Grid Layout */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-3 h-[290px] sm:h-[290px] w-full">
              {/* Large Left Vertical Image */}
              <div className="col-span-7 relative h-full rounded-2xl overflow-hidden shadow-xs">
                <Image
                  src="/images/partnerships/1.png"
                  alt="Business partners discussing collaboration outdoors"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Right Column Stack (2 Images) */}
              <div className="col-span-5 grid grid-rows-2 gap-3 h-full">
                {/* Top Right Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xs">
                  <Image
                    src="/images/partnerships/2.png"
                    alt="Furnished room interior"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Bottom Right Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xs">
                  <Image
                    src="/images/partnerships/3.png"
                    alt="Handing over keys for new housing"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
