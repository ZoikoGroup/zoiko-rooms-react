"use client";

import { motion } from "framer-motion";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const locations = [
  {
    name: "Downtown Business District",
    description: "Independent marketplace coverage",
    roomsCount: "24 current rooms",
    priceRange: "$1,050–$1,850/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/work-healthcare-rooms/location-downtown.png",
  },
  {
    name: "Riverside Medical Campus",
    description: "Healthcare-referred search pathway",
    roomsCount: "11 current rooms",
    priceRange: "$900–$1,650/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/work-healthcare-rooms/location-riverside-medical.png",
  },
  {
    name: "North Harbor Project Zone",
    description: "Employer-distributed inventory",
    badgeText: "Availability limited",
    priceRange: "$1,100–$1,900/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/work-healthcare-rooms/location-north-harbor.png",
  },
];

export function LocationPathwaysSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Current Location Pathways")}</Eyebrow>
            <SectionTitle>{t("Only locations with useful current supply or substantial guidance")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map(({ name, description, roomsCount, badgeText, priceRange, reviewedDate, image }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105">
                    <NaturalImage src={image} alt={name} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{name}</h3>
                  <p className="text-sm text-neutral-500">{t(description)}</p>
                  {badgeText ? (
                    <EvidenceBadge label={t(badgeText)} tone="amber" variant="outline" className="mt-1 w-fit" />
                  ) : (
                    <p className="text-sm text-neutral-500">{roomsCount ? t(roomsCount) : null}</p>
                  )}
                  <p className="mt-1 text-sm font-semibold text-brand-navy">{priceRange}</p>
                  <p className="text-xs text-neutral-400">{t(reviewedDate)}</p>
                  <div className="mt-3 flex items-center justify-between border-t border-[#E9E0D3] pt-3">
                    <a
                      href="/find-a-room/work-healthcare-rooms"
                      className="text-xs font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                    >
                      {t("Explore Location")}
                    </a>
                    <button
                      type="button"
                      className="text-xs font-semibold text-neutral-500 transition-colors hover:text-brand-navy"
                    >
                      {t("Save alert")}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
