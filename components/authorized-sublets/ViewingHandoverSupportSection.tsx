"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";
import { viewingHandoverPoints } from "./data";

export function ViewingHandoverSupportSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Viewing, Handover, and Support")}</Eyebrow>
            <SectionTitle>{t("Safe from first contact to handback")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/authorized-sublets/viewing-handover-team.png"
              alt={t("A provider walking prospective seekers through a room during a viewing")}
            />
          </motion.div>

          <BulletList items={viewingHandoverPoints.map(t)} className="max-w-3xl" />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
