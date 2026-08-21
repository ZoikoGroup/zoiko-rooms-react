"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Paragraph, NumberedBlock, SectionGroup } from "./shared";
import { relatedNotices } from "./data";

export function ChangesRelatedSection() {
  return (
    <SectionGroup className="pb-16 sm:pb-20">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <NumberedBlock id="changes-to-notice" number="19" title="Changes to this notice">
            <Paragraph>
              Material changes are published with a clear summary and a future effective date; we
              notify you appropriate to the change and your region, and seek fresh consent or
              acceptance where legally required. Prior versions remain available in our archive
              rather than disappearing when a new version is published.
            </Paragraph>
          </NumberedBlock>

          <NumberedBlock id="related-notices" number="20" title="Related notices & terms">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {relatedNotices.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="flex items-center justify-center rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] px-4 py-4 text-center text-sm font-semibold text-brand-navy transition-colors hover:border-brand-navy/30"
                >
                  {label} →
                </motion.a>
              ))}
            </div>
          </NumberedBlock>
        </Reveal>
      </Container>
    </SectionGroup>
  );
}
