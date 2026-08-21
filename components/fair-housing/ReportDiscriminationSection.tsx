"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import {
  reportSteps,
  reportWhereOptions,
  reportConductOptions,
  reportGroundOptions,
  reportOutcomeOptions,
} from "./data";

type ReportForm = {
  where: string;
  conduct: string;
  ground: string;
  evidence: string;
  outcome: string;
};

const EMPTY_FORM: ReportForm = { where: "", conduct: "", ground: "", evidence: "", outcome: "" };

function RadioOptions({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-colors ${
              isSelected ? "border-brand-red bg-[#FBE9E9] text-brand-navy" : "border-[#E9E0D3] bg-[#FFFDF8] text-brand-navy hover:border-brand-navy/30"
            }`}
          >
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                isSelected ? "border-brand-red" : "border-neutral-300"
              }`}
            >
              {isSelected && <span className="h-2 w-2 rounded-full bg-brand-red" />}
            </span>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function ReportDiscriminationSection() {
  const [step, setStep] = useState(0);
  const [maxReached, setMaxReached] = useState(0);
  const [form, setForm] = useState<ReportForm>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const canContinue =
    (step === 0 && form.where !== "") ||
    (step === 1 && form.conduct !== "") ||
    step === 2 ||
    step === 3 ||
    (step === 4 && form.outcome !== "");

  function goToStep(index: number) {
    if (index <= maxReached) setStep(index);
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function handleContinue() {
    if (!canContinue) return;
    if (step === reportSteps.length - 1) {
      setSubmitted(true);
      return;
    }
    const next = step + 1;
    setStep(next);
    setMaxReached((m) => Math.max(m, next));
  }

  function handleReset() {
    setForm(EMPTY_FORM);
    setStep(0);
    setMaxReached(0);
    setSubmitted(false);
  }

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Report Discrimination</Eyebrow>
            <SectionTitle>Tell us what happened — we&apos;ll figure out the category.</SectionTitle>
            <Paragraph>
              You never need to name a legal protected class to submit a report. We pre-fill
              listing, message or transaction details when this opens from that context.
            </Paragraph>
          </div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8]"
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-3 px-6 py-14 text-center">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
                >
                  <Check className="h-6 w-6" />
                </motion.span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">Report received</h3>
                <p className="max-w-md text-sm leading-relaxed text-neutral-500">
                  A trained specialist will review this on a need-to-know basis. If you flagged a
                  threat or immediate danger, that part is escalated first.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-sm font-semibold text-brand-red hover:text-brand-red-dark"
                >
                  Submit another report
                </button>
              </div>
            ) : (
              <>
                <div className="flex divide-x divide-[#E9E0D3] overflow-x-auto border-b border-[#E9E0D3]">
                  {reportSteps.map((label, index) => {
                    const isActive = index === step;
                    const isReachable = index <= maxReached;
                    return (
                      <button
                        key={label}
                        type="button"
                        disabled={!isReachable}
                        onClick={() => goToStep(index)}
                        className={`flex-1 whitespace-nowrap px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide transition-colors ${
                          isActive
                            ? "border-b-2 border-brand-red text-brand-red"
                            : isReachable
                              ? "text-neutral-500 hover:text-brand-navy"
                              : "text-neutral-300"
                        }`}
                      >
                        {index + 1} · {label}
                      </button>
                    );
                  })}
                </div>

                <div className="px-6 py-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18, ease: easeOut }}
                      className="flex flex-col gap-4"
                    >
                      {step === 0 && (
                        <>
                          <div>
                            <h3 className="font-heading text-base font-medium text-brand-navy">Where did this happen?</h3>
                            <p className="text-xs text-neutral-400">Select one.</p>
                          </div>
                          <RadioOptions options={reportWhereOptions} value={form.where} onChange={(v) => setForm({ ...form, where: v })} />
                        </>
                      )}

                      {step === 1 && (
                        <>
                          <div>
                            <h3 className="font-heading text-base font-medium text-brand-navy">What happened?</h3>
                            <p className="text-xs text-neutral-400">Select the closest match — we&apos;ll route it correctly either way.</p>
                          </div>
                          <RadioOptions options={reportConductOptions} value={form.conduct} onChange={(v) => setForm({ ...form, conduct: v })} />
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <div>
                            <h3 className="font-heading text-base font-medium text-brand-navy">What is this related to?</h3>
                            <p className="text-xs text-neutral-400">Optional — &quot;I&apos;d rather not say&quot; is always fine.</p>
                          </div>
                          <RadioOptions options={reportGroundOptions} value={form.ground} onChange={(v) => setForm({ ...form, ground: v })} />
                        </>
                      )}

                      {step === 3 && (
                        <>
                          <div>
                            <h3 className="font-heading text-base font-medium text-brand-navy">Anything else we should know?</h3>
                            <p className="text-xs text-neutral-400">Optional — dates, names, or what was said or shown.</p>
                          </div>
                          <textarea
                            value={form.evidence}
                            onChange={(event) => setForm({ ...form, evidence: event.target.value })}
                            rows={5}
                            placeholder="Describe what happened, in your own words…"
                            className="w-full rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] px-4 py-3 text-sm text-brand-ink outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                          />
                        </>
                      )}

                      {step === 4 && (
                        <>
                          <div>
                            <h3 className="font-heading text-base font-medium text-brand-navy">What do you need from us?</h3>
                            <p className="text-xs text-neutral-400">Select one.</p>
                          </div>
                          <RadioOptions options={reportOutcomeOptions} value={form.outcome} onChange={(v) => setForm({ ...form, outcome: v })} />
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-[#E9E0D3] px-6 py-4">
                  <p className="max-w-sm text-xs text-neutral-400">
                    Reporting is confidential to the extent possible. We disclose details only on
                    a need-to-know basis to investigate and act.
                  </p>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={step === 0}
                      className="rounded-full border border-[#E9E0D3] px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5 disabled:opacity-40"
                    >
                      Back
                    </button>
                    <motion.button
                      type="button"
                      whileHover={canContinue ? { scale: 1.03 } : undefined}
                      whileTap={canContinue ? { scale: 0.97 } : undefined}
                      onClick={handleContinue}
                      disabled={!canContinue}
                      className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {step === reportSteps.length - 1 ? "Submit report" : "Continue"}
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
