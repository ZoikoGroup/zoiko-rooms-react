export type TocItem = { id: string; label: string };

export const tocItems: TocItem[] = [
  { id: "whos-involved", label: "Who's involved" },
  { id: "paying", label: "Paying" },
  { id: "rent", label: "Rent" },
  { id: "deposits", label: "Deposits" },
  { id: "fees-tax-fx", label: "Fees, tax & FX" },
  { id: "payouts-to-hosts", label: "Payouts to hosts" },
  { id: "refunds-disputes", label: "Refunds & disputes" },
  { id: "restrictions", label: "Restrictions" },
  { id: "records-complaints", label: "Records & complaints" },
  { id: "regional-rules", label: "Regional rules" },
  { id: "changes-hierarchy", label: "Changes & hierarchy" },
];

export const helpLinks = ["Get payment help", "Dispute a transaction", "Report suspected fraud", "Payment complaints route"];

export const partyRoles = [
  { tag: "Payer", title: "Renter", description: "The person authorizing and sending the payment." },
  { tag: "Payee", title: "Host / landlord", description: "The person or business the payment is ultimately for." },
  { tag: "Platform", title: "Zoiko Rooms", description: "Operates the marketplace; not automatically the fund holder." },
  { tag: "Processor", title: "Payment provider", description: "Authorizes, authenticates, and moves the money." },
  { tag: "Custodian", title: "Deposit scheme", description: "Holds and protects tenancy deposits where applicable." },
  { tag: "Authority", title: "Tax authority", description: "Receives reporting where platform-reporting rules apply." },
];

export const checkoutPreviewRows = [
  { label: "Principal amount", value: "£1,400.00" },
  { label: "Zoiko service fee", value: "£0.00" },
  { label: "Payment provider fee", value: "£0.00" },
];

export type DepositCard = {
  tag: string;
  tone: "green" | "amber" | "rose" | "gray";
  title: string;
  description: string;
  facts: { label: string; value: string }[];
};

export const depositCards: DepositCard[] = [
  {
    tag: "Rent in advance",
    tone: "green",
    title: "Prepayment",
    description: "Subject to local caps and timing. Never presented as a workaround for deposit limits or prohibited tenant fees.",
    facts: [
      { label: "England cap after signing", value: "Up to 1 month" },
      { label: "Before signing", value: "Not permitted" },
    ],
  },
  {
    tag: "Holding deposit",
    tone: "amber",
    title: "Reservation deposit",
    description: "Reserves a room while your application is processed. Capped, time-limited, and refundable by default.",
    facts: [
      { label: "England cap", value: "1 week's rent" },
      { label: "Default deadline", value: "15 calendar days" },
      { label: "Active per tenancy", value: "One at a time" },
    ],
  },
  {
    tag: "Tenancy deposit",
    tone: "rose",
    title: "Security deposit",
    description: "Protected under the applicable scheme — never recognized as Zoiko Rooms revenue at any point.",
    facts: [
      { label: "England cap, rent < £50k/yr", value: "Up to 5 weeks" },
      { label: "England cap, £50k–£100k/yr", value: "Up to 6 weeks" },
      { label: "Protection", value: "Scheme-held" },
    ],
  },
  {
    tag: "Fees",
    tone: "gray",
    title: "Platform & provider fees",
    description: "Itemized separately from rent and deposits at every stage — never bundled into an opaque \"includes fees\" total.",
    facts: [
      { label: "Custom landlord fee fields", value: "Not permitted" },
      { label: "Shown at checkout", value: "Always itemized" },
    ],
  },
];

export const decisionGateRows = [
  { question: "Does the signed agreement permit this rent collection now?", response: "Rent collection blocked" },
  { question: "Is this payment type permitted under current market rules?", response: "Checkout blocked" },
  { question: "Is the deposit amount within the configured cap?", response: "Blocked; compliant amount shown" },
  { question: "Is there only one active holding deposit for this tenancy?", response: "Additional deposit blocked" },
  { question: "Is protection or CMP configured where applicable?", response: "Money acceptance blocked" },
  { question: "Are required fee, tax, and recipient disclosures available?", response: "Authorisation blocked" },
];

export const refundSteps = [
  { number: "01", title: "Was the payment executed correctly?", description: "Confirmed against the processor's record, separately from any dispute about who's entitled to the money." },
  { number: "02", title: "Does the rental or cancellation rule allow a refund?", description: "Full or partial, based on the specific booking terms that applied at the time." },
  { number: "03", title: "Where does the refund go?", description: "Back to the original method where possible, with the processing window your provider quotes." },
];

export const restrictionPoints = [
  "Money laundering, payment fraud, card testing, and transaction triangulation",
  "Diverting payments outside the platform to avoid protections",
  "Fake listings or manipulating checkout to collect unlawful rent or fees",
  "Third-party misuse of a payment method or payout account",
];

export const regionalFacts = [
  { label: "Contracting entity", value: "Zoiko Rooms UK Ltd." },
  { label: "Client money / CMP", value: "Activated where applicable" },
  { label: "Payment provider", value: "Zoiko Payments Europe Ltd." },
  { label: "Deposit protection", value: "Government-approved scheme" },
];

export const regionalHighlights = [
  { tag: "Rent before signing", title: "Not permitted", description: "Since 1 May 2026, rent can't be requested or accepted before the tenancy agreement is signed." },
  { tag: "Late rent charge", title: "After 14 days", description: "Daily interest capped at 3 points above Bank of England base rate." },
  { tag: "Other tenant payments", title: "Allowlisted only", description: "Custom landlord \"fee\" fields can't be added to renter checkout." },
];
