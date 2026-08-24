"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const breakdown = [
  { title: "Monthly room rent", subtitle: "Illustrative example, USD", value: "$1,600 / mo", tone: "gray" as const },
  { title: "Healthcare workforce allowance", subtitle: "First three months", value: "$1,000 / mo", tone: "green" as const },
  { title: "Worker recurring responsibility", subtitle: "During the allowance period", value: "~$750 / mo", tone: "amber" as const },
  { title: "Worker upfront responsibility", subtitle: "Deposit + move-in fee, unless covered", value: "$1,700", tone: "amber" as const },
  { title: "Funding status", subtitle: "Nothing is confirmed until authorized", value: "Pending approval", tone: "gray" as const },
];

export function FundingBillingSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Funding & Billing")}</Eyebrow>
            <SectionTitle>{t("Complete costs before anyone commits")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t(
                "Organization-paid and worker-paid amounts, always shown side by side — before an agreement is ever signed."
              )}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="w-full overflow-hidden rounded-3xl"
            >
              <NaturalImage
                src="/images/healthcare/funding-packing-suitcase.png"
                alt={t("A worker packing a suitcase before relocating for a healthcare assignment")}
              />
            </motion.div>

            <div className="flex flex-col gap-3">
              {breakdown.map(({ title, subtitle, value, tone }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex items-center justify-between gap-4 rounded-xl border border-[#E9E0D3] bg-white px-5 py-4 shadow-sm"
                >
                  <span>
                    <span className="block text-sm font-semibold text-brand-navy">{t(title)}</span>
                    <span className="block text-sm text-neutral-500">{t(subtitle)}</span>
                  </span>
                  <EvidenceBadge label={t(value)} tone={tone} variant="outline" className="shrink-0" />
                </motion.div>
              ))}

              <Button href="/resources" variant="outline" size="md" className="mt-2 w-fit">
                {t("See a Sample Funding Breakdown")}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
