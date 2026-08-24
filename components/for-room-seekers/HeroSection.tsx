"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

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
              {t("For Room Seekers")}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold text-[#1B2438] sm:text-[34px]"
            >
              {t(
                "Find, understand, and secure a room through visible facts, accountable decisions, complete costs, and safe next steps.",
              )}
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              {t(
                "Follow the journey from search and comparison through viewing, application, agreement, payment, move-in, and support.",
              )}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/find-a-room" size="lg" variant="secondary">
                {t("Find a Room")}
              </Button>
              <Button href="/find-a-room/search-rooms" size="lg" variant="outline">
                {t("Search Rooms")}
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-4xl"
          >
            <NaturalImage
              src="/images/for-room-seekers/hero-handshake.png"
              alt={t("A room seeker shaking hands with a provider outside a residential building")}
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
