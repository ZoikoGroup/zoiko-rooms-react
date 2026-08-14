import type { Metadata } from "next";
import { CityGuidesView } from "@/components/city-guides";

export const metadata: Metadata = {
  title: "City Guides — Zoiko Rooms",
  description:
    "Sourced local context for the room-rental journey — terminology, costs, transport, international arrivals, and scam warnings, city by city.",
};

export default function CityGuidesPage() {
  return <CityGuidesView />;
}
