"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

interface EventFamilyRow {
  family: string;
  representativeEvents: string;
  whatYourSystemShouldDo: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Prepare",
    description:
      "Validate actor, authority, resource state, and idempotency before anything moves.",
  },
  {
    number: "02",
    title: "Preview",
    description:
      "Show old and new values, conflicts, and who's affected — before commit, not after.",
  },
  {
    number: "03",
    title: "Approve",
    description:
      "A named, authorized human signs off, with dual approval where policy requires it.",
  },
  {
    number: "04",
    title: "Commit",
    description:
      "Bounded, atomic where possible, with a transaction record and full audit trail.",
  },
  {
    number: "05",
    title: "Notify",
    description:
      "Affected people and systems get a purpose-limited, accessible status update.",
  },
  {
    number: "06",
    title: "Reconcile",
    description:
      "Confirm the resulting authoritative state — request success alone isn't proof.",
  },
  {
    number: "07",
    title: "Recover",
    description:
      "Retry, compensate, reverse, or escalate under current policy if something's off.",
  },
];

const eventFamilyRows: EventFamilyRow[] = [
  {
    family: "Portfolio",
    representativeEvents:
      "property.updated \u00B7 room_passport.updated \u00B7 room.archived",
    whatYourSystemShouldDo:
      "Fetch the current resource, compare version, update your purpose-limited view.",
  },
  {
    family: "Availability",
    representativeEvents:
      "availability.changed \u00B7 hold.created \u00B7 reservation.expired",
    whatYourSystemShouldDo:
      "Deduplicate, verify current capacity, and prevent stale booking actions.",
  },
{
      family: "Verification",
      representativeEvents:
        "verification.status_changed \u00B7 evidence.expiring",
      whatYourSystemShouldDo:
        "Apply the current permission effect \u2014 don&apos;t infer a universal trust score.",
    },
  {
    family: "Application",
    representativeEvents: "application.submitted \u00B7 decision_recorded",
    whatYourSystemShouldDo:
      "Fetch the current case under scope, preserving the human decision owner.",
  },
  {
    family: "Agreement",
    representativeEvents: "agreement.versioned \u00B7 signature.completed",
    whatYourSystemShouldDo:
      "Fetch the correct version and parties; preserve the completed copy.",
  },
  {
    family: "Payment",
    representativeEvents: "payment.status_changed \u00B7 dispute.opened",
    whatYourSystemShouldDo:
      "Treat the payment processor as the source; never duplicate a financial action.",
  },
  {
    family: "Integration",
    representativeEvents: "delivery.failed \u00B7 connection.revoked",
    whatYourSystemShouldDo:
      "Restrict the unsafe action, alert the owner, and reconcile.",
  },
];

export default function WritesAndActionReviewSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section 1: Writes & Action Review */}
        <div className="space-y-10">
          {/* Header Block */}
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#1A2E6E]" />
              <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
                {t("WRITES & ACTION REVIEW")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
  {t("Automation can prepare a high-risk action. It can't approve one.")}
</h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
              {t(
                "Signing an agreement, changing a payment recipient, or approving an application always routes through the same sequence — visible, reversible, and owned by a named person.",
              )}
            </p>
          </div>

          {/* Horizontal 7-step Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 pt-2"
          >
            {workflowSteps.map((step, idx) => (
              <div
                key={step.number}
                className="space-y-3 flex flex-col justify-start"
              >
                {/* Step Number & Optional Right Arrow */}
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#1A2E6E]">
                  <span>{step.number}</span>
                  {idx < workflowSteps.length - 1 && (
                    <span className="hidden lg:inline text-[#1A2E6E]/50 font-normal">
                      &rarr;
                    </span>
                  )}
                </div>

                {/* Step Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-sm font-serif font-bold text-[#14213D]">
                    {t(step.title)}
                  </h3>
                  <p className="text-[11px] text-[#555E68] leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Section 2: Canonical Event Families */}
        <div className="space-y-6 pt-4">
          {/* Header */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
              {t("CANONICAL EVENT FAMILIES")}
            </span>
          </div>

          {/* Event Families Table Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-xs"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                {/* Table Header */}
                <thead>
                  <tr className="bg-[#EEDFC5] border-b border-[#EAE6DF]">
                    <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[20%]">
                      {t("FAMILY")}
                    </th>
                    <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[40%]">
                      {t("REPRESENTATIVE EVENTS")}
                    </th>
                    <th className="py-4 px-6 text-[10px] font-bold tracking-wider text-[#706B65] uppercase w-[40%]">
                      {t("WHAT YOUR SYSTEM SHOULD DO")}
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-[#EAE6DF]">
                  {eventFamilyRows.map((item) => (
                    <tr
                      key={item.family}
                      className="hover:bg-[#FAF8F5]/60 transition-colors"
                    >
                      <td className="py-5 px-6 font-serif font-bold text-sm text-[#14213D] align-top">
                        {t(item.family)}
                      </td>
                      <td className="py-5 px-6 font-mono text-xs text-[#1A2E6E] leading-relaxed align-top">
                        {item.representativeEvents}
                      </td>
                      <td className="py-5 px-6 text-xs text-[#555E68] leading-relaxed align-top">
                        {t(item.whatYourSystemShouldDo)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
