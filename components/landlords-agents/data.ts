export type RoleOption = {
  value: string;
  label: string;
  message: string;
  linkLabel?: string;
  linkHref?: string;
};

export const roleOptions: RoleOption[] = [
  {
    value: "owner",
    label: "I own or lawfully control the room/home",
    message: "This is the Landlord pathway — you'll confirm ownership or lawful control, then publish room facts, availability, and costs.",
  },
  {
    value: "agent",
    label: "I act for an authorized landlord or principal",
    message: "This is the Agent pathway — you'll confirm your current instruction from the principal and the exact scope you're authorized to act within.",
  },
  {
    value: "portfolio",
    label: "I manage multiple rooms or a team",
    message: "Professional breadth like this is routed to Zoiko Rooms Pro rather than a single-listing workflow.",
    linkLabel: "Explore Zoiko Rooms Pro",
    linkHref: "/pro",
  },
  {
    value: "live-in",
    label: "I live in the home instead",
    message: "Live-in Provider has its own dedicated flow, not part of this prototype.",
    linkLabel: "Go to Live-in Providers",
    linkHref: "/list-a-room/live-in-providers",
  },
  {
    value: "sublet",
    label: "I am subletting under another agreement",
    message: "Authorized Sublets has its own dedicated flow, with its own permission and scope requirements.",
    linkLabel: "Go to Authorized Sublets",
    linkHref: "/list-a-room/authorized-sublets",
  },
  {
    value: "unsure",
    label: "I am not sure which path applies",
    message: "Provider Support can help you choose the right path before you start a listing — no forced self-certification.",
    linkLabel: "Contact Provider Help",
    linkHref: "/resources",
  },
];

export const authorityChain = [
  "Principal",
  "Provider identity",
  "Ownership / control",
  "Agency instruction",
  "Room scope",
  "Permitted actions",
  "Expiry / review",
];

export const authoritySteps = [
  { number: "01", title: "Confirm the principal", description: "Identify the owner or other authorized principal and the scope of control." },
  { number: "02", title: "Confirm current instruction", description: "Show the agent role, organization, rooms, actions, dates, and expiry." },
  { number: "03", title: "Publish complete facts", description: "Room, availability, costs, terms, media, access, and maintenance." },
  { number: "04", title: "Operate fairly and safely", description: "Consistent criteria, safe viewings, controlled payments, reports, and change records." },
];

export type RequirementRow = { label: string; status: string; tone: "red" | "gray" };

export const pathwayCards = [
  {
    title: "Landlord",
    description: "Prepare ownership or lawful control, accurate room information, current availability, complete costs, and ongoing maintenance responsibility.",
    image: "/images/landlords-agents/pathway-landlord.png",
    cta: "Start as a Landlord",
    requirements: [
      { label: "Ownership / control", status: "Required", tone: "red" },
      { label: "Room & property facts", status: "Required", tone: "red" },
      { label: "Availability & costs", status: "Required", tone: "red" },
      { label: "Payment recipient", status: "Landlord by default", tone: "gray" },
    ] as RequirementRow[],
  },
  {
    title: "Authorized agent",
    description: "Show identity, organization, the authorized principal, current instruction, exact room scope, permitted actions, and expiry before acting.",
    image: "/images/landlords-agents/pathway-agent.png",
    cta: "Start as an Agent",
    requirements: [
      { label: "Principal identified", status: "Required", tone: "red" },
      { label: "Current instruction", status: "Required", tone: "red" },
      { label: "Permitted actions", status: "Scoped per action", tone: "gray" },
      { label: "Payment authority", status: "Only if explicitly granted", tone: "gray" },
    ] as RequirementRow[],
  },
];

export const proRoutingRows = [
  { need: "One or few rooms, one authorized provider", consumer: "Start a Listing can be suitable", pro: "Optional only if Pro features needed" },
  { need: "Multiple properties or rooms", consumer: "Not designed for repetitive manual work", pro: "Portfolio & Availability" },
  { need: "Multiple staff or roles", consumer: "Basic account has no governance model", pro: "Portfolio & Availability / Compliance & Verification" },
  { need: "Central applications, agreements, payments", consumer: "Not supported at consumer scale", pro: "Applications, Agreements & Payments" },
  { need: "University, employer, healthcare distribution", consumer: "No implied endorsement or program support", pro: "Institutional Distribution / Organizations" },
  { need: "System connection or sync", consumer: "No unsupported integration claim", pro: "Integrations & API" },
];

export const prepareItems = [
  "Identity",
  "Principal",
  "Authority",
  "Room facts",
  "Media",
  "Availability",
  "Costs",
  "Criteria",
  "Viewing plan",
  "Agreement / payment",
];

