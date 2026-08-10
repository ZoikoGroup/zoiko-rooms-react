"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#2f2b22] via-[#20222b] to-[#0f1119] py-20 sm:py-28">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D98C5F]"
            >
              Room Passport
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-white sm:text-5xl">
              The record that tells you what&apos;s actually true about a room.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-white/60">
              Every room on Zoiko Rooms carries a Room Passport — a structured, evidence-scoped
              record of what&apos;s been declared, documented, or physically inspected, kept
              current from first listing to move-out.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/list-a-room" size="lg" variant="secondary">
                List Your Room
              </Button>
              <Button
                href="/how-it-works"
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-brand-navy"
              >
                How Verification Works
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-3xl"
          >
            <NaturalImage
              src="/images/room-passport/hero-passport-review.png"
              alt="Two women reviewing a Room Passport folder in a modern room"
            />
          </motion.div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
        >
          Scroll
          <motion.span
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px origin-top bg-white/30"
          />
        </motion.div>
      </Container>
    </section>
  );
}
