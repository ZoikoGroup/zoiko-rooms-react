"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Callout, StatusPill, SectionDivider } from "./shared";

const statuses = [
  { label: "Not due", tone: "gray" as const },
  { label: "Due", tone: "amber" as const },
  { label: "Pending", tone: "gray" as const },
  { label: "Completed", tone: "teal" as const },
  { label: "Failed", tone: "red" as const },
  { label: "Reversed", tone: "red" as const },
  { label: "Refund pending", tone: "amber" as const },
  { label: "Refunded", tone: "teal" as const },
  { label: "Disputed", tone: "red" as const },
];

export function PaymentLifecycleSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider id="payment-lifecycle" className="scroll-mt-24 bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Payment Lifecycle")}</Eyebrow>
            <SectionTitle>{t("Every status, and what it actually means")}</SectionTitle>
          </div>

          <motion.div className="flex flex-wrap gap-2">
            {statuses.map(({ label, tone }) => (
              <StatusPill key={label} label={t(label)} tone={tone} />
            ))}
          </motion.div>

          <Callout label={t("Anti-redirection warning")}>
            {t(
              "A message that says payment details changed is not sufficient authority. Stop and verify through the current Room Passport, agreement, provider or organization route, and approved payment workflow."
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
