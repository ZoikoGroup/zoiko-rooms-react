"use client";

import { motion } from "framer-motion";
import { Search, Home, GraduationCap, Briefcase, Globe } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const modules = [
  {
    icon: Search,
    title: "Search Rooms",
    description: "Search, filter, compare, save, and continue.",
    cta: "Search Rooms",
    href: "/find-a-room/search-rooms",
  },
  {
    icon: Home,
    title: "Rooms by City",
    description: "Explore city context, cost patterns, transport, and availability.",
    cta: "Explore Rooms by City",
    href: "/find-a-room/rooms-by-city",
  },
  {
    icon: GraduationCap,
    title: "University Rooms",
    description: "Find rooms around institutions and term timelines.",
    cta: "Explore University Rooms",
    href: "/find-a-room/university-rooms",
  },
  {
    icon: Briefcase,
    title: "Work & Healthcare",
    description: "Search around workplaces, hospitals, placements, and rotations.",
    cta: "Explore Work & Healthcare",
    href: "/find-a-room/work-healthcare-rooms",
  },
  {
    icon: Globe,
    title: "International Moves",
    description: "Plan documents, timing, payments, support, and arrival.",
    cta: "Explore International Moves",
    href: "/find-a-room/international-moves",
  },
];

export function FeaturedModulesSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Featured Search Modules")}</Eyebrow>
            <SectionTitle>{t("Explore by destination, life situation, and move timing")}</SectionTitle>
            <Paragraph>
              {t("Use real inventory-backed destinations. Coverage gaps are explained rather than hidden.")}
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {modules.map(({ icon: Icon, title, description, cta, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
                <p className="flex-1 text-sm text-neutral-600">{t(description)}</p>
                <Button href={href} variant="outline" size="sm" className="w-full text-[12px]">
                  {t(cta)}
                </Button>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
