"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { evidenceStatuses } from "./data";

export function EvidenceReviewSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Evidence and Review</Eyebrow>
            <SectionTitle>What each evidence status means</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {evidenceStatuses.map(({ title, description }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
