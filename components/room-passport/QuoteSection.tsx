"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow } from "./shared";

export function QuoteSection() {
  return (
    <section className="border-b border-white/10 bg-[#0f1119] py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow dark>Read This Before You Trust a Badge</Eyebrow>
          <motion.blockquote
            variants={fadeUp}
            className="font-heading text-2xl font-medium leading-relaxed text-white sm:text-3xl"
          >
            &quot;A Room Passport reduces uncertainty. It does not guarantee safety, legality,
            condition, or that anything stays true tomorrow.&quot;
          </motion.blockquote>
          <motion.p variants={fadeUp} className="text-sm text-white/50">
            — The one sentence every evidence-based platform should be willing to put in writing
          </motion.p>
        </Reveal>
      </Container>
    </section>
  );
}
