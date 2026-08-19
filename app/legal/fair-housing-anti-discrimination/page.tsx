import type { Metadata } from "next";
import { FairHousingView } from "@/components/fair-housing";

export const metadata: Metadata = {
  title: "Fair Housing & Anti-Discrimination — Zoiko Rooms",
  description:
    "Zoiko Rooms prohibits discrimination in listings, searches, messages, applications, screening, pricing, payments and housing decisions based on protected characteristics.",
};

export default function FairHousingPage() {
  return <FairHousingView />;
}
