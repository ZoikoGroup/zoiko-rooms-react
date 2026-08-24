"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, BulletList } from "./shared";
import { rightPathPoints } from "./data";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-[#E9E0D3] py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>{t("Authorized Sublets")}</Eyebrow>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-brand-navy sm:text-[34px]">
              {t(
                "Offer a room only within the permission, dates, price, and conditions you are authorized to use.",
              )}
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              {t(
                "Understand what evidence is required, how your primary agreement limits the listing, what seekers must see before commitment, and what happens if permission changes.",
              )}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/list-a-room/start-a-listing" size="lg" variant="secondary">
                {t("Start an Authorized Sublet")}
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
              src="/images/authorized-sublets/hero-key-handover.png"
              alt={t("A host handing over keys to two room seekers on a sofa")}
            />
          </motion.div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-4">
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            {t("Is this the right path?")}
          </motion.span>
          <BulletList items={rightPathPoints.map(t)} className="max-w-xl" />
          <motion.div variants={fadeUp}>
            <a
              href="/how-it-works/for-providers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
            >
              {t("Different arrangement? Choose another provider path")}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
