"use client";

import { motion } from "framer-motion";
import { Headphones, Mail, MessageCircle, Globe } from "lucide-react";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const statPills = [
  { icon: Mail, label: "Avg. reply in 4 hours" },
  { icon: MessageCircle, label: "Live chat, weekdays" },
  { icon: Globe, label: "Support in 12 languages" },
];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <Container className="py-6 sm:py-8">
        <Reveal>
          <motion.div
            variants={fadeUp}
            className="relative isolate flex min-h-[420px] items-end overflow-hidden rounded-[32px] sm:min-h-[480px]"
          >
            <div className="absolute inset-0 -z-10">
              <ImageFade
                src="/images/contact-us/hero-support-agent.webp"
                alt={t("A Zoiko Rooms support agent wearing a headset, smiling")}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
            </div>

            <div className="flex w-full flex-col gap-5 p-8 sm:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-red shadow-sm">
                <Headphones className="h-4 w-4" />
                {t("Contact Us")}
              </span>

              <h1 className="max-w-xl font-heading text-4xl font-medium text-white sm:text-5xl">
                {t("How can we help?")}
              </h1>

              <p className="max-w-xl text-[15px] leading-relaxed text-white/85">
                {t(
                  "Whatever you need — a question before you search, help with a listing, or a safety concern — a real person reads every message.",
                )}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {statPills.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t(label)}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
