"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const paths = [
  "Live-in provider",
  "Landlord",
  "Authorized agent or property manager",
  "Authorized sublet",
  "Organization or portfolio",
  "I am not sure",
];

export function HeroSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="border-b border-[#E9E0D3] py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
            >
              For Providers
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold text-[#1B2438] sm:text-[34px]"
            >
              Prepare, publish, and manage a room through clear authority, accurate facts,
              complete costs, fair decisions, and accountable follow-through.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              Choose your provider path, understand the evidence and responsibilities required,
              start a private draft, and see what happens after publication.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="/list-a-room/start-a-listing" size="lg" variant="secondary">
                Start a Listing
              </Button>
              <Button href="/list-a-room" size="lg" variant="outline">
                View Requirements & Pricing
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
                Choose Your Provider Path
              </span>
              <div className="flex flex-wrap gap-2">
                {paths.map((path) => {
                  const isSelected = selected === path;
                  return (
                    <button
                      key={path}
                      type="button"
                      onClick={() => setSelected(isSelected ? null : path)}
                      className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                        isSelected
                          ? "border-brand-navy bg-brand-navy text-white"
                          : "border-[#E9E0D3] bg-white text-brand-ink hover:border-brand-navy/40"
                      }`}
                    >
                      {path}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-4xl"
          >
            <NaturalImage
              src="/images/for-providers/hero-key-handover.png"
              alt="A provider handing over a house-key model to a couple"
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
