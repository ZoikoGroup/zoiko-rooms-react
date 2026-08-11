"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const breakdown = [
  {
    title: "Monthly room rent",
    subtitle: "Illustrative example, USD",
    value: "$1,250 / mo",
    tone: "gray" as const,
  },
  {
    title: "Approved public-program contribution",
    subtitle: "First three months",
    value: "$850 / mo",
    tone: "green" as const,
  },
  {
    title: "Participant recurring responsibility",
    subtitle: "During the contribution period",
    value: "~$525 / mo",
    tone: "amber" as const,
  },
  {
    title: "Participant upfront responsibility",
    subtitle: "Deposit + move-in fee, unless covered",
    value: "$1,325",
    tone: "amber" as const,
  },
  {
    title: "Funding status",
    subtitle: "Nothing confirmed until authorized",
    value: "Pending approval",
    tone: "gray" as const,
  },
];

export function PublicFundingSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Public Funding &amp; Billing</Eyebrow>
            <SectionTitle>Complete costs before anyone commits</SectionTitle>
            <Paragraph className="mx-auto">
              Public contribution and participant responsibility, always shown side by side —
              nothing treated as covered until authorized.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="w-full overflow-hidden rounded-3xl"
            >
              <NaturalImage
                src="/images/government-public-sector/funding-public-trust-office.png"
                alt="A public trust office building facade"
              />
            </motion.div>

            <div className="flex flex-col gap-3">
              {breakdown.map(({ title, subtitle, value, tone }) => (
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

              <Button href="/resources" variant="outline" size="md" className="mt-2 w-fit">
                See a Sample Funding Breakdown
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
