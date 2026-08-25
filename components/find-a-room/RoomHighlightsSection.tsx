"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "./NaturalImage";

const rooms = [
  {
    image: "/images/find-a-room/highlight-1.png",
    price: "$1,200/month + disclosed bills",
    description: "Private room near downtown",
    badge: "Available · checked today",
    tone: "green" as const,
  },
  {
    image: "/images/find-a-room/highlight-2.png",
    price: "$980/month; deposit shown",
    description: "Furnished room near university",
    badge: "Availability to confirm",
    tone: "amber" as const,
  },
  {
    image: "/images/find-a-room/highlight-3.png",
    price: "$1,350/month; fees itemized",
    description: "Accessible room near hospital",
    badge: "Provider authority confirmed",
    tone: "green" as const,
  },
];

export function RoomHighlightsSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-12">
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="flex flex-col gap-4">
              <Eyebrow>{t("Current Room Highlights")}</Eyebrow>
              <SectionTitle>{t("Useful inventory patterns, not paid ranking")}</SectionTitle>
            </div>
            <a
              href="/find-a-room/search-rooms"
              className="inline-flex w-fit shrink-0 items-center gap-1.5 text-sm font-medium text-brand-red transition-colors hover:text-brand-red-dark"
            >
              {t("Search all rooms")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {rooms.map(({ image, price, description, badge, tone }) => (
              <motion.div
                key={image}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="w-full overflow-hidden">
                  <NaturalImage src={image} alt={t(description)} />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <p className="font-heading text-lg font-semibold text-brand-navy">{t(price)}</p>
                  <p className="text-sm text-neutral-500">{t(description)}</p>
                  <EvidenceBadge label={t(badge)} tone={tone} variant="outline" className="mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
