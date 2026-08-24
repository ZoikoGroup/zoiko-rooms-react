"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";
import { regionProfiles, type RegionKey } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function RegionalRulesSection({ region }: { region: RegionKey }) {
  const profile = regionProfiles[region];
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={region}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <Eyebrow>{t(profile.eyebrow)}</Eyebrow>
                <SectionTitle>{t(profile.title)}</SectionTitle>
                <Paragraph>{t(profile.intro)}</Paragraph>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8]">
                <div className="px-6 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    {t("How this applies in this region")}
                  </span>
                </div>
                <div className="flex flex-col divide-y divide-[#E9E0D3] px-6 py-2">
                  {profile.rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[220px_1fr] sm:items-start sm:gap-6">
                      <span className="text-sm font-semibold text-brand-navy">{t(row.label)}</span>
                      <span className="text-sm text-neutral-600">{t(row.value)}</span>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-4 py-3">
                    <span className="text-sm font-semibold text-brand-navy">{t("External help")}</span>
                    <span className="flex flex-wrap gap-4">
                      {profile.externalLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-brand-red hover:text-brand-red-dark"
                        >
                          {t(link.label)} →
                        </a>
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              <Callout label={t("Update schedule")} className="max-w-3xl">
                {t(profile.notice)}
              </Callout>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
