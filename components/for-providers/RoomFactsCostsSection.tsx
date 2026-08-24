"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const items = [
  "Room facts",
  "Media",
  "Availability",
  "Rent & deposit",
  "Required fees",
  "Bills",
  "Known upfront total",
  "Payment route",
  "Cancellation / refund",
  "Material terms",
];

export function RoomFactsCostsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Room Facts, Availability and Costs")}</Eyebrow>
            <SectionTitle>{t("What must be accurate and current")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-[#E9E0D3] bg-white px-4 py-2.5 text-sm text-brand-ink shadow-sm"
              >
                {t(item)}
              </span>
            ))}
          </motion.div>

          <Callout label={t("Example boundary")} className="max-w-3xl">
            {t(
              "Illustrative disclosure: $1,250/month rent, $1,250 deposit, $75 one-time move-in fee, bills estimated separately, known amount before move-in $2,575. These USD amounts show disclosure structure only — not fees, averages, or guaranteed income.",
            )}
          </Callout>

          <Button href="/list-a-room/requirements-pricing" variant="outline" size="md" className="w-fit">
            {t("Requirements & Pricing")}
          </Button>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
