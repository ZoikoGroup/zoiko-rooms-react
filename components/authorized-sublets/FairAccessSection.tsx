"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";
import { fairAccessPoints } from "./data";

export function FairAccessSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Fair Access</Eyebrow>
            <SectionTitle>Permission cannot become a pretext for discrimination</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/authorized-sublets/fair-access-provider.png"
              alt="A provider standing outside, with applicants visible behind"
            />
          </motion.div>

          <BulletList items={fairAccessPoints} className="max-w-3xl" />

          <Callout label="Prohibited pattern" className="max-w-3xl">
            Using owner or landlord permission as a pretext for provider-added discriminatory
            preferences is blocked, regardless of how the permission is worded.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
