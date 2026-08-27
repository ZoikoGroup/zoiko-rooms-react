"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, Paragraph } from "./shared";
import { article } from "./data";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{t("Press Release")}</Eyebrow>
          <motion.h1 variants={fadeUp} className="max-w-3xl font-heading text-3xl font-medium text-brand-navy sm:text-5xl sm:leading-[1.15]">
            {t(article.headline)}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-sm font-medium text-neutral-500">
            {t(article.location)} · {article.date} ({t(article.source)})
          </motion.p>

          <div className="border-t border-[#E9E0D3] pt-5">
            <Paragraph>{t(article.intro)}</Paragraph>
          </div>

          <motion.a
            variants={fadeUp}
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1.5 rounded-full border border-[#E9E0D3] bg-[#FFFDF8] px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-red hover:text-brand-red"
          >
            {t("Read the original release on Issuewire")}
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </Reveal>
      </Container>
    </section>
  );
}
