"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BoundaryStep {
  number: string;
  title: string;
}

const steps: BoundaryStep[] = [
  {
    number: "01",
    title: "Owner and technical contact, named",
  },
  {
    number: "02",
    title: "Environment \u2014 sandbox, test, or production",
  },
  {
    number: "03",
    title: "Scopes, separated by read, write, event, export",
  },
  {
    number: "04",
    title: "Source-of-truth and conflict rules per field",
  },
  {
    number: "05",
    title: "Freshness threshold and stale-data fallback",
  },
  {
    number: "06",
    title: "Review date and one-click revocation",
  },
];

export default function IntegrationTrustBoundarySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-xs grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column - Off-white background */}
          <div className="lg:col-span-7 bg-[#FBF7EF] p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              {/* Tag / Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#14213D]" />
                <span className="text-[11px] font-bold tracking-widest text-[#1A2E6E] uppercase">
                  INTEGRATION TRUST BOUNDARY
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-serif font-bold text-[#241C14] leading-tight">
                A connected system receives only what its current purpose
                requires.
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
                No integration gets standing access to everything Zoiko Rooms
                knows. Every connection is scoped to a job &mdash; read this,
                write that, hear about this &mdash; and the scope is visible to
                everyone who has to trust it: the provider, the institution, and
                the person whose room or payment is involved.
              </p>
            </div>

            {/* Link */}
            <div>
              <a
                href="#authorization-model"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1A2E6E] hover:text-[#C8202C] transition-colors group"
              >
                <span>Review the authorization model</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column - Warm blush/peach tint background */}
          <div className="lg:col-span-5 bg-[#F2DED2] p-8 sm:p-12 flex flex-col justify-center">
            <div className="divide-y divide-[#E6D5C9]">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="py-4 first:pt-0 last:pb-0 flex items-baseline gap-4"
                >
                  <span className="text-xs font-serif text-[#1A2E6E] opacity-60 shrink-0">
                    {step.number}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1A2E6E] leading-snug">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
