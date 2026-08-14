"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const rows = [
  { title: "Monthly room rent", subtitle: "Illustrative example, USD", value: "$1,400 / mo", tone: "gray" as const },
  { title: "Security deposit", subtitle: "Refundable, per local terms", value: "$1,400", tone: "amber" as const },
  { title: "Required move-in fee", subtitle: "Non-refundable, provider-set", value: "$75", tone: "amber" as const },
  { title: "Estimated utilities", subtitle: "Varies by provider and season", value: "$125 / mo", tone: "amber" as const },
  { title: "Known upfront total", subtitle: "Before move-in", value: "$2,875", tone: "teal" as const },
];

export function CostsSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Costs &amp; Payments</Eyebrow>
            <SectionTitle>What a complete cost picture looks like</SectionTitle>
            <Paragraph className="mx-auto">
              Illustrative example only — every real guide preserves the original currency and its
              own sourced figures. See a real breakdown inside any city guide.
            </Paragraph>
          </div>

          <div className="flex w-full max-w-2xl flex-col gap-3">
            {rows.map(({ title, subtitle, value, tone }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E9E0D3] bg-white px-5 py-4 shadow-sm"
              >
                <span>
                  <span className="block text-sm font-semibold text-brand-navy">{title}</span>
                  <span className="block text-sm text-neutral-500">{subtitle}</span>
                </span>
                <EvidenceBadge label={value} tone={tone} variant="outline" className="shrink-0" />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
