"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, BulletList, SectionDivider } from "./shared";
import { agentPoints, appealPoints } from "./data";

export function AuthorizedAgentAppealsSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <motion.div variants={fadeUp} className="flex flex-col gap-4 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-6">
            <Eyebrow>Authorized Agent</Eyebrow>
            <h3 className="font-heading text-lg font-medium text-brand-navy">Submitting on someone else&apos;s behalf?</h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Authorized agents and representatives can submit eligible requests. We verify the
              agent&apos;s authority separately from the consumer&apos;s identity — and we never
              require paperwork just because a request arrived through a browser privacy signal.
            </p>
            <BulletList items={agentPoints} />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-6">
            <Eyebrow>Appeals &amp; Complaints</Eyebrow>
            <h3 className="font-heading text-lg font-medium text-brand-navy">If a request is denied or partial</h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              You can appeal a decision internally, and you&apos;re never asked to give up your
              right to contact a regulator. We&apos;ll show you the reason for any denial and what
              evidence you can submit.
            </p>
            <BulletList items={appealPoints} />
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
