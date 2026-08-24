"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rooms = [
  {
    price: "$1,050/mo",
    description: "Relocation-network provider · avail. now",
    badge: "Physical inspection",
    tone: "green" as const,
    image: "/images/relocation-mobility/pathway-new-hire-move.png",
  },
  {
    price: "$920/mo",
    description: "Client-approved provider · avail. 1 Sep",
    badge: "Document verified",
    tone: "amber" as const,
    image: "/images/relocation-mobility/pathway-destination-service.png",
  },
  {
    price: "$860/mo",
    description: "Temporary-to-long-term · avail. now",
    badge: "Destination-provider sourced",
    tone: "gray" as const,
    image: "/images/relocation-mobility/pathway-international-assignment.png",
  },
];

export function SupplyDiscoverySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Supply & Discovery")}</Eyebrow>
            <SectionTitle>{t("Rooms connected to every move, evidence attached")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t(
                "Every shortlist card carries provider authority, current availability, and complete costs in original currency."
              )}
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
                  <p className="font-heading text-lg font-semibold text-brand-navy">{price}</p>
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
