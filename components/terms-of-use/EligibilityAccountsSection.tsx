"use client";

import React from "react";

export default function EligibilityAccountsSection() {
  return (
    <section
      id="eligibility-and-accounts"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading (Font Regular) */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          03
        </span>
        <span>Eligibility, accounts &amp; identity</span>
      </h2>

      {/* "In short" Highlight Box with custom styling */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          In short: you must meet the minimum age and give us accurate
          information, and you&apos;re responsible for your account.
        </p>
      </div>

      {/* Bullet Points List */}
      <ul className="space-y-4 text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed list-disc pl-5">
        <li>
          <strong className="font-bold text-[#101C33]">
            Minimum age and capacity.
          </strong>{" "}
          You must meet the minimum age required in your region and have the
          legal capacity to enter a binding agreement.
        </li>
        <li>
          <strong className="font-bold text-[#101C33]">
            Truthful information.
          </strong>{" "}
          Information you provide &mdash; identity, contact details, authority
          to list or apply &mdash; must be accurate and kept up to date.
        </li>
        <li>
          <strong className="font-bold text-[#101C33]">
            Account security.
          </strong>{" "}
          You&apos;re responsible for activity under your account and must keep your
          credentials secure; tell us promptly about unauthorized use.
        </li>
        <li>
          <strong className="font-bold text-[#101C33]">
            One person, one account.
          </strong>{" "}
          Except where a market or organization workflow explicitly allows
          shared or delegated access, accounts are personal to you.
        </li>
        <li>
          <strong className="font-bold text-[#101C33]">
            Identity and authority checks.
          </strong>{" "}
          We may verify your identity, or a provider&apos;s authority to list a room,
          appropriate to the risk and market involved.
        </li>
        <li>
          <strong className="font-bold text-[#101C33]">
            Organization users.
          </strong>{" "}
          If you use Zoiko Rooms on behalf of an organization, you confirm you
          have authority to bind that organization to these Terms.
        </li>
      </ul>
    </section>
  );
}
