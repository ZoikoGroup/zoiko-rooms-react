"use client";

import React from "react";
import { motion } from "framer-motion";

interface ReportStep {
  title: string;
  description: string;
}

const reportSteps: ReportStep[] = [
  {
    title: "Report intake",
    description:
      "Issue category, entity/action, reporter relationship, urgency, evidence, confidentiality, and immediate safety/payment/data concerns.",
  },
  {
    title: "Initial restriction",
    description:
      "Only affected actions/records restricted when necessary, with reason, owner, review time, and impact stated.",
  },
  {
    title: "Evidence preservation",
    description:
      "Current records, prior versions, submissions, decisions, communications, and relevant source state preserved.",
  },
  {
    title: "Investigation",
    description:
      "Authorized investigator, scope, conflict-of-interest check, subject notification where appropriate, and safe communication.",
  },
  {
    title: "Decision",
    description:
      "Substantiated, unsubstantiated, unresolved, corrected, limited, restricted, revoked, restored, or another approved outcome.",
  },
  {
    title: "Correction",
    description:
      "Identity, authority, evidence, status, permissions, public claim, downstream channels, and integrations updated.",
  },
  {
    title: "Review / appeal",
    description:
      "Independent or escalated reviewer where applicable, new evidence, time limits, and final communication.",
  },
  {
    title: "Closure",
    description:
      "Outcome, notifications, retained record, deletion/restriction, lessons, and requirement/control changes.",
  },
];

export default function ProtectedReportsSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            07
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              Reports are protected, investigated, and closed &mdash; not left
              open forever.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-140">
              Only the affected action is restricted while a report is reviewed.
              Evidence is preserved. Reporters and subjects are both protected
              from retaliation and permanent public labeling.
            </p>
          </div>
        </div>

        {/* Vertical Timeline / Steps */}
        <div className="pl-0 sm:pl-10 space-y-6">
          <div className="relative border-l border-[#EAE6DF] ml-1.5 sm:ml-2 space-y-8 pl-6 sm:pl-8">
            {reportSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="relative space-y-1"
              >
                {/* Timeline Red Bullet Marker */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#B24A3B] ring-4 ring-white" />

                <h3 className="text-sm font-bold text-[#14213D]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-3xl">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-8">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              See High-Risk Incident Playbooks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
