"use client";

import React from "react";
import { motion } from "framer-motion";

interface MaintenanceStep {
  number: string;
  title: string;
  description: string;
}

const maintenanceSteps: MaintenanceStep[] = [
  {
    number: "01",
    title: "Issue created",
    description:
      "Affected room/feature/date, source, evidence, severity and owner recorded immediately.",
  },
  {
    number: "02",
    title: "Triage",
    description:
      "Decide whether to block publication, viewing, reservation, agreement, or one feature claim.",
  },
  {
    number: "03",
    title: "Active remediation",
    description:
      "Task owner, provider/vendor role, target date and access coordination.",
  },
  {
    number: "04",
    title: "Alternative offered",
    description:
      "Other room, date or support route where available \u2014 no unsupported guarantee.",
  },
  {
    number: "05",
    title: "Participant handling",
    description:
      "Notify applicants/residents/institutions and preserve agreement/payment rights.",
  },
  {
    number: "06",
    title: "Evidence of resolution",
    description:
      "Current photos, inspection, or provider confirmation with date and limitations.",
  },
  {
    number: "07",
    title: "Restoration review",
    description:
      "Authorized reviewer confirms affected actions can resume \u2014 never automatic.",
  },
  {
    number: "08",
    title: "Post-incident correction",
    description:
      "Room Passport, availability, costs, media, channels and reporting updated as affected.",
  },
];

export default function MaintenanceAndExceptionsSection() {
  return (
    <section className="w-full bg-[#EFE1D0] text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            MAINTENANCE &amp; EXCEPTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            Withdraw affected inventory, preserve evidence, restore only after
            review.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl mx-auto">
            A maintenance issue restricts exactly the affected publication,
            viewing, reservation, allocation, agreement, move-in or feature
            claim &mdash; not the whole room record.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-6xl h-[260px] sm:h-[340px] rounded-3xl overflow-hidden shadow-xs border border-[#EAE6DF] bg-[#F5F2EC]"
          >
            <img
              src="/images/portfolio/image 3.png"
              alt="Two people looking out of a window in a bright interior room"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        {/* 8 Step Cards Grid (4x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto pt-2">
          {maintenanceSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs space-y-3 flex flex-col justify-start"
            >
              <span className="text-xs font-bold text-[#C8202C] block">
                {step.number}
              </span>
              <div className="space-y-1.5">
                <h3 className="text-sm font-serif font-bold text-[#14213D]">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#555E68] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Wellness or Safety Shortcut Rule Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] border-l-4 border-l-[#1C2C5E] shadow-xs space-y-2 max-w-6xl mx-auto"
        >
          <span className="text-[11px] font-bold tracking-widest text-[#1C2C5E] uppercase block">
            NO WELLNESS OR SAFETY SHORTCUT
          </span>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
            Maintenance and room-condition data can support specific operational
            decisions. It must not be converted into blanket safe, healthy,
            quiet, clinically suitable, fatigue reducing, accessible, or
            compliant claims.
          </p>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            className="hover:bg-[#E5D5C2] text-[#1B2A4A] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95"
          >
            Explore Exceptions
          </button>
        </div>
      </div>
    </section>
  );
}
