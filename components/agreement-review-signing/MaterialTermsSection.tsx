"use client";

import { Reveal } from "@/components/ui";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { Eyebrow, SectionTitle, Paragraph, Card } from "./shared";
import { materialTerms } from "./data";

export function MaterialTermsSection() {
  return (
    <Card id="material-terms">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Eyebrow>Before Reading the Full Agreement</Eyebrow>
          <SectionTitle>Material terms summary</SectionTitle>
          <Paragraph>
            Room, dates, parties, complete costs, and key obligations — a snapshot before you
            read the full document.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
          <div className="flex flex-col gap-2">
            <div className="w-full overflow-hidden rounded-2xl">
              <NaturalImage src="/images/agreement-review-signing/room-unit-3b.png" alt="Unit 3B, the room described in this agreement" />
            </div>
            <span className="text-xs text-neutral-400">Room Passport v4 · incorporated</span>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-3">
            {materialTerms.map((term) => (
              <div key={term.label} className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">{term.label}</span>
                <span className="text-sm font-semibold text-brand-navy">{term.value}</span>
                <span className="text-xs text-neutral-500">{term.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Card>
  );
}
