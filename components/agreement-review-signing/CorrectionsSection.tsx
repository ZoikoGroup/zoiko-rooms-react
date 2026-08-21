"use client";

import { Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, Card } from "./shared";

export function CorrectionsSection() {
  return (
    <Card id="corrections">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Eyebrow>Questions &amp; Corrections</Eyebrow>
          <SectionTitle>Something look wrong?</SectionTitle>
        </div>

        <Callout>
          If the room, dates, cost, or party looks incorrect, request a correction — this blocks
          signing until it&apos;s resolved and a corrected version is generated.
        </Callout>

        <div className="flex flex-wrap gap-3">
          <button type="button" className="rounded-full border border-[#E9E0D3] bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5">
            Contact Support
          </button>
          <button type="button" className="rounded-full border border-[#E9E0D3] bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5">
            Request a correction
          </button>
        </div>
      </Reveal>
    </Card>
  );
}
