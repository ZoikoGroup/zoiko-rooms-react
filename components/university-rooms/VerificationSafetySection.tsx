"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const points = [
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship remain separate statuses.",
  "A provider claiming university affiliation still needs the relationship status shown — report any false affiliation claim.",
  "Never pay a deposit merely to arrange or access a viewing.",
  "Gift cards, cryptocurrency, and unrelated payees are warning signs — don't pay, report instead.",
];

export function VerificationSafetySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Verification and Safety")}</Eyebrow>
            <SectionTitle>{t("Separate checks, not one universal badge")}</SectionTitle>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-3xl"
          >
            <NaturalImage
              src="/images/university-rooms/verification-safety.png"
              alt={t("A university support staff member available to help students on campus")}
            />
          </motion.div>

          <BulletList items={points.map((point) => t(point))} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
