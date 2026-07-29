"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade, EvidenceBadge } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";

const passportFields = [
  "Address and location information",
  "Room dimensions, furniture, windows, ventilation and lockability",
  "Bathroom arrangements and shared facilities",
  "Current household composition and occupancy capacity",
  "Accessibility, internet, utilities and bills",
  "Rent, deposit, availability and minimum stay",
  "Inspection, licensing and provider-authority records where applicable",
  "Move-in and move-out condition evidence where supported",
];

export function TrustAssetSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>The Flagship Trust Asset</Eyebrow>
            <SectionTitle>The Zoiko Room Passport</SectionTitle>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={fadeUp}
              className="relative aspect-4/3 w-full overflow-hidden rounded-3xl"
            >
              <ImageFade
                src="/images/about/room-passport.png"
                alt="A room seeker and provider reviewing the Zoiko Room Passport"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <Paragraph className="max-w-none">
                The Zoiko Room Passport is the structured digital record for an individual room.
                It is designed to help a room seeker understand the room, the household and the
                evidence available before making a commitment.
              </Paragraph>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {passportFields.map((field) => (
                  <div
                    key={field}
                    className="rounded-xl border border-[#E9E0D3] bg-white px-4 py-3 shadow-sm"
                  >
                    <p className="text-sm leading-snug text-brand-navy">{field}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="text-sm text-neutral-600">
              Every Passport field should identify its evidence status:{" "}
              <EvidenceBadge label="Provider declared" tone="gray" variant="outline" className="mx-1" />
              <EvidenceBadge label="Document verified" tone="amber" variant="outline" className="mx-1" />
              <EvidenceBadge label="Physically inspected" tone="green" variant="outline" className="mx-1" />
              or verified through an authoritative source. Expired, disputed or revoked evidence
              must also be visible where relevant.
            </p>
          </motion.div>

          <Callout label="Why evidence levels matter" className="max-w-3xl">
            A trustworthy platform must not present a provider&apos;s statement as though it were
            independent verification. Zoiko Rooms is designed to make the distinction explicit.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