export const fairAccessPoints = [
  "Listing copy must not unlawfully exclude, use coded discrimination, or make unsupported neighborhood or person claims.",
  "Criteria must be necessary, lawful, declared before collection, consistently applied, and reviewable.",
  "No protected or sensitive trait inference from name, language, location, institution, employer, or messages.",
  "Every application decision resolves to a named, authorized human role — system assistance does not replace authority.",
  "Applicants can correct inaccurate information and use support or review routes without retaliation.",
];

export const securityCards = [
  {
    title: "Always protected",
    description:
      "Exact address, resident names and schedules, key or fob locations, vacant-property schedules, and access codes are never public. Disclosure is staged to approved participants at the approved point in the process.",
    image: "/images/landlords-agents/security-always-protected.png",
  },
  {
    title: "Viewing safety checklist",
    description:
      "Authorized host identified · exact location disclosed only at the approved stage · no payment or sensitive documents required merely to view · cancellation, remote option, and report/support always available.",
    image: "/images/landlords-agents/security-viewing-checklist.png",
  },
];

export const lifecycleStages = [
  "Private draft",
  "Identity / organization",
  "Principal / ownership",
  "Instruction / scope",
  "Property / room details",
  "Fairness / privacy review",
  "Preview",
  "Published",
  "Delegated / team operation",
];

export const faqs = [
  {
    question: "What does a landlord need to list a room?",
    answer:
      "Current identity, ownership or lawful control for the room/property, accurate room and availability facts, complete costs/terms, fair criteria, and safe communication/viewing/payment controls.",
  },
  {
    question: "What does an agent need?",
    answer:
      "Current identity, the authorized principal, current instruction, exact room scope, permitted actions, and expiry — before any listing or applicant-facing action.",
  },
  {
    question: "Does identity verification prove ownership or agency?",
    answer:
      "No. Confirming who you are does not prove ownership, lawful control, or agency instruction — those are checked separately, with their own evidence.",
  },
  {
    question: "Can an agent collect deposits or rent?",
    answer:
      "Only if the principal's current instruction explicitly grants payment authority. Otherwise, the named payment recipient is the landlord by default.",
  },
  {
    question: "When should I use Zoiko Rooms Pro?",
    answer:
      "When you manage multiple rooms or properties, a team with multiple roles, centralized applications or payments, or institutional distribution — professional breadth is routed to Pro rather than a single-listing workflow.",
  },
  {
    question: "What costs must be shown?",
    answer:
      "Rent, deposit, mandatory fees, bills, known totals, payment route, cancellation/refund terms, and any material rules — shown before any applicant commits.",
  },
  {
    question: "Can I choose any applicant criteria?",
    answer:
      "No. Criteria must be necessary, lawful, declared before collection, consistently applied, and reviewable — never coded discrimination or protected-trait inference.",
  },
  {
    question: "What happens when agency authority expires?",
    answer:
      "Expired, revoked, limited, or disputed authority suppresses publication and high-risk actions immediately until current instruction is reconfirmed.",
  },
];

export const calculatorProviderTypes = ["Landlord / owner", "Authorized agent"];
export const calculatorLocations = ["Berlin", "Amsterdam", "Lisbon", "Nairobi"];

export function buildRequirementsMessage(providerType: string, location: string): string {
  if (providerType === "Authorized agent") {
    return `For an **agent listing in ${location}**, you'll need: identity verification, current instruction from the authorized principal, the exact room scope and permitted actions, and — only if explicitly granted — payment authority. Licensing requirements, if any, will be shown before you publish.`;
  }
  return `For a **landlord listing in ${location}**, you'll need: identity verification, ownership or control evidence for this specific room, current room facts and photos, and a named payment recipient. Licensing requirements, if any, will be shown before you publish.`;
}

export const requirementCards = [
  { title: "Identity", description: "Confirmed once per account, reused across listings." },
  { title: "Authority", description: "Ownership/control evidence for landlords; principal instruction for agents." },
  { title: "Room details", description: "Accurate facts, current media, and availability." },
  { title: "Payment beneficiary", description: "Named recipient for any funds the platform helps process." },
  { title: "Licensing", description: "Only where the local market requires it — shown before you list." },
  { title: "Listing quality", description: "Real, current photos and facts — no stock or copied images." },
];

export const platformCostRows = [
  { item: "Standard listing", display: "Free" },
  { item: "Success fee (charged only once a room is rented)", display: "Disclosed before publishing, varies by market" },
  { item: "Optional listing promotion", display: "Disclosed at the point of purchase" },
  { item: "Zoiko Rooms Pro (multiple rooms / teams)", display: "See Zoiko Rooms Pro for current plans" },
];
