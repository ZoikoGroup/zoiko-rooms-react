"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { cities, type CityKey } from "./data";

const placement: Record<CityKey, string> = {
  berlin: "h-[260px] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:h-full",
  amsterdam: "h-[260px] lg:col-start-2 lg:row-start-1 lg:h-full",
  lisbon: "h-[260px] lg:col-start-3 lg:row-start-1 lg:h-full",
  tokyo: "h-[260px] lg:col-start-2 lg:row-start-2 lg:h-full",
  nairobi: "h-[260px] lg:col-start-3 lg:row-start-2 lg:h-full",
};

type FeaturedGuidesSectionProps = {
  onOpenCity: (key: CityKey) => void;
};

export function FeaturedGuidesSection({ onOpenCity }: FeaturedGuidesSectionProps) {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Featured Guides</Eyebrow>
            <SectionTitle>Recently reviewed city guides</SectionTitle>
            <Paragraph className="mx-auto">
              Promoted by currentness and coverage — never by popularity or inferred desirability.
              Click any city to open its full guide.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-rows:190px]">
            {cities.map((city) => (
              <motion.button
                key={city.key}
                type="button"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: easeOut }}
                onClick={() => onOpenCity(city.key)}
                aria-label={`Open the ${city.name} guide`}
                className={`group relative w-full overflow-hidden rounded-2xl text-left ${placement[city.key]}`}
              >
                <ImageFade
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020]/85 via-[#0A1020]/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5 text-white">
                  <span className="font-heading text-xl font-semibold">{city.name}</span>
                  <span className="text-xs text-white/80">
                    {city.country} · {city.reviewed}
                  </span>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/35 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <span className={`h-1.5 w-1.5 rounded-full ${city.status === "current" ? "bg-emerald-400" : "bg-amber-400"}`} />
                    {city.status === "current" ? "Current" : "Review due"}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
