"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";

const MotionLink = motion.create(Link);

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-red text-white hover:bg-brand-red-dark",
  secondary: "bg-brand-navy text-white hover:bg-brand-navy-dark",
  outline: "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
  ghost: "text-brand-navy hover:bg-brand-navy/5",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors duration-200";

const hoverMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.15 },
};

type ButtonOwnProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonOwnProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonOwnProps> & { href?: undefined };
type ButtonAsLink = ButtonOwnProps & { href: string };

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <MotionLink href={href} className={classes} onClick={onClick} {...hoverMotion}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      {...hoverMotion}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
}
