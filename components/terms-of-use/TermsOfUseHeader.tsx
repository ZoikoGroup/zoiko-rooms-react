"use client";

import React from "react";

export default function TermsOfUseHeader() {
  return (
    <section className="w-full text-[#14213D] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-b border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Title & Subtitle */}
        <div className="space-y-3">
          {/* Red Kicker with Line Accent */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
              LEGAL
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#101C33] leading-tight tracking-tight">
            Terms of Use
          </h1>

          {/* Descriptive Body Text */}
          <p className="text-xs sm:text-sm text-[#5C5B57] font-normal leading-relaxed max-w-2xl">
            These Terms of Use govern your access to and use of Zoiko Rooms,
            including accounts, listings, applications, room transactions,
            communications and related platform services. The Zoiko Rooms entity
            and regional terms that apply to you depend on your country or
            region and the service you use.
          </p>
        </div>

        {/* Metadata Inline Row */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs font-mono text-[#5C5B57]">
            <div>
              <span className="font-bold text-[#101C33]">Effective:</span>{" "}
              <span>20 Apr 2026</span>
            </div>
            <div>
              <span className="font-bold text-[#101C33]">Last updated:</span>{" "}
              <span>5 Feb 2026</span>
            </div>
            <div>
              <span className="font-bold text-[#101C33]">Version:</span>{" "}
              <span>TOU-2026-02-05</span>
            </div>
          </div>

          {/* Explanatory Subtext */}
          <p className="text-[11px] text-[#93321F] font-mono leading-relaxed">
            Effective date and last-updated date are separate &mdash; a document
            can be updated before new obligations take effect.
          </p>
        </div>

        {/* "Applies with" Callout Box */}
        <div className="bg-[#EFE2C8] border border-[#E3DCCE] rounded-xl p-4 sm:p-5 max-w-3xl">
          <p className="text-xs text-[#5C574E] font-normal leading-relaxed">
            <strong className="font-bold text-[#101C33]">Applies with:</strong>{" "}
            Regional Schedule (England) +{" "}
            <a href="#" className="font-bold text-[#93321F] hover:underline">
              Payment Terms
            </a>{" "}
            +{" "}
            <a href="#" className="font-bold text-[#93321F] hover:underline">
              Community Standards
            </a>{" "}
            +{" "}
            <a href="#" className="font-bold text-[#93321F] hover:underline">
              Fair Housing &amp; Anti-Discrimination
            </a>{" "}
            + incorporated policies. Country or region:{" "}
            <strong className="font-bold text-[#101C33]">
              England, United Kingdom
            </strong>{" "}
            &mdash;{" "}
            <a href="#" className="font-bold text-[#93321F] hover:underline">
              Change
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
