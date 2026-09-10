"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, Paragraph } from "./shared";
import type { BlogPost } from "./data";

export function BlogPostHeroSection({ post }: { post: BlogPost }) {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="flex flex-col gap-6">
          <motion.div variants={fadeUp}>
            <Link
              href="/company/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-red"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("Back to Blog")}
            </Link>
          </motion.div>

          <Eyebrow>{t(post.category)}</Eyebrow>

          <motion.h1
            variants={fadeUp}
            className="max-w-3xl font-heading text-3xl font-medium text-brand-navy sm:text-5xl sm:leading-[1.15]"
          >
            {t(post.title)}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-sm font-medium text-neutral-500">
            {post.publishedDate} · {t(post.readTime)}
          </motion.p>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl bg-neutral-100">
            <ImageFade src={post.coverImage} alt={post.coverAlt} priority className="h-auto w-full" />
          </motion.div>

          <div className="flex flex-col gap-3 rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              {t("Quick Summary")}
            </span>
            <ul className="flex flex-col gap-2.5">
              {post.quickSummary.map((line) => (
                <li key={line}>
                  <Paragraph className="max-w-none">{t(line)}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
