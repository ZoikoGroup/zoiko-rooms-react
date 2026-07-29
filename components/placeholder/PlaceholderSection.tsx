"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { fadeUp, staggerContainer } from "@/lib/motion";

type PlaceholderSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderSection({ eyebrow, title, description }: PlaceholderSectionProps) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy"
          >
            <Compass className="h-6 w-6" />
          </motion.span>
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
          >
            {title}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base text-neutral-600 sm:text-lg">
            {description}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button href="/" size="lg">
              Back to home
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
