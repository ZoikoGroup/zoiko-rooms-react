"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Paragraph } from "./shared";
import { organizationPills } from "./data";

export function HeroSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#F1E7DA] px-3 py-1.5 text-xs font-semibold text-[#A85A34]"
            >
              <Landmark className="h-3.5 w-3.5" />
              {t("Organizations")}
            </motion.span>

            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-brand-navy sm:text-[34px]">
              {t("Coordinate room access, supply, funding, and support through clear organizational responsibility.")}
            </motion.h1>

            <Paragraph>
              {t("Choose the pathway that matches your organization. Define who refers, supplies, manages, allocates, pays, decides, supports, and accesses data before any person or room enters the workflow.")}
            </Paragraph>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="#pathways" size="lg" variant="secondary">
                {t("Explore Organization Pathways")}
              </Button>
              <Button href="/contact-us" size="lg" variant="outline">
                {t("Talk to Zoiko Rooms")}
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {t("Choose Your Organization")}
              </span>
              <div className="flex flex-wrap gap-2">
                {organizationPills.map((pill) => {
                  const isSelected = selected === pill;
                  return (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => setSelected(isSelected ? null : pill)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        isSelected
                          ? "border-brand-navy bg-brand-navy text-white"
                          : "border-[#E9E0D3] bg-white text-brand-ink hover:border-brand-navy/40"
                      }`}
                    >
                      {t(pill)}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-2xl"
          >
            <NaturalImage
              src="/images/organizations-overview/hero-shared-kitchen.png"
              alt={t("Housemates sharing a meal in a kitchen")}
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
