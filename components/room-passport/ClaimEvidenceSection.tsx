"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

export function ClaimEvidenceSection() {
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-3xl"
          >
            <NaturalImage
              src="/images/room-passport/concierge-tablet.png"
              alt="A hotel concierge showing evidence on a tablet to a guest"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h2
              variants={fadeUp}
              className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl"
            >
              A listing is a claim. A Room Passport is the evidence behind it.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-[#7A7266]">
              Photos and a price are not enough to know whether a room exists, whether the person
              offering it is entitled to, or whether what you&apos;re seeing is current. Room
              Passport separates the two: what the provider says, and what&apos;s actually been
              checked.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="border-l-4 border-brand-red pl-5 font-heading text-lg leading-relaxed text-brand-navy sm:text-xl"
            >
              &quot;Verified&quot; is not one word doing the work of ten different checks.
              It&apos;s ten separate, dated, sourced answers.
            </motion.blockquote>

            <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-[#7A7266]">
              That&apos;s the whole idea. Not a badge. A record.
            </motion.p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
