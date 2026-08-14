export const rightPathPoints = [
  "You hold a current primary occupancy or tenancy arrangement",
  "You have permission to offer this room",
  "The permission covers the proposed dates and occupancy",
  "The proposed costs and conditions are within the permitted scope",
];

export const boundarySteps = [
  { number: "01", title: "Confirm the authority chain", description: "Primary agreement, permission source, scope, dates, conditions, and expiry." },
  { number: "02", title: "Match the listing to permission", description: "Room, occupancy, rent, fees, stay, and use cannot exceed the approved scope." },
  { number: "03", title: "Protect documents and residents", description: "Private agreements and personal details remain controlled." },
  { number: "04", title: "Publish fairly and safely", description: "Complete costs, lawful criteria, safe viewings, payment, reports, and support." },
];

export const authorizationLifecycleStages = ["Prepare", "Verify primary arrangement", "Confirm permission", "Match scope", "Disclose costs", "Review", "Publish", "Reconfirm"];

export const mismatchRows = [
  { mismatch: "Listing dates exceed permission", response: "Block submission; show authorized range" },
  { mismatch: "Room differs from permission", response: "Block; review room and evidence" },
  { mismatch: "Occupancy exceeds permitted count", response: "Block and correct" },
  { mismatch: "Rent/fee exceeds cap or permitted formula", response: "Block; require corrected cost and evidence" },
  { mismatch: "Permission expired, revoked, or disputed", response: "Pause listing and affected actions immediately" },
];

export const prepareItems = ["Primary agreement", "Permission", "Room & dates", "Occupancy", "Price & fees", "Availability", "Media", "Agreement / payment"];

export type CostRow = { item: string; display: string };

export const locationOptions = ["Berlin", "Amsterdam", "Lisbon", "Nairobi"];

export const costDisclosuresByLocation: Record<string, CostRow[]> = {
  Berlin: [
    { item: "Monthly sublet rent", display: "$950 per month" },
    { item: "Security deposit", display: "$950 due after agreement signing" },
    { item: "Required administration fee", display: "$25 one time" },
    { item: "Bills", display: "Internet included; electricity estimated at $55/month; water estimated at $30/month" },
    { item: "Known upfront total", display: "$1,925 plus any disclosed variable utility amount" },
    { item: "Known monthly total", display: "$1,035 estimated, including listed utilities" },
  ],
  Amsterdam: [
    { item: "Monthly sublet rent", display: "$1,050 per month" },
    { item: "Security deposit", display: "$1,050 due after agreement signing" },
    { item: "Required administration fee", display: "$30 one time" },
    { item: "Bills", display: "Internet included; electricity estimated at $60/month; water estimated at $30/month" },
    { item: "Known upfront total", display: "$2,130 plus any disclosed variable utility amount" },
    { item: "Known monthly total", display: "$1,140 estimated, including listed utilities" },
  ],
  Lisbon: [
    { item: "Monthly sublet rent", display: "$650 per month" },
    { item: "Security deposit", display: "$650 due after agreement signing" },
    { item: "Required administration fee", display: "$20 one time" },
    { item: "Bills", display: "Internet included; electricity estimated at $40/month; water estimated at $20/month" },
    { item: "Known upfront total", display: "$1,320 plus any disclosed variable utility amount" },
    { item: "Known monthly total", display: "$710 estimated, including listed utilities" },
  ],
  Nairobi: [
    { item: "Monthly sublet rent", display: "$300 per month" },
    { item: "Security deposit", display: "$300 due after agreement signing" },
    { item: "Required administration fee", display: "$10 one time" },
    { item: "Bills", display: "Internet not included; electricity estimated at $22/month; water estimated at $9/month" },
    { item: "Known upfront total", display: "$610 plus any disclosed variable utility amount" },
    { item: "Known monthly total", display: "$331 estimated, including listed utilities" },
  ],
};

export const privacyCards = [
  {
    title: "Never public",
    description:
      "Primary agreements, permission letters, landlord/owner contact details, co-tenant identities, signatures, and bank details never appear in listing content, previews, or exports.",
    image: "/images/authorized-sublets/privacy-never-public.png",
  },
  {
    title: "Scoped public status",
    description:
      "“Permission reviewed for Room A from Sep 1 through Dec 31, 2026, for one occupant.” A specific, dated, limited claim — never “fully approved” or “landlord verified” without exact current evidence.",
    image: "/images/authorized-sublets/privacy-scoped-status.png",
  },
];

export const fairAccessPoints = [
  "Listing language must not unlawfully exclude, use coded discrimination, or make demeaning descriptions.",
  "Only current, lawful, necessary conditions may be displayed — provider preferences cannot be presented as if they came from the landlord or owner.",
  "No sensitive-trait inference from name, language, documents, institution, employer, healthcare location, messages, or behavior.",
  "Consequential applicant decisions remain with an authorized human role under the approved fairness model.",
];

export const viewingHandoverPoints = [
  "Viewings use a scheduled time, an identified host, and staged disclosure.",
  "Key or access handover is recorded, with no public codes or access details.",
  "A named local contact is disclosed for access, urgent issues, and handback — without exposing exact absence schedules.",
  "Handback includes a condition review, cleaning terms, bill reconciliation, and a clear deposit/refund route.",
];

export const lifecycleStages = [
  "Path confirmed",
  "Private draft",
  "Primary arrangement in progress",
  "Permission in progress",
  "Scope matching",
  "Fairness / privacy review",
  "Preview",
  "Published",
];

export const faqs = [
  {
    question: "What is an authorized sublet?",
    answer:
      "A room offered by a lawful occupier under a current primary arrangement and explicit permission covering the room, dates, occupancy, costs, use, and conditions.",
  },
  {
    question: "Does having a lease mean I can sublet?",
    answer:
      "No. A lease alone does not prove permission — explicit sublet permission from the landlord or owner, covering the exact room, dates, and terms, must be confirmed separately.",
  },
  {
    question: "What proof do I need?",
    answer:
      "Your current primary agreement and explicit permission evidence — showing the permitted room, date range, occupancy, price or fee limits, conditions, and expiry.",
  },
  {
    question: "Can I charge more than my rent?",
    answer:
      "Only within any markup cap or formula stated in your permission. Rent, markup, and fees that exceed the permitted scope are blocked and require corrected cost and evidence.",
  },
  {
    question: "Can the sublet continue after my agreement ends?",
    answer:
      "No. A primary-agreement change or expiry pauses the listing and any affected actions immediately — continuing requires new permission, not an assumption the old scope continues.",
  },
  {
    question: "What if permission is revoked?",
    answer:
      "The listing and any affected actions are paused immediately. Publication resumes only once current, valid permission is reconfirmed.",
  },
  {
    question: "Should I publish my lease or landlord details?",
    answer:
      "No. Primary agreements, permission letters, and landlord/owner contact details never appear in listing content, previews, or exports — only a scoped, dated public status is shown.",
  },
  {
    question: "Does Zoiko Rooms guarantee the sublet is legal?",
    answer:
      "No. Zoiko Rooms confirms the permission evidence you provide and matches the listing to its scope — it does not guarantee legality under local law, which remains your responsibility.",
  },
];
