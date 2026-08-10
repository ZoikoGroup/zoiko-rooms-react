"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.span
      variants={fadeUp}
      className={`text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-[#D98C5F]" : "text-[#C2703C]"}`}
    >
      {children}
    </motion.span>
  );
}

export function Paragraph({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <motion.p
      variants={fadeUp}
      className={`max-w-3xl text-[15px] leading-relaxed ${dark ? "text-white/60" : "text-[#7A7266]"} ${className}`}
    >
      {children}
    </motion.p>
  );
}
