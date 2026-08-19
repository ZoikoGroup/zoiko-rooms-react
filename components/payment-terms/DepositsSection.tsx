"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";
import { depositCards, decisionGateRows, type DepositCard } from "./data";

const tagToneClasses: Record<DepositCard["tone"], string> = {
  green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  rose: "bg-[#FBE9E9] text-brand-red border-brand-red/20",
  gray: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export function DepositsSection() {
  return (
    <DocSection id="deposits">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>Deposits and rent in advance</SectionHeading>
          <Subtitle>Different money types, kept distinct — never a generic &quot;non-refundable deposit&quot; switch.</Subtitle>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {depositCards.map(({ tag, tone, title, description, facts }) => (
            <motion.div key={title} variants={fadeUp} className="flex flex-col gap-3 rounded-2xl border border-[#E9E0D3] bg-white p-5">
              <span className={`w-fit rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${tagToneClasses[tone]}`}>
                {tag}
              </span>
              <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-[#5B5548]">{description}</p>
              <div className="flex flex-col gap-1.5 border-t border-[#E9E0D3] pt-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-neutral-500">{fact.label}</span>
                    <span className="font-semibold text-brand-navy">{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <Paragraph>
          If a holding deposit is lawfully retained rather than refunded or applied, we show the
          reason code and a written explanation within the required period — never a silent
          deduction.
        </Paragraph>

        <div className="flex flex-col gap-3">
          <SubHeading>England checkout decision gate</SubHeading>
          <Paragraph>
            Before any rent or deposit collection completes in England, the checkout runs through
            these checks automatically:
          </Paragraph>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
            <div className="grid grid-cols-[1.8fr_1fr] gap-4 bg-[#F1E7DA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
              <span>Question</span>
              <span>If no or unresolved</span>
            </div>
            <div className="divide-y divide-[#E9E0D3] bg-white">
              {decisionGateRows.map((row) => (
                <div key={row.question} className="grid grid-cols-[1.8fr_1fr] gap-4 px-5 py-3.5 text-sm">
                  <span className="text-brand-navy">{row.question}</span>
                  <span className="font-medium text-brand-red">{row.response}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Reveal>
    </DocSection>
  );
}
