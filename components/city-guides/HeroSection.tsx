"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { cities, type Audience, type CityKey } from "./data";

const quickLinks: { label: string; value: Audience | "all" | "recent" }[] = [
  { label: "All guides", value: "all" },
  { label: "University & study moves", value: "student" },
  { label: "Work & duty-location moves", value: "work" },
  { label: "International arrivals", value: "international" },
  { label: "Recently reviewed", value: "recent" },
];

const collagePlacement: Record<CityKey, string> = {
  berlin: "col-span-2 row-start-1 sm:col-span-1 sm:row-span-2",
  amsterdam: "col-start-1 row-start-2 sm:col-start-2 sm:row-start-1",
  lisbon: "col-start-2 row-start-2 sm:col-start-3 sm:row-start-1",
  tokyo: "hidden sm:block sm:col-start-4 sm:row-start-1",
  nairobi: "col-span-2 row-start-3 sm:col-span-3 sm:col-start-2 sm:row-start-2",
};

type HeroSectionProps = {
  activeQuickFilter: Audience | "all" | "recent";
  onQuickFilter: (value: Audience | "all" | "recent") => void;
  onOpenCity: (key: CityKey) => void;
};

export function HeroSection({ activeQuickFilter, onQuickFilter, onOpenCity }: HeroSectionProps) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(boxRef, () => setFocused(false));

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return cities.filter((c) => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q));
  }, [query]);

  const showResults = focused && query.trim().length > 0;

  function handleFindGuide() {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const exact = cities.find((c) => c.name.toLowerCase() === q);
    const first = matches[0];
    const target = exact ?? first;
    if (target) {
      onOpenCity(target.key);
      setQuery("");
      setFocused(false);
    }
  }

  return (
    <section className="pt-8 pb-0 sm:pt-12">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            City Guides
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-heading text-3xl font-medium text-brand-navy sm:text-[42px] sm:leading-[1.15]">
            Understand the local room-rental journey before you rely on a listing.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-xl text-[15px] leading-relaxed text-[#7A7266]">
            Choose a city to review sourced terminology, rental steps, cost categories, transport
            context, scam warnings, and current room-search routes.
          </motion.p>

          <motion.div ref={boxRef} variants={fadeUp} className="relative w-full max-w-xl">
            <div className="flex items-center gap-2 rounded-full border border-[#E9E0D3] bg-white p-2 shadow-[0_10px_30px_rgba(20,20,30,0.06)]">
              <Search className="ml-3 h-4 w-4 shrink-0 text-neutral-400" />
              <input
                type="text"
                value={query}
                onFocus={() => setFocused(true)}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleFindGuide()}
                placeholder="Search by city, metropolitan area, or region"
                className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400"
              />
              <button
                type="button"
                onClick={handleFindGuide}
                className="shrink-0 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
              >
                Find a City Guide
              </button>
            </div>

            {showResults && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white text-left shadow-[0_14px_34px_rgba(20,20,30,0.08)]">
                {matches.length === 0 ? (
                  <p className="px-5 py-4 text-sm text-neutral-400">
                    No guide matches &quot;{query}&quot; yet. Try Search Rooms directly, or browse the
                    directory below.
                  </p>
                ) : (
                  matches.map((city) => (
                    <button
                      key={city.key}
                      type="button"
                      onClick={() => {
                        onOpenCity(city.key);
                        setQuery("");
                        setFocused(false);
                      }}
                      className="flex w-full items-center justify-between gap-3 border-b border-[#E9E0D3] px-5 py-3 text-left text-sm transition-colors last:border-b-0 hover:bg-brand-cream"
                    >
                      <span className="font-semibold text-brand-navy">
                        {city.name} <span className="font-normal text-neutral-500">— {city.country}</span>
                      </span>
                      <span className="shrink-0 text-xs text-neutral-400">{city.reviewed}</span>
                    </button>
                  ))
                )}
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <button
                key={link.value}
                type="button"
                onClick={() => onQuickFilter(link.value)}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                  activeQuickFilter === link.value
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        </Reveal>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-2.5 overflow-hidden rounded-3xl sm:grid-cols-4 sm:[grid-auto-rows:130px]"
        >
          {cities.map((city) => (
            <button
              key={city.key}
              type="button"
              onClick={() => onOpenCity(city.key)}
              aria-label={`Open the ${city.name} guide`}
              className={`group relative h-32 overflow-hidden sm:h-auto ${collagePlacement[city.key]}`}
            >
              <ImageFade
                src={city.image}
                alt={city.name}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </button>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
