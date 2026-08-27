"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      variants={fadeUp}
      className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red"
    >
      — {children}
    </motion.span>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 variants={fadeUp} className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl">
      {children}
    </motion.h2>
  );
}

export function Paragraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.p variants={fadeUp} className={`max-w-3xl text-[15px] leading-relaxed text-[#5B5548] ${className}`}>
      {children}
    </motion.p>
  );
}

// A subtle top-border rule between major sections — this page reads as one
// continuous document on a single cream background, not alternating
// white/cream blocks, so #E9E0D3 shows up only as this hairline.
export function DocSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 border-t border-[#E9E0D3] py-10 first:border-t-0 first:pt-0 ${className}`}>
      {children}
    </section>
  );
}
