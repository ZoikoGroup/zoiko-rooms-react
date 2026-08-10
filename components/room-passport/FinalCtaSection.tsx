"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

export function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-br from-[#3a241c] via-[#1b1a20] to-[#0a0b10] py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl font-heading text-3xl font-medium text-white sm:text-4xl"
          >
            See exactly what&apos;s been checked before you apply for a room.
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/find-a-room/search-rooms" size="lg" variant="secondary">
              Search a Rooms
            </Button>
            <Button
              href="/list-a-room"
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-brand-navy"
            >
              List a Room
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
