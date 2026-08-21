"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, Card } from "./shared";
import { receiptRows } from "./data";

export function CoSignerReceiptSection({ signed }: { signed: boolean }) {
  const steps = [
    { label: "You", sub: signed ? "Signed" : "Waiting on your review", state: signed ? "done" : "current" as const },
    { label: "Provider representative", sub: signed ? "Notified — awaiting signature" : "Notified after you sign", state: signed ? "current" : "waiting" as const },
    { label: "Fully executed", sub: "Both signatures complete", state: "waiting" as const },
  ];

  return (
    <>
      <Card id="co-signer-status">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Eyebrow>Co-signer Sequence</Eyebrow>
            <SectionTitle>Who else needs to sign</SectionTitle>
            <Paragraph>This agreement requires two signatures. Signing order: you, then the provider representative.</Paragraph>
          </div>

          <div className="flex items-start justify-between gap-2">
            {steps.map((step, index) => (
              <div key={step.label} className="flex flex-1 flex-col items-center gap-2 text-center">
                <div className="flex w-full items-center">
                  {index > 0 && <span className="h-px flex-1 bg-[#E9E0D3]" />}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                      step.state === "done"
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : step.state === "current"
                          ? "border-brand-navy text-brand-navy"
                          : "border-neutral-300 text-neutral-400"
                    }`}
                  >
                    {step.state === "done" ? <Check className="h-4 w-4" /> : index + 1}
                  </span>
                  {index < steps.length - 1 && <span className="h-px flex-1 bg-[#E9E0D3]" />}
                </div>
                <span className="text-sm font-semibold text-brand-navy">{step.label}</span>
                <span className="text-xs text-neutral-500">{step.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Card>

      <Card>
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Eyebrow>What You&apos;ll Receive</Eyebrow>
            <SectionTitle>Completion receipt preview</SectionTitle>
            <Paragraph>Once fully executed, you&apos;ll get an immutable signed copy with this evidence summary.</Paragraph>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
            <div className="divide-y divide-[#E9E0D3] bg-[#F7F2EA]">
              {receiptRows.map((row) => {
                const value =
                  signed && row.label === "Your signature timestamp"
                    ? "19 Aug 2026, 14:32 UTC"
                    : row.value;
                return (
                  <div key={row.label} className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                    <span className="text-neutral-500">{row.label}</span>
                    <span className={`font-semibold ${value === "Pending" ? "text-neutral-400" : "text-brand-navy"}`}>{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Card>
    </>
  );
}
