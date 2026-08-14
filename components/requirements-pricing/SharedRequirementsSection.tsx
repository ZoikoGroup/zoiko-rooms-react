"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { sharedRequirements } from "./data";

export function SharedRequirementsSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Shared Minimum Requirements</Eyebrow>
            <SectionTitle>What every provider needs, regardless of path</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {sharedRequirements.map(({ title, description }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeUp} className="text-xs text-neutral-400">
            Providers remain responsible for applicable local permissions, registration, licensing,
            tax, and legal requirements — this checklist is not a complete legal determination.
          </motion.p>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
