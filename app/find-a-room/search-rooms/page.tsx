import type { Metadata } from "next";
import { SearchRoomsView } from "@/components/search-rooms";

export const metadata: Metadata = {
  title: "Search Rooms — Zoiko Rooms",
  description:
    "Filter current room listings by location, move-in date, monthly budget, stay length, and accessibility, then sort and compare in list, map, or split view.",
};

export default function SearchRoomsPage() {
  return <SearchRoomsView />;
}
