"use client";

import React from "react";

export default function ListingsAndSearchSection() {
  return (
    <section
      id="listings-and-search"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          06
        </span>
        <span>Listings, search &amp; platform information</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          In short: listings must be accurate, and what you see in search isn&apos;t
          a guarantee it&apos;s still available.
        </p>
      </div>

      {/* Paragraph Content */}
      <div className="space-y-6 text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        <p>
          Providers are responsible for the accuracy of their listings &mdash;
          price basis, room type, availability, restrictions and charges. Zoiko
          Rooms doesn&apos;t independently verify every listing detail unless a
          specific verification tier states otherwise, and displayed
          availability can change before you complete a booking or application.
        </p>

        <p>
          Search results and rankings may reflect relevance, availability, your
          preferences, and other factors. Where applicable law requires
          disclosure of main ranking parameters, that disclosure is provided in
          the relevant product surface rather than duplicated in full here.
        </p>
      </div>
    </section>
  );
}
