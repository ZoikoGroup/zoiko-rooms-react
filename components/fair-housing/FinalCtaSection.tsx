"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FinalCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F0E4D8] py-16">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <motion.h2 variants={fadeUp} className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl">
            {t("Concerned About Discrimination?")}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-sm leading-relaxed text-neutral-600">
            {t("Report conduct that may violate this policy, or request an accommodation if you need support accessing a housing-related process on Zoiko Rooms.")}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            <Button href="#report-discrimination" variant="secondary" size="md">
              {t("Report Discrimination")}
            </Button>
            <Button href="#accessibility" variant="outline" size="md">
              {t("Request an Accommodation")}
            </Button>
          </motion.div>
          <motion.a
            variants={fadeUp}
            href="/contact-us"
            className="text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
          >
            {t("Contact Support")} →
          </motion.a>
        </Reveal>
      </Container>
    </section>
  );
}
