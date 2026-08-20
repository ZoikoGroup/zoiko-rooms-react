"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";
import { englandUseCases } from "./data";

export function RegionalRulesSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Regional Rules · England Launch Profile</Eyebrow>
            <SectionTitle>Current UK PECR &amp; data-protection rules.</SectionTitle>
            <Paragraph>
              England is a launch market profile, not the global default — reflecting the Data
              (Use and Access) Act 2025 changes and the ICO&apos;s April 2026 storage/access
              technology guidance.
            </Paragraph>
          </div>

          <Callout label="UK implementation principle" tone="dark" className="max-w-3xl">
            &quot;Analytics&quot; is not treated as a legal category on its own. A specific
            statistical use either satisfies the UK exception&apos;s conditions, or it requires
            consent — there&apos;s no third option.
          </Callout>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <div className="min-w-[680px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
              <div className="grid grid-cols-[1fr_2fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                <span>Use case</span>
                <span>England treatment</span>
              </div>
              <div className="divide-y divide-[#E9E0D3] bg-white">
                {englandUseCases.map((row) => (
                  <div key={row.useCase} className="grid grid-cols-[1fr_2fr] gap-4 px-6 py-3.5 text-sm">
                    <span className="font-semibold text-brand-navy">{row.useCase}</span>
                    <span className="text-neutral-600">{row.treatment}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
