"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function NeedHelpSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F0E4D8] py-16">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <motion.h2 variants={fadeUp} className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl">
            {t("Need Help?")}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-sm leading-relaxed text-neutral-600">
            {t("Report behavior that may violate these standards or contact us if you need support using Zoiko Rooms.")}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            <Button href="#reporting" variant="secondary" size="md">
              {t("Report a Concern")}
            </Button>
            <Button href="/contact-us" variant="outline" size="md">
              {t("Contact Support")}
            </Button>
          </motion.div>
          <motion.a
            variants={fadeUp}
            href="/resources/help-center"
            className="text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
          >
            {t("Visit the Help Center")} →
          </motion.a>
        </Reveal>
      </Container>
    </section>
  );
}
