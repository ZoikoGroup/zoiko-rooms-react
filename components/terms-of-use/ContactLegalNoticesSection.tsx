"use client";

import React from "react";

export default function ContactLegalNoticesSection() {
  return (
    <section
      id="contact-and-notices"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          20
        </span>
        <span>Contact, legal notices &amp; language</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          In short: here's how to reach us, and which language version controls.
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed mb-8">
        Legal notices and formal correspondence should be sent to the contact
        details in Clause 2, or through the Regional Legal Notices page for your
        market. These Terms are drafted in English; where a translation is
        provided for convenience, the English version controls in the event of a
        conflict, unless a Regional Schedule states otherwise.
      </p>

      {/* Contact Button */}
      <div>
        <a
          href="#"
          className="inline-block px-5 py-2.5 rounded-full border border-[#101C33] text-sm font-bold text-[#101C33] transition-colors hover:bg-[#101C33] hover:text-white"
        >
          Contact Legal / Get help
        </a>
      </div>
    </section>
  );
}
