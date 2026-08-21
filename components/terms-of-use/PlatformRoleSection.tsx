"use client";

import React from "react";

export default function PlatformRoleSection() {
  return (
    <section
      id="platform-role"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          04
        </span>
        <span>What Zoiko Rooms does &mdash; and does not do</span>
      </h2>

      {/* "In short" Highlight Box with custom styling */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          In short: we're a platform that connects renters and providers &mdash;
          we're not your landlord, agent, or insurer.
        </p>
      </div>

      {/* Paragraph Content */}
      <div className="space-y-6 text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        <p>
          Zoiko Rooms operates a marketplace that helps room seekers and
          providers find each other, communicate, apply, agree terms and
          transact. Unless a specific product states otherwise, Zoiko Rooms is
          not a party to the tenancy, licence or occupancy agreement between a
          provider and a renter, and does not act as a real-estate broker,
          letting agent, insurer, or law firm.
        </p>

        <p>
          We don't guarantee that any listing, room, or provider will remain
          available, that a transaction will complete, or that a stay will meet
          your expectations. Verification features described elsewhere describe
          what was specifically checked &mdash; they are not a general safety or
          quality guarantee.
        </p>
      </div>
    </section>
  );
}
