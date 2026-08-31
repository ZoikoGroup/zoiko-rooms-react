"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, Subtitle, Card, BulletList, SubHeading, Paragraph } from "./shared";
import { providerMisrepresent } from "./data";

export function HonestAccurateSection() {
  const { t } = useLanguage();

  return (
    <DocSection id="honest-accurate">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("Section 03")}</Eyebrow>
          <SectionHeading>{t("Be Honest and Accurate")}</SectionHeading>
          <Subtitle>
            {t(
              "Trust begins before a renter and provider meet. Material information supplied through Zoiko Rooms must not be intentionally false, deceptive, or materially misleading.",
            )}
          </Subtitle>
        </div>

        <Card className="flex flex-col gap-3">
          <SubHeading>{t("Providers must not misrepresent:")}</SubHeading>
          <BulletList items={providerMisrepresent.map((item) => t(item))} />
        </Card>

        <Card className="flex flex-col gap-2">
          <SubHeading>{t("Renters must not misrepresent:")}</SubHeading>
          <Paragraph>
            {t(
              "Material information in registration, applications, background referencing checks, guarantor details, identity documents, or employment claims.",
            )}
          </Paragraph>
        </Card>

        <motion.div variants={fadeUp} className="flex items-start gap-3 rounded-2xl border border-brand-red/20 bg-[#FBE9E9] p-5">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
          <div>
            <p className="text-sm font-semibold text-brand-red">{t("Prohibited Deception")}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#8A3A3A]">
              {t(
                "Never falsify documents, identities, property information, eligibility information, verification evidence, or transaction records.",
              )}
            </p>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} className="text-xs italic leading-relaxed text-neutral-400">
          {t(
            "Trust-claim control: Listing providers should avoid making statements or guarantees that cannot be verified by platform administrators.",
          )}
        </motion.p>
      </Reveal>
    </DocSection>
  );
}
