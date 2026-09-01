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
            {t("Use the current route for the current issue")}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
            {t(
              "Review payment guidance, report a concern, start a refund or dispute, or contact support — without sharing sensitive credentials in messages."
            )}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="#before-paying" size="lg" variant="secondary">
              {t("Payment Guidance")}
            </Button>
            <Button href="/resources/safety-scam-prevention" size="lg" variant="outline">
              {t("Report a Concern")}
            </Button>
            <Button href="#refunds-disputes" size="lg" variant="outline">
              {t("Refund or Dispute")}
            </Button>
            <Button href="/contact-us" size="lg" variant="outline">
              {t("Contact Support")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
