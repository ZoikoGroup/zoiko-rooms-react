"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface ResourceLink {
  title: string;
  href: string;
}

const resourceLinks: ResourceLink[] = [
  { title: "Getting started", href: "#getting-started" },
  { title: "API reference", href: "#api-reference" },
  { title: "Webhook reference", href: "#webhook-reference" },
  { title: "Security guide", href: "#security-guide" },
  { title: "Data & mapping guide", href: "#data-mapping-guide" },
  { title: "Change log", href: "#change-log" },
];

export default function DeveloperExperienceSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#FAF8F5] text-[#14213D] py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#1A2E6E]" />
            <span className="text-xs font-bold tracking-widest text-[#1A2E6E] uppercase">
              {t("DEVELOPER EXPERIENCE")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Sandboxed, synthetic, and safe to copy.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-2xl">
            {t(
              "Every public example uses non-secret, synthetic data. No live tenant, person, room, agreement, or payment record is ever published.",
            )}
          </p>
        </div>

        {/* Split Box: Image Left, Code Block Right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-md grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: 3D Illustration Image */}
          <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-[#D63045] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/integration/left.png"
              alt={t("Developer Experience Illustration")}
              fill
              className="object-cover object-left"
              priority
            />
          </div>

{/* Right Column: Code Snippet Block */}
<div className="lg:col-span-6 bg-[#16202B] p-6 sm:p-8 lg:p-10 flex flex-col justify-center font-mono text-xs sm:text-[13px] leading-relaxed text-[#A0AEC0] overflow-x-auto">
  {/* Comment */}
  <div className="text-[#526070] mb-4">
    {t("// sandbox — read current availability")}
  </div>

            {/* Request */}
            <div className="text-[#E2E8F0] font-semibold mb-1">
              GET /v1/availability/&#123;room_id&#125;
            </div>
            <div className="text-[#A0AEC0] mb-6">
              Authorization: Bearer &#123;sandbox_token&#125;
            </div>

            {/* JSON Payload */}
            <div className="text-[#E2E8F0]">
              &#123;
              <div className="pl-4">
                <span className="text-[#FC8181]">&quot;room_id&quot;</span>:{" "}
                <span className="text-[#68D391]">
                  &quot;room_synthetic_0042&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-[#FC8181]">&quot;status&quot;</span>:{" "}
                <span className="text-[#68D391]">&quot;available&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#FC8181]">&quot;source&quot;</span>:{" "}
                <span className="text-[#68D391]">&quot;zoiko_rooms&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#FC8181]">&quot;version&quot;</span>:{" "}
                <span className="text-[#68D391]">&quot;14&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#FC8181]">&quot;freshness&quot;</span>:{" "}
                <span className="text-[#68D391]">&quot;current&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#FC8181]">
                  &quot;idempotency_key&quot;
                </span>
                :{" "}
                <span className="text-[#68D391]">&quot;req_9f2a...&quot;</span>
              </div>
              &#125;
            </div>
          </div>
        </motion.div>

        {/* 6 Bottom Resource Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {resourceLinks.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="bg-[#F6F2EC] hover:bg-[#EFE8DF] transition-colors rounded-xl p-4 sm:p-5 border border-[#EAE6DF] flex items-center justify-between group"
            >
              <span className="text-xs sm:text-sm font-bold text-[#14213D]">
                {t(item.title)}
              </span>
              <ArrowRight className="w-4 h-4 text-[#14213D] transition-transform group-hover:translate-x-1" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
