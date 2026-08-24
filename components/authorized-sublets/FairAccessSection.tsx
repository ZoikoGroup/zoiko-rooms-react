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
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Fair Access")}</Eyebrow>
            <SectionTitle>{t("Permission cannot become a pretext for discrimination")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/authorized-sublets/fair-access-provider.png"
              alt={t("A provider standing outside, with applicants visible behind")}
            />
          </motion.div>

          <BulletList items={fairAccessPoints.map(t)} className="max-w-3xl" />

          <Callout label={t("Prohibited pattern")} className="max-w-3xl">
            {t(
              "Using owner or landlord permission as a pretext for provider-added discriminatory preferences is blocked, regardless of how the permission is worded.",
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
