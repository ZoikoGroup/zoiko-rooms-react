"use client";

import React from "react";
import { motion } from "framer-motion";

interface ReadinessCheck {
  title: string;
  description: string;
}

const readinessChecks: ReadinessCheck[] = [
  {
    title: "Identity & authority",
    description:
      "Canonical room identity and current provider/listing authority for public publication.",
  },
  {
    title: "Availability & complete cost",
    description:
      "Current date-based availability with no unresolved overlap; all known required amounts and effective date.",
  },
  {
    title: "Room facts & restrictions",
    description:
      "Required fields supplied or explicitly unknown; current, lawful, understandable rules.",
  },
  {
    title: "Media & location",
    description:
      "Rights, privacy, freshness, accessible alternatives, and approved location precision.",
  },
  {
    title: "Maintenance & support",
    description:
      "No unresolved issue blocks publication; owner, report and correction routes visible.",
  },
];

export default function PublishingAndDistributionSection() {
  return (
    <section className="w-full bg-[#EFE1D0] text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            PUBLISHING &amp; DISTRIBUTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Preview before consequence, on every channel.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl mx-auto">
            Publishing, bulk updates, price changes, room withdrawal and channel
            release show impact before commit &mdash; and reconcile against
            every destination afterward.
          </p>
        </div>

        {/* Readiness Checklist Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE6DF] shadow-xs max-w-4xl mx-auto"
        >
          <div className="divide-y divide-[#EAE6DF]">
            {readinessChecks.map((check, idx) => (
              <div
                key={check.title}
                className={`flex items-start gap-3.5 ${
                  idx === 0
                    ? "pb-6"
                    : idx === readinessChecks.length - 1
                      ? "pt-6"
                      : "py-6"
                }`}
              >
                {/* Green Check Icon Badge */}
                <div className="w-5 h-5 rounded-full bg-[#EBF6EE] flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-[#287042]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                {/* Title & Description */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#14213D]">
                    {check.title}
                  </h3>
                  <p className="text-xs text-[#555E68] leading-relaxed">
                    {check.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="/contact-us"
            className="hover:bg-[#E5D5C2] text-[#1B2A4A] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95 inline-flex items-center justify-center"
          >
            Review Publishing Readiness
          </a>
        </div>
      </div>
    </section>
  );
}
