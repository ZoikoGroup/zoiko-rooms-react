"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hospital } from "lucide-react";
import { Container, Reveal, Button, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const workforceNeeds = ["Permanent hires", "Rotations", "Trainees", "Researchers", "Temporary / agency"];

const boundaries = [
  {
    title: "No patient data",
    description: "Room workflows never touch treatment, diagnosis, or clinical records.",
  },
  {
    title: "No fitness inference",
    description: "Duty timing and access needs are never read as fatigue or performance signals.",
  },
  {
    title: "Human-owned decisions",
    description: "Eligibility, allocation, and funding always have a named accountable owner.",
  },
];

export function HeroSection() {
  const [workforceNeed, setWorkforceNeed] = useState(workforceNeeds[0]);
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14">
      <Container className="flex flex-col gap-6">
        <Reveal className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-6 p-6 sm:p-10">
              <motion.span
                variants={fadeUp}
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#E9E0D3] bg-[#F6ECD4] px-3 py-1.5 text-xs font-medium text-[#A85A34]"
              >
                <Hospital className="h-3.5 w-3.5" />
                {t("For healthcare organizations")}
              </motion.span>

              <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-brand-navy sm:text-[34px]">
                {t("Room access for healthcare workforces, built on clear choice.")}
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
                {t(
                  "Support permanent hires, rotations, trainees, researchers, and temporary staff — with transparent cost, privacy, and responsibility at every step."
                )}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
                <Button href="/find-a-room/work-healthcare-rooms" size="lg" variant="secondary">
                  {t("Search Healthcare Rooms")}
                </Button>
                <Button href="/contact-us" size="lg" variant="outline">
                  {t("Talk to Zoiko Rooms")}
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 border-t border-[#E9E0D3] pt-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Workforce Need")}</span>
                <div className="flex flex-wrap gap-2">
                  {workforceNeeds.map((need) => {
                    const isSelected = workforceNeed === need;
                    return (
                      <button
                        key={need}
                        type="button"
                        onClick={() => setWorkforceNeed(need)}
                        className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                          isSelected
                            ? "border-brand-navy bg-brand-navy text-white"
                            : "border-[#E9E0D3] text-brand-navy hover:bg-brand-navy/5"
                        }`}
                      >
                        {t(need)}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative min-h-[280px]">
              <ImageFade
                src="/images/healthcare/hero-workforce-hallway.png"
                alt={t("Healthcare workers walking down a hospital hallway")}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 max-w-xs rounded-xl bg-white p-4 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-red">
                  {t("Clinical-Data Boundary")}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-navy">
                  {t("Housing workflows never collect patient records, diagnoses, or performance data.")}
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-8 rounded-3xl bg-[#1B2438] p-6 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.h2 variants={fadeUp} className="max-w-xs font-heading text-2xl font-medium text-white">
            {t("Workforce housing, kept separate from clinical work — by design.")}
          </motion.h2>
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
            {boundaries.map(({ title, description }) => (
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
