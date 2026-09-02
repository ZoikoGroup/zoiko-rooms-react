export type ToggleKey = "saleSharing" | "targetedAds" | "sensitiveData" | "directMarketing";

export const TOGGLE_STORAGE_KEY = "zoiko-privacy-choices";

export const defaultToggles: Record<ToggleKey, boolean> = {
  saleSharing: true,
  targetedAds: true,
  sensitiveData: false,
  directMarketing: false,
};

export type ToggleChoice = {
  key: ToggleKey;
  title: string;
  description: string;
  scope: string;
  onLabel: string;
  offLabel: string;
  learnMoreHref: string;
};

export const toggleChoices: ToggleChoice[] = [
  {
    key: "saleSharing",
    title: "Opt out of sale or sharing",
    description: "Stop legally defined sale or sharing of your personal information, where this choice applies to you.",
    scope: "Applies to: this browser",
    onLabel: "Opt-out request honored",
    offLabel: "Not opted out",
    learnMoreHref: "/legal/privacy-notice#cookies-advertising",
  },
  {
    key: "targetedAds",
    title: "Opt out of targeted advertising",
    description: "Stop Zoiko Rooms from using or disclosing your information for covered targeted advertising where this choice applies.",
    scope: "Applies to: this browser · your account",
    onLabel: "Opt-out request honored",
    offLabel: "Not opted out",
    learnMoreHref: "/legal/privacy-notice#cookies-advertising",
  },
  {
    key: "sensitiveData",
    title: "Limit use of sensitive personal information",
    description: "Restrict covered uses of sensitive personal information, such as precise location, to what's necessary to provide the service.",
    scope: "Applies to: your account",
    onLabel: "Limited",
    offLabel: "Not limited",
    learnMoreHref: "/legal/privacy-notice#information-collected",
  },
  {
    key: "directMarketing",
    title: "Object to direct marketing",
    description: "Stop promotional emails and messages from Zoiko Rooms. This does not affect account or booking notifications.",
    scope: "Applies to: your account",
    onLabel: "Marketing off",
    offLabel: "Marketing on",
    learnMoreHref: "/legal/privacy-notice#cookies-advertising",
  },
];

export const privacyContextItems = [
  { label: "Region used for rights", value: "United States — California" },
  { label: "Account state", value: "Not signed in" },
  { label: "Browser / device signal", value: "GPC detected" },
  { label: "Controller / entity", value: "Zoiko Rooms, Inc." },
];

export const deletionCards = [
  {
    title: "Request deletion of personal data",
    description:
      "Ask us to delete personal data we no longer need to keep. Some limited records may be retained where required for legal, payment, safety, fraud-prevention, or dispute purposes.",
    caption: "This is a statutory privacy request — it works whether or not you close your account.",
    tone: "rose" as const,
  },
  {
    title: "Close my Zoiko Rooms account",
    description:
      "Disable product access and begin the account-retention lifecycle. Pending bookings, tenancies, and payment records are handled separately, under their own retention rules.",
    caption: "Closing your account does not automatically submit or cancel a separate deletion request.",
    tone: "plain" as const,
  },
];

export type AutomatedDecisionRow = {
  useCase: string;
  purpose: string;
  humanReview: "Yes" | "No";
  available: string;
};

export const automatedDecisionRows: AutomatedDecisionRow[] = [
  {
    useCase: "Application risk screening",
    purpose: "Flag applications for manual review during high-volume periods.",
    humanReview: "Yes",
    available: "Explanation · request human review",
  },
  {
    useCase: "Fraud detection scoring",
    purpose: "Identify potentially fraudulent bookings or payment activity.",
    humanReview: "Yes",
    available: "Explanation · challenge outcome",
  },
  {
    useCase: "Search ranking & recommendations",
    purpose: "Order and personalize room listings shown to you.",
    humanReview: "No",
    available: "Opt out of personalization",
  },
];

export type RequestHistoryRow = {
  id: string;
  type: string;
  submitted: string;
  due: string;
  status: string;
  tone: "amber" | "green";
  actionLabel: string;
};

export const requestHistoryRows: RequestHistoryRow[] = [
  { id: "PRIV-2026-08114", type: "Access my data", submitted: "Aug 12, 2026", due: "Sep 11, 2026", status: "Verifying identity", tone: "amber", actionLabel: "Continue" },
  { id: "PRIV-2026-07902", type: "Delete personal data", submitted: "Jul 30, 2026", due: "Aug 29, 2026", status: "Completed", tone: "green", actionLabel: "View" },
];

export const agentPoints = [
  "Relationship to the person you're representing",
  "Scope of the request",
  "Proof of authority — and confirmation from the consumer where required",
];

export const appealPoints = [
  "Internal appeal, where available for your region",
  "Reason for denial or partial completion",
  "Relevant regulator or supervisory authority contact",
];

export const relatedControls = [
  { label: "Cookie Preferences", href: "/legal/cookie-preferences" },
  { label: "Privacy Notice", href: "/legal/privacy-notice" },
  { label: "Marketing preferences", href: "#quick-privacy-choices" },
  { label: "Regional Legal Notices", href: "/legal/regional-notice" },
];
