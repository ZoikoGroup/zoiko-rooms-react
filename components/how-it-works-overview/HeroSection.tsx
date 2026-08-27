"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Reveal, Button, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, Paragraph } from "./shared";
import { journeyCards } from "./data";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] py-12 sm:py-16">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Eyebrow>{t("How It Works")}</Eyebrow>
          <motion.h1 variants={fadeUp} className="font-heading text-3xl font-medium text-brand-navy sm:text-[36px] sm:leading-[1.15]">
            {t(
              "Understand the complete room journey — from first search or draft to agreement, payment, move-in, and support.",
            )}
          </motion.h1>
          <Paragraph className="mx-auto">
            {t(
              "Choose your side to see the steps, evidence, decisions, costs, privacy controls, and responsibilities that apply.",
            )}
          </Paragraph>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/how-it-works/for-room-seekers" size="sm" variant="secondary">
              {t("I Need a Room")}
            </Button>
            <Button href="/how-it-works/for-providers" size="sm" variant="outline-red">
              {t("I Provide a Room")}
            </Button>
          </motion.div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {journeyCards.map(({ eyebrow, title, description, image, cta, href }) => (
            <motion.a
              key={title}
              href={href}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="group relative flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl"
            >
              <ImageFade
                src={image}
                alt={t(title)}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020]/85 via-[#0A1020]/25 to-transparent" />
              <div className="relative z-10 flex flex-col gap-2 p-6 text-left text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F2A38C]">{t(eyebrow)}</span>
                <h3 className="font-heading text-xl font-semibold">{t(title)}</h3>
                <p className="max-w-md text-xs leading-relaxed text-white/75">{t(description)}</p>
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/40 px-4 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-white group-hover:text-brand-navy">
                  {t(cta)}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
