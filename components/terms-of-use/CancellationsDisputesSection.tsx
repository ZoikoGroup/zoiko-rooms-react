"use client";

import React from "react";

export default function CancellationsDisputesSection() {
  return (
    <section
      id="cancellations-and-disputes"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          10
        </span>
        <span>Cancellations, changes, refunds &amp; disputes</span>
      </h2>

      {/* "In short" Highlight Box with custom styling */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          In short: the applicable cancellation basis and any mandatory local
          rights govern refunds and disputes.
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        Cancellation and change rights depend on the specific booking, agreement
        type, and Regional Schedule that applied at the time. Where local law
        grants you a mandatory right that these Terms don't otherwise provide,
        that mandatory right prevails. Charge disputes are handled through the
        process described in our Payment Terms.
      </p>
    </section>
  );
}
