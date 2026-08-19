"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, BulletList, SectionDivider } from "./shared";
import { accessibilityCards } from "./data";

export function DisabilityAccessibilitySection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Disability &amp; Accessibility</Eyebrow>
            <SectionTitle>Reasonable adjustment isn&apos;t optional.</SectionTitle>
            <Paragraph>
              Disability discrimination is prohibited, and local law may require reasonable
              accommodation or adjustment — no medical diagnosis is required to start a request.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {accessibilityCards.map(({ title, description, points }) => (
              <motion.div key={title} variants={fadeUp} className="flex flex-col gap-3 rounded-2xl border border-[#E9E0D3] bg-white p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                <BulletList items={points} />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
