"use client";

import { Container, Reveal, Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph } from "./shared";

export function IntroSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>{t("Verification & Authority")}</Eyebrow>
          <SectionTitle>
            {t("Know what was checked, whose authority applies, and what each status does — and does not — prove.")}
          </SectionTitle>
          <Paragraph>
            {t(
              "Zoiko Rooms keeps identity, listing authority, room evidence, organization relationships, availability, costs, payment authority, and action permissions separate so users can make informed decisions."
            )}
          </Paragraph>
          <Button href="/how-it-works/room-passport" variant="secondary" size="lg" className="w-fit">
            {t("Explore Room Passport")}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
