"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

const principles = [
  {
    title: "Choice Before Coercion",
    description: "Workers see whether search is free, referred, or allocated — with real alternatives.",
  },
  {
    title: "No Wage Deduction Implied",
    description: "This page never shows or implies payroll or wage-deduction funding.",
  },
  {
    title: "Human-Owned Decisions",
    description: "Eligibility, allocation, and funding always have a named accountable owner.",
  },
];

export function WorkforcePrincipleSection() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="flex flex-col gap-8 rounded-3xl bg-[#1B2438] p-6 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.h2 variants={fadeUp} className="max-w-xs font-heading text-2xl font-medium text-white">
            Housing activity is never used as an employment-performance signal.
          </motion.h2>
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
            {principles.map(({ title, description }) => (
              <motion.div key={title} variants={fadeUp} className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/50">{title}</span>
                <p className="text-sm leading-relaxed text-white/70">{description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
