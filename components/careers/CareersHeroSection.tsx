"use client";

import React from "react";

export default function CareersHeroSection() {
  return (
    <section className="relative min-h-[560px] lg:min-h-[640px] bg-[#0D1526] flex items-center justify-center py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/careers/1.jpg"
          alt="Careers Background"
          className="w-full h-full opacity-20 object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start text-left text-white">
          {/* Tag / Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90 mb-6">
            <span>✨</span>
            <span>Careers</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-[46px] lg:text-[46px] font-serif font-bold text-white leading-[1.15] tracking-tight mb-5">
            Build what comes next with Zoiko Rooms.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-lg mb-8">
            Explore current, approved open roles and understand how our hiring
            process works — role requirements and work arrangements vary by
            position and location.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#open-roles"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#1A2E6E] hover:bg-[#102A5E] text-white text-xs font-semibold transition-all shadow-md"
            >
              Explore open roles
            </a>
            <a
              href="#how-hiring-works"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full hover:bg-white/15 border border-white/30 text-white text-xs font-semibold backdrop-blur-sm transition-all"
            >
              How hiring works
            </a>
          </div>
        </div>

        {/* Right Column: Hero Showcase Image */}
        <div className="lg:col-span-6 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
            <img
              src="/images/careers/2.png"
              alt="Zoiko Rooms Team Collaboration"
              className="w-full h-[320px] sm:h-[400px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
