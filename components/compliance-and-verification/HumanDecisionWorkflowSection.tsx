"use client";

import React from "react";
import { motion } from "framer-motion";

interface WorkflowStep {
  title: string;
  description: string;
}

interface StatusContract {
  status: string;
  dotColor: string;
  textColor?: string;
  meaning: string;
  requiredActionEffect: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: "Initiated",
    description:
      "Requirement, entity, action, purpose, owner, due date, and affected permission created.",
  },
  {
    title: "Evidence requested",
    description:
      "Minimum evidence, alternatives, secure route, privacy, support, and scoping explained upfront.",
  },
  {
    title: "Submitted",
    description:
      "Evidence received, mime/type checks completed, immutable submission record created.",
  },
  {
    title: "Automated validation",
    description:
      "Format, completeness, dates, sources, identity match, duplication, and conflicts flagged — never a silent consequential outcome.",
  },
  {
    title: "Human review",
    description:
      "An authorized reviewer applies current criteria, examines conflicts, records reason and limitation, and escalates where necessary.",
  },
  {
    title: "Decision",
    description:
      "Verified, verified with limitation, information needed, unable to verify, restricted, not applicable, or another approved status.",
  },
  {
    title: "Permission effect",
    description:
      "Exact actions enabled, limited, or blocked; dependent users, rooms, payments, agreements, channels, and integrations updated.",
  },
  {
    title: "Communication",
    description:
      "Subject and affected roles receive safe status, reason category, next action, due/expiry dates, correction route, and support.",
  },
  {
    title: "Monitoring / renewal",
    description:
      "Review date, source change, regulatory changes, incidents, contradictions, expiry, grace/restriction, and renewal.",
  },
  {
    title: "Closure",
    description:
      "Final status, retained decision record, excess data deletion/restriction, access revocation, and unresolved issues.",
  },
];

const statusContracts: StatusContract[] = [
  {
    status: "Not started",
    dotColor: "bg-[#7A838E]",
    meaning: "Requirement applies; no evidence submitted.",
    requiredActionEffect:
      "Block or limit step to standard/pre-requirement actions.",
  },
  {
    status: "Pending",
    dotColor: "bg-[#7A838E]",
    meaning: "Submission or source response awaits validation/review.",
    requiredActionEffect:
      "No verified claim shown; current wait owner and timing visible.",
  },
  {
    status: "Information needed",
    dotColor: "bg-[#D97706]",
    textColor: "text-[#D97706]",
    meaning:
      "Specific missing, unreadable, expired, conflicting, or unverified evidence.",
    requiredActionEffect:
      "Explain exact gap and direct user to solution route.",
  },
  {
    status: "Verified",
    dotColor: "bg-[#059669]",
    textColor: "text-[#059669]",
    meaning: "Current requirement satisfied within stated scope and context.",
    requiredActionEffect:
      "Enable designated scope; show source/category/expiry/limitations.",
  },
  {
    status: "Verified with limitation",
    dotColor: "bg-[#059669]",
    textColor: "text-[#059669]",
    meaning:
      "Requirement satisfied with explicit scope, condition, or exception.",
    requiredActionEffect: "Enforce limitation and prevent broader claim.",
  },
  {
    status: "Unable to verify",
    dotColor: "bg-[#B24A3B]",
    textColor: "text-[#B24A3B]",
    meaning: "Current evidence cannot satisfy the requirement.",
    requiredActionEffect:
      "No stigmatizing public label; show alternative/review.",
  },
  {
    status: "Restricted",
    dotColor: "bg-[#B24A3B]",
    textColor: "text-[#B24A3B]",
    meaning:
      "Affected actions paused due to expiry, conflict, incident, or policy.",
    requiredActionEffect:
      "Show owner, reason category, participant impact, recovery route.",
  },
  {
    status: "Expired",
    dotColor: "bg-[#B24A3B]",
    textColor: "text-[#B24A3B]",
    meaning: "Effective period or freshness ended.",
    requiredActionEffect:
      "Remove verified claims; pause/limit dependent actions; start renewal.",
  },
  {
    status: "Disputed",
    dotColor: "bg-[#D97706]",
    textColor: "text-[#D97706]",
    meaning: "Accuracy, authority, evidence, or decision is under review.",
    requiredActionEffect:
      "Protect reporter/subject; limit affected action; preserve evidence.",
  },
  {
    status: "Revoked",
    dotColor: "bg-[#B24A3B]",
    textColor: "text-[#B24A3B]",
    meaning: "Authority or status was withdrawn through an approved decision.",
    requiredActionEffect:
      "Block affected actions; notify; record rationale; provide review route.",
  },
  {
    status: "Not applicable",
    dotColor: "bg-[#7A838E]",
    meaning: "Requirement does not apply to the entity or context.",
    requiredActionEffect:
      "Record criteria and avoid confusing incomplete status.",
  },
];

