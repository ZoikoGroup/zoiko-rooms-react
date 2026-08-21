"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Paragraph, Tag, NumberedBlock, SectionGroup } from "./shared";
import { infoCategoryRows } from "./data";

export function InformationCollectedSection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal>
          <NumberedBlock id="information-collected" number="03" title="Information we collect">
            <Paragraph>
              Fields shown reflect what&apos;s actually collected in production — required fields
              are separated from optional ones in-product.
            </Paragraph>

            <motion.div variants={fadeUp} className="overflow-x-auto">
              <div className="min-w-[820px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
                <div className="grid grid-cols-[1.3fr_1.7fr_1.6fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                  <span>Category</span>
                  <span>Marketplace examples</span>
                  <span>Notes</span>
                </div>
                <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
                  {infoCategoryRows.map((row) => (
                    <div key={row.category} className="grid grid-cols-[1.3fr_1.7fr_1.6fr] items-start gap-4 px-6 py-3.5 text-sm">
                      <span className="font-semibold text-brand-navy">
                        {row.category}
                        {row.tag && <Tag label={row.tag} />}
                      </span>
                      <span className="text-neutral-600">{row.examples}</span>
                      <span className="text-neutral-500">{row.notes}</span>
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
