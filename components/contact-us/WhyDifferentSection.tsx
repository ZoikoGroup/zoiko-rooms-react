"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { whyDifferentCards } from "./data";

export function WhyDifferentSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Why contacting us feels different")}</Eyebrow>
            <SectionTitle className="text-center">{t("Real people, not a ticket number")}</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyDifferentCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="flex flex-col gap-3 rounded-2xl border border-[#E9E0D3] bg-white p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-cream text-brand-navy">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-brand-navy">{t(card.title)}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{t(card.description)}</p>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
