"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";

const points = [
  "Use a scheduled time and identify who will attend the viewing.",
  "Disclose the exact address only at the approved stage.",
  "Offer a remote alternative where practical, with its limitations labeled.",
  "Never request a deposit or sensitive document merely to arrange a viewing.",
  "Report, block, and support controls remain available at every stage.",
];

export function CommunicationViewingsSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Communication and Viewings")}</Eyebrow>
            <SectionTitle>{t("Safe contact from first message to move-in")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/live-in-providers/communication-viewing.png"
              alt={t("A provider greeting a room seeker for a scheduled viewing")}
            />
          </motion.div>

          <BulletList items={points.map(t)} className="max-w-3xl" />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
