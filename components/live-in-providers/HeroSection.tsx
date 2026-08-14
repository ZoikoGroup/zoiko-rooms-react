"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { Eyebrow, BulletList } from "./shared";

const rightPathPoints = [
  "You currently live in the home",
  "You are authorized to offer this room",
  "The room shares at least part of the household",
  "You can describe household rules and costs accurately",
];

export function HeroSection() {
  return (
    <section className="border-b border-[#E9E0D3] py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>Live-in Providers</Eyebrow>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl font-bold text-brand-navy sm:text-[34px]">
              Offer a room in the home where you live — with clear authority, household
              expectations, privacy, and fair access.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              Understand what you must confirm, what room seekers need to know, what information
              stays private, and how to publish and manage the listing responsibly.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/list-a-room/start-a-listing" size="lg" variant="secondary">
                Start a Live-in Listing
              </Button>
              <Button href="/list-a-room/requirements-pricing" size="lg" variant="outline">
                View Requirements &amp; Pricing
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
              src="/images/live-in-providers/hero-bedroom.png"
              alt="A live-in provider's spare bedroom, ready to offer as a room"
            />
          </motion.div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-4">
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
            Is this the right path?
          </motion.span>
          <BulletList items={rightPathPoints} className="max-w-xl" />
          <motion.div variants={fadeUp}>
            <a
              href="/how-it-works/for-providers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
            >
              Different situation? Choose another provider path
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
