"use client";

import React from "react";

export default function UserContentIpSection() {
  return (
    <section
      id="reviews-content-and-ip"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          14
        </span>
        <span>Reviews, user content, IP &amp; platform licence</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          In short: you own your content, but you give us a licence to use it to
          run the platform, and reviews must be genuine.
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        You retain ownership of content you submit &mdash; listings, messages,
        reviews, photos &mdash; but grant Zoiko Rooms a licence to host,
        display, and use that content to operate and improve the platform.
        Reviews must reflect a genuine, eligible experience; fabricated or
        coordinated reviews are prohibited. Zoiko Rooms&apos; trademarks, platform
        design, and underlying software are our intellectual property, and
        automated scraping or copying of platform content is prohibited without
        permission.
      </p>
    </section>
  );
}
