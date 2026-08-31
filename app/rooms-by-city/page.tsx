import type { Metadata } from "next";

import { RoomsByCityView } from "@/components/rooms-by-city";

export const metadata: Metadata = {
  title: "Find Affordable Rooms by City | Zoiko Rooms",
  description:
    "Find affordable rooms by city with Zoiko Rooms. Explore available rooms, prices, dates, neighborhoods and practical rental details to find the right room.",
};

export default function Page() {
  return <RoomsByCityView />;
}
