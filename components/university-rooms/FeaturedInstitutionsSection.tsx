"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, Reveal, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface Institution {
  name: string;
  description: string;
  roomsCount?: string;
  badgeText?: string;
  priceRange: string;
  reviewedDate: string;
  image: string;
}

const institutions: Institution[] = [
  {
    name: "Northbridge University",
    description: "Independent marketplace coverage",
    roomsCount: "18 current rooms",
    priceRange: "$850–$1,450/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/university-rooms/institution-northbridge.png",
  },
  {
    name: "Metro State University",
    description: "University-referred search pathway",
    roomsCount: "12 current rooms",
    priceRange: "$700–$1,250/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/university-rooms/institution-metro-state.png",
  },
  {
    name: "Harbor Medical University",
    description: "Institution-distributed inventory",
    badgeText: "Availability limited",
    priceRange: "$900–$1,600/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/university-rooms/institution-harbor-medical.png",
  },
];

export function FeaturedInstitutionsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Featured Institutions")}</Eyebrow>
            <SectionTitle>{t("Only supported institutions with useful current supply")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {institutions.map((institution) => (
              <InstitutionCard key={institution.name} institution={institution} />
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}

function InstitutionCard({ institution }: { institution: Institution }) {
  const { t } = useLanguage();
  const { name, description, roomsCount, badgeText, priceRange, reviewedDate, image } = institution;
  const [alertSaved, setAlertSaved] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(`zoiko-institution-alert:${name}`) === "1";
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
      setAlertSaved(true);
    }
  }, [name]);

  function toggleAlert() {
    setAlertSaved((prev) => {
      const next = !prev;
      window.localStorage.setItem(`zoiko-institution-alert:${name}`, next ? "1" : "0");
      return next;
    });
  }

  return (
    <motion.div
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
            href="/find-a-room/university-rooms"
            className="text-xs font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
          >
            {t("Explore University")}
          </a>
          <button
            type="button"
            onClick={toggleAlert}
            aria-pressed={alertSaved}
            className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
              alertSaved ? "text-emerald-700" : "text-neutral-500 hover:text-brand-navy"
            }`}
          >
            {alertSaved && <Check className="h-3.5 w-3.5" />}
            {alertSaved ? t("Alert saved") : t("Save alert")}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
