"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function TrustSafetyBannerSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] py-8 sm:py-12">
      <Container>
        <Reveal>
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 rounded-3xl bg-brand-navy p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8A868]">
                {t("Trust & Safety")}
              </span>
              <h3 className="max-w-xl font-heading text-xl font-medium text-white sm:text-2xl">
                {t("If you're in immediate danger, contact local emergency services first.")}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-white/70">
                {t(
                  "For anything else — a suspected scam, impersonation, a listing that doesn't match what you saw, or unsafe behavior — report it and a real reviewer looks at it within an hour, not a bot.",
                )}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button href="#message-form" variant="primary" size="md">
                {t("Report a concern")}
              </Button>
              <Button
                href="/resources/safety-scam-prevention"
                variant="outline"
                size="md"
                className="!border-white/30 !text-white hover:!bg-white hover:!text-brand-navy"
              >
                {t("Safety & scam prevention guide")}
              </Button>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
