"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ResourceLink {
  title: string;
  href: string;
}

const resourceLinks: ResourceLink[] = [
  {
    title: "Official England private-renting guidance",
    href: "https://www.gov.uk/private-renting",
  },
  {
    title: "Right to Rent — eligibility & checking notice",
    href: "https://www.gov.uk/check-tenant-right-to-rent-documents",
  },
  {
    title: "Local authority & HMO licensing finder",
    href: "https://www.gov.uk/house-in-multiple-occupation-licence",
  },
  {
    title: "Deposits, holding payments & rent in advance",
    href: "https://www.gov.uk/tenancy-deposit-protection",
  },
];

export default function HousingPropertyNoticesSection() {
  return (
    <section className="w-full bg-[#FFFDF8] text-[#14213D] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="space-y-2">
          {/* Red Kicker with Line Accent */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#C8202C]"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
              HOUSING &amp; PROPERTY NOTICES
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#101C33] leading-tight tracking-tight">
            Rules that follow the room, not the browser.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#5C5B57] font-normal leading-relaxed">
            Housing rules can depend on where the room is located, even if you
            live elsewhere.
          </p>
        </div>

        {/* Feature Card Container */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#EAE6DF] shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src="/images/regional-notice/left.png"
                alt="Victorian residential housing architecture in London"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              {/* Description Block */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#101C33]">
                  England &mdash; private renting framework
                </h3>
                <p className="text-xs sm:text-sm text-[#7A7467] font-normal leading-relaxed">
                  England distinguishes assured tenancies, lodger or licence
                  arrangements, and excluded occupancy &mdash; not one generic
                  &quot;tenancy&quot; label. The current rules reflect the
                  Renters&apos; Rights Act changes effective 1 May 2026.
                </p>
              </div>

              {/* Links List with Dividers */}
              <div className="divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]">
                {resourceLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-3.5 flex items-center justify-between gap-4 transition-colors hover:text-[#C8202C]"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#101C33] group-hover:text-[#C8202C] transition-colors">
                      {link.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8202C] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>

              {/* Disclaimer Subtext */}
              <p className="text-[14px] text-[#948872] font-normal leading-relaxed">
                This link opens an official external authority website. Zoiko
                Rooms does not control that site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
