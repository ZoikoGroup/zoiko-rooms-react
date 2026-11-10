import type { Metadata } from "next";
import {
  RoomHero,
  RoomPricing,
  VerifiedRenting,
  FeaturedRooms,
  RoomFaqCta,
} from "@/components/black-friday";

export const metadata: Metadata = {
  title: "Black Friday Rooms: Save 20% | Zoiko Rooms",
  description:
    "Save 20% on eligible room bookings and selected plans this Black Friday at Zoiko Rooms. Find verified private rooms for stays of 30+ nights.",
};

export default function BlackFridayPage() {
  return (
    <main>
      <RoomHero />
      <RoomPricing />
      <VerifiedRenting />
      <FeaturedRooms />
      <RoomFaqCta />
    </main>
  );
}
