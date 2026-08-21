"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Paragraph, NumberedBlock, SectionGroup } from "./shared";
import { retentionRows } from "./data";

export function TransfersRetentionSecuritySection() {
  return (
    <SectionGroup>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="international-transfers" number="12" title="International transfers">
            <Paragraph>
              Where personal information is transferred outside the UK or your home region, we
              use an approved transfer mechanism — such as the UK&apos;s International Data
              Transfer Agreement or an adequacy finding — appropriate to the destination. You can
              request more detail about a specific transfer through our privacy contact below; we
              don&apos;t publish infrastructure-level detail that would weaken security.
            </Paragraph>
          </NumberedBlock>

          <NumberedBlock id="how-long-we-keep" number="13" title="How long we keep information">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
              <div className="grid grid-cols-[1.4fr_2fr] gap-4 bg-[#F1E7DA] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#8A6A24]">
                <span>Record type</span>
                <span>Retention approach</span>
              </div>
              <div className="divide-y divide-[#E9E0D3] bg-[#FFFDF8]">
                {retentionRows.map((row) => (
                  <div key={row.type} className="grid grid-cols-[1.4fr_2fr] gap-4 px-6 py-3.5 text-sm">
                    <span className="font-medium text-brand-navy">{row.type}</span>
                    <span className="text-neutral-600">{row.approach}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </NumberedBlock>

          <NumberedBlock id="how-we-protect" number="14" title="How we protect information">
            <Paragraph>
              We apply technical and organizational safeguards — access controls, encryption in
              transit, vendor due diligence, and internal governance — appropriate to the
              sensitivity of the data involved. No system is completely secure, and we don&apos;t
              claim otherwise; you also play a role by keeping your credentials secure and
              reporting suspicious activity promptly.
            </Paragraph>
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
