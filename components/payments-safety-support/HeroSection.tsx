"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const needs = [
  { label: "Before paying", href: "#before-paying" },
  { label: "Viewing or communication safety", href: "#safer-communication" },
  { label: "Payment failed or changed", href: "#payment-lifecycle" },
  { label: "Refund or cancellation", href: "#refunds-disputes" },
  { label: "Report fraud, harassment, or discrimination", href: "#fraud-account-recovery" },
  { label: "Access urgent or general support", href: "#support-incident-lifecycle" },
];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red"
            >
              {t("Payments, Safety & Support")}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold text-[#1B2438] sm:text-[34px]"
            >
              {t(
                "Know what you are paying, who receives it, how to act safely, and where to get help at every stage."
              )}
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-lg text-[15px] leading-relaxed text-[#7A7266]">
              {t(
                "Review complete costs and current terms before commitment, use only the disclosed authorized payment route, recognize risky requests, report concerns in context, and follow a visible support and dispute lifecycle."
              )}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <Button href="#before-paying" size="lg" variant="secondary">
                {t("Review Payment Steps")}
              </Button>
              <Button href="/resources/help-center" size="lg" variant="outline">
                {t("Get Help Now")}
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
                {t("Choose a Need")}
              </span>
              <div className="flex flex-wrap gap-2">
                {needs.map((need) => (
                  <a
                    key={need.label}
                    href={need.href}
                    className="rounded-xl border border-[#E9E0D3] bg-white px-4 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:border-brand-navy/40"
                  >
                    {t(need.label)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full overflow-hidden rounded-4xl"
          >
            <NaturalImage
              src="/images/payments-safety-support/hero-couple.png"
              alt={t("A couple who feel safe and supported after a room viewing")}
            />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
