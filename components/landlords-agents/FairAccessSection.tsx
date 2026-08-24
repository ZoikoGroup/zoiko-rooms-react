"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";
import { fairAccessPoints } from "./data";

export function FairAccessSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Fair Access")}</Eyebrow>
            <SectionTitle>{t("Applicant criteria and human authority")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/landlords-agents/fair-access-agent.png"
              alt={t("An agent walking through a property with applicants visible behind")}
            />
          </motion.div>

          <BulletList items={fairAccessPoints.map(t)} className="max-w-3xl" />

          <Callout label={t("Prohibited pattern")} className="max-w-3xl">
            {t(
              "A principal's instruction cannot override applicable fairness requirements. Zoiko Rooms does not execute a discriminatory instruction — it is restricted and escalated instead.",
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
