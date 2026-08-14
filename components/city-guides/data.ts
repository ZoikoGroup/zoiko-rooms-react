export type CityKey = "berlin" | "amsterdam" | "lisbon" | "tokyo" | "nairobi";
export type CityStatus = "current" | "due";
export type Audience = "student" | "work" | "international";

export type CityCostRow = { label: string; value: string };

export type City = {
  key: CityKey;
  name: string;
  country: string;
  reviewed: string;
  // Lower = reviewed more recently — powers the "Recently reviewed" sort.
  reviewedRank: number;
  status: CityStatus;
  audiences: Audience[];
  image: string;
  summary: string;
  overview: string;
  basics: string[];
  costs: CityCostRow[];
  transport: string;
  international: string;
  accessibility: string;
  safety: string[];
  sources: string;
};

export const cities: City[] = [
  {
    key: "berlin",
    name: "Berlin",
    country: "Germany",
    reviewed: "Reviewed 3 weeks ago",
    reviewedRank: 3,
    status: "current",
    audiences: ["student", "work", "international"],
    image: "/images/city-guides/berlin.png",
    summary:
      "Covers Berlin city proper and inner districts, sourced from official tenant and city registration guidance.",
    overview:
      "This guide covers room rentals of 30+ nights in Berlin, Germany, for general seekers, students, and international arrivals. It explains local terminology, typical costs in EUR, transport context, and common scam patterns. It does not confirm current room availability, legal rights, or safety — for that, use current Zoiko Rooms discovery or local official sources.",
    basics: [
      "Search by district (Bezirk) and neighborhood (Kiez), not just \"Berlin\" broadly.",
      "Viewings (Besichtigung) are typically arranged directly with the provider or agent.",
      "A rental application (Mieterselbstauskunft) usually includes income proof and ID.",
      "Agreements (Mietvertrag) should be reviewed in full before any deposit is paid.",
      "Registration at your new address (Anmeldung) is a separate city administrative step.",
      "Move-in condition should be documented in a handover protocol (Übergabeprotokoll).",
    ],
    costs: [
      { label: "Monthly room rent (Kaltmiete + Nebenkosten)", value: "€650–950 / mo" },
      { label: "Security deposit (Kaution)", value: "Up to 3x cold rent" },
      { label: "Registration fee", value: "Free (city service)" },
      { label: "Estimated utilities", value: "€120–180 / mo" },
      { label: "Agency fee (if applicable)", value: "Varies, disclosed upfront" },
    ],
    transport:
      "Berlin's BVG network (U-Bahn, S-Bahn, tram, bus) covers most districts. Guides describe transit zones (A, B, C) and typical journey-time ranges by source, not guaranteed commute times.",
    international:
      "Remote viewing is common for international arrivals. Original currency (EUR) is preserved throughout; any USD estimate shown elsewhere is clearly labeled and dated. Address registration (Anmeldung) is required within 14 days of moving in under German law — confirm current requirements with the local Bürgeramt.",
    accessibility:
      "This guide is available in English and German, with a machine-translation option for other languages clearly labeled. A list-based alternative to any map view is available.",
    safety: [
      "Common pattern: requests to wire a deposit before any viewing has taken place.",
      "Common pattern: providers who refuse a video call or accompanied viewing.",
      "Common pattern: listings priced well below comparable rooms in the same district.",
    ],
    sources:
      "Sources: Berlin.de official tenant resources, BVG public transit data, and Zoiko Rooms provider records. Last reviewed 3 weeks ago.",
  },
  {
    key: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    reviewed: "Reviewed 1 month ago",
    reviewedRank: 4,
    status: "current",
    audiences: ["student", "international"],
    image: "/images/city-guides/amsterdam.png",
    summary: "Covers Amsterdam and immediate metropolitan area, with a focus on student and international rentals.",
    overview:
      "This guide covers room rentals in Amsterdam, Netherlands, with particular attention to the student and international-arrival journey given the city's competitive rental market. It explains registration requirements, typical costs in EUR, and canal-city-specific transport and access notes.",
    basics: [
      "Search broadly across Amsterdam and neighboring municipalities — inventory within the city center is limited.",
      "A room offer (kamer) may require a guarantor (borg) depending on the provider.",
      "Housing permits (huisvestingsvergunning) apply to some social housing, not private rentals.",
      "Always request a written agreement before transferring any deposit.",
      "Municipal registration (BRP) is required for any stay over 4 months.",
    ],
    costs: [
      { label: "Monthly room rent", value: "€700–1,100 / mo" },
      { label: "Security deposit", value: "1–2 months' rent" },
      { label: "Registration (BRP)", value: "Free (city service)" },
      { label: "Estimated utilities", value: "€100–160 / mo" },
    ],
    transport:
      "GVB trams, buses, and metro cover the city; many residents also cycle. Canal-adjacent buildings may have specific access notes (narrow stairs, no elevator) — guides list these as sourced facts, not suitability claims.",
    international:
      "High demand means most international arrivals rely on remote viewing and early applications. Original currency (EUR) is preserved. Registering your address at the Gemeente Amsterdam is a required administrative step, separate from any Zoiko Rooms agreement.",
    accessibility:
      "Available in English and Dutch. Many canal houses have limited step-free access — this guide lists specific access facts per listing rather than a blanket accessibility rating.",
    safety: [
      "Common pattern: \"too good to be true\" prices given the competitive market.",
      "Common pattern: requests to pay before a real viewing (in person or video) has occurred.",
      "Common pattern: fake agency fees not disclosed upfront.",
    ],
    sources:
      "Sources: Gemeente Amsterdam housing resources, GVB transit data, and Zoiko Rooms provider records. Last reviewed 1 month ago.",
  },
  {
    key: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    reviewed: "Reviewed 2 months ago",
    reviewedRank: 8,
    status: "due",
    audiences: ["student", "work", "international"],
    image: "/images/city-guides/lisbon.png",
    summary: "Covers central Lisbon and nearby districts; a review is currently due for this guide.",
    overview:
      "This guide covers room rentals in Lisbon, Portugal, including hillside neighborhoods with distinct transport and access considerations. This guide is currently flagged review due — some figures may be out of date pending the next scheduled review.",
    basics: [
      "Search by freguesia (parish/district) — Lisbon's neighborhoods vary widely by hill and proximity to the river.",
      "A rental agreement (contrato de arrendamento) should specify duration and renewal terms clearly.",
      "Tax identification (NIF) is commonly requested by providers before an agreement is signed.",
      "Deposits are typically 1–2 months' rent, refundable per the agreement terms.",
    ],
    costs: [
      { label: "Monthly room rent", value: "€450–750 / mo" },
      { label: "Security deposit", value: "1–2 months' rent" },
      { label: "Estimated utilities", value: "€80–130 / mo" },
    ],
    transport:
      "Lisbon's Metro, trams (including the historic Line 28), buses, and funiculars serve the city's hilly terrain. Steep streets in some districts may affect step-free access — noted per listing, not generalized.",
    international:
      "Remote viewing is available for most listings. Original currency (EUR) is preserved. A NIF (tax number) is commonly needed for an agreement — this guide explains the general process but does not process NIF applications.",
    accessibility:
      "Available in English and Portuguese. Hilly terrain in districts like Alfama means step-free access varies significantly by building — check specific listing facts.",
    safety: [
      "Common pattern: deposit requests via informal payment apps with no traceable recipient.",
      "Common pattern: listings that disappear and reappear under a different provider name.",
      "This guide is due for review — verify current details against live Zoiko Rooms records.",
    ],
    sources:
      "Sources: Câmara Municipal de Lisboa resources, Carris/Metro transit data, and Zoiko Rooms provider records. Last reviewed 2 months ago — review due.",
  },
  {
    key: "tokyo",
    name: "Tokyo",
    country: "Japan",
    reviewed: "Reviewed 5 weeks ago",
    reviewedRank: 5,
    status: "current",
    audiences: ["work", "international"],
    image: "/images/city-guides/tokyo.png",
    summary: "Covers central Tokyo wards, with guarantor and key-money terminology explained for international renters.",
    overview:
      "This guide covers room rentals across Tokyo's wards (ku), with particular attention to terminology that's unfamiliar to many international renters, such as key money and guarantor requirements.",
    basics: [
      "Search by ward (ku) and nearest train line/station — commute is usually described relative to stations.",
      "Key money (reikin) is a non-refundable gift to the landlord, distinct from the deposit (shikikin).",
      "A guarantor (hoshōnin) or guarantor company is commonly required for an agreement.",
      "Move-in condition should be documented, as deposit deductions for wear are common practice.",
    ],
    costs: [
      { label: "Monthly room rent", value: "¥85,000–140,000 / mo" },
      { label: "Security deposit (shikikin)", value: "1–2 months' rent" },
      { label: "Key money (reikin)", value: "0–2 months' rent, non-refundable" },
      { label: "Guarantor company fee", value: "Varies, disclosed upfront" },
    ],
    transport:
      "Tokyo's rail network (JR, subway, private lines) is extensive; guides describe proximity to stations and typical line transfers, sourced from public transit data.",
    international:
      "Remote viewing and guarantor-company services are common routes for international arrivals without a local guarantor. Original currency (JPY) is preserved throughout.",
    accessibility:
      "Available in English and Japanese. Many older buildings have limited elevator access — specific facts are listed per building rather than assumed.",
    safety: [
      "Common pattern: requests for key money or deposit before any contract has been reviewed.",
      "Common pattern: guarantor-company impersonation requesting payment outside official channels.",
      "Common pattern: listings advertising unusually low rent with no guarantor requirement at all.",
    ],
    sources:
      "Sources: Tokyo Metropolitan Government housing resources, public rail transit data, and Zoiko Rooms provider records. Last reviewed 5 weeks ago.",
  },
  {
    key: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    reviewed: "Reviewed 2 weeks ago",
    reviewedRank: 2,
    status: "current",
    audiences: ["work", "student", "international"],
    image: "/images/city-guides/nairobi.png",
    summary: "Covers Nairobi's central business district and surrounding residential areas.",
    overview:
      "This guide covers room rentals in Nairobi, Kenya, including terminology and payment conventions common across the city's residential neighborhoods.",
    basics: [
      "Search by estate or neighborhood name — Nairobi listings are usually organized this way rather than by postal code.",
      "A written agreement should specify rent, deposit, and notice period clearly.",
      "Deposits are commonly 1 month's rent, refundable per the agreement.",
      "Service charges for shared buildings are often billed separately from rent.",
    ],
    costs: [
      { label: "Monthly room rent", value: "KES 15,000–35,000 / mo" },
      { label: "Security deposit", value: "1 month's rent" },
      { label: "Service charge (if applicable)", value: "Disclosed upfront" },
    ],
    transport:
      "Nairobi's matatu network, buses, and ride-hailing services serve most neighborhoods; guides describe general access context sourced from public transit information, not guaranteed commute times.",
    international:
      "Remote viewing is available for many listings. Original currency (KES) is preserved throughout; any USD estimate is clearly labeled and dated.",
    accessibility: "Available in English and Swahili. Step-free access varies by building age and is listed per specific property.",
    safety: [
      "Common pattern: requests to pay a deposit via mobile money to a personal, unverified number.",
      "Common pattern: providers who discourage an in-person or video viewing before payment.",
      "Common pattern: listings duplicated across multiple platforms with different contact details.",
    ],
    sources:
      "Sources: Nairobi City County resources, public transit information, and Zoiko Rooms provider records. Last reviewed 2 weeks ago.",
  },
];

export const cityTabs = [
  { key: "overview", label: "Overview" },
  { key: "basics", label: "Rental Basics" },
  { key: "costs", label: "Costs" },
  { key: "transport", label: "Transport" },
  { key: "international", label: "International" },
  { key: "accessibility", label: "Accessibility" },
  { key: "safety", label: "Safety" },
] as const;

export type CityTabKey = (typeof cityTabs)[number]["key"];
