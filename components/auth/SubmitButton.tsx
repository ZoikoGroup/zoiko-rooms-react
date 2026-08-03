"use client";

import { motion } from "framer-motion";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.15 }}
      className="w-full rounded-xl bg-brand-navy py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-navy-dark"
    >
      {children}
    </motion.button>
  );
}
