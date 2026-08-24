"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const statuses = [
  { label: "Independent marketplace coverage", tone: "gray" as const },
  { label: "University-referred pathway", tone: "teal" as const },
  { label: "Institution-distributed inventory", tone: "amber" as const },
  { label: "Institution-managed inventory", tone: "teal" as const },
  { label: "External official housing", tone: "gray" as const },
  { label: "Relationship under review", tone: "red" as const },
];

export function RelationshipAssuranceSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Relationship Assurance")}</Eyebrow>
            <SectionTitle>
              {t("Know whether a listing is independent, referred, distributed, or institution-managed")}
            </SectionTitle>
            <Paragraph>
              {t(
                "Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current."
              )}
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {statuses.map(({ label, tone }) => (
              <EvidenceBadge key={label} label={t(label)} tone={tone} variant="outline" />
            ))}
          </motion.div>

          <Callout label={t("Logo and Endorsement Rule")} className="max-w-3xl">
            {t(
              'We never display an institution logo or phrases like "partnered with" or "official" unless the exact relationship, authorization, placement, period, scope, and limitations are approved.'
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
