"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const tags = ["Flexible arrival", "Furnished", "Remote viewing", "Accessibility", "Organization referral"];

const PLATFORM_APP_URL = process.env.NEXT_PUBLIC_PLATFORM_APP_URL || "http://localhost:3001";

export function HeroSection() {
  const { t } = useLanguage();
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [budget, setBudget] = useState("");

  function handleSearch() {
    const params = new URLSearchParams();
    if (destination.trim()) params.set("city", destination.trim());
    if (arrival.trim()) params.set("arrival", arrival.trim());
    if (budget.trim()) params.set("maxPrice", budget.trim());
    window.location.href = `${PLATFORM_APP_URL}/find-a-room?${params.toString()}`;
  }

  return (
    <section className="border-b border-[#E9E0D3] py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
            >
              {t("International Moves")}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold text-[#1B2438] sm:text-[34px]"
            >
              {t("Search for a room across borders with clearer timing, costs, documents, and support.")}
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              {t(
                "Choose a destination, expected arrival, stay length, and monthly budget in the listing currency. Refine by furnished status, university, workplace, healthcare location, organization referral, accessibility, guarantor alternatives, and remote-viewing needs."
              )}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-2xl border border-[#D9C7B3] bg-white p-4 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-xs font-medium text-neutral-600">{t("Destination")}</span>
                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder={t("City, institution, or work")}
                      className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-xs font-medium text-neutral-600">{t("Arrival")}</span>
                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      placeholder={t("Date or flexible")}
                      className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-xs font-medium text-neutral-600">{t("Budget")}</span>
                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder={t("In listing currency")}
                      className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>
              </div>
              <Button variant="secondary" size="md" className="w-fit" onClick={handleSearch}>
                {t("Search Rooms")}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-500"
            >
              {tags.map((tag) => (
                <span key={tag}>{t(tag)}</span>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-4xl"
          >
            <NaturalImage
              src="/images/international-moves/hero-workspace-room.webp"
              alt={t("A furnished room set up for remote work, ready to search and book internationally")}
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
