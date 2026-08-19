"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

export function VerificationScopedSection() {
  return (
    <section className="border-b border-[#E9E0D3] py-10 sm:py-14">
      <Container>
        <Reveal>
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-4 rounded-3xl bg-brand-navy px-8 py-12 text-center sm:py-14"
          >
            <h2 className="font-heading text-2xl font-medium text-white sm:text-3xl">
              Verification is scoped, not universal.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[#C6CCDE]">
              Identity, listing authority, room evidence, availability, price and terms,
              organization relationship, payment route, and action status remain separate. Each
              status shows what was checked, when, by whom, and what it does not prove.
            </p>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
