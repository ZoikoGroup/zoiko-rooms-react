"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "./NaturalImage";

const links = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Verification & Authority", href: "/how-it-works" },
  { label: "Safety & Scam Prevention", href: "/resources" },
];

export function AccountabilitySection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>How Discovery Stays Accountable</Eyebrow>
            <SectionTitle>
              Availability truth, authority, price clarity, and safe next steps
            </SectionTitle>
            <Paragraph>
              We explain what Zoiko Rooms checks, what remains the provider&apos;s responsibility,
              what you must still confirm, and how to report or correct information.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-3xl">
            <NaturalImage
              src="/images/find-a-room/accountability.png"
              alt="A calm, well-lit living room representing an accountable rental process"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-red transition-colors hover:text-brand-red-dark"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
