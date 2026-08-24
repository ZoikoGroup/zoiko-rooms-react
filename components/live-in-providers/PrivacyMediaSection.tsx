"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const cards = [
  {
    title: "Address disclosure stages",
    description:
      "Approximate area on the public listing. Exact address is disclosed only at an approved viewing, application, or agreement stage — never publicly by default.",
    image: "/images/live-in-providers/privacy-address-disclosure.png",
  },
  {
    title: "What never appears publicly",
    description:
      "Resident names, exact routines, access codes, alarm details, camera coverage, and any identifiable person without appropriate consent are removed before publication.",
    image: "/images/live-in-providers/privacy-camera-recording.png",
  },
];

export function PrivacyMediaSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Privacy and Media")}</Eyebrow>
            <SectionTitle>{t("Protecting residents while disclosing what seekers need")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {cards.map(({ title, description, image }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.15)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white"
              >
                <div className="relative h-[200px] w-full overflow-hidden">
                  <ImageFade
                    src={image}
                    alt={t(title)}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
