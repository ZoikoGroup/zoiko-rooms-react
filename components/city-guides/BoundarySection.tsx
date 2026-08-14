"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

const items = [
  {
    label: "Sourced & dated",
    description: "Every guide shows its sources, review date, and geographic scope.",
  },
  {
    label: "Live records are separate",
    description: "For current rooms, providers, and costs, guides link straight to live discovery.",
  },
];

export function BoundarySection() {
  return (
    <section className="pt-10 pb-16 sm:pt-14 sm:pb-24">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-brand-navy p-8 text-white sm:p-11 lg:grid-cols-[1.2fr_1fr_1fr]">
          <motion.h3 variants={fadeUp} className="max-w-sm font-heading text-xl font-medium leading-snug sm:text-2xl">
            City guidance explains context — it never confirms current availability, fees, or safety.
          </motion.h3>
          {items.map((item) => (
            <motion.div key={item.label} variants={fadeUp} className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8FA3D9]">{item.label}</span>
              <p className="text-sm leading-relaxed text-[#C6CCDE]">{item.description}</p>
            </motion.div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
