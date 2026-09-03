"use client";

import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Pencil, Inbox, Languages } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rights = [
  { icon: ClipboardList, title: "Notice", description: "Plain-language purpose, criteria, and current status" },
  { icon: UserCheck, title: "Human decision owner", description: "A named, authorized role — never an opaque system" },
  { icon: Pencil, title: "Correction", description: "Fix inaccurate identity, evidence, or contact details" },
  { icon: Inbox, title: "Review & appeal", description: "Where the current program provides a route" },
  { icon: Languages, title: "Representation", description: "Interpreters, advocates, and assisted-digital support" },
];

export function RightsDueProcessSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Rights & Due Process")}</Eyebrow>
            <SectionTitle>{t("Participants can see the whole picture")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t(
                "Notice, criteria, and a named decision owner — every step designed to be understood, corrected, and reviewed."
              )}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="w-full overflow-hidden rounded-3xl"
            >
              <NaturalImage
                src="/images/government-public-sector/rights-handshake.png"
                alt={t("A participant and program representative shaking hands")}
              />
            </motion.div>

            <div className="flex flex-col gap-3">
              {rights.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
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
              ))}

              <Button href="/legal/your-privacy-choices" variant="outline" size="md" className="mt-2 w-fit">
                {t("Review Participant Rights")}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
