"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";

const points = [
  "Listing language must not unlawfully exclude, use coded discrimination, or make demeaning descriptions.",
  "No hidden personality, cultural, religious, ethnic, gender, health, sexuality, or income-class scoring.",
  "Household facts may describe actual arrangements and practical rules without demanding sensitive self-identification.",
  "Seekers and residents can report discriminatory content or behavior; affected actions may be suppressed during review.",
];

export function FairAccessSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Fair Access</Eyebrow>
            <SectionTitle>No discriminatory wording, hidden rules, or coded exclusions</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/live-in-providers/fair-access-couple.png"
              alt="A couple reviewing a room listing together"
            />
          </motion.div>

          <BulletList items={points} className="max-w-3xl" />

          <Callout label="Prohibited pattern" className="max-w-3xl">
            Phrases like &quot;females only,&quot; &quot;professionals only,&quot; or &quot;must fit
            our culture&quot; are blocked unless a narrowly applicable legal basis has been reviewed
            and approved. Use specific household facts and agreement terms instead.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
