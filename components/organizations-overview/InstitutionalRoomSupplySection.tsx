"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { Eyebrow, SectionTitle, Paragraph, BulletBlock, SectionDivider } from "./shared";
import { supplyPoints, supplyRecordRows } from "./data";

export function InstitutionalRoomSupplySection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>Institutional Room Supply</Eyebrow>
            <SectionTitle>Organization-connected supply, still traced back to a canonical Room Passport.</SectionTitle>
            <Paragraph>
              Whether supply comes from open marketplace discovery, an approved provider network,
              organization-distributed inventory, or a managed portfolio, every room keeps the
              same evidence trail — and the distribution relationship is always shown separately
              from room verification.
            </Paragraph>
            <div className="flex flex-col gap-4">
              {supplyPoints.map((point) => (
                <BulletBlock key={point.title} {...point} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
              <NaturalImage
                src="/images/organizations-overview/institutional-supply-review.png"
                alt="An organization representative reviewing a distributed room listing"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white">
              <div className="bg-[#F1E7DA] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-[#8A6A24]">
                Sample distributed-supply record · demonstration data
              </div>
              <div className="flex flex-col divide-y divide-[#E9E0D3]">
                {supplyRecordRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                    <span className="text-neutral-500">{row.label}</span>
                    <EvidenceBadge label={row.value} tone={row.tone} variant="outline" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
