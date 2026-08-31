export interface CityCardProps {
  name: string;
  category: string;
  roomsCount?: string;
  badgeText?: string;
  priceRange: string;
  reviewedDate: string;
  imageUrl: string;
}

export const cityData: CityCardProps[] = [
  {
    name: "Chicago, IL",
    category: "Work & Healthcare Hubs",
    roomsCount: "41 current rooms",
    priceRange: "$800-$1,500/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    imageUrl: "/images/rooms-by-city/Background (4).png",
  },
  {
    name: "Seattle, WA",
    category: "Work & Healthcare Hubs",
    roomsCount: "18 current rooms",
    priceRange: "$1,050-$1,850/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    imageUrl: "/images/rooms-by-city/Background3.png",
  },
  {
    name: "Philadelphia, PA",
    category: "University Cities",
    roomsCount: "12 current rooms",
    priceRange: "$750-$1,400/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    imageUrl: "/images/rooms-by-city/Background5.png",
  },
  {
    name: "Austin, TX",
    category: "International Destinations",
    roomsCount: "9 current rooms",
    priceRange: "$850-$1,550/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    imageUrl: "/images/rooms-by-city/Background2.png",
  },
  {
    name: "Denver, CO",
    category: "Work & Healthcare Hubs",
    badgeText: "Availability limited",
    priceRange: "$900-$1,600/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    imageUrl: "/images/rooms-by-city/Background4.png",
  },
  {
    name: "Boston, MA",
    category: "University Cities",
    roomsCount: "24 current rooms",
    priceRange: "$950-$1,650/month displayed range",
    reviewedDate: "Reviewed Jul 2026",
    imageUrl: "/images/rooms-by-city/Background6.png",
  },
];
