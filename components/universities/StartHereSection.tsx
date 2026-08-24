"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, BookOpen, ClipboardList, Globe } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle } from "./shared";

const needs = [
  {
    icon: GraduationCap,
    title: "Student Housing",
    description: "Off-campus room access for enrolled students, by term or academic year.",
    href: "/find-a-room/university-rooms",
  },
  {
    icon: Briefcase,
    title: "Staff & Faculty",
    description: "Relocation and interim housing for employed staff and faculty.",
    href: "/find-a-room/university-rooms",
  },
  {
    icon: BookOpen,
    title: "Visiting Academics",
    description: "Short-term rooms for visiting researchers and guest faculty.",
    href: "/find-a-room/university-rooms",
  },
  {
    icon: ClipboardList,
    title: "Placements & Internships",
    description: "Time-boxed housing tied to placement or internship dates.",
    href: "/find-a-room/university-rooms",
  },
  {
    icon: Globe,
    title: "International Arrivals",
    description: "Rooms searchable before arrival, in original currency.",
    href: "/find-a-room/international-moves",
  },
];

export function StartHereSection() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Start Here")}</Eyebrow>
            <SectionTitle>{t("What does your university need?")}</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">
            {needs.map(({ icon: Icon, title, description, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F1E7DA] text-[#A85A34]">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                <a
                  href={href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
                >
                  {t("Explore")}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
