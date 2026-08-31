"use client";

import { ShieldCheck } from "lucide-react";
import { Container, Reveal, ImageFade, Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, Paragraph } from "./shared";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Eyebrow>{t("Fair Access")}</Eyebrow>
            <h1 className="font-heading text-4xl font-medium text-brand-navy sm:text-5xl">
              {t("Fair Housing & Anti-Discrimination")}
            </h1>
            <Paragraph>
              {t("Everyone should be able to explore housing opportunities on Zoiko Rooms without unlawful discrimination.")}
            </Paragraph>
            <Paragraph className="text-sm text-neutral-500">
              {t(
                "We prohibit discriminatory conduct in housing-related listings, communications, access, screening, terms, and platform activity, subject to applicable law and legitimate jurisdiction-specific exceptions.",
              )}
            </Paragraph>

            <div className="flex items-start gap-3 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-4">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
              <p className="text-sm leading-relaxed text-neutral-600">
                <span className="font-semibold text-brand-navy">{t("Trust Note:")}</span>{" "}
                {t("Local housing and anti-discrimination rules vary. Zoiko Rooms applies jurisdiction-specific requirements where relevant.")}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="#report-discrimination" variant="secondary" size="md">
                {t("Report Discrimination")}
              </Button>
              <Button href="#accessibility" variant="outline" size="md">
                {t("Request an Accommodation")}
              </Button>
              <a
                href="/legal/community-standards"
                className="text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
              >
                {t("Read Community Standards")} →
              </a>
            </div>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden rounded-[32px] sm:h-[380px]">
            <ImageFade
              src="/images/fair-housing/hero-living-room.png"
              alt={t("A bright, comfortable living room")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="mt-10 rounded-2xl border border-[#E9E0D3] bg-white p-6 sm:p-8">
          <h2 className="font-heading text-xl font-medium text-brand-navy">
            {t("What is Zoiko Rooms' Fair Housing & Anti-Discrimination policy?")}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#5B5548]">
            {t(
              "Zoiko Rooms prohibits discrimination that unlawfully or unfairly restricts access to housing opportunities on the platform. The policy applies to listings, communications, viewings, applications, screening, rental terms, accessibility, and other housing-related activity, with local legal requirements applied through jurisdiction-specific rules.",
            )}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
