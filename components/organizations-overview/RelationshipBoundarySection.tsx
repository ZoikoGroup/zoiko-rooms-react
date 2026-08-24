"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function RelationshipBoundarySection() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-[#E9E0D3] py-6 sm:py-8">
      <Container>
        <Reveal>
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3 rounded-3xl bg-brand-navy px-8 py-12 text-center sm:py-14"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2A38C]">
              {t("Relationship Boundary")}
            </span>
            <h2 className="font-heading text-2xl font-medium text-white sm:text-3xl">
              {t("An organization relationship is scoped, not an endorsement.")}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[#C6CCDE]">
              {t("Referral, distribution, management, allocation, subsidy, direct billing, eligibility, decision authority, data access, and support each receive a separate current status, owner, evidence source, effective period, limitation, and dispute path.")}
            </p>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
