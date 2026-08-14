"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";
import { viewingHandoverPoints } from "./data";

export function ViewingHandoverSupportSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Viewing, Handover, and Support</Eyebrow>
            <SectionTitle>Safe from first contact to handback</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/authorized-sublets/viewing-handover-team.png"
              alt="A provider walking prospective seekers through a room during a viewing"
            />
          </motion.div>

          <BulletList items={viewingHandoverPoints} className="max-w-3xl" />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
