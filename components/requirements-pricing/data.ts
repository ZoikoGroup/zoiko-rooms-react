export const providerTypeOptions = ["Live-in provider", "Landlord", "Agent / Manager", "Authorized Sublet", "Organization / Portfolio"];
export const accountTypeOptions = ["Individual", "Organization / Team"];
export const locationOptions = ["Berlin", "Amsterdam", "Lisbon", "Nairobi"];

export const locationToCountry: Record<string, string> = {
  Berlin: "Germany",
  Amsterdam: "Netherlands",
  Lisbon: "Portugal",
  Nairobi: "Kenya",
};

export type PlanConfig = {
  monthly: number;
  includedRooms: number;
  perExtraRoom: number;
};

export const planByProviderType: Record<string, PlanConfig | null> = {
  "Live-in provider": { monthly: 19, includedRooms: 3, perExtraRoom: 7 },
  Landlord: { monthly: 29, includedRooms: 5, perExtraRoom: 7 },
  "Agent / Manager": { monthly: 49, includedRooms: 10, perExtraRoom: 6 },
  "Authorized Sublet": { monthly: 19, includedRooms: 2, perExtraRoom: 7 },
  "Organization / Portfolio": null,
};

export const LISTING_REVIEW_CHARGE = 25;
export const ENHANCED_MEDIA_REVIEW_CHARGE = 12;
export const NEW_INDIVIDUAL_PROMO_CREDIT = 10;

export const sharedRequirements = [
  {
    title: "Provider identity",
    description: "Approved identity process, status, expiry, correction, and privacy. Identity does not prove authority.",
  },
  {
    title: "Listing authority",
    description: "Ownership/control, agency instruction, occupied-home permission, or authorized-sublet scope.",
  },
  {
    title: "Room/home facts",
    description: "Location, room type, occupancy, condition, access, shared spaces, amenities, restrictions.",
  },
  {
    title: "Costs and terms",
    description: "Rent, deposit, mandatory fees, bills, totals, payment, cancellation/refund, material rules.",
  },
  {
    title: "Fair access & safety",
    description: "No unlawful exclusion or hidden screening; communication, viewing, fraud, and reporting controls.",
  },
  {
    title: "Maintenance",
    description: "Reconfirm authority, room facts, availability, costs, and relationship as they change.",
  },
];

export type ComparisonRow = {
  requirement: string;
  values: { text: string; href?: string }[];
};

export const comparisonColumns = ["Requirement", "Live-in Provider", "Landlord", "Agent / Manager", "Authorized Sublet", "Organization / Portfolio"];

export const comparisonRows: ComparisonRow[] = [
  {
    requirement: "Core authority",
    values: [
      { text: "Residence plus ownership/occupation/control and permission" },
      { text: "Ownership / control" },
      { text: "Current principal instruction and scope" },
      { text: "Primary agreement plus explicit permission and scope" },
      { text: "Organization authority, inventory source, distribution scope" },
    ],
  },
  {
    requirement: "Additional participants",
    values: [
      { text: "Joint owner/tenant where required" },
      { text: "Joint owner/controller where required" },
      { text: "Principal, team roles, subdelegation" },
      { text: "Landlord/owner permission and joint tenant where required" },
      { text: "Authorized admins, compliance, billing, approvers" },
    ],
  },
  {
    requirement: "Portfolio / team",
    values: [
      { text: "Usually single listing" },
      { text: "May route to Pro by scale" },
      { text: "Often routes to Pro" },
      { text: "Usually single/small scope" },
      { text: "Organizations/Pro by default" },
    ],
  },
  {
    requirement: "Pricing state",
    values: [
      { text: "Standard public where available" },
      { text: "Standard public where available" },
      { text: "Standard or Pro / sales-assisted" },
      { text: "Standard public where available" },
      { text: "Public Pro price where approved, or sales-assisted" },
    ],
  },
  {
    requirement: "Detail page",
    values: [
      { text: "Live-in Requirements", href: "/list-a-room/live-in-providers" },
      { text: "Landlord Requirements", href: "/list-a-room/landlords-agents" },
      { text: "Agent Requirements", href: "/list-a-room/landlords-agents" },
      { text: "Sublet Requirements", href: "/list-a-room/authorized-sublets" },
      { text: "Zoiko Rooms Pro (out of scope)" },
    ],
  },
];

export const evidenceStatuses = [
  { title: "Not started", description: "Private draft may continue; named public/transaction action blocked." },
  { title: "In progress", description: "Submission or review is active." },
  { title: "Confirmed", description: "Current evidence supports the exact scoped claim." },
  { title: "Limited", description: "Evidence supports some rooms, dates, roles, or actions." },
  { title: "Expiring / expired", description: "Evidence has a deadline or is no longer current." },
  { title: "Disputed", description: "Conflicting report/evidence exists; risky actions suppressed." },
  { title: "Restricted", description: "Safety, fraud, legal, privacy, or policy concern." },
  { title: "Needs local confirmation", description: "Platform cannot determine the requirement conclusively." },
];

export const seekerCostRows = [
  { item: "Monthly rent", display: "$1,200 per month" },
  { item: "Security deposit", display: "$1,200 due after agreement signing" },
  { item: "Required move-in fee", display: "$75 one time" },
  { item: "Bills", display: "Internet included; electricity estimated at $65/month; water estimated at $35/month" },
  { item: "Known upfront total", display: "$2,475 plus any disclosed variable utility amount" },
  { item: "Zoiko Rooms platform pricing", display: "Not included in this total — shown separately above" },
];

export const orgProRows = [
  { context: "Multiple active rooms", standard: "Standard threshold shown only if current", pro: "Zoiko Rooms Pro → Portfolio & Availability" },
  { context: "Agency team", standard: "Representative/principal authority and billing-role requirements", pro: "Pro → Compliance & Verification" },
  {
    context: "University/employer/healthcare inventory",
    standard: "Organization relationship and eligibility boundaries",
    pro: "Organizations, plus Pro where governance is needed",
  },
  { context: "Institutional distribution", standard: "Standard listing price may not apply", pro: "Pro → Institutional Distribution" },
  { context: "Negotiated contract", standard: "Public standard price remains visible where appropriate", pro: "Contract-specific price after authentication" },
];

export const priceChangePoints = [
  "Every price or requirement change has a scope, effective date, notice, and (where applicable) grandfathering for existing commitments.",
  "A saved requirements/price summary can expire — you'll be asked to refresh before relying on it again.",
  "Promotional credits show eligibility, duration, application order, and expiry before you rely on them.",
  "Zoiko Rooms never silently updates a price you've already accepted.",
];
