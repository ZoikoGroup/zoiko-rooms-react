"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { Container, Reveal, Button, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const workforceNeeds = ["New hires", "Domestic relocation", "International relocation", "Temporary / secondment", "Trainees & interns"];
const relationshipModels = ["Independent", "Employer-referred", "Employer-allocated", "Allowance / stipend", "Support-only"];

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
  const [workforceNeed, setWorkforceNeed] = useState(workforceNeeds[0]);
  const [relationshipModel, setRelationshipModel] = useState(relationshipModels[1]);
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-[#161B2E]">
        <div className="absolute inset-0">
          <ImageFade
            src="/images/employers/hero-pattern-background.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#12172A]/40" />
        </div>

        <Container className="relative z-10 grid grid-cols-1 items-center gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
            >
              <Building2 className="h-3.5 w-3.5" />
              {t("For employers")}
            </motion.span>

            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-white sm:text-[34px]">
              {t("Coordinate room access for workforce moves, built on")} <span className="text-[#A9B6F5]">{t("clear choice.")}</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-white/70">
              {t("Support new hires, transfers, temporary assignments, projects, trainees, and seasonal workforces — with cost, data, and responsibility explicit at every step.")}
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

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/employers/hero-meeting-room.png"
              alt={t("Colleagues meeting around a table to plan a workforce move")}
            />
          </motion.div>
        </Container>
      </section>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="-mt-10 grid grid-cols-1 gap-6 rounded-3xl bg-white p-6 shadow-xl sm:-mt-12 sm:grid-cols-2 sm:p-8"
        >
          <PillGroup label="Workforce Need" options={workforceNeeds} selected={workforceNeed} onSelect={setWorkforceNeed} />
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
