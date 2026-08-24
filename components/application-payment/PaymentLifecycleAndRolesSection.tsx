"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface StatusBadge {
  label: string;
  style: string;
}

const paymentStatuses: StatusBadge[] = [
  { label: "Requested", style: "bg-[#FEF7E0] text-[#B06000]" },
  { label: "Pending approval", style: "bg-[#FEF7E0] text-[#B06000]" },
  { label: "Processing", style: "bg-[#EEF2FF] text-[#3730A3]" },
  { label: "Confirmed", style: "bg-[#E6F4EA] text-[#137333]" },
  { label: "Refund requested", style: "bg-[#EEF2FF] text-[#3730A3]" },
  { label: "Refunded", style: "bg-[#E6F4EA] text-[#137333]" },
  { label: "Disputed", style: "bg-[#FEF7E0] text-[#B06000]" },
  { label: "Reconciled", style: "bg-[#F1F3F4] text-[#5F6368]" },
];

interface RoleCard {
  title: string;
  allowed: string;
  restricted: string;
}

const roles: RoleCard[] = [
  {
    title: "Decision owner",
    allowed: "Approves/declines applications",
    restricted: "Cannot process own payment",
  },
  {
    title: "Payment approver",
    allowed: "Approves payment requests",
    restricted: "Cannot approve own high-risk change",
  },
  {
    title: "Payment operator",
    allowed: "Executes approved payments",
    restricted: "Cannot self-expand scope",
  },
  {
    title: "Refund approver",
    allowed: "Approves refunds in scope",
    restricted: "Cannot redirect refund destination alone",
  },
];

export default function PaymentLifecycleAndRolesSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Top Block: Payment Lifecycle */}
        <div className="space-y-8 text-center">
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
              {t("PAYMENT LIFECYCLE")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
              {t("A controlled status machine, not a black box")}
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
              {t(
                "Every payment moves through explicit states — participants and operators always know exactly where it stands.",
              )}
            </p>
          </div>

          {/* Status Badges Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto pt-2"
          >
            {paymentStatuses.map((status) => (
              <span
                key={status.label}
                className={`px-4 py-2 rounded-full text-xs font-medium shadow-xs border border-black/5 ${status.style}`}
              >
                {t(status.label)}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom Block: Roles & Separation of Duties */}
        <div className="space-y-10 text-center">
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#DC2626] uppercase">
              {t("ROLES & SEPARATION OF DUTIES")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
              {t("No single role does everything")}
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
              {t(
                "High-risk changes always require more than one role — nobody self-approves their own payment or refund.",
              )}
            </p>
          </div>

          {/* 4 Roles Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {roles.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs flex flex-col justify-start space-y-3"
              >
                <h3 className="text-sm font-serif font-bold text-[#14213D] leading-snug">
                  {t(role.title)}
                </h3>

                <div className="space-y-2 text-[11px] leading-relaxed">
                  {/* Allowed Permission */}
                  <div className="flex items-start gap-1.5 text-[#137333]">
                    <span className="shrink-0 font-bold">&#10003;</span>
                    <span className="font-normal">{t(role.allowed)}</span>
                  </div>

                  {/* Restricted Permission */}
                  <div className="flex items-start gap-1.5 text-[#DC2626]">
                    <span className="shrink-0 font-bold">&#10005;</span>
                    <span className="font-normal">{t(role.restricted)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
