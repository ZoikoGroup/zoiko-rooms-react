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
            {t("Ready to search with the process in view?")}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
            {t(
              "Start with current room results or open a detailed stage guide before sharing documents, signing, or paying.",
            )}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/find-a-room" size="lg" variant="secondary">
              {t("Find a Room")}
            </Button>
            <Button href="/find-a-room/search-rooms" size="lg" variant="outline">
              {t("Search Rooms")}
            </Button>
            <Button href="/how-it-works/payments-safety-support" size="lg" variant="outline">
              {t("Payments, Safety & Support")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
