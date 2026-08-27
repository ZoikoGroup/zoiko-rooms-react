"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { marketCards } from "./data";

export function MarketsSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] bg-brand-navy py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {t("Where we operate")}
            </span>
            <motion.h2 variants={fadeUp} className="max-w-2xl font-heading text-3xl font-medium text-white sm:text-4xl">
              {t("Support teams across four markets")}
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-xl text-[15px] leading-relaxed text-white/60">
              {t("Live support today in Berlin, Amsterdam, Lisbon, and Nairobi — with more markets announced regularly.")}
            </motion.p>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {marketCards.map((market) => (
              <motion.div
                key={market.city}
                variants={fadeUp}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-heading text-base font-medium text-white">{market.city}</h3>
                <p className="text-sm text-white/60">{t(market.description)}</p>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {t(market.status)}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
