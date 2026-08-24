"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

export function RoomPassportSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Room Passport")}</Eyebrow>
            <SectionTitle>{t("Continuity without unnecessary disclosure")}</SectionTitle>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-3xl"
          >
            <NaturalImage
              src="/images/for-providers/room-passport-review.png"
              alt={t("A provider and residents reviewing a Room Passport folder in a bright loft")}
            />
          </motion.div>

          <Paragraph>
            {t(
              "Authority, room evidence, availability, costs, messages, viewings, applications, agreements, payments, changes, reports, and limitations remain linked through controlled role-based records. Room Passport records scoped facts and evidence — it does not guarantee authority, condition, availability, applicant suitability, legal compliance, payment, or behavior.",
            )}
          </Paragraph>

          <a
            href="/how-it-works/room-passport"
            className="w-fit text-sm font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
          >
            {t("Explore Room Passport")}
          </a>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
