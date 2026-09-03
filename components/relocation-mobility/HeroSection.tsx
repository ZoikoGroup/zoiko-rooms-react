"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="rounded-3xl bg-gradient-to-br from-[#F7DCD4] via-[#F1E1E4] to-[#E3DFF0] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-6 p-6 sm:p-10">
              <motion.span
                variants={fadeUp}
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/60 bg-white/50 px-3 py-1.5 text-xs font-medium text-brand-navy backdrop-blur-sm"
              >
                <Package className="h-3.5 w-3.5" />
                {t("Relocation & Mobility")}
              </motion.span>

              <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-brand-navy sm:text-[34px]">
                {t(
                  "Coordinate room access across moves, providers, and borders — through one accountable workflow."
                )}
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#5B5A66]">
                {t(
                  "Connect every move without losing responsibility at the handoff. Costs, dates, choice, and data sharing stay explicit from case creation to close."
                )}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
                <Button href="/find-a-room/international-moves" size="lg" variant="secondary">
                  {t("Explore International Moves")}
                </Button>
                <Button
                  href="/contact-us"
                  size="lg"
                  variant="outline"
                  className="border-brand-navy/30 bg-white/40 text-brand-navy hover:!bg-white hover:!text-brand-navy"
                >
                  {t("Talk to Zoiko Rooms")}
                </Button>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative flex items-center p-6 pt-0 sm:p-10 sm:pl-0 lg:pt-10">
              <div className="relative w-full">
                <div className="overflow-hidden rounded-2xl">
                  <NaturalImage
                    src="/images/relocation-mobility/hero-moving-boxes.png"
                    alt={t("A couple carrying moving boxes into their new home")}
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 max-w-xs translate-y-1/3 rounded-xl bg-white p-4 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-red">
                    {t("Delegation, Made Visible")}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-navy">
                    {t("Every handoff shows the current owner, the next owner, and what changed.")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
