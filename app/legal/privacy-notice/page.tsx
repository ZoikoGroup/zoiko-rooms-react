import type { Metadata } from "next";
import { PrivacyNoticeView } from "@/components/privacy-notice";

export const metadata: Metadata = {
  title: "Privacy Notice and Data Protection | Zoiko Rooms",
  description:
    "Read the Zoiko Rooms privacy notice to understand how personal data is collected, used and protected, along with your privacy rights and available choices.",
};

export default function PrivacyNoticePage() {
  return <PrivacyNoticeView />;
}
