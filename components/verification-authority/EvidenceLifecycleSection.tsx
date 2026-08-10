"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph } from "./shared";

const stages = ["Identify subject", "Confirm role", "Collect evidence", "Check scope", "Show status", "Maintain & respond"];

export function EvidenceLifecycleSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Evidence Lifecycle</Eyebrow>
            <SectionTitle>Collected → checked → current → expiring → expired, revoked, or disputed</SectionTitle>
          </div>

          <div className="flex flex-wrap gap-2">
            {stages.map((stage, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={stage}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                      : "border-transparent bg-[#F1E7DA] text-[#A85A34] hover:bg-[#EADCC7]"
                  }`}
                >
                  {index + 1}. {stage}
                </button>
              );
            })}
          </div>

          <Paragraph>
            Every status needs a source, effective date, review date, expiry or reconfirmation
            rule, scope, limitation, owner, and correction path.
          </Paragraph>
        </Reveal>
      </Container>
    </section>
  );
}
