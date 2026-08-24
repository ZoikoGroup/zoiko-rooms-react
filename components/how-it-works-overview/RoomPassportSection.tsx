"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, FileSignature, Wallet } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { passportFeatures } from "./data";

const icons = { shield: ShieldCheck, file: FileText, signature: FileSignature, wallet: Wallet };

export function RoomPassportSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Shared Record")}</Eyebrow>
            <SectionTitle>{t("Room Passport keeps the work connected")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t(
                "Current room facts, authority, evidence, availability, costs, viewings, applications, agreements, payments, changes, disputes, and limitations remain linked — without exposing unnecessary personal data.",
              )}
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-3xl">
              <NaturalImage
                src="/images/how-it-works-overview/room-passport-interior.png"
                alt={t("A furnished room, representing the room a Room Passport describes")}
              />
            </motion.div>

            <div className="flex flex-col gap-3">
              {passportFeatures.map(({ icon, title, description }) => {
                const Icon = icons[icon as keyof typeof icons];
                return (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-xl border border-[#E9E0D3] bg-white px-5 py-4 shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1E7DA] text-[#A85A34]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-brand-navy">{t(title)}</span>
                      <span className="block text-sm text-neutral-500">{t(description)}</span>
                    </span>
                  </motion.div>
                );
              })}

              <Button href="/how-it-works/room-passport" variant="secondary" size="md" className="mt-2 w-fit">
                {t("Explore Room Passport")}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
