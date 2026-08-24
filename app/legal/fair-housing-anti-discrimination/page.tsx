import type { Metadata } from "next";
import { FairHousingView } from "@/components/fair-housing";

export const metadata: Metadata = {
  title: "Fair Housing & Anti-Discrimination Policy | Zoiko Rooms",
  description:
    "Read Zoiko Rooms fair housing policy and learn how we promote equal opportunities and help prevent discrimination across accommodation and housing services.",
};

export default function FairHousingPage() {
  return <FairHousingView />;
}
