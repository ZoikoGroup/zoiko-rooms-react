"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, Paragraph } from "./shared";

export function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>Legal</Eyebrow>
          <motion.h1 variants={fadeUp} className="font-heading text-4xl font-medium text-brand-navy sm:text-5xl">
            Payment Terms
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-medium text-brand-navy">
              Effective 17 August 2026
            </span>
            <span className="rounded-full border border-brand-red/25 bg-[#FBE9E9] px-3.5 py-1.5 text-xs font-semibold text-brand-red">
              Applies to: England, United Kingdom
            </span>
            <span className="rounded-full border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-medium text-brand-navy">
              English (UK)
            </span>
          </motion.div>

          <div className="border-t border-[#E9E0D3] pt-5">
            <Paragraph>
              Payments on Zoiko Rooms are processed by an authorized payment services provider,
              not held informally by Zoiko Rooms itself. These terms explain how rent, holding
              deposits, and tenancy deposits are collected and protected, what fees apply, and
              what happens if a payment fails, needs a refund, or is disputed.
            </Paragraph>
          </div>

          <motion.button
            type="button"
            variants={fadeUp}
            onClick={() => setOpen((v) => !v)}
            className="flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-dark"
          >
            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.18, ease: easeOut }}
              className="inline-block"
            >
              ▸
            </motion.span>
            Who processes my payment?
          </motion.button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: easeOut }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl text-sm leading-relaxed text-[#5B5548]">
                  Zoiko Payments Europe Ltd., our authorized payment services provider, processes
                  and moves your payment. Zoiko Rooms operates the marketplace and is not the fund
                  holder — see{" "}
                  <a href="#whos-involved" className="font-semibold text-brand-red hover:text-brand-red-dark">
                    Who&apos;s involved in a payment
                  </a>{" "}
                  below for the full breakdown.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            variants={fadeUp}
            className="flex items-start gap-3 rounded-2xl border border-[#E3C583] bg-[#FBF1DD] p-5"
          >
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6A24]" />
            <p className="text-sm leading-relaxed text-[#6B5518]">
              <span className="font-semibold">England rule in effect:</span> since 1 May 2026, rent
              must not be requested or accepted before your tenancy agreement is signed. Checkout
              is blocked automatically if this isn&apos;t yet satisfied.
            </p>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
