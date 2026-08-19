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

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      className="max-w-2xl font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
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
    <motion.p variants={fadeUp} className={`max-w-3xl text-[15px] leading-relaxed text-[#7A7266] ${className}`}>
      {children}
    </motion.p>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h3 variants={fadeUp} className="font-heading text-lg font-medium text-brand-navy">
      {children}
    </motion.h3>
  );
}

export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <motion.li
          key={item}
          variants={fadeUp}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600"
        >
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

type CalloutTone = "tan" | "dark";

const calloutToneClasses: Record<CalloutTone, string> = {
  tan: "border-brand-red bg-[#F6ECD4] text-brand-navy",
  dark: "border-brand-red bg-brand-navy text-[#C6CCDE]",
};

export function Callout({
  label,
  children,
  tone = "tan",
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  tone?: CalloutTone;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl border-l-4 p-5 sm:p-6 ${calloutToneClasses[tone]} ${className}`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${tone === "dark" ? "text-[#F2A38C]" : "text-brand-red"}`}>
        {label}
      </p>
      <p className={`mt-2 text-sm leading-relaxed ${tone === "dark" ? "text-[#C6CCDE]" : "text-brand-navy"}`}>{children}</p>
    </motion.div>
  );
}

export type PillTone = "green" | "amber" | "gray";

const pillToneClasses: Record<PillTone, string> = {
  green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  gray: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export function Pill({ label, tone }: { label: string; tone: PillTone }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${pillToneClasses[tone]}`}>
      {label}
    </span>
  );
}

// The #E9E0D3 line that separates every section — a border only, never a
// section background fill. Section backgrounds alternate white/transparent
// per section instead.
export function SectionDivider({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return <section id={id} className={`border-b border-[#E9E0D3] py-16 sm:py-24 ${className}`}>{children}</section>;
}
