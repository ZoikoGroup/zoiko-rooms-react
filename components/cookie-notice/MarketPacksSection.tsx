"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph } from "./shared";
import { marketPacks } from "./data";

export function MarketPacksSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Market Packs for Future Launches</Eyebrow>
            <SectionTitle>No two markets get the same cookie law, flattened into one.</SectionTitle>
            <Paragraph>
              Each of these applies automatically once Zoiko Rooms launches there — none of them
              alters the global page structure above.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {marketPacks.map(({ title, description }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
