"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, Callout, BulletBlock, SectionDivider } from "./shared";
import { journeyPoints, journeyStatusBadges } from "./data";

export function ParticipantJourneySection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>{t("Participant Journey")}</Eyebrow>
            <SectionTitle>{t("People know why they were invited — and what the organization can and can't see.")}</SectionTitle>
            <Paragraph>
              {t("From invitation through exit, the organization-connected journey never hides whether the organization selected the participant, controls the room, pays part of the cost, or receives status information.")}
            </Paragraph>
            <div className="flex flex-col gap-4">
              {journeyPoints.map((point) => (
                <BulletBlock key={point.title} title={t(point.title)} description={t(point.description)} meta={t(point.meta)} />
              ))}
            </div>

            <Callout label={t("Participant agency boundary")} className="max-w-xl">
              {t("An organization-connected journey must not hide whether the organization selected the participant, controls the room, pays all or part of the cost, receives status information, or can affect employment, education, benefits, placement, healthcare training, or public-service eligibility.")}
            </Callout>
          </div>

          <div className="flex flex-col gap-4">
            <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
              <NaturalImage
                src="/images/organizations-overview/participant-phone-call.png"
                alt={t("A participant on a phone call, reviewing housing documents at home")}
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#E9E0D3] bg-white p-5">
              <div className="flex flex-wrap gap-2">
                {journeyStatusBadges.map((badge) => (
                  <EvidenceBadge key={badge.label} label={t(badge.label)} tone={badge.tone} variant="outline" />
                ))}
              </div>
              <span className="text-xs text-neutral-400">{t("Every stage keeps a named owner and a correction path.")}</span>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
