import {
  RoomHero,
  RoomPricing,
  VerifiedRenting,
  FeaturedRooms,
  RoomFaqCta,
} from "@/components/black-friday";

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
