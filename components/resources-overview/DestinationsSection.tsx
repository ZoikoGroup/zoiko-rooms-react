"use client";

import { motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { destinations } from "./data";

export function DestinationsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Resource Destinations")}</Eyebrow>
            <SectionTitle>{t("Five destinations, each with one clear job")}</SectionTitle>
            <Paragraph className="mx-auto text-center">
              {t(
                "Every destination has a stated boundary — what it resolves, and what it explicitly does not decide or guarantee.",
              )}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map(({ key, title, description, audience, tags, boundary, cta, href, status, image }) => (
              <motion.a
                key={key}
                href={href}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.15)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white"
              >
                <div className="relative h-[140px] w-full overflow-hidden">
                  <ImageFade
                    src={image}
                    alt={t(title)}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm ${
                      status === "current" ? "bg-white/90 text-emerald-700" : "bg-white/90 text-amber-700"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${status === "current" ? "bg-emerald-500" : "bg-amber-500"}`} />
                    {status === "current" ? t("Current") : t("Route")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2.5 p-5">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                  <p className="text-xs italic text-neutral-400">{t(audience)}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#E9E0D3] bg-brand-cream/60 px-2.5 py-1 text-[11px] font-medium text-brand-navy">
                        {t(tag)}
                      </span>
                    ))}
                  </div>

                  <p className="border-t border-[#E9E0D3] pt-2.5 text-xs leading-relaxed text-[#8A6A24]">⚠ {t(boundary)}</p>

                  <span className="mt-1 text-sm font-semibold text-brand-red">{t(cta)} →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
