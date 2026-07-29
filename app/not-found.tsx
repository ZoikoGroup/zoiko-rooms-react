import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found";

export const metadata: Metadata = {
  title: "Page not found — Zoiko Rooms",
};

export default function NotFound() {
  return <NotFoundContent />;
}
