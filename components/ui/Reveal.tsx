"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
};

// Wrap a section's heading + cards in this so they stagger-reveal together
// as the section scrolls into view.
export function Reveal({ children, className = "", ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
