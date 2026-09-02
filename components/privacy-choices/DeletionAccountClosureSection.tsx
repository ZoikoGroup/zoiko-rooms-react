"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { deletionCards } from "./data";

export function DeletionAccountClosureSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Deletion &amp; Account Closure</Eyebrow>
            <SectionTitle>Two different things. We won&apos;t blur them.</SectionTitle>
            <Paragraph>
              Deleting your data and closing your account solve different problems — and
              they&apos;re never bundled together silently.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {deletionCards.map(({ title, description, caption, tone }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className={`flex flex-col gap-3 rounded-2xl border p-6 ${
                  tone === "rose" ? "border-brand-red/30 bg-[#FBE9E9]" : "border-[#E9E0D3] bg-[#FFFDF8]"
                }`}
              >
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                <div className="flex flex-col gap-3 border-t border-black/5 pt-3">
                  <p className="text-xs text-neutral-500">{caption}</p>
                  <a href="/contact-us" className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">
                    Start this request →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
