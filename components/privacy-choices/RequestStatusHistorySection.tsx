"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { requestHistoryRows } from "./data";

export function RequestStatusHistorySection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Request Status &amp; History</Eyebrow>
            <SectionTitle>Track what you&apos;ve asked for.</SectionTitle>
            <Paragraph>
              Every request gets an ID, a due date, and a visible status — no hidden countdowns,
              no legal jargon.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <div className="min-w-[760px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
              <div className="grid grid-cols-[1.3fr_1.2fr_1fr_1fr_1fr_0.6fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                <span>Request ID</span>
                <span>Type</span>
                <span>Submitted</span>
                <span>Due</span>
                <span>Status</span>
                <span />
              </div>
              <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
                {requestHistoryRows.map((row) => (
                  <div key={row.id} className="grid grid-cols-[1.3fr_1.2fr_1fr_1fr_1fr_0.6fr] items-center gap-4 px-6 py-4 text-sm">
                    <span className="font-mono text-xs text-neutral-500">{row.id}</span>
                    <span className="font-medium text-brand-navy">{row.type}</span>
                    <span className="text-neutral-500">{row.submitted}</span>
                    <span className="text-neutral-500">{row.due}</span>
                    <EvidenceBadge label={row.status} tone={row.tone === "green" ? "green" : "amber"} variant="outline" className="w-fit" />
                    <span className="font-semibold text-brand-red">{row.actionLabel} →</span>
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
