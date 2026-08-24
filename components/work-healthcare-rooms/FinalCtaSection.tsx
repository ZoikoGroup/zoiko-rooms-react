"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FinalCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 rounded-4xl bg-[#F1E7DA] py-20 text-center">
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
          >
            {t("Continue with an accountable search")}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
            {t("Search current rooms, or explore organization solutions if you're an employer or healthcare buyer.")}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/find-a-room" size="lg" variant="secondary">
              {t("Search Work & Healthcare Rooms")}
            </Button>
            <Button href="/organizations" size="lg" variant="outline">
              {t("Solutions for Employers")}
            </Button>
            <Button href="/organizations" size="lg" variant="outline">
              {t("Solutions for Healthcare")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
