"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div variants={fadeUp} className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl font-heading text-3xl font-medium text-brand-navy sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base text-neutral-600 sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
