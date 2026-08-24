"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { providerQuestions } from "./data";

export function ThirdPartyProvidersSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Third-Party Providers & Data Flow")}</Eyebrow>
            <SectionTitle>{t("What we ask before any vendor tag ships.")}</SectionTitle>
            <Paragraph>
              {t(
                "No marketing technology enters production without an owner, purpose, declared data fields, destination, controller/processor role, and retention period on file.",
              )}
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {providerQuestions.map(({ question, answer }) => (
              <motion.div key={question} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(question)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{t(answer)}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
