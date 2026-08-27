import type { GuideStatus } from "./shared";

export const roleFilters = ["All", "Room Seeker", "Provider", "Organization", "Zoiko Rooms Pro", "Representative"];

export const topicFilters = ["All", "Costs", "Agreement", "Payment", "Safety", "Accessibility"];

export type GuideStep = {
  title: string;
  description: string;
};

export type Guide = {
  key: string;
  status: GuideStatus;
  title: string;
  role: string;
  stage: string;
  format: string;
  duration: string;
  description: string;
  image: string;
  subtitle: string;
  audience: string;
  beforeYouStart: string;
  safetyWarning: string;
  whatYouWillDo: string;
  steps: GuideStep[];
  decisionPoints: string;
  currentRecordHandoff: string;
  ifSomethingChanges: string;
  errorsRecovery: string;
  checklist: string[];
  sourcesReview: string;
};

export const guides: Guide[] = [
  {
    key: "review-room-agreement",
    status: "current",
    title: "How to review a room agreement before signing",
    role: "Room Seeker",
    stage: "Agree",
    format: "Step-by-Step",
    duration: "~7 min",
    description: "Applies to individually rented rooms; not a substitute for legal advice.",
    image: "/images/guides/guide-review-room-agreement.png",
    subtitle:
      "Before you sign, confirm the parties, the exact room, the term, every cost and the cancellation terms match what you were shown during search and viewing.",
    audience: "Room seekers who have received a draft agreement from a provider or agent.",
    beforeYouStart: "Have the draft agreement, the original listing, and your application on hand for comparison.",
    safetyWarning: "Never sign or pay based on a verbal promise that isn't reflected in the written agreement.",
    whatYouWillDo: "Compare the agreement line by line against the listing and your application, flag mismatches, and confirm before signing.",
    steps: [
      { title: "Confirm the parties", description: "Check that the signing party matches the confirmed provider identity and authority status." },
      { title: "Confirm the room and address", description: "Match the agreement's room description and address to the Room Passport." },
      { title: "Confirm dates and term", description: "Check move-in, move-out, and any renewal or notice terms." },
      { title: "Confirm every cost", description: "Rent, deposit, fees, and bills should match the listing exactly." },
      { title: "Confirm cancellation and refund terms", description: "Know what happens if either party needs to exit early." },
    ],
    decisionPoints: "If anything doesn't match, don't sign — ask the provider to correct the agreement or the listing first.",
    currentRecordHandoff: "Your current application and agreement status always come from your live Zoiko Rooms account, not this guide.",
    ifSomethingChanges: "If the provider sends a revised agreement, repeat this check against the new version before signing.",
    errorsRecovery: "If the provider won't correct a mismatch, use Report a Concern rather than signing anyway.",
    checklist: ["Parties match", "Room and address match", "Dates and term confirmed", "All costs itemized and correct", "Cancellation terms understood"],
    sourcesReview: "Owned by Zoiko Rooms Content · Current · applicability: Applies to individually rented rooms; not a substitute for legal advice.",
  },
  {
    key: "room-passport-publication",
    status: "updated",
    title: "Preparing your Room Passport for publication",
    role: "Provider",
    stage: "Prepare",
    format: "Checklist",
    duration: "~10 min",
    description: "Evidence requirements vary by provider path and market.",
    image: "/images/guides/guide-room-passport-publication.png",
    subtitle:
      "A complete Room Passport needs accurate room facts, current media, and the evidence tier for each field before it can be reviewed for publication.",
    audience: "Landlords, agents, live-in providers, and authorized sublets starting a new listing.",
    beforeYouStart: "Confirm your provider path (landlord, agent, live-in, or sublet) since it determines which authority evidence you'll need.",
    safetyWarning: "Never publish a room you don't currently have authority to offer, even temporarily.",
    whatYouWillDo: "Enter room facts, upload current photos, and tag each field with its evidence level.",
    steps: [
      { title: "Enter room facts", description: "Type, dimensions, furnishing, and household composition." },
      { title: "Upload current media", description: "Room, window and lock, bathroom, and building entrance photos." },
      { title: "Tag evidence levels", description: "Mark each field as declared, documented, or inspected honestly." },
      { title: "Submit for review", description: "Zoiko Rooms checks authority evidence before anything goes public." },
    ],
    decisionPoints: "If you're unsure which evidence tier applies, use the lower tier — overstating evidence is a policy violation.",
    currentRecordHandoff: "Your listing's current review status always comes from your live provider dashboard, not this guide.",
    ifSomethingChanges: "If your authority evidence expires or changes, update it immediately — published listings can be paused otherwise.",
    errorsRecovery: "If review flags an issue, the dashboard names the exact field to correct.",
    checklist: ["Room facts complete", "Current media uploaded", "Evidence tiers tagged", "Authority evidence current"],
    sourcesReview: "Owned by Zoiko Rooms Content · Updated · applicability: Evidence requirements vary by provider path and market.",
  },
  {
    key: "confirm-payment-recipient",
    status: "review-due",
    title: "Confirming a payment recipient before you pay",
    role: "Room Seeker",
    stage: "Pay",
    format: "Decision guide",
    duration: "~5 min",
    description: "Content is under scheduled review; verify current payment routes in your live record.",
    image: "/images/guides/guide-confirm-payment-recipient.png",
    subtitle:
      "Confirm the exact recipient, amount, and route in your current agreement before authorizing any payment — a message alone is never sufficient authority.",
    audience: "Room seekers about to pay a deposit, rent, or fee.",
    beforeYouStart: "Have your signed agreement and the payment request side by side.",
    safetyWarning: "A new recipient or bank details sent only in a message is a red flag — stop and verify independently.",
    whatYouWillDo: "Cross-check the payment request against your agreement's stated recipient, amount, and route.",
    steps: [
      { title: "Match the recipient", description: "Name and account should match what's in your signed agreement." },
      { title: "Match the amount", description: "Confirm it equals the agreed rent, deposit, or fee — not more." },
      { title: "Confirm the route", description: "Use only the approved payment method stated in your agreement." },
      { title: "Keep the receipt", description: "Save confirmation for every payment you make." },
    ],
    decisionPoints: "If anything doesn't match, don't pay — verify through your live account or contact support first.",
    currentRecordHandoff: "Your current payment status and approved routes always come from your live account record.",
    ifSomethingChanges: "If a recipient change is requested, treat it as high-risk and verify through an approved channel before paying.",
    errorsRecovery: "If you already paid an unverified recipient, report it immediately — time matters for recovery.",
    checklist: ["Recipient matches agreement", "Amount matches agreement", "Route is the approved one", "Receipt saved"],
    sourcesReview: "Owned by Zoiko Rooms Content · Review Due · applicability: Content is under scheduled review; verify current payment routes in your live record.",
  },
  {
    key: "referral-program-eligibility",
    status: "current",
    title: "Setting eligibility criteria for a referral program",
    role: "Organization",
    stage: "Prepare",
    format: "Playbook",
    duration: "~12 min",
    description: "Criteria must comply with your organization's own governance and applicable law.",
    image: "/images/guides/guide-referral-program-eligibility.png",
    subtitle:
      "Eligibility criteria must be declared, lawful, and owned by a named authorized role — never inferred from protected traits or behavior.",
    audience: "Organization administrators setting up a new referral or allocation program.",
    beforeYouStart: "Identify the named authorized role who will own eligibility decisions before configuring criteria.",
    safetyWarning: "Never configure criteria that could infer protected traits, health status, or immigration status.",
    whatYouWillDo: "Define declared criteria, assign a decision owner, and document the review/appeal route.",
    steps: [
      { title: "Define criteria", description: "State exactly what qualifies a participant — no vague or inferred rules." },
      { title: "Assign a decision owner", description: "A named human role, not an automated score." },
      { title: "Document review/appeal", description: "Give participants a way to correct information or challenge a decision." },
      { title: "Publish the program", description: "Make criteria visible to eligible participants before they apply." },
    ],
    decisionPoints: "If a criterion could act as a proxy for a protected trait, remove it before publishing.",
    currentRecordHandoff: "Current program status and participant applications live in your organization dashboard, not this guide.",
    ifSomethingChanges: "Material criteria changes should be logged and communicated to anyone with a pending application.",
    errorsRecovery: "If Zoiko Rooms flags a criterion as high-risk, review it with your own legal/compliance function before proceeding.",
    checklist: ["Criteria declared and specific", "Decision owner named", "Review/appeal route documented", "No protected-trait proxies"],
    sourcesReview: "Owned by Zoiko Rooms Content · Current · applicability: Criteria must comply with your organization's own governance and applicable law.",
  },
];

export type RoleCollection = {
  title: string;
  description: string;
};

export const roleCollections: RoleCollection[] = [
  {
    title: "Room Seeker collection",
    description:
      "Preparation through exit: complete costs, agreement review, payment safety, accessibility, institutional paths, and support — organized in journey order with related safety and glossary links.",
  },
  {
    title: "Provider collection",
    description:
      "Start a listing through payout: requirements, Room Passport evidence, agreements, payments, and support — organized in journey order with related safety and glossary links.",
  },
  {
    title: "Organization collection",
    description:
      "Referral and allocation programs, governance, funding, and compliant eligibility criteria — organized in journey order with related safety and glossary links.",
  },
  {
    title: "Zoiko Rooms Pro collection",
    description:
      "Portfolio setup, compliance and verification, integrations, and operating-model guidance — organized in journey order with related safety and glossary links.",
  },
];

export const governanceCards = [
  { title: "Stable ID & owner", description: "Every guide has a stable identifier and a named accountable owner." },
  { title: "Version & review date", description: "Shown on every guide, alongside applicability and limitations." },
  { title: "Material changes", description: "Trigger a change log, affected-path identification, and notification." },
  { title: "Archived guides", description: "Show a replacement or redirect, archive reason and date." },
];
