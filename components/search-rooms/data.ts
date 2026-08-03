export type Tone = "green" | "amber" | "teal" | "gray" | "red";

export type Room = {
  id: string;
  price: number;
  priceNote: string;
  title: string;
  facts: string;
  statusLabel: string;
  statusTone: Tone;
  evidenceLabel: string;
  evidenceTone: Tone;
  tags: string[];
  stayLength: "1-3" | "3-6" | "6-12" | "12+";
  accessible: boolean;
  image: string;
};

export const rooms: Room[] = [
  {
    id: "green-line",
    price: 1200,
    priceNote: "$45 estimated utilities",
    title: "Furnished private room near Green Line",
    facts: "Private room · Furnished · 0.4 mi to transit",
    statusLabel: "Available · confirmed today",
    statusTone: "green",
    evidenceLabel: "Live-in provider authority confirmed",
    evidenceTone: "green",
    tags: ["furnished", "live-in-provider", "near-transit"],
    stayLength: "3-6",
    accessible: false,
    image: "/images/search-rooms/room-green-line.jpg",
  },
  {
    id: "step-free-home",
    price: 1350,
    priceNote: "bills included",
    title: "Private room, step-free home",
    facts: "Private room · Furnished · 0.4 mi to transit",
    statusLabel: "Availability to confirm · last checked 4 days ago",
    statusTone: "amber",
    evidenceLabel: "Landlord identity confirmed; ownership evidence reviewed",
    evidenceTone: "amber",
    tags: ["furnished", "bills-included", "step-free", "near-transit"],
    stayLength: "3-6",
    accessible: true,
    image: "/images/search-rooms/room-step-free-home.jpg",
  },
  {
    id: "university-shuttle",
    price: 980,
    priceNote: "$980 deposit",
    title: "Room near university shuttle",
    facts: "Private room · Furnished · 0.4 mi to transit",
    statusLabel: "Application in progress",
    statusTone: "gray",
    evidenceLabel: "Authorized agent · instruction valid through Dec 2026",
    evidenceTone: "gray",
    tags: ["furnished", "near-transit"],
    stayLength: "6-12",
    accessible: false,
    image: "/images/search-rooms/room-university-shuttle.jpg",
  },
  {
    id: "riverside-loft",
    price: 1450,
    priceNote: "$60 estimated utilities",
    title: "Bright loft room near Riverside",
    facts: "Private room · Furnished · 0.6 mi to transit",
    statusLabel: "Available · confirmed today",
    statusTone: "green",
    evidenceLabel: "Document verified · ownership evidence reviewed",
    evidenceTone: "green",
    tags: ["furnished", "live-in-provider"],
    stayLength: "6-12",
    accessible: true,
    image: "/images/search-rooms/room-riverside-loft.jpg",
  },
  {
    id: "harbor-view",
    price: 1600,
    priceNote: "bills included",
    title: "Harbor-view room, step-free access",
    facts: "Private room · Furnished · 0.2 mi to transit",
    statusLabel: "Availability to confirm · last checked 2 days ago",
    statusTone: "amber",
    evidenceLabel: "Provider declared · not yet inspected",
    evidenceTone: "amber",
    tags: ["furnished", "bills-included", "step-free", "near-transit"],
    stayLength: "12+",
    accessible: true,
    image: "/images/search-rooms/room-harbor-view.jpg",
  },
  {
    id: "quiet-street",
    price: 850,
    priceNote: "$30 estimated utilities",
    title: "Quiet street room, live-in provider",
    facts: "Private room · Unfurnished · 0.9 mi to transit",
    statusLabel: "Available · confirmed today",
    statusTone: "green",
    evidenceLabel: "Live-in provider authority confirmed",
    evidenceTone: "green",
    tags: ["live-in-provider"],
    stayLength: "1-3",
    accessible: false,
    image: "/images/search-rooms/room-quiet-street.jpg",
  },
  {
    id: "midtown-studio",
    price: 1750,
    priceNote: "bills included",
    title: "Midtown room with private entrance",
    facts: "Private room · Furnished · 0.3 mi to transit",
    statusLabel: "Reserved",
    statusTone: "gray",
    evidenceLabel: "Landlord identity confirmed",
    evidenceTone: "gray",
    tags: ["furnished", "bills-included", "near-transit"],
    stayLength: "12+",
    accessible: false,
    image: "/images/search-rooms/room-midtown-studio.jpg",
  },
  {
    id: "east-side-house",
    price: 990,
    priceNote: "$40 estimated utilities",
    title: "Shared house room, east side",
    facts: "Private room · Furnished · 0.7 mi to transit",
    statusLabel: "Availability to confirm · last checked 1 day ago",
    statusTone: "amber",
    evidenceLabel: "Provider declared · not yet inspected",
    evidenceTone: "amber",
    tags: ["furnished"],
    stayLength: "1-3",
    accessible: false,
    image: "/images/search-rooms/room-east-side-house.jpg",
  },
  {
    id: "campus-north",
    price: 1100,
    priceNote: "$35 estimated utilities",
    title: "Room near campus north, step-free",
    facts: "Private room · Furnished · 0.5 mi to transit",
    statusLabel: "Available · confirmed today",
    statusTone: "green",
    evidenceLabel: "Document verified · ownership evidence reviewed",
    evidenceTone: "green",
    tags: ["furnished", "step-free", "near-transit"],
    stayLength: "3-6",
    accessible: true,
    image: "/images/search-rooms/room-campus-north.jpg",
  },
];

export const quickFilters = [
  { key: "furnished", label: "Furnished" },
  { key: "bills-included", label: "Bills Included" },
  { key: "step-free", label: "Step-free access" },
  { key: "live-in-provider", label: "Live-in provider" },
  { key: "near-transit", label: "0.5 mi to transit" },
];

export const budgetOptions = [
  { key: "any", label: "Any budget", range: null as [number, number] | null },
  { key: "600-1000", label: "$600 – $1,000", range: [600, 1000] as [number, number] },
  { key: "800-1400", label: "$800 – $1,400", range: [800, 1400] as [number, number] },
  { key: "1000-1600", label: "$1,000 – $1,600", range: [1000, 1600] as [number, number] },
  { key: "1400-2000", label: "$1,400 – $2,000", range: [1400, 2000] as [number, number] },
];

export const stayLengthOptions = [
  { key: "any", label: "Any stay length" },
  { key: "1-3", label: "1–3 months" },
  { key: "3-6", label: "3–6 months" },
  { key: "6-12", label: "6–12 months" },
  { key: "12+", label: "12+ months" },
];

export const sortOptions = [
  { key: "recommended", label: "Sort: Recommended" },
  { key: "price-asc", label: "Sort: Price, low to high" },
  { key: "price-desc", label: "Sort: Price, high to low" },
];
