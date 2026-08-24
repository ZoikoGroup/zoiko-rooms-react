"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const pathways = [
  {
    title: "Domestic relocation",
    description: "Local transfers with furnished rooms, deposits, and move-in support.",
    badge: "Local move",
    tone: "amber" as const,
    image: "/images/relocation-mobility/pathway-domestic-relocation.png",
  },
  {
    title: "International assignment",
    description: "Remote viewing, original currency, documents, and cross-border support.",
    badge: "Original currency",
    tone: "green" as const,
    image: "/images/relocation-mobility/pathway-international-assignment.png",
  },
  {
    title: "New-hire move",
    description: "Pre-start search and onboarding, ready before the first day.",
    badge: "Pre-start pathway",
    tone: "gray" as const,
    image: "/images/relocation-mobility/pathway-new-hire-move.png",
  },
  {
    title: "Relocation-provider managed case",
    description: "Full case handling by an approved relocation management company.",
    badge: "Managed case",
    tone: "amber" as const,
    image: "/images/relocation-mobility/pathway-relocation-provider-managed.png",
  },
  {
    title: "Destination-service case",
    description: "Local specialists handle arrival, orientation, and settling in.",
    badge: "Destination service",
    tone: "green" as const,
    image: "/images/relocation-mobility/pathway-destination-service.png",
  },
  {
    title: "Split / household & return moves",
    description: "Phased household moves, and return or onward-move continuity.",
    badge: "Phased move",
    tone: "gray" as const,
    image: "/images/relocation-mobility/pathway-split-household-return.png",
  },
];

export function MobilityPathwaysSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Mobility Pathways")}</Eyebrow>
            <SectionTitle>{t("Every move has its own shape")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t(
                "From a domestic transfer to a household's international assignment, each pathway carries its own timing, funding, and boundaries."
              )}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map(({ title, description, badge, tone, image }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105">
                    <NaturalImage src={image} alt={t(title)} />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
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