export default function HumanDecisionWorkflowSection() {
  return (
    <section className="w-full text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex items-start gap-4 sm:gap-6">
          <span className="text-sm font-bold text-[#7A838E] pt-1 select-none">
            04
          </span>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-[#14213D] leading-tight">
              From initiation to closure, a human always owns the consequential
              decision.
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
              Automation validates, compares, flags, and drafts. It never
              silently denies, restricts, revokes, or removes.
            </p>
          </div>
        </div>

        {/* Vertical Timeline / Steps */}
        <div className="pl-0 sm:pl-10 space-y-6">
          <div className="relative border-l border-[#EAE6DF] ml-1.5 sm:ml-2 space-y-8 pl-6 sm:pl-8">
            {workflowSteps.map((step, idx) => (
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
                <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-160">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verification Status Contract Table */}
        <div className="pl-0 sm:pl-10 space-y-6 pt-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-widest text-[#7A838E] uppercase block">
              VERIFICATION STATUS CONTRACT
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#14213D] text-[10px] sm:text-xs font-bold tracking-wider text-[#7A838E] uppercase">
                  <th className="py-3 pr-4 font-bold">STATUS</th>
                  <th className="py-3 px-4 font-bold">MEANING</th>
                  <th className="py-3 pl-4 font-bold">
                    REQUIRED ACTION / EFFECT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE6DF]">
                {statusContracts.map((row) => (
                  <tr
                    key={row.status}
                    className="hover:bg-black/[0.01] transition-colors"
                  >
                    {/* Status Column */}
                    <td className="py-4 pr-4 align-top whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${row.dotColor}`}
                        />
                        <span
                          className={`font-bold ${row.textColor || "text-[#14213D]"}`}
                        >
                          {row.status}
                        </span>
                      </div>
                    </td>

                    {/* Meaning Column */}
                    <td className="py-4 px-4 align-top text-[#555E68] max-w-xs sm:max-w-sm leading-relaxed">
                      {row.meaning}
                    </td>

                    {/* Required Action Effect Column */}
                    <td className="py-4 pl-4 align-top text-[#555E68] max-w-xs sm:max-w-md leading-relaxed">
                      {row.requiredActionEffect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* No Silent Adverse Automation Box & CTA */}
          <div className="pt-8 space-y-6">
            {/* Red Callout Box */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="border-l-2 border-[#B24A3B] pl-5 py-0.5 space-y-1.5"
            >
              <span className="text-[10px] font-bold tracking-widest text-[#B24A3B] uppercase block">
                NO SILENT ADVERSE AUTOMATION
              </span>
              <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-3xl">
                Automation or AI must not silently deny, restrict, revoke,
                remove, publish, allocate, charge, refund, expose sensitive
                data, or create a permanent risk signal. Consequential actions
                require declared rules, visible evidence, an accountable human
                owner, and Action Review where risk is elevated.
              </p>
            </motion.div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                className="bg-transparent hover:bg-[#FAF6F0] text-[#14213D] text-xs font-bold py-3.5 px-6 rounded-full border border-[#14213D] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                See What&apos;s Inside a Reviewer Decision Pocket
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
