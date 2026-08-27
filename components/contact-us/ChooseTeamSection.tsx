"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut, fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { teamCards } from "./data";

export function ChooseTeamSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Choose what you need")}</Eyebrow>
            <SectionTitle className="text-center">{t("Get to the right team faster")}</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.key}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.12)" }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className={`flex flex-col gap-3 rounded-2xl border p-6 ${
                    card.highlight ? "border-[#F3C8C8] bg-[#FBEAEA]" : "border-[#E9E0D3] bg-white"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      card.highlight ? "bg-white text-brand-red" : "bg-brand-cream text-brand-navy"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-base font-medium text-brand-navy">{t(card.title)}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{t(card.description)}</p>

                  <div
                    className={`mt-auto flex items-center justify-between border-t pt-3 text-xs ${
                      card.highlight ? "border-[#F3C8C8]" : "border-[#E9E0D3]"
                    }`}
                  >
                    {card.reportLink ? (
                      <>
                        <span className="text-[#8A6A24]">{t(card.meta)}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-neutral-500">{card.contact}</span>
                        <span className="text-neutral-400">{t(card.meta)}</span>
                      </>
                    )}
                  </div>

                  {card.reportLink && (
                    <a href="#message-form" className="w-fit text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark">
                      {t("Report now")} →
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
