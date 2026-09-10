"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { blogPosts } from "./data";

export function BlogListSection() {
  const { t } = useLanguage();

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">
              — {t("Blog")}
            </span>
            <motion.h1
              variants={fadeUp}
              className="max-w-2xl font-heading text-3xl font-medium text-brand-navy sm:text-4xl md:text-5xl"
            >
              {t("Guides for finding, listing, and managing rooms")}
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-xl text-base text-neutral-600 sm:text-lg">
              {t(
                "Practical, plain-language guidance for renters, providers, and organizations using Zoiko Rooms.",
              )}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link
                  href={`/company/blogs/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="w-full overflow-hidden bg-neutral-100">
                    <ImageFade
                      src={post.coverImage}
                      alt={post.coverAlt}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-red">
                      {t(post.category)}
                    </span>
                    <h2 className="font-heading text-lg font-medium leading-snug text-brand-navy">
                      {t(post.title)}
                    </h2>
                    <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600">
                      {t(post.excerpt)}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-2 text-xs text-neutral-500">
                      <span>
                        {post.publishedDate} · {t(post.readTime)}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-brand-navy group-hover:text-brand-red">
                        {t("Read")}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
