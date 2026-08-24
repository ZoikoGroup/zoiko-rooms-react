"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const points = [
  "Provider identity does not prove ownership, agency, sublet authority, room condition, or lawful tenancy.",
  "Live or recorded viewings show date, participants, method, and limitations — never a hidden recording.",
  "You can ask about room dimensions, locks, windows, common areas, bathroom, kitchen, access, and defects during a remote viewing.",
  "Report any reused, misleading, edited, or inconsistent media.",
];

export function ProviderAuthoritySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-[#fff]">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Provider Authority and Remote Evaluation")}</Eyebrow>
            <SectionTitle>{t("Confirm who is offering the room, and why they may do so")}</SectionTitle>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-3xl"
          >
            <NaturalImage
              src="/images/international-moves/provider-video-call.png"
              alt={t("A provider walking a room seeker through a remote video viewing")}
            />
          </motion.div>

          <BulletList items={points.map((point) => t(point))} />

          <Callout label={t("Remote evidence is not a guarantee")}>
            {t(
              "A video call, recorded tour, Room Passport, identity check, document, or organization referral can reduce uncertainty. None alone proves current condition, legal right to let, suitability, personal safety, or move success."
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
