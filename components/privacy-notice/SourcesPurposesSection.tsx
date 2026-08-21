"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { BulletList, Subtitle, NumberedBlock, SectionGroup } from "./shared";
import { sourcesList, purposeRows } from "./data";

export function SourcesPurposesSection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="where-from" number="04" title="Where information comes from">
            <BulletList items={sourcesList} />
          </NumberedBlock>

          <NumberedBlock id="why-we-use" number="05" title="Why we use information">
            <Subtitle>
              The lawful basis shown for each purpose is resolved for your region — this table
              doesn&apos;t assume one basis applies everywhere.
            </Subtitle>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <div className="min-w-[780px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
                <div className="grid grid-cols-[1.4fr_1.6fr_1.4fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                  <span>Purpose</span>
                  <span>Typical data families</span>
                  <span>Legal basis (UK)</span>
                </div>
                <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
                  {purposeRows.map((row) => (
                    <div key={row.purpose} className="grid grid-cols-[1.4fr_1.6fr_1.4fr] items-start gap-4 px-6 py-3.5 text-sm">
                      <span className="font-semibold text-brand-navy">{row.purpose}</span>
                      <span className="text-neutral-600">{row.families}</span>
                      <span className="text-neutral-500">{row.basis}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
