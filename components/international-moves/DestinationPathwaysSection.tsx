"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface Destination {
  city: string;
  description: string;
  priceRange: string;
  reviewedDate: string;
  image: string;
}

const destinations: Destination[] = [
  {
    city: "New York City, United States",
    description: "Independent and organization-referred inventory",
    priceRange: "$1,100–$2,100/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/international-moves/destination-new-york.png",
  },
  {
    city: "Toronto, Canada",
    description: "University and employer referral pathways",
    priceRange: "CAD 1,050–CAD 1,900/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/international-moves/destination-toronto.png",
  },
  {
    city: "London, United Kingdom",
    description: "Independent marketplace coverage",
    priceRange: "GBP 850–GBP 1,550/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    image: "/images/international-moves/destination-london.png",
  },
];

export function DestinationPathwaysSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Destination Pathways")}</Eyebrow>
            <SectionTitle>{t("Only destinations with current inventory or substantial guidance")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.city} destination={destination} />
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}

function DestinationCard({ destination }: { destination: Destination }) {
  const { t } = useLanguage();
  const { city, description, priceRange, reviewedDate, image } = destination;
  const [alertSaved, setAlertSaved] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(`zoiko-destination-alert:${city}`) === "1";
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
      setAlertSaved(true);
    }
  }, [city]);

  function toggleAlert() {
    setAlertSaved((prev) => {
      const next = !prev;
      window.localStorage.setItem(`zoiko-destination-alert:${city}`, next ? "1" : "0");
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
          <NaturalImage src={image} alt={city} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-5">
        <h3 className="font-heading text-lg font-medium text-brand-navy">{city}</h3>
        <p className="text-sm text-neutral-500">{t(description)}</p>
        <p className="mt-1 text-sm font-semibold text-brand-navy">{priceRange}</p>
        <p className="text-xs text-neutral-400">{t(reviewedDate)}</p>
        <div className="mt-3 flex items-center justify-between border-t border-[#E9E0D3] pt-3">
          <a
            href="/find-a-room"
            className="text-xs font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
          >
            {t("Explore Rooms")}
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
