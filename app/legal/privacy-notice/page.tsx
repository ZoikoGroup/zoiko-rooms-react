import type { Metadata } from "next";
import { PrivacyNoticeView } from "@/components/privacy-notice";

export const metadata: Metadata = {
  title: "Privacy Notice — Zoiko Rooms",
  description:
    "How Zoiko Rooms uses personal information — what's collected, why, who it's shared with, how long it's kept, and the privacy rights available to you.",
};

export default function PrivacyNoticePage() {
  return <PrivacyNoticeView />;
}
