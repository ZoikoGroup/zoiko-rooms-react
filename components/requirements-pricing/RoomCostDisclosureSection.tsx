"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider, Callout } from "./shared";
import { seekerCostRows } from "./data";

export function RoomCostDisclosureSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Room-Cost Disclosure</Eyebrow>
            <SectionTitle>Platform price is not the room price</SectionTitle>
          </div>

          <Callout label="Trust boundary" className="max-w-3xl">
            Zoiko Rooms pricing must never be merged with provider-set rent, deposits, required
            room fees, utilities, or third-party payments.
          </Callout>

          <div className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
            <div className="grid grid-cols-2 gap-4 bg-[#F7F2EA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:px-6">
              <span>Item</span>
              <span>Illustrative seeker-facing display</span>
            </div>
            <div className="divide-y divide-[#E9E0D3] bg-white">
              {seekerCostRows.map((row) => (
                <motion.div key={row.item} variants={fadeUp} className="grid grid-cols-2 gap-4 px-5 py-4 text-sm sm:px-6">
                  <span className="font-medium text-brand-navy">{row.item}</span>
                  <span className="text-neutral-600">{row.display}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <Callout label="No blended total" tone="rose" className="max-w-3xl">
            Zoiko Rooms never blends a provider platform fee into the seeker-facing rent or upfront
            total, and never describes a room as fee-free when provider, agent, government, or
            optional charges exist.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
