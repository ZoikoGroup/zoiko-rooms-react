import type { Metadata } from "next";
import { BlogListSection } from "@/components/blogs";

export const metadata: Metadata = {
  title: "Blog | Zoiko Rooms",
  description:
    "Practical, plain-language guides for renters, providers, and organizations — finding rooms, verification, payments, and more.",
};

export default function BlogsPage() {
  return <BlogListSection />;
}
