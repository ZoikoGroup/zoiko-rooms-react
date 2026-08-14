"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { lifecycleStages } from "./data";

export function ListingLifecycleSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Listing Lifecycle</Eyebrow>
            <SectionTitle>From private draft to a maintained listing</SectionTitle>
          </div>

          <div className="flex flex-wrap gap-2">
            {lifecycleStages.map((stage, index) => {
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
                  {stage}
                </button>
              );
            })}
          </div>

          <Paragraph>
            If you move out, the listing pauses and must be reassessed under the correct provider
            path before it can remain public.
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
