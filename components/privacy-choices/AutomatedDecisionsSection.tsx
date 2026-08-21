"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { automatedDecisionRows } from "./data";

export function AutomatedDecisionsSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Automated Decisions &amp; Profiling</Eyebrow>
            <SectionTitle>Where automation touches a decision about you.</SectionTitle>
            <Paragraph>
              These are the automated processes Zoiko Rooms actually uses today — not a
              hypothetical list.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <div className="min-w-[720px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
              <div className="grid grid-cols-[1.2fr_1.6fr_0.6fr_1.4fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24] sm:px-6">
                <span>Use case</span>
                <span>Purpose</span>
                <span>Human review</span>
                <span>Available to you</span>
              </div>
              <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
                {automatedDecisionRows.map((row) => (
                  <div key={row.useCase} className="grid grid-cols-[1.2fr_1.6fr_0.6fr_1.4fr] gap-4 px-6 py-4 text-sm sm:px-6">
                    <span className="font-semibold text-brand-navy">{row.useCase}</span>
                    <span className="text-neutral-600">{row.purpose}</span>
                    <span className={row.humanReview === "Yes" ? "font-medium text-emerald-600" : "text-neutral-500"}>
                      {row.humanReview}
                    </span>
                    <span className="font-medium text-brand-red">{row.available}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
