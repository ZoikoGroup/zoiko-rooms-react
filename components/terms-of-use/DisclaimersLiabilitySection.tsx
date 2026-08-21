"use client";

import React from "react";

export default function DisclaimersLiabilitySection() {
  return (
    <section
      id="disclaimers-and-liability"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          17
        </span>
        <span>Disclaimers &amp; limitations of liability</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          In short: we limit our liability where the law allows, but never try
          to waive rights that can't be waived.
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        To the extent permitted by applicable law, Zoiko Rooms disclaims
        warranties about the platform's uninterrupted operation and limits its
        liability for indirect or consequential loss. Nothing in these Terms
        attempts to exclude or limit liability that cannot lawfully be excluded
        or limited in your region, including mandatory consumer-protection
        rights.
      </p>
    </section>
  );
}
