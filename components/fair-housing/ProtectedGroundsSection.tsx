"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SubHeading, Pill, SectionDivider } from "./shared";
import { protectedGrounds, prohibitedConduct } from "./data";

export function ProtectedGroundsSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>What We Prohibit</Eyebrow>
            <SectionTitle>Protected grounds, platform-wide.</SectionTitle>
            <Paragraph>
              Do not infer a protected characteristic from a name, photo, accent, language,
              postcode or cultural marker — treating a proxy as if it were the characteristic is
              still discrimination.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <div className="min-w-[720px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
              <div className="grid grid-cols-[1.6fr_1fr_1.6fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                <span>Ground</span>
                <span>Platform treatment</span>
                <span>Notes</span>
              </div>
              <div className="divide-y divide-[#E9E0D3] bg-white">
                {protectedGrounds.map((row) => (
                  <div key={row.ground} className="grid grid-cols-[1.6fr_1fr_1.6fr] items-center gap-4 px-6 py-3.5 text-sm">
                    <span className="font-medium text-brand-navy">{row.ground}</span>
                    <Pill label={row.treatment} tone={row.tone} />
                    <span className="text-neutral-500">{row.notes}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <SubHeading>Conduct we prohibit</SubHeading>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {prohibitedConduct.map(({ title, description }) => (
                <motion.div key={title} variants={fadeUp} className="flex flex-col gap-1.5 rounded-2xl border border-[#E9E0D3] bg-white p-5">
                  <h4 className="font-heading text-sm font-semibold text-brand-red">{title}</h4>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
