"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { NaturalImage } from "./NaturalImage";

const tags = [
  "Flexible dates",
  "Accessible home features",
  "Institution or employer",
];

const PLATFORM_APP_URL = process.env.NEXT_PUBLIC_PLATFORM_APP_URL || "http://localhost:3001";

export function HeroSection() {
  const { t } = useLanguage();
  const [location, setLocation] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [budget, setBudget] = useState("");

  function handleSearch() {
    const params = new URLSearchParams();
    if (location.trim()) params.set("city", location.trim());
    if (moveInDate.trim()) params.set("arrival", moveInDate.trim());
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
              {t("Find a Room")}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold text-[#1B2438] sm:text-[34px]"
            >
              {t(
                "Find a room that fits where you are going, when you need it, and how you live.",
              )}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]"
            >
              {t(
                "Search current room listings by location, move-in date, monthly budget, room type, household fit, accessibility, study, work, healthcare, or international-move needs.",
              )}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-2xl border border-[#D9C7B3] bg-white p-4 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 flex-1">
                {/* Field 1 */}
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-[11.5px] font-medium text-neutral-600">
                    {t("Where do you want to live?")}
                  </span>
                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder={t(
                        "City, neighborhood, university, or landmark",
                      )}
                      className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* Field 2 */}
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-[11px] font-medium text-neutral-600">
                    {t("When do you want to move in?")}
                  </span>

                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      name="moveInDate"
                      value={moveInDate}
                      onChange={(e) => setMoveInDate(e.target.value)}
                      placeholder={t("Date or flexible")}
                      className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>
                
                {/* Field 3 */}
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-[11.5px] font-medium text-neutral-600">
                    {t("What’s your monthly budget?")}
                  </span>

                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      name="monthlyBudget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder={t("Min – Max")}
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
            className="w-full overflow-hidden rounded-4xl"
          >
            <NaturalImage
              src="/images/find-a-room/hero-bedroom.png"
              alt={t(
                "Bright private room with plants, ready to search and book",
              )}
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
