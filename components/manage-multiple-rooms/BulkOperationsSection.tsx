"use client";

import React from "react";

export default function BulkOperationsSection() {
  const steps = [
    {
      number: "01",
      title: "Select scope",
      description:
        "Exact portfolio, property, room, date, or channel set stays visible.",
    },
    {
      number: "02",
      title: "Validate",
      description:
        "Authority, source versions, identifiers, dates, costs, and conflicts checked.",
    },
    {
      number: "03",
      title: "Preview",
      description:
        "Creates, updates, and restrictions shown before/after, with participant impact.",
    },
    {
      number: "04",
      title: "Review",
      description:
        "Consequential actions route through Action Review where required.",
    },
    {
      number: "05",
      title: "Commit",
      description:
        "Server revalidates preconditions with idempotency and concurrency safeguards.",
    },
    {
      number: "06",
      title: "Partial failure",
      description:
        "Succeeded, failed, skipped, blocked, and unknown records stay distinct.",
    },
    {
      number: "07",
      title: "Notify & reconcile",
      description:
        "Governed notices go out; canonical state is compared against channels.",
    },
    {
      number: "08",
      title: "Rollback / correct",
      description:
        "Supported reversal or correction — historical state is never silently erased.",
    },
  ] as const;

  return (
    <div className="flex items-center justify-center md:py-16 py-10 text-[#111827]">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Tagline */}
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#D91414] uppercase mb-4 text-center">
          BULK OPERATIONS &amp; ACTION REVIEW
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-serif font-bold text-[#111827] text-center tracking-tight leading-tight mb-14 sm:mb-20">
          Change hundreds of rooms without changing them blind
        </h2>

        {/* 8 Step Grid (4 cols x 2 rows) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-14">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start">
              <span className="text-[14px] font-bold text-[#D91414] mb-2.5">
                {step.number}
              </span>
              <h3 className="font-bold text-[14.5px] text-[#1B2539] mb-2">
                {step.title}
              </h3>
              <p className="text-[12.5px] text-[#6B675F] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
