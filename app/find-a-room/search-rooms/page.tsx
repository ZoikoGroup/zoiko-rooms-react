import type { Metadata } from "next";
import { SearchRoomsView } from "@/components/search-rooms";

export const metadata: Metadata = {
  title: "Search Rooms for Rent | Zoiko Rooms",
  description:
    "Search rooms for rent with Zoiko Rooms. Find verified private rooms, compare prices, availability, locations and key rental details to choose confidently.",
};

export default function SearchRoomsPage() {
  return <SearchRoomsView />;
}
