"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const tags = ["International arrival", "Visiting researcher", "Placement / Internship", "Accessible features"];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
            >
              {t("University Rooms")}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold text-[#1B2438] sm:text-[34px]"
            >
              {t("Find a room around your university, campus, term, or placement.")}
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              {t(
                "Search current room listings using institution, campus, move-in or term dates, monthly budget, stay length, commute, furnishing, bills, guarantor needs, and accessibility features."
              )}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-2xl border border-[#D9C7B3] bg-white p-4 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-xs font-medium text-neutral-600">{t("University or Campus")}</span>
                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      placeholder={t("e.g. Northbridge University")}
                      className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-xs font-medium text-neutral-600">{t("Move-in / Term")}</span>
                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      placeholder={t("Date or term")}
                      className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="px-1 text-xs font-medium text-neutral-600">{t("Monthly Budget")}</span>
                  <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                    <input
                      type="text"
                      placeholder={t("Optional")}
                      className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>
              </div>
              <Button variant="secondary" size="md" className="w-fit">
                {t("Search University Rooms")}
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
              src="/images/university-rooms/hero-dorm-room.webp"
              alt={t("Two students chatting in a furnished room near campus")}
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
