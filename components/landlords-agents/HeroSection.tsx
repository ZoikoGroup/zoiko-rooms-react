"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow } from "./shared";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-[#E9E0D3] py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>{t("Landlords & Agents")}</Eyebrow>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-brand-navy sm:text-[34px]">
              {t(
                "List with clear ownership or current instruction — and keep authority, availability, costs, and responsibility visible.",
              )}
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              {t(
                "Choose whether you are the landlord or acting as an authorized agent. Zoiko Rooms will show the evidence, room information, commercial terms, and review stages required for that role.",
              )}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/list-a-room/start-a-listing" size="lg" variant="secondary">
                {t("Start a Landlord or Agent Listing")}
              </Button>
              <Button href="/list-a-room/requirements-pricing" size="lg" variant="outline">
                {t("View Requirements & Pricing")}
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-3xl"
          >
            <NaturalImage
              src="/images/landlords-agents/hero-family-agent-signing.png"
              alt={t("A landlord family and an agent reviewing listing documents together")}
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
