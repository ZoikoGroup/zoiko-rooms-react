"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Home, KeyRound, User } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const flow = [
  { label: "University", node: <GraduationCap className="h-5 w-5" /> },
  { label: "Zoiko Rooms", node: <span className="font-heading text-sm font-bold">Z</span> },
  { label: "Providers", node: <Home className="h-5 w-5" /> },
  { label: "Rooms", node: <KeyRound className="h-5 w-5" /> },
  { label: "Participants", node: <User className="h-5 w-5" /> },
];

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy"
            >
              {t("Universities")}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold text-[#1B2438] sm:text-[34px]"
            >
              {t("Coordinate room access for university communities through clear eligibility, supply, funding, data, and support responsibilities.")}
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              {t("For students, staff and faculty, visiting academics, placements and internships, and international arrivals — one platform, with every responsibility named.")}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="#choose-your-model" size="lg" variant="secondary">
                {t("Explore University Models")}
              </Button>
              <Button href="/contact-us" size="lg" variant="outline">
                {t("Talk to Zoiko Rooms")}
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-[#E9E0D3] bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              {flow.map(({ label, node }, index) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F1E7DA] text-[#A85A34]">
                      {node}
                    </span>
                    <span className="text-xs font-medium text-brand-navy">{t(label)}</span>
                  </div>
                  {index < flow.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300" />}
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
