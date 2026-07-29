"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, easeOut } from "@/lib/motion";

type CardProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={`rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:p-8 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
