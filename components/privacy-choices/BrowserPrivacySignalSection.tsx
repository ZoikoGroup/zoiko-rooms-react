"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionDivider } from "./shared";

export function BrowserPrivacySignalSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Browser Privacy Signal</Eyebrow>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-4 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-16 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-xs font-bold text-emerald-700">
                GPC
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-medium text-brand-navy">Recognized and honored</h3>
                <p className="max-w-lg text-sm leading-relaxed text-neutral-600">
                  Your browser sent a Global Privacy Control signal. We&apos;ve applied it as an
                  opt-out of sale, sharing, and targeted advertising for this browser — you
                  don&apos;t need to do anything else.
                </p>
              </div>
            </div>
            <Button href="#quick-privacy-choices" variant="outline" size="md" className="shrink-0 whitespace-nowrap">
              View effective privacy state
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
