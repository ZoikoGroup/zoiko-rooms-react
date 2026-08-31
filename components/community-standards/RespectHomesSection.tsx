"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, Card, CheckList } from "./shared";
import { respectHomesDos } from "./data";

export function RespectHomesSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="respect-homes">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 07")}</Eyebrow>
          <SectionHeading>{t("Respect Homes and Communities")}</SectionHeading>
          <Subtitle>
            {t("Rooms exist within homes, buildings, shared spaces, and communities. Users must respect disclosed and lawful property conditions and the rights and safety of others.")}
          </Subtitle>
        </div>

        <Card>
          <CheckList items={respectHomesDos.map((item) => t(item))} />
        </Card>

        <motion.div variants={fadeUp} className="flex items-start gap-3 rounded-2xl border border-[#E3C583] bg-[#FBF1DD] p-5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6A24]" />
          <div>
            <p className="text-sm font-semibold text-[#6B5518]">{t("Rule Limits for Providers")}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#6B5518]">
              {t("House rules cannot override applicable law, contractual obligations, accessibility requirements, fair-housing requirements, or mandatory Zoiko Rooms policies.")}
            </p>
          </div>
        </motion.div>
      </Reveal>
    </DocSection>
  );
}
