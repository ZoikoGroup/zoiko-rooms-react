"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { DocSection, SectionHeading, Subtitle, SubHeading, Paragraph } from "./shared";
import { checkoutPreviewRows } from "./data";

export function PayingSection() {
  return (
    <DocSection id="paying">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <SectionHeading>Paying</SectionHeading>
          <Subtitle>Authorization, methods, authentication, and currency.</Subtitle>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Supported payment methods</SubHeading>
          <Paragraph>
            Available methods vary by country, currency, risk, and provider. The methods offered
            to you at checkout are the authoritative list — we don&apos;t promise a specific card,
            wallet, or bank method will always be available.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Authorization and authentication</SubHeading>
          <Paragraph>
            When you authorize a payment, you&apos;ll see a final amount preview before it&apos;s
            confirmed. Your provider or card issuer may require additional authentication — if
            that authentication fails, no completed payment is created; the transaction simply
            doesn&apos;t go through.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Saved methods and recurring mandates</SubHeading>
          <Paragraph>
            If you save a payment method or set up a recurring rent schedule, you&apos;re granting
            standing authority to charge that method on the agreed terms. Cancelling that authority
            stops future charges — but it doesn&apos;t cancel amounts already due under a valid
            tenancy agreement; that&apos;s a separate conversation with your landlord.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <SubHeading>Currency and conversion</SubHeading>
          <Paragraph>
            The transaction currency is shown before you authorize a payment. Where Zoiko Rooms or
            its provider controls the conversion rate, the rate and any markup are disclosed. Where
            your card issuer converts the currency instead, that conversion is outside our control
            and subject to your issuer&apos;s own terms.
          </Paragraph>
        </div>

        <motion.div variants={fadeUp} className="w-full max-w-sm overflow-hidden rounded-2xl border border-[#E9E0D3]">
          <div className="bg-[#F1E7DA] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-[#8A6A24]">
            At checkout — what you&apos;ll see
          </div>
          <div className="flex flex-col gap-3 bg-[#FFFDF8] p-5">
            <span className="font-heading text-base font-medium text-brand-navy">Rent — September 2026</span>
            <div className="flex flex-col gap-2 border-t border-dashed border-[#E9E0D3] pt-3">
              {checkoutPreviewRows.map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">{row.label}</span>
                  <span className="text-neutral-600">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-[#E9E0D3] pt-3 text-sm">
              <span className="font-semibold text-brand-navy">Total charged now</span>
              <span className="font-semibold text-brand-navy">£1,400.00</span>
            </div>
            <span className="mt-1 w-full rounded-full bg-brand-red px-5 py-2.5 text-center text-sm font-semibold text-white">
              Authorise monthly rent
            </span>
          </div>
        </motion.div>
      </Reveal>
    </DocSection>
  );
}
