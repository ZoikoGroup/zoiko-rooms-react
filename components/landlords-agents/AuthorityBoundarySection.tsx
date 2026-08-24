"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Reveal, Card } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { authorityChain, authoritySteps } from "./data";

export function AuthorityBoundarySection() {
  const { t } = useLanguage();
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Authority Boundary")}</Eyebrow>
            <SectionTitle>{t("Identity, ownership, agency, and room authority are separate")}</SectionTitle>
            <Paragraph>
              {t(
                "An agent must show current instruction from the authorized principal. Ownership evidence must cover the listed room or property. Expired, revoked, limited, or disputed authority suppresses publication and high-risk actions.",
              )}
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {authoritySteps.map(({ number, title, description }) => (
              <Card key={number} className="flex flex-col gap-2">
                <span className="font-heading text-3xl font-semibold text-brand-red/40">{number}</span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>

          <motion.div variants={fadeUp} className="rounded-3xl border border-[#E9E0D3] bg-brand-cream/40 p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">{t("Authority Chain")}</span>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {authorityChain.map((link, index) => (
                <div key={link} className="flex items-center gap-2">
                  <span className="rounded-xl bg-[#F1E7DA] px-4 py-3 text-sm font-medium text-brand-navy">{t(link)}</span>
                  {index < authorityChain.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300" />}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-neutral-500">
              {t("Each public status is scoped. No single verified badge replaces the underlying authority chain.")}
            </p>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
