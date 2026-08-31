"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface PlaybookStep {
  label: string;
}

interface PlaybookCategory {
  id: string;
  title: string;
  steps: PlaybookStep[];
}

export default function RecoveryPlaybooksSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    "suspected-payment-fraud",
  );

  const playbooks: PlaybookCategory[] = [
    {
      id: "suspected-payment-fraud",
      title: "Suspected payment fraud",
      steps: [
        { label: "Stop future payment" },
        { label: "Contact your payment/financial provider" },
        { label: "Secure your account" },
        { label: "Verify recipient/obligation" },
        { label: "Report" },
        { label: "Track dispute/reconciliation" },
      ],
    },
    {
      id: "account-compromise",
      title: "Account compromise",
      steps: [
        { label: "Change credentials immediately" },
        { label: "Revoke active sessions" },
        { label: "Enable two-factor authentication" },
        { label: "Audit recent account activity" },
        { label: "Report unauthorized access" },
      ],
    },
    {
      id: "document-exposure",
      title: "Document exposure",
      steps: [
        { label: "Identify shared sensitive files" },
        { label: "Revoke document permissions" },
        { label: "Place credit or identity alert" },
        { label: "Log incident details" },
      ],
    },
    {
      id: "provider-impersonation",
      title: "Provider or listing impersonation",
      steps: [
        { label: "Verify canonical record ID" },
        { label: "Cross-reference official contact details" },
        { label: "Cease off-platform messaging" },
        { label: "Flag fraudulent profile" },
      ],
    },
    {
      id: "unsafe-viewing",
      title: "Unsafe or harassing viewing",
      steps: [
        { label: "Exit the premises safely" },
        { label: "Contact local emergency services if needed" },
        { label: "Preserve timestamps and communications" },
        { label: "Submit urgent safety issue report" },
      ],
    },
  ];

  const toggleCategory = (id: string) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="recovery-playbooks"
      className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <h2 className="text-2xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Recovery playbooks
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-2xl font-normal">
            If something may have already gone wrong, here&apos;s the sequence
            to follow &mdash; click one to expand it.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="w-full divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]">
          {playbooks.map((playbook) => {
            const isOpen = openCategory === playbook.id;

            return (
              <div key={playbook.id} className="py-4 sm:py-5">
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(playbook.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#14213D] group-hover:text-[#1A2E6E] transition-colors duration-150">
                    {playbook.title}
                  </span>
                  <div className="text-[#14213D] flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Step Sequence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 flex flex-wrap items-center gap-2 sm:gap-3">
                        {playbook.steps.map((step, idx) => (
                          <React.Fragment key={step.label}>
                            {/* Step Badge */}
                            <div className="border border-[#E9E0D3] rounded-full px-4 py-2 text-xs sm:text-xs font-semibold text-[#1B2438] whitespace-nowrap shadow-2xs">
                              {step.label}
                            </div>

                            {/* Sequential Arrow Icon */}
                            {idx < playbook.steps.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-[#A85A34] flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
