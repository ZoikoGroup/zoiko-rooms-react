"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { easeOut, fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import GuideDetailModal from "@/components/popups/guides/GuideDetailModal";
import { SectionDivider, StatusBadge } from "./shared";
import { guides, roleFilters, topicFilters, type Guide } from "./data";

function topicForGuide(guide: Guide): string {
  if (guide.key === "review-room-agreement") return "Agreement";
  if (guide.key === "room-passport-publication") return "Safety";
  if (guide.key === "confirm-payment-recipient") return "Payment";
  return "Accessibility";
}

export function FeaturedGuidesSection() {
  const { t } = useLanguage();
  const [role, setRole] = useState(roleFilters[0]);
  const [topic, setTopic] = useState(topicFilters[0]);
  const [activeGuide, setActiveGuide] = useState<Guide | null>(null);

  const filtered = useMemo(
    () =>
      guides.filter(
        (guide) =>
          (role === "All" || guide.role === role) && (topic === "All" || topicForGuide(guide) === topic),
      ),
    [role, topic],
  );

  return (
    <SectionDivider id="featured-guides" className="scroll-mt-24">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Role")}</span>
              <div className="flex flex-wrap gap-2">
                {roleFilters.map((option) => {
                  const isSelected = role === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setRole(option)}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                        isSelected
                          ? "border-brand-navy bg-brand-navy text-white"
                          : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                      }`}
                    >
                      {t(option)}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Topic")}</span>
              <div className="flex flex-wrap gap-2">
                {topicFilters.map((option) => {
                  const isSelected = topic === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setTopic(option)}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                        isSelected
                          ? "border-brand-navy bg-brand-navy text-white"
                          : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                      }`}
                    >
                      {t(option)}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div variants={fadeUp} className="flex items-baseline justify-between">
              <h2 className="font-heading text-2xl font-medium text-brand-navy">{t("Featured guides")}</h2>
              <span className="text-xs text-neutral-400">
                {t("Showing")} {filtered.length} {t("of")} {guides.length}
              </span>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {filtered.map((guide) => (
                <motion.div
                  key={guide.key}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.12)" }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="group flex overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white"
                >
                  <div className="relative w-28 shrink-0 overflow-hidden">
                    <ImageFade
                      src={guide.image}
                      alt={t(guide.title)}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-base font-medium leading-snug text-brand-navy">
                        {t(guide.title)}
                      </h3>
                      <StatusBadge status={guide.status} className="shrink-0" />
                    </div>
                    <p className="text-xs text-neutral-400">
                      {t(guide.role)} · {t(guide.stage)} · {t(guide.format)} · {guide.duration}
                    </p>
                    <p className="text-xs leading-relaxed text-neutral-500">{t(guide.description)}</p>
                    <button
                      type="button"
                      onClick={() => setActiveGuide(guide)}
                      className="mt-auto w-fit text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                    >
                      {t("Start this guide")} →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>

      <GuideDetailModal guide={activeGuide} onClose={() => setActiveGuide(null)} />
    </SectionDivider>
  );
}
