"use client";

import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function SafetyBannerSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] bg-white py-10 sm:py-14">
      <Container>
        <Reveal>
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-6 rounded-3xl bg-[#F0E4D8] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-9"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-red sm:flex">
                <TriangleAlert className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-lg font-medium text-brand-navy">{t("Something feel off right now?")}</h3>
                <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                  {t(
                    "Payment redirection, credential requests, a false room, or an unsafe viewing — this overrides normal browsing.",
                  )}
                </p>
              </div>
            </div>
            <Button href="/resources/safety-scam-prevention" variant="secondary" size="lg" className="shrink-0">
              {t("Review Safety Guidance")}
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
