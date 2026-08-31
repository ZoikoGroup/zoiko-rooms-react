import type { Metadata } from "next";
import { CommunityStandardsView } from "@/components/community-standards";

export const metadata: Metadata = {
  title: "Community Standards | Zoiko Rooms",
  description:
    "The standards that help keep Zoiko Rooms respectful, trustworthy, and safe for everyone — respect, honesty, safety, privacy, conduct, reporting, and enforcement.",
};

export default function CommunityStandardsPage() {
  return <CommunityStandardsView />;
}
