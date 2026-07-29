"use client";

import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function NotFoundContent() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy"
          >
            <SearchX className="h-8 w-8" />
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-6xl font-medium text-brand-navy sm:text-7xl"
          >
            404
          </motion.h1>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl"
          >
            This room isn&apos;t on the map.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-neutral-600 sm:text-lg">
            The page you&apos;re looking for may have moved or never existed. Let&apos;s get you
            back to somewhere real.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/find-a-room" size="lg" variant="outline">
              Find a room
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
