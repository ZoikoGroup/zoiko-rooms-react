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
            className=" font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
          >
            {t("Find your next room with confidence")}
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/find-a-room" size="lg" variant="secondary">
              {t("Search verified rooms")}
            </Button>
            <Button href="/list-a-room" size="lg" variant="outline-red">
              {t("Create a free alert")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
