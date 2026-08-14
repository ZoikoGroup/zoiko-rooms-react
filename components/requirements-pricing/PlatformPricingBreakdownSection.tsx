"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle } from "./shared";
import type { PricingBreakdownRow } from "./pricing";

type PlatformPricingBreakdownSectionProps = {
  rows: PricingBreakdownRow[];
  outOfScope: boolean;
  resultKey: string;
};

export function PlatformPricingBreakdownSection({ rows, outOfScope, resultKey }: PlatformPricingBreakdownSectionProps) {
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Platform Pricing Breakdown</Eyebrow>
            <SectionTitle>Zoiko Rooms charges — illustrative structure only</SectionTitle>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
            <div className="grid grid-cols-2 gap-4 bg-[#F7F2EA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:px-6">
              <span>Charge</span>
              <span>Illustrative display</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={resultKey}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="divide-y divide-[#E9E0D3] bg-white"
              >
                {outOfScope ? (
                  <div className="px-5 py-6 text-sm text-neutral-600 sm:px-6">
                    Standard platform pricing does not apply to an Organization / Portfolio
                    account — see{" "}
                    <a href="#organizations-pro" className="font-semibold text-brand-red hover:text-brand-red-dark">
                      Organizations and Zoiko Rooms Pro
                    </a>{" "}
                    below for the professional route.
                  </div>
                ) : (
                  rows.map((row) => (
                    <div key={row.charge} className="grid grid-cols-2 gap-4 px-5 py-4 text-sm sm:px-6">
                      <span className="font-medium text-brand-navy">{row.charge}</span>
                      <span className="text-neutral-600">{row.display}</span>
                    </div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
