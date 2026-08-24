import type { Metadata } from "next";
import { CityGuidesView } from "@/components/city-guides";

export const metadata: Metadata = {
  title: "City Guides and Room Rental Tips | Zoiko Rooms",
  description:
    "Plan your room search with Zoiko Rooms city guides covering rental processes, cost categories, transport context, scam warnings and local rental routes.",
};

export default function CityGuidesPage() {
  return <CityGuidesView />;
}
