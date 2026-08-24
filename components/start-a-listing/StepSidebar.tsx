"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { STEPS, TOTAL_STEPS } from "./types";

type StepSidebarProps = {
  currentStep: number;
  submitted: boolean;
  onStepClick: (step: number) => void;
};

export function StepSidebar({ currentStep, submitted, onStepClick }: StepSidebarProps) {
  const { t } = useLanguage();
  const draftStatus = currentStep === 1 && !submitted ? "Draft not started" : "Draft in progress";

  return (
    <div className="flex w-full flex-col gap-1 rounded-2xl border border-[#E9E0D3] bg-white p-4 sm:w-64">
      {STEPS.map(({ key, label }) => {
        const isCurrent = key === currentStep;
        const isComplete = submitted || key < currentStep;
        const isClickable = key <= currentStep || submitted;

        return (
          <button
            key={key}
            type="button"
            disabled={!isClickable}
            onClick={() => isClickable && onStepClick(key)}
            className={`flex items-center gap-3 rounded-lg px-2 py-2 text-left text-sm transition-colors ${
              isClickable ? "cursor-pointer hover:bg-brand-navy/5" : "cursor-default"
            }`}
          >
            <motion.span
              animate={{
                backgroundColor: isCurrent ? "#0e2f73" : isComplete ? "#15803d" : "#EFE7DA",
                color: isCurrent || isComplete ? "#ffffff" : "#8a8478",
              }}
              transition={{ duration: 0.25 }}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
            >
              {isComplete ? <Check className="h-3.5 w-3.5" /> : key}
            </motion.span>
            <span className={`font-medium ${isCurrent ? "text-brand-navy" : isComplete ? "text-brand-navy" : "text-neutral-400"}`}>
              {t(label)}
            </span>
          </button>
        );
      })}

      <div className="mt-2 border-t border-[#E9E0D3] pt-3 text-xs text-neutral-400">
        {t("Step")} {currentStep} {t("of")} {TOTAL_STEPS} · {t(draftStatus)}
      </div>
    </div>
  );
}
