"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const audiences = [
  {
    title: "List a room",
    description: "Offer an eligible private room with clear verification and applicant workflows.",
    cta: "Start a free listing",
    href: "/list-a-room",
  },
  {
    title: "For organizations",
    description: "Source and manage verified room placements for students, staff and relocations.",
    cta: "Explore organizations",
    href: "/organizations",
  },
  {
    title: "Zoiko Rooms Pro",
    description: "Operate portfolios, compliance, applications and payments in one system.",
    cta: "Explore Pro",
    href: "/pro",
  },
];

export function AudienceSection() {
  const { t } = useLanguage();
  return (
    <section className="py-5 sm:py-5">
      <Container>
        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {audiences.map(({ title, description, cta, href }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:p-8"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-brand-navy">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
              <p className="flex-1 text-sm text-neutral-600">{t(description)}</p>
              <Button href={href} variant="outline" size="sm" className="w-fit">
                {t(cta)}
              </Button>
            </motion.div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
