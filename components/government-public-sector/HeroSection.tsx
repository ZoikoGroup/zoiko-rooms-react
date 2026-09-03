"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Landmark } from "lucide-react";
import { Container, Reveal, Button, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const programNeeds = ["Public workforce", "Education & training", "Housing access", "Temporary pathway", "Reception & resettlement"];
const relationshipModels = ["Referral", "Eligibility assessment", "Nomination / allocation", "Subsidy / voucher", "Support-only"];

function PillGroup({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t(label)}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isSelected
                  ? "border-brand-navy bg-brand-navy text-white"
                  : "border-[#E9E0D3] text-brand-navy hover:bg-brand-navy/5"
              }`}
            >
              {t(option)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function HeroSection() {
  const [programNeed, setProgramNeed] = useState(programNeeds[0]);
  const [relationshipModel, setRelationshipModel] = useState(relationshipModels[1]);
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageFade
            src="/images/government-public-sector/hero-public-office.webp"
            alt={t("A public trust office building, representing accountable public-sector programs")}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <Container className="relative z-10 flex flex-col gap-6 py-20 sm:py-28">
          <Reveal className="flex max-w-2xl flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
            >
              <Landmark className="h-3.5 w-3.5" />
              {t("For government & public-sector bodies")}
            </motion.span>

            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-white sm:text-5xl">
              {t("Accountable room access, built on transparent authority.")}
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-white/75">
              {t(
                "Coordinate public workforce moves, education placements, housing-access programs, and reception or resettlement transitions — with every decision traceable to a named, reviewable owner."
              )}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/find-a-room" size="lg" variant="secondary" className="gap-2">
                {t("Find a Room")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/contact-us"
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:!bg-white hover:!text-brand-navy"
              >
                {t("Talk to Zoiko Rooms")}
              </Button>
            </motion.div>
          </Reveal>
        </Container>
      </section>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="-mt-16 grid grid-cols-1 gap-6 rounded-3xl bg-white p-6 shadow-xl sm:-mt-20 sm:grid-cols-2 sm:p-8"
        >
          <PillGroup label="Program Need" options={programNeeds} selected={programNeed} onSelect={setProgramNeed} />
          <PillGroup
            label="Relationship Model"
            options={relationshipModels}
            selected={relationshipModel}
            onSelect={setRelationshipModel}
          />
        </motion.div>
      </Container>
    </>
  );
}
