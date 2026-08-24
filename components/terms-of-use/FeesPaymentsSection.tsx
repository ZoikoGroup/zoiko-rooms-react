"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeesPaymentsSection() {
  return (
    <section
      id="fees-and-payments"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          09
        </span>
        <span>Fees, payments, deposits &amp; payouts</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          In short: our Payment Terms govern the details &mdash; this clause
          just incorporates them.
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed mb-6">
        Fees, rent, deposits, taxes, payment methods, refunds and provider
        payouts are governed in detail by our Payment Terms, which are
        incorporated into these Terms by reference. The version of Payment Terms
        in effect at the time of a transaction applies to that transaction; we
        don&apos;t duplicate or re-charge amounts already correctly processed.
      </p>

      {/* Action Link */}
      <div>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#93321F] hover:underline"
        >
          <span>Read the full Payment Terms</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
