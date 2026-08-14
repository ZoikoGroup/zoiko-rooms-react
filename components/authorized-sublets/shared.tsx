"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      variants={fadeUp}
      className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
    >
      {children}
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

export function Callout({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl border-l-4 border-brand-red bg-[#F6ECD4] p-5 sm:p-6 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-brand-navy">{children}</p>
    </motion.div>
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

// A borderless, div-based "table" that supports any number of columns.
export function InfoTable({ columns, rows }: { columns: string[]; rows: React.ReactNode[][] }) {
  const gridStyle = { gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` };

  return (
    <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white">
      <div
        className="grid gap-4 bg-[#F7F2EA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:px-6"
        style={gridStyle}
      >
        {columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      <div className="divide-y divide-[#E9E0D3]">
        {rows.map((row, index) => (
          <div key={index} className="grid gap-4 px-5 py-4 text-sm sm:px-6" style={gridStyle}>
            {row.map((cell, cellIndex) => (
              <span key={cellIndex} className={cellIndex === 0 ? "font-medium text-brand-navy" : "text-neutral-600"}>
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
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
