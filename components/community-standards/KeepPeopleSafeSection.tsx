"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, Card, BulletList, SubHeading } from "./shared";
import { safetyRisks } from "./data";

export function KeepPeopleSafeSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="keep-people-safe">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 04")}</Eyebrow>
          <SectionHeading>{t("Keep People Safe")}</SectionHeading>
          <Subtitle>
            {t("We maintain a zero-tolerance policy for behaviors that compromise the physical safety or security of people, properties, or community neighborhoods.")}
          </Subtitle>
        </div>

        <Card className="flex flex-col gap-3">
          <SubHeading>{t("The following safety risks are strictly prohibited:")}</SubHeading>
          <BulletList items={safetyRisks.map((item) => t(item))} />
        </Card>

        <motion.div variants={fadeUp} className="flex items-start gap-3 rounded-2xl border border-[#E3C583] bg-[#FBF1DD] p-5">
          <Bell className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6A24]" />
          <div>
            <p className="text-sm font-semibold text-[#6B5518]">{t("Is someone in immediate danger?")}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#6B5518]">
              {t("Contact the appropriate local emergency service first. Zoiko Rooms is not an emergency-response service.")}
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Button href="#reporting" variant="primary" size="md">
            {t("Report a Safety Concern")}
          </Button>
        </motion.div>
      </Reveal>
    </DocSection>
  );
}
