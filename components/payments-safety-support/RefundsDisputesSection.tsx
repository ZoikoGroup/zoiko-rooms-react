"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const items = [
  "Payment reference",
  "Reason category",
  "Applicable terms",
  "Eligible amount",
  "Evidence",
  "Destination",
  "Status",
  "Completion record",
  "Review / dispute",
  "External route",
];

export function RefundsDisputesSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Refunds, Cancellations and Disputes</Eyebrow>
            <SectionTitle>Eligibility, evidence, and status — not a guarantee</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-[#E9E0D3] bg-white px-4 py-2.5 text-sm text-brand-ink shadow-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <Callout label="Example boundary" className="max-w-3xl">
            Illustrative disclosure only: $1,200/month rent, $1,200 deposit, $75 move-in fee,
            known amount before move-in $2,475. These USD amounts are not Zoiko Rooms prices, a
            refund promise, or evidence that a payment method is protected.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
