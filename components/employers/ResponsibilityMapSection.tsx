"use client";

import { Briefcase, KeyRound, Users, ShieldCheck } from "lucide-react";
import { Container, Reveal, Card } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const owners = [
  {
    icon: Briefcase,
    title: "Employer",
    description: "Owns program criteria, funding decisions, and workforce-program support.",
  },
  {
    icon: KeyRound,
    title: "Provider",
    description: "Owns exact room authority, accuracy, maintenance, and access facts.",
  },
  {
    icon: Users,
    title: "Worker",
    description: "Reviews, accepts or declines, and reports mismatches — choice stays theirs.",
  },
  {
    icon: ShieldCheck,
    title: "Zoiko Rooms",
    description: "Runs the workflow and evidence — never the silent decision-maker.",
  },
];

export function ResponsibilityMapSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Responsibility Map")}</Eyebrow>
            <SectionTitle>{t("Who owns what, at every step")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t("Employer, provider, worker, and Zoiko Rooms each carry distinct, named responsibilities — nothing silently shifts between them.")}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {owners.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="flex flex-col gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1E7DA] text-[#A85A34]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
