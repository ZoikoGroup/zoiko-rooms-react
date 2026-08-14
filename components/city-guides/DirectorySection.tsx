"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade, EvidenceBadge } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { cities, type Audience, type City, type CityKey, type CityStatus } from "./data";

const audienceOptions: { label: string; value: Audience | "all" }[] = [
  { label: "All audiences", value: "all" },
  { label: "Student", value: "student" },
  { label: "Work / healthcare", value: "work" },
  { label: "International", value: "international" },
];

const statusOptions: { label: string; value: CityStatus | "all" }[] = [
  { label: "Any status", value: "all" },
  { label: "Current", value: "current" },
  { label: "Review due", value: "due" },
];

type DirectorySectionProps = {
  filteredCities: City[];
  audienceFilter: Audience | "all";
  statusFilter: CityStatus | "all";
  onAudienceChange: (value: Audience | "all") => void;
  onStatusChange: (value: CityStatus | "all") => void;
  onReset: () => void;
  onOpenCity: (key: CityKey) => void;
};

export function DirectorySection({
  filteredCities,
  audienceFilter,
  statusFilter,
  onAudienceChange,
  onStatusChange,
  onReset,
  onOpenCity,
}: DirectorySectionProps) {
  return (
    <SectionDivider id="city-directory">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Browse Directory</Eyebrow>
            <SectionTitle>All current city guides</SectionTitle>
            <Paragraph className="mx-auto">
              Filter by audience or review status. Ordering is by exact match, currentness, and
              relevance — never popularity.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="flex w-full flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-2">
              {audienceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onAudienceChange(option.value)}
                  className={`rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                    audienceFilter === option.value
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onStatusChange(option.value)}
                  className={`rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                    statusFilter === option.value
                      ? "border-brand-red bg-brand-red text-white"
                      : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  {option.label}
                </button>
              ))}
              <button
                type="button"
                onClick={onReset}
                className="px-2 text-[13px] font-semibold text-brand-red transition-opacity hover:opacity-70"
              >
                Reset filters
              </button>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-neutral-400">
            Showing {filteredCities.length} of {cities.length} guides
          </motion.p>

          {filteredCities.length === 0 ? (
            <motion.div
              variants={fadeUp}
              className="w-full rounded-2xl border border-[#E9E0D3] bg-white p-10 text-center text-sm text-neutral-500"
            >
              No guides match these filters yet. Try broadening your audience or status filter, or{" "}
              <button type="button" onClick={onReset} className="font-semibold text-brand-red hover:opacity-70">
                reset filters
              </button>
              .
            </motion.div>
          ) : (
            <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
              {filteredCities.map((city) => (
                <motion.button
                  key={city.key}
                  type="button"
                  variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.18)" }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  onClick={() => onOpenCity(city.key)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white text-left"
                >
                  <div className="relative h-[150px] w-full overflow-hidden">
                    <ImageFade
                      src={city.image}
                      alt={city.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="font-heading text-lg font-medium text-brand-navy">{city.name}</h3>
                    <p className="text-xs text-neutral-400">
                      {city.country} · {city.reviewed}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-600">{city.summary}</p>
                    <EvidenceBadge
                      label={city.status === "current" ? "Current" : "Review due"}
                      tone={city.status === "current" ? "green" : "amber"}
                      variant="outline"
                      className="mt-1 w-fit"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
