"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const principles = [
  {
    title: "Authority Follows the Action",
    description: "Every invitation, shortlist, allocation, and payment needs current, scoped authority.",
  },
  {
    title: "No Credential Handoff",
    description: "Zoiko Rooms never requests passwords, bank logins, or portal credentials.",
  },
  {
    title: "Participant Choice Stays Visible",
    description: "Alternatives and decline routes appear before any consequential step.",
  },
];

export function DelegationPrincipleSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-10 sm:pb-14">
      <Container>
        <Reveal className="flex flex-col gap-8 rounded-3xl bg-[#1B2438] p-6 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.h2 variants={fadeUp} className="max-w-xs font-heading text-2xl font-medium text-white">
            {t("A case assignment never creates universal signing, payment, or data access.")}
          </motion.h2>
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
            {principles.map(({ title, description }) => (
              <motion.div key={title} variants={fadeUp} className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/50">{t(title)}</span>
                <p className="text-sm leading-relaxed text-white/70">{t(description)}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
