"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function SupportCtaSection() {
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
            <motion.h2 variants={fadeUp} className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl">
              {t("Talk to Provider Support")}
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
              {t(
                "If you're not sure whether Authorized Sublet, Live-in Provider, Landlord/Agent, or an organization path applies, support can help before you start a listing.",
              )}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/resources" size="lg" variant="outline">
                {t("Contact Provider Help")}
              </Button>
            </motion.div>
          </div>

          <Reveal className="flex flex-col items-center gap-4 rounded-4xl bg-[#F1E7DA] py-16 text-center">
            <motion.h2 variants={fadeUp} className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl">
              {t("Ready to prepare an authorized sublet?")}
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
              {t("Start a private draft. You can save and return before submitting documents or publishing.")}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/list-a-room/start-a-listing" size="lg" variant="primary">
                {t("Start an Authorized Sublet")}
              </Button>
              <Button href="/list-a-room/requirements-pricing" size="lg" variant="outline">
                {t("Requirements & Pricing")}
              </Button>
              <Button href="/resources" size="lg" variant="outline">
                {t("Provider Help")}
              </Button>
            </motion.div>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
