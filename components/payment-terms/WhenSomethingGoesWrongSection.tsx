"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";
import { refundSteps } from "./data";

export function WhenSomethingGoesWrongSection() {
  return (
    <DocSection id="refunds-disputes">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>When something goes wrong</SectionHeading>
          <Subtitle>Failed payments, refunds, chargebacks, and rental disputes are handled differently — on purpose.</Subtitle>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Failed, reversed, or duplicate payments</SubHeading>
          <Paragraph>
            Pending, failed, reversed, and duplicate payment states are all shown clearly with
            self-service status. We never ask you to pay again while an earlier attempt is still
            unresolved.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Refunds</SubHeading>
          <Paragraph>
            Refund eligibility comes from the underlying rental or cancellation rule that applies
            to your booking — Payment Terms don&apos;t invent a separate payment-law cancellation
            right on top of that.
          </Paragraph>
        </div>

        <div className="flex flex-col divide-y divide-[#E9E0D3]">
          {refundSteps.map(({ number, title, description }) => (
            <motion.div key={number} variants={fadeUp} className="flex gap-4 py-4 first:pt-0">
              <span className="font-heading text-sm font-semibold text-brand-red">{number}</span>
              <div className="flex flex-col gap-1">
                <h4 className="font-heading text-base font-medium text-brand-navy">{title}</h4>
                <p className="text-sm leading-relaxed text-[#5B5548]">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Chargebacks</SubHeading>
          <Paragraph>
            A card chargeback follows your issuer&apos;s own dispute process and doesn&apos;t
            automatically decide the underlying tenancy dispute — the two are resolved through
            different channels, on different evidence.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Unauthorised or fraudulent payments</SubHeading>
          <Paragraph>
            If you spot a payment you didn&apos;t authorise, secure your account and report it
            immediately. Statutory rights here typically route through your payment provider or
            bank — we don&apos;t promise reimbursement beyond what the applicable provider or law
            provides.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Rental and deposit disputes</SubHeading>
          <Paragraph>
            &quot;The payment went through correctly&quot; and &quot;who the money ultimately
            belongs to&quot; are two separate questions. Deposit disputes route through the
            applicable scheme, landlord-tenant process, or court, depending on your market.
          </Paragraph>
        </div>
      </Reveal>
    </DocSection>
  );
}
