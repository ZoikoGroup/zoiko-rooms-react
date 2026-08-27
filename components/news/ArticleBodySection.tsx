"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, SectionHeading, Paragraph } from "./shared";
import { article } from "./data";

export function ArticleBodySection() {
  const { t } = useLanguage();

  return (
    <Container>
      <Reveal className="flex flex-col">
        <DocSection>
          <div className="flex flex-col gap-5">
            {article.body.map((paragraph) => (
              <Paragraph key={paragraph}>{t(paragraph)}</Paragraph>
            ))}
          </div>
        </DocSection>

        <DocSection>
          <motion.blockquote
            variants={fadeUp}
            className="flex flex-col gap-4 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-6 sm:p-8"
          >
            <p className="max-w-3xl font-heading text-lg font-medium leading-relaxed text-brand-navy sm:text-xl">
              “{t(article.quote.text)}”
            </p>
            <footer className="text-sm text-neutral-500">
              <span className="font-semibold text-brand-navy">{article.quote.name}</span>, {t(article.quote.title)}
            </footer>
          </motion.blockquote>
        </DocSection>

        <DocSection>
          <div className="flex flex-col gap-5">
            {article.bodyContinued.map((paragraph) => (
              <Paragraph key={paragraph}>{t(paragraph)}</Paragraph>
            ))}
          </div>
        </DocSection>

        <DocSection id="about">
          <div className="flex flex-col gap-4">
            <SectionHeading>{t("About Zoiko Rooms")}</SectionHeading>
            <Paragraph>{t(article.about)}</Paragraph>
          </div>
        </DocSection>

        <DocSection id="media-contact">
          <div className="flex flex-col gap-5">
            <SectionHeading>{t("Media Contact")}</SectionHeading>
            <Paragraph>{t(article.mediaContact.department)}</Paragraph>

            <div className="grid grid-cols-1 gap-3 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-5 sm:grid-cols-2">
              <a href={`mailto:${article.mediaContact.email}`} className="flex items-center gap-2.5 text-sm text-brand-navy hover:text-brand-red">
                <Mail className="h-4 w-4 shrink-0 text-neutral-400" />
                {article.mediaContact.email}
              </a>
              <a href={`tel:${article.mediaContact.phone}`} className="flex items-center gap-2.5 text-sm text-brand-navy hover:text-brand-red">
                <Phone className="h-4 w-4 shrink-0 text-neutral-400" />
                {article.mediaContact.phone}
              </a>
              <span className="flex items-center gap-2.5 text-sm text-brand-navy">
                <MapPin className="h-4 w-4 shrink-0 text-neutral-400" />
                {article.mediaContact.address}
              </span>
              <a
                href={article.mediaContact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-brand-navy hover:text-brand-red"
              >
                <Globe className="h-4 w-4 shrink-0 text-neutral-400" />
                {article.mediaContact.website}
              </a>
            </div>
          </div>
        </DocSection>

        <DocSection>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                {t("Categories")}
              </span>
              {article.categories.map((category) => (
                <span key={category} className="rounded-full border border-[#E9E0D3] bg-[#FFFDF8] px-3 py-1 text-xs font-medium text-brand-navy">
                  {t(category)}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Tags")}</span>
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#E9E0D3] bg-white px-3 py-1 text-xs font-medium text-neutral-600">
                  {t(tag)}
                </span>
              ))}
            </div>
          </div>
        </DocSection>

        <DocSection>
          <motion.a
            variants={fadeUp}
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1.5 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
          >
            {t("Read more on Issuewire")}
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </DocSection>
      </Reveal>
    </Container>
  );
}
