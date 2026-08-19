"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionDivider } from "./shared";
import { privacyContextItems } from "./data";

export function PrivacyContextSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Your Privacy Context</Eyebrow>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 divide-y divide-[#E9E0D3] rounded-2xl border border-[#E9E0D3] bg-white sm:grid-cols-4 sm:divide-x sm:divide-y-0"
          >
            {privacyContextItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5 px-6 py-5">
                <span className="text-xs uppercase tracking-wide text-neutral-400">{item.label}</span>
                <span className="text-sm font-semibold text-brand-navy">{item.value}</span>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-neutral-400">
            Location signals suggest your context. Verified account or controller facts govern
            where the law requires it.
          </motion.p>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
