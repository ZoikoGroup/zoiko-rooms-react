"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { boundaryPoints } from "./data";

export function BoundarySection() {
  const { t } = useLanguage();

  return (
    <section className="pt-10 pb-6 sm:pt-14 sm:pb-8">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-brand-navy p-8 text-white sm:p-11 lg:grid-cols-[1.2fr_1fr_1fr]">
          <motion.h3 variants={fadeUp} className="max-w-sm font-heading text-xl font-medium leading-snug sm:text-2xl">
            {t(
              "Resources explain and route — they never guarantee an outcome, official legal advice, or a scam-free platform.",
            )}
          </motion.h3>
          {boundaryPoints.map((point) => (
            <motion.div key={point.title} variants={fadeUp} className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8FA3D9]">{t(point.title)}</span>
              <p className="text-sm leading-relaxed text-[#C6CCDE]">{t(point.description)}</p>
            </motion.div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
