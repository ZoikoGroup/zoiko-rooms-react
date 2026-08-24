"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";

const points = [
  "Listing language must not unlawfully exclude, use coded discrimination, or make demeaning descriptions.",
  "No hidden personality, cultural, religious, ethnic, gender, health, sexuality, or income-class scoring.",
  "Household facts may describe actual arrangements and practical rules without demanding sensitive self-identification.",
  "Seekers and residents can report discriminatory content or behavior; affected actions may be suppressed during review.",
];

export function FairAccessSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Fair Access")}</Eyebrow>
            <SectionTitle>{t("No discriminatory wording, hidden rules, or coded exclusions")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/live-in-providers/fair-access-couple.png"
              alt={t("A couple reviewing a room listing together")}
            />
          </motion.div>

          <BulletList items={points.map(t)} className="max-w-3xl" />

          <Callout label={t("Prohibited pattern")} className="max-w-3xl">
            {t(
              'Phrases like "females only," "professionals only," or "must fit our culture" are blocked unless a narrowly applicable legal basis has been reviewed and approved. Use specific household facts and agreement terms instead.',
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
