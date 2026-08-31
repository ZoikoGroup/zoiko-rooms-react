"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function IntroCalloutSection() {
  const { t } = useLanguage();

  return (
    <Container>
      <Reveal>
        <motion.div variants={fadeUp} className="rounded-2xl bg-[#F0E4D8] p-6 sm:p-8">
          <h2 className="font-heading text-xl font-medium text-brand-navy">
            {t("What are the Zoiko Rooms Community Standards?")}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#5B5548]">
            {t(
              "Zoiko Rooms Community Standards explain the conduct expected from people using the platform. They cover respect and non-discrimination, honest listings and communications, safety, privacy, payments, property conduct, fraud prevention, reporting, and enforcement.",
            )}
          </p>
        </motion.div>
      </Reveal>
    </Container>
  );
}
