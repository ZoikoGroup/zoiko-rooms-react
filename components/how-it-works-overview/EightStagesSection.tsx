"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { stages } from "./data";

export function EightStagesSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("The Eight Stages")}</Eyebrow>
            <SectionTitle>{t("Every step, evidenced and explained")}</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map(({ number, title, description, image }) => (
              <motion.div
                key={number}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="relative h-[130px] w-full overflow-hidden">
                  <ImageFade src={image} alt={t(title)} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <span className="font-heading text-xl font-semibold text-brand-red/40">{number}</span>
                  <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
