"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Paragraph, NumberedBlock, SectionGroup } from "./shared";
import { rightsCards } from "./data";

export function RightsChildrenSection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="your-privacy-rights" number="15" title="Your privacy rights">
            <Paragraph>
              Depending on where you live, you may have rights to access, correct, delete,
              restrict or object to processing, port your data, or withdraw consent. Universal
              controls are available regardless of region; some rights are subject to regional
              exceptions, verification, or an authorized-agent process.
            </Paragraph>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {rightsCards.map(({ title, description }) => (
                <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-5">
                  <h3 className="font-heading text-sm font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </NumberedBlock>

          <NumberedBlock id="children-age" number="16" title="Children & age-related information">
            <Paragraph>
              Zoiko Rooms is not directed at children and requires users to meet the minimum age
              eligibility for our markets. Where an age-assurance check applies, we describe it
              at that specific point in the product. We don&apos;t design Zoiko Rooms for use by
              children, and we don&apos;t imply otherwise anywhere in this notice.
            </Paragraph>
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
