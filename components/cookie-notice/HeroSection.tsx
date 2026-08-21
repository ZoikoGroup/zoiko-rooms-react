"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Paragraph, Pill } from "./shared";
import { previewCards } from "./data";

export function HeroSection() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="flex flex-col gap-5">
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">
            — Legal · Privacy
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-heading text-4xl font-medium text-brand-navy sm:text-5xl">
            Cookie Notice
          </motion.h1>
          <Paragraph>
            Learn how Zoiko Rooms uses cookies and similar technologies, why we use them, which
            providers are involved, and how you can control optional technologies. Zoiko Rooms
            uses essential technologies to operate, secure and remember core service choices.
            Depending on your region and choices, we may also use optional technologies for
            preferences, measurement, advertising or external content. You can review and change
            optional settings at any time through Cookie Preferences.
          </Paragraph>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-medium text-brand-navy">
              Last updated: 5 Feb 2026
            </span>
            <span className="rounded-full border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-medium text-brand-navy">
              Effective: 20 Apr 2026
            </span>
            <span className="rounded-full border border-brand-red/25 bg-[#FBE9E9] px-3.5 py-1.5 text-xs font-semibold text-brand-red">
              Notice pack: England, United Kingdom
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {previewCards.map(({ title, status, tone }) => (
              <motion.div key={title} variants={fadeUp} className="flex flex-col gap-2 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-5">
                <span className="font-heading text-sm font-semibold text-brand-navy">{title}</span>
                <Pill label={status} tone={tone} />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
