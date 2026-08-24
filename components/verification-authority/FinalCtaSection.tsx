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
            {t("Use the right status before your next action")}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
            {t(
              "Continue to the room journey, provider journey, Room Passport, or Payments, Safety & Support with the current scoped status in view."
            )}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="/find-a-room"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center justify-center rounded-full bg-[#A85A34] px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#8f4a2b]"
            >
              {t("Find a Room")}
            </motion.a>
            <Button href="/list-a-room" size="lg" variant="outline">
              {t("List a Room")}
            </Button>
            <Button href="/how-it-works/room-passport" size="lg" variant="outline">
              {t("Explore Room Passport")}
            </Button>
            <Button href="/resources" size="lg" variant="outline">
              {t("Get Support")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
