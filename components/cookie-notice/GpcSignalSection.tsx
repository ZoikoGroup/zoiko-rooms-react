"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

declare global {
  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

export function GpcSignalSection() {
  const [gpcDetected, setGpcDetected] = useState<boolean | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of a browser API on mount, not a render loop
    setGpcDetected(Boolean(navigator.globalPrivacyControl));
  }, []);

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-6 rounded-3xl border border-[#E9E0D3] bg-white p-6 sm:p-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Global Privacy Control &amp; Preference Signals</Eyebrow>
            <SectionTitle>We honor recognized browser signals automatically.</SectionTitle>
            <Paragraph>
              Cookie consent and statutory privacy opt-outs are related but distinct — a
              recognized signal is treated as a binding opt-out for the purposes it covers,
              without needing you to visit Cookie Preferences separately.
            </Paragraph>
          </div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-5 py-4 transition-colors duration-300 ${
              gpcDetected ? "border-emerald-200 bg-emerald-50" : "border-[#E9E0D3] bg-brand-cream/60"
            }`}
          >
            <span className="flex items-center gap-2.5 text-sm font-medium">
              <span className={`h-2 w-2 shrink-0 rounded-full ${gpcDetected ? "bg-emerald-500" : "bg-neutral-400"}`} />
              <span className={gpcDetected ? "text-emerald-700" : "text-neutral-500"}>
                {gpcDetected === null
                  ? "Checking your browser for a Global Privacy Control signal…"
                  : gpcDetected
                    ? "This browser is currently sending a Global Privacy Control signal"
                    : "This browser is not currently sending a Global Privacy Control signal"}
              </span>
            </span>
            <a href="/legal/your-privacy-choices" className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">
              See how it&apos;s applied →
            </a>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
