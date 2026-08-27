"use client";

import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function SafetyBannerSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] bg-[#FBEAEA] py-6">
      <Container>
        <Reveal>
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-red">
                <TriangleAlert className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-brand-navy">
                  {t("If something feels wrong right now, don't wait for a guide.")}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
                  {t(
                    "Payment redirection, requests for codes or credentials, a room that doesn't match what you were shown, impersonation, unsafe viewings, harassment, or discrimination — these need immediate action, not a step-by-step article. In immediate danger, contact local emergency services first.",
                  )}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2 pl-11 sm:pl-0">
              <Button href="/resources/safety-scam-prevention" variant="outline-red" size="sm">
                {t("Open Safety Guidance")}
              </Button>
              <Button href="/resources/help-center" variant="primary" size="sm">
                {t("Get Help")}
              </Button>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
