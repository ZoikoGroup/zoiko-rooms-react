"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SecurityFeature {
  title: string;
  description: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    title: "Transport & authentication",
    description:
      "Current TLS, certificate validation, and phishing-resistant auth for admin access. No shared credentials, ever.",
  },
  {
    title: "Secrets & rotation",
    description:
      "Vault storage with least access, no re-display after creation, scheduled rotation, and leakage detection.",
  },
  {
    title: "Webhook security",
    description:
      "Endpoint verification, signed payloads, timestamp checks, and replay protection on every delivery.",
  },
  {
    title: "Tenant isolation",
    description:
      "No cross-tenant identifiers in caches, logs, search, exports, or error messages — anywhere.",
  },
  {
    title: "Abuse prevention",
    description:
      "Rate and burst limits, payload bounds, anomaly detection, and safe throttling on every client.",
  },
  {
    title: "Incident response",
    description:
      "Contain, revoke, restrict, preserve evidence, notify, and restore — under approval, every time.",
  },
];

export default function SecurityArchitectureSection() {
  return (
    <section className="relative w-full bg-[#0F1722] text-white py-24 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none select-none">
        <Image
          src="/images/integration/light.png"
          alt="Security background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#E9A98C]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#E9A98C] uppercase">
              SECURITY ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-white leading-tight">
            Every request and every event gets checked &mdash; server-side,
            every time.
          </h2>
          <p className="text-xs sm:text-sm text-[#B9C6CB] font-normal leading-relaxed max-w-2xl">
            Tenant, resource, field, action, and purpose are all verified on
            every call. Nothing about that boundary is optional or client-side.
          </p>
        </div>

        {/* 6 Grid Items Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#232F36] backdrop-blur-md rounded-2xl border border-[#26354A] overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 divide-[#26354A]"
        >
          {securityFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className={`p-7 sm:p-8 space-y-2.5 ${
                // Add right vertical borders for grid separation on desktop
                idx % 3 !== 2 ? "lg:border-r lg:border-[#26354A]" : ""
              } ${
                // Add top borders for second row on desktop
                idx >= 3 ? "lg:border-t lg:border-[#26354A]" : ""
              } ${
                // Add right vertical borders on tablet (2-columns)
                idx % 2 !== 1 ? "md:border-r md:border-[#26354A]" : ""
              }`}
            >
              <h3 className="text-sm font-bold text-white font-sans">
                {feature.title}
              </h3>
              <p className="text-[13px] text-[#AEBBC0] leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
