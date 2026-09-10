"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { easeOut, fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, SectionHeading, SubHeading, Paragraph, BulletList } from "./shared";
import type { BlogBlock, BlogPost } from "./data";

function BlockRenderer({ block }: { block: BlogBlock }) {
  const { t } = useLanguage();

  switch (block.type) {
    case "paragraphs":
      return (
        <div className="flex flex-col gap-4">
          {block.heading && <SectionHeading>{t(block.heading)}</SectionHeading>}
          {block.paragraphs.map((paragraph) => (
            <Paragraph key={paragraph}>{t(paragraph)}</Paragraph>
          ))}
        </div>
      );

    case "bullets":
      return (
        <div className="flex flex-col gap-4">
          {block.heading && <SectionHeading>{t(block.heading)}</SectionHeading>}
          {block.intro && <Paragraph>{t(block.intro)}</Paragraph>}
          <BulletList items={block.items.map((item) => t(item))} />
        </div>
      );

    case "numbered":
      return (
        <div className="flex flex-col gap-5">
          {block.heading && <SectionHeading>{t(block.heading)}</SectionHeading>}
          {block.intro && <Paragraph>{t(block.intro)}</Paragraph>}
          <ol className="flex flex-col gap-4">
            {block.items.map((item, index) => (
              <motion.li key={item.heading ?? item.text} variants={fadeUp} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1">
                  {item.heading && <SubHeading>{t(item.heading)}</SubHeading>}
                  <p className="max-w-3xl text-[15px] leading-relaxed text-[#5B5548]">{t(item.text)}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      );

    case "subsections":
      return (
        <div className="flex flex-col gap-5">
          <SectionHeading>{t(block.heading)}</SectionHeading>
          {block.intro && <Paragraph>{t(block.intro)}</Paragraph>}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {block.items.map((item) => (
              <motion.div
                key={item.heading}
                variants={fadeUp}
                className="flex flex-col gap-2.5 rounded-2xl border border-[#E9E0D3] bg-white p-5"
              >
                <SubHeading>{t(item.heading)}</SubHeading>
                {item.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-[#5B5548]">
                    {t(paragraph)}
                  </p>
                ))}
                {item.items && <BulletList items={item.items.map((i) => t(i))} />}
              </motion.div>
            ))}
          </div>
        </div>
      );

    case "table":
      return (
        <div className="flex flex-col gap-5">
          <SectionHeading>{t(block.heading)}</SectionHeading>
          <motion.div
            variants={fadeUp}
            className="overflow-x-auto rounded-2xl border border-[#E9E0D3] bg-white"
          >
            <table className="w-full min-w-100 border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#E9E0D3] bg-[#FFFDF8]">
                  <th className="px-5 py-3 font-heading font-medium text-brand-navy">{t("Factor")}</th>
                  <th className="px-5 py-3 font-heading font-medium text-brand-navy">{t("What to Check")}</th>
                </tr>
              </thead>
              <tbody>
                {block.rows.map(([factor, check]) => (
                  <tr key={factor} className="border-b border-[#E9E0D3] last:border-b-0">
                    <td className="px-5 py-3 font-semibold text-brand-navy">{t(factor)}</td>
                    <td className="px-5 py-3 text-[#5B5548]">{t(check)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      );

    case "image":
      return (
        <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl bg-neutral-100">
          <ImageFade src={block.src} alt={t(block.alt)} className="h-auto w-full" />
        </motion.div>
      );

    case "quote":
      return (
        <motion.blockquote
          variants={fadeUp}
          className="flex flex-col gap-4 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-6 sm:p-8"
        >
          <p className="max-w-3xl font-heading text-lg font-medium leading-relaxed text-brand-navy sm:text-xl">
            &ldquo;{t(block.text)}&rdquo;
          </p>
        </motion.blockquote>
      );

    default:
      return null;
  }
}

function FaqAccordion({ post }: { post: BlogPost }) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <DocSection id="faqs">
      <Reveal className="flex flex-col gap-6">
        <SectionHeading>{t("Frequently Asked Questions")}</SectionHeading>
        <div className="flex flex-col divide-y divide-[#E9E0D3]">
          {post.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left cursor-pointer"
                >
                  <span className="font-heading text-base font-medium text-brand-navy">{t(faq.question)}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-brand-red"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-sm leading-relaxed text-neutral-600">{t(faq.answer)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Reveal>
    </DocSection>
  );
}

export function BlogPostBodySection({ post }: { post: BlogPost }) {
  const { t } = useLanguage();

  return (
    <Container>
      <Reveal className="flex flex-col">
        {post.blocks.map((block, index) => (
          <DocSection key={index}>
            <BlockRenderer block={block} />
          </DocSection>
        ))}

        <FaqAccordion post={post} />

        <DocSection id="final-thoughts">
          <div className="flex flex-col gap-4">
            <SectionHeading>{t("Final Thoughts")}</SectionHeading>
            {post.finalThought.paragraphs.map((paragraph) => (
              <Paragraph key={paragraph}>{t(paragraph)}</Paragraph>
            ))}
            <p className="max-w-3xl font-heading text-lg font-medium leading-relaxed text-brand-navy">
              {t(post.finalThought.highlight)}
            </p>
          </div>
        </DocSection>

        <DocSection>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/find-a-room"
              className="flex w-fit items-center gap-1.5 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
            >
              {t("Start Your Search on Zoiko Rooms")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/company/blogs"
              className="flex w-fit items-center gap-1.5 rounded-full border border-[#E9E0D3] bg-[#FFFDF8] px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-red hover:text-brand-red"
            >
              {t("Back to Blog")}
            </Link>
          </div>
        </DocSection>
      </Reveal>
    </Container>
  );
}
