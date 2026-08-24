"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ProviderSupportSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal className="flex flex-col gap-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
            >
              {t("Still Not Sure?")}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl"
            >
              {t("Talk to Provider Support")}
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
              {t(
                "Guided questions and provider support can help you choose the right path — no forced self-certification.",
              )}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/resources/help-center" size="lg" variant="outline">
                {t("Contact Provider Help")}
              </Button>
            </motion.div>
          </div>

          <Reveal className="flex flex-col items-center gap-6 rounded-4xl bg-[#F1E7DA] py-20 text-center">
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
            >
              {t("Ready to prepare the room?")}
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
              {t("Start a private listing draft or open the provider guide matching your authority.")}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/list-a-room/start-a-listing" size="lg" variant="secondary">
                {t("Start a Listing")}
              </Button>
              <Button href="/list-a-room/requirements-pricing" size="lg" variant="outline">
                {t("Requirements & Pricing")}
              </Button>
              <Button href="/resources/help-center" size="lg" variant="outline">
                {t("Provider Help")}
              </Button>
            </motion.div>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
