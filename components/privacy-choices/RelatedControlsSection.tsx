"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, Paragraph } from "./shared";
import { relatedControls } from "./data";

export function RelatedControlsSection() {
  return (
    <section className="border-t border-[#E9E0D3] py-14 sm:py-20">
      <Container>
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Related Controls</Eyebrow>
            <Paragraph>
              Cookie controls and statutory privacy choices are separate. Turning off advertising
              cookies below does not, by itself, complete a legal opt-out request above.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {relatedControls.map((label) => (
              <motion.a
                key={label}
                href="#"
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="flex items-center justify-between gap-2 rounded-xl border border-[#E9E0D3] bg-white px-5 py-4 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-navy/30"
              >
                {label}
                <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400" />
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-2 border-t border-[#E9E0D3] pt-5 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>Policy version 1.0 · Effective 17 August 2026</span>
            <span>
              Prefer phone or mail?{" "}
              <a href="/resources" className="font-semibold text-brand-red hover:text-brand-red-dark">
                Contact our privacy team →
              </a>
            </span>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
