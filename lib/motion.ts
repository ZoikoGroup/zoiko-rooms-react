import type { Transition, Variants } from "framer-motion";

export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

// Cards/sections rise from below and fade in as they enter the viewport.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(11,27,51,0.06)" },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)",
    transition: { duration: 0.25, ease: easeOut },
  },
};

export const modalTransition: Transition = {
  duration: 0.2,
  ease: easeOut,
};
