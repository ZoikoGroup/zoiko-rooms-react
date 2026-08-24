"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function EvidenceSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="relative">
          <motion.div
            variants={fadeUp}
            className="relative h-105 w-full overflow-hidden rounded-4xl sm:h-120"
          >
            <ImageFade
              src="/images/home/evidence.webp"
              alt={t("Verified room interior with kitchen and living space")}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative z-10 mx-4 -mt-24 flex max-w-md flex-col gap-4 rounded-2xl bg-white p-8 shadow-lg sm:absolute sm:inset-y-0 sm:right-8 sm:mx-0 sm:my-auto sm:h-fit lg:right-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              {t("See it for yourself")}
            </span>
            <h2 className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl">
              {t("Evidence you can actually inspect")}
            </h2>
            <p className="text-sm text-neutral-600 sm:text-base">
              {t(
                "Every listing shows exactly what's been checked, by whom, and when — down to the lock on the door.",
              )}
            </p>
            <Button href="/how-it-works" variant="outline" className="w-fit">
              {t("See a sample room passport")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
