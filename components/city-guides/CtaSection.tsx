"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

type CtaSectionProps = {
  onOpenSafety: () => void;
};

export function CtaSection({ onOpenSafety }: CtaSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-4 rounded-[28px] bg-brand-navy px-8 py-14 text-center sm:py-16"
          >
            <h2 className="max-w-lg font-heading text-2xl font-medium text-white sm:text-3xl">
              Ready to look at current rooms?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#C6CCDE]">
              Use city context, then continue in the current, accountable room-search journey.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href="/find-a-room/search-rooms" size="lg" className="!bg-white !text-[#16233F] hover:!bg-white/90">
                Search Rooms
              </Button>
              <Button
                href="/find-a-room/international-moves"
                size="lg"
                variant="outline"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-brand-navy"
              >
                International Moves
              </Button>
              <Button
                onClick={onOpenSafety}
                size="lg"
                variant="outline"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-brand-navy"
              >
                Safety &amp; Scam Prevention
              </Button>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
