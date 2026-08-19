"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { DocSection, SectionHeading, Subtitle, Paragraph } from "./shared";
import { regionalFacts, regionalHighlights } from "./data";

export function RegionalRulesSection() {
  return (
    <DocSection id="regional-rules">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>Regional rules — England</SectionHeading>
          <Subtitle>
            This profile applies only where the property and transaction fall within
            England&apos;s private-renting framework. Scotland, Wales, and Northern Ireland use
            separate market packs.
          </Subtitle>
        </div>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 divide-y divide-[#E9E0D3] rounded-2xl border border-[#E9E0D3] bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0"
        >
          {regionalFacts.map((fact) => (
            <div key={fact.label} className="flex items-center justify-between gap-4 px-6 py-4">
              <span className="text-sm text-neutral-500">{fact.label}</span>
              <span className="text-sm font-semibold text-brand-navy">{fact.value}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {regionalHighlights.map(({ tag, title, description }) => (
            <motion.div key={tag} variants={fadeUp} className="flex flex-col gap-1.5 rounded-2xl border border-[#E3C583] bg-[#FBF1DD] p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8A6A24]">{tag}</span>
              <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-[#6B5518]">{description}</p>
            </motion.div>
          ))}
        </div>

        <Paragraph>
          Client Money Protection and tenancy-deposit protection are distinct — one is never
          presented as a substitute for the other. This summary is a disclosure, not personal
          legal or tax advice.
        </Paragraph>
      </Reveal>
    </DocSection>
  );
}
