"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { authTabs } from "./authRoutes";

export function AuthHeader() {
  const pathname = usePathname();
  const active = authTabs.find((tab) => tab.href === pathname) ?? authTabs[0];

  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold text-brand-navy">{active.heading}</h1>
      <p className="mt-2 text-sm text-neutral-500">{active.subtitle}</p>

      <div className="mt-6 flex items-center gap-6 border-b border-black/10">
        {authTabs.map((tab) => {
          const isActive = tab.href === pathname;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative pb-3 text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-brand-navy" : "text-neutral-400 hover:text-brand-navy/70"
              }`}
            >
              {tab.label}
              {isActive && (
                <motion.span
                  layoutId="auth-tab-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand-navy"
                  transition={{ duration: 0.3, ease: easeOut }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
