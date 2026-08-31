"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, Paragraph, SubHeading } from "./shared";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Eyebrow>{t("Trust & Safety")}</Eyebrow>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-medium text-brand-navy sm:text-5xl">
              {t("Community Standards")}
            </motion.h1>
            <Paragraph>
              {t(
                "The standards that help keep Zoiko Rooms respectful, trustworthy, and safe for everyone.",
              )}
            </Paragraph>
            <Paragraph className="text-sm text-neutral-500">
              {t(
                "Whether you are looking for a room, providing one, communicating with another user, or managing a stay, everyone using Zoiko Rooms is expected to act honestly, respectfully, lawfully, and with consideration for others.",
              )}
            </Paragraph>
            <motion.p variants={fadeUp} className="text-xs italic leading-relaxed text-neutral-400">
              {t(
                "These standards apply across Zoiko Rooms. Additional requirements may apply based on your location, the property, and applicable law.",
              )}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-col gap-3 rounded-2xl border border-[#E9E0D3] bg-white p-6"
            >
              <SubHeading>{t("Need Immediate Assistance?")}</SubHeading>
              <Button href="#reporting" variant="secondary" size="md">
                {t("Report a Concern")}
              </Button>
              <Button href="/contact-us" variant="outline" size="md">
                {t("Contact Support")}
              </Button>
              <a
                href="/legal/fair-housing-anti-discrimination"
                className="text-sm font-semibold text-brand-navy underline underline-offset-2 transition-colors hover:text-brand-red"
              >
                {t("Fair Housing & Anti-Discrimination")} →
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative h-[320px] w-full overflow-hidden rounded-[32px] sm:h-[420px]">
            <ImageFade
              src="/images/community-standards/hero-living-room.webp"
              alt={t("A comfortable, well-kept shared living room")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
