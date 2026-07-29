"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Callout, Paragraph } from "./shared";

const HERO_IMAGE_URL = "/images/about/hero-team.png";

export function HeroSection() {
  return (
    <section className="border-b border-[#E9E0D3] pb-16 pt-8 sm:pb-24 sm:pt-12">
      <Container className="flex flex-col gap-14">
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center rounded-full border border-[#D9C7B3] px-4 py-1.5 text-sm font-medium text-brand-navy"
            >
              Company
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold text-brand-navy sm:text-5xl"
            >
              A More Trusted Way to Rent a Room
            </motion.h1>

            <Paragraph>
              Zoiko Rooms is a global technology platform dedicated exclusively to individual
              rooms for rent, generally for 30 consecutive nights or longer, supporting the
              journey from discovery and verification through agreement, payment and move-out
              where the relevant services are available.
            </Paragraph>

            <Paragraph>
              We help people find, assess, secure and manage private rooms with greater clarity.
              We also help homeowners, landlords, authorized tenants, professional operators,
              universities, employers, healthcare organizations and relocation providers offer or
              manage rooms through structured, accountable workflows.
            </Paragraph>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button href="/find-a-room" variant="secondary" size="md">
                Search Rooms
              </Button>
              <Button href="/list-a-room" variant="outline-red" size="md">
                List a Room
              </Button>
            </motion.div>

            <motion.p variants={fadeUp} className="text-xs text-neutral-500">
              Last reviewed July 2026 · Content owner: Corporate Communications
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative aspect-4/3 w-full overflow-hidden rounded-3xl"
          >
            <ImageFade
              src={HERO_IMAGE_URL}
              alt="Zoiko Rooms team members"
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </Reveal>

        <Reveal className="flex flex-col gap-6">
          <Paragraph>
            Zoiko Rooms exists because a room advertisement alone does not answer the questions
            that matter most: Does the room exist? Is the provider entitled to offer it? What has
            actually been verified? Which agreement and payment process apply? What evidence
            remains if something goes wrong?
          </Paragraph>
          <Callout label="Primary proposition" className="max-w-3xl">
            From discovery to move-out, Zoiko Rooms is designed to make the individual-room
            rental journey clearer, more accountable and easier to manage.
          </Callout>
        </Reveal>
      </Container>
    </section>
  );
}
