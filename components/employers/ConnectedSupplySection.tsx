"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const rooms = [
  {
    price: "$950/mo",
    description: "0.5 mi from downtown HQ · avail. now",
    badge: "Physical inspection",
    tone: "green" as const,
    image: "/images/employers/pathway-domestic-international-relocation.png",
  },
  {
    price: "$860/mo",
    description: "Near business district · avail. 1 Sep",
    badge: "Document verified",
    tone: "amber" as const,
    image: "/images/employers/pathway-seasonal-workforces.png",
  },
  {
    price: "$780/mo",
    description: "Employer-distributed · avail. now",
    badge: "Employer-distributed",
    tone: "gray" as const,
    image: "/images/employers/pathway-temporary-secondments.png",
  },
];

export function ConnectedSupplySection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Connected Supply")}</Eyebrow>
            <SectionTitle>{t("Rooms near your teams, evidence attached")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t("Every listing carries provider authority, current availability, and complete costs — labeled by exactly how it was verified.")}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-3">
            {rooms.map(({ price, description, badge, tone, image }) => (
              <motion.div
                key={image}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105">
                    <NaturalImage src={image} alt={t(description)} />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <p className="font-heading text-lg font-semibold text-brand-navy">{t(price)}</p>
                  <p className="text-sm text-neutral-500">{t(description)}</p>
                  <EvidenceBadge label={t(badge)} tone={tone} variant="outline" className="mt-1 w-fit" />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
