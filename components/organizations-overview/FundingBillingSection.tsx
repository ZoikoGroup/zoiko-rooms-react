"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { Eyebrow, SectionTitle, Paragraph, BulletBlock, SectionDivider } from "./shared";
import { fundingPoints, fundingExampleRows } from "./data";

export function FundingBillingSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>Funding &amp; Billing</Eyebrow>
            <SectionTitle>Subsidies, allowances, and direct billing — shown as approved, never assumed.</SectionTitle>
            <Paragraph>
              Every funding element carries an exact covered/excluded breakdown, payer and payee,
              effective period, and refund rule. No covered amount is treated as confirmed until
              current approval.
            </Paragraph>
            <div className="flex flex-col gap-4">
              {fundingPoints.map((point) => (
                <BulletBlock key={point.title} {...point} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
              <NaturalImage
                src="/images/organizations-overview/funding-team-review.png"
                alt="A team reviewing a funding breakdown together"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white">
              <div className="bg-[#F1E7DA] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-[#8A6A24]">
                Generic organization-funding example · illustrative USD
              </div>
              <div className="flex flex-col divide-y divide-[#E9E0D3]">
                {fundingExampleRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                    <span className="text-neutral-500">{row.label}</span>
                    <span className="font-semibold text-brand-navy">{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="px-5 py-3 text-xs text-neutral-400">
                These figures demonstrate how Pro displays organization contributions and
                participant responsibility. They are not Zoiko Rooms prices, tax advice, or a
                guarantee that any organization will pay.
              </p>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
