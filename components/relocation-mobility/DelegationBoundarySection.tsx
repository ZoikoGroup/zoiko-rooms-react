"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph } from "./shared";

const chain = ["Client organization", "Mobility sponsor", "Relocation provider", "Case manager", "Room provider", "Participant / household"];

export function DelegationBoundarySection() {
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <div className="flex max-w-2xl flex-col items-center gap-4">
            <Eyebrow>Delegation Boundary</Eyebrow>
            <SectionTitle>The full authority chain, always visible</SectionTitle>
            <Paragraph className="mx-auto">
              From client organization to participant, every link names who can search, decide,
              sign, and pay — and what happens when responsibility moves.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2">
            {chain.map((link, index) => (
              <div key={link} className="flex items-center gap-2">
                <span className="rounded-full border border-[#E9E0D3] bg-white px-4 py-2 text-sm font-medium text-brand-navy shadow-sm">
                  {link}
                </span>
                {index < chain.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300" />}
              </div>
            ))}
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
