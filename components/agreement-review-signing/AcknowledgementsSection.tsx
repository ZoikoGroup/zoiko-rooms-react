"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, Card } from "./shared";
import { acknowledgements } from "./data";

type AcknowledgementsSectionProps = {
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
};

export function AcknowledgementsSection({ checked, onToggle }: AcknowledgementsSectionProps) {
  return (
    <Card id="acknowledgements">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Eyebrow>Required Reading</Eyebrow>
          <SectionTitle>Acknowledgements</SectionTitle>
          <Paragraph>Only the acknowledgements actually required for this agreement are shown below.</Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          {acknowledgements.map((ack) => {
            const isChecked = Boolean(checked[ack.id]);
            return (
              <button
                key={ack.id}
                type="button"
                onClick={() => onToggle(ack.id)}
                className={`flex items-start gap-3 rounded-2xl border px-5 py-4 text-left transition-colors ${
                  ack.required ? "border-[#E9E0D3] bg-white" : "border-[#E9E0D3] bg-[#F6ECD4]"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                    isChecked ? "border-brand-navy bg-brand-navy" : "border-neutral-300 bg-white"
                  }`}
                >
                  {isChecked && <Check className="h-3.5 w-3.5 text-white" />}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-brand-navy">{ack.label}</span>
                  <span className="text-xs text-neutral-500">{ack.description}</span>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>
    </Card>
  );
}
