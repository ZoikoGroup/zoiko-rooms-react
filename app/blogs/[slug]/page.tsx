import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostHeroSection, BlogPostBodySection, getBlogBySlug, getAllBlogSlugs } from "@/components/blogs";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <BlogPostHeroSection post={post} />
      <BlogPostBodySection post={post} />
    </>
  );
}
