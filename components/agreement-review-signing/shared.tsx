"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      variants={fadeUp}
      className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red"
    >
      {children}
    </motion.span>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      className="font-heading text-2xl font-medium text-brand-navy sm:text-[26px]"
    >
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
    <motion.p variants={fadeUp} className={`max-w-3xl text-sm leading-relaxed text-neutral-500 ${className}`}>
      {children}
    </motion.p>
  );
}

// Every distinct block on this page is its own rounded, bordered card sitting
// on the plain cream page background — the page itself never carries a
// section-level background fill, only these boxes do.
export function Card({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div id={id} className={`scroll-mt-28 rounded-3xl border border-[#E9E0D3] bg-[#FFFDF8] p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

type CalloutTone = "tan" | "dark";

const calloutToneClasses: Record<CalloutTone, string> = {
  tan: "bg-[#F6ECD4] text-brand-navy",
  dark: "bg-brand-navy text-[#C6CCDE]",
};

export function Callout({
  children,
  tone = "tan",
  className = "",
}: {
  children: React.ReactNode;
  tone?: CalloutTone;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl p-4 text-sm leading-relaxed sm:p-5 ${calloutToneClasses[tone]} ${className}`}>{children}</div>
  );
}

export type TagTone = "amber" | "green" | "gray";

const tagToneClasses: Record<TagTone, string> = {
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  gray: "bg-neutral-100 text-neutral-500 border-neutral-200",
};

export function Tag({ label, tone }: { label: string; tone: TagTone }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${tagToneClasses[tone]}`}>
      {label}
    </span>
  );
}
