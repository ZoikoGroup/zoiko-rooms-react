export type TocGroup = { title: string; items: { id: string; label: string; hasDot?: boolean }[] };

export const tocGroups: TocGroup[] = [
  {
    title: "Review",
    items: [
      { id: "material-terms", label: "Material terms", hasDot: true },
      { id: "change-review", label: "Changed since v2", hasDot: true },
      { id: "full-agreement", label: "Full agreement" },
      { id: "attachments", label: "Attachments (3)" },
    ],
  },
  {
    title: "Before Signing",
    items: [
      { id: "corrections", label: "Questions & corrections" },
      { id: "acknowledgements", label: "Acknowledgements" },
      { id: "signature", label: "Signature" },
      { id: "co-signer-status", label: "Co-signer status" },
    ],
  },
];

export const materialTerms = [
  { label: "Room", value: "Unit 3B", sub: "142 Sunview Terrace" },
  { label: "Stay dates", value: "1 Sep 2026 –", sub: "31 Aug 2027 (12 mo.)" },
  { label: "Monthly rent", value: "$1,200 / mo", sub: "Due on the 1st" },
  { label: "Security deposit", value: "$1,200", sub: "Held by provider" },
  { label: "Required fees", value: "$75 move-in", sub: "One-time, before move-in" },
  { label: "Parties", value: "You · Provider", sub: "2 required signers" },
  { label: "Payment recipient", value: "Provider entity", sub: "Verified in payment workflow" },
  { label: "Cancellation", value: "See §10", sub: "30-day written notice" },
  { label: "Additional terms", value: "1 special term", sub: "Quiet hours addendum" },
];

export type ChangeRow = { field: string; oldValue?: string; newValue: string; tag: string; tone: "amber" | "green" | "gray" };

export const changeRows: ChangeRow[] = [
  { field: "Move-in date", oldValue: "1 Aug 2026", newValue: "1 Sep 2026", tag: "Changed · re-review required", tone: "amber" },
  { field: "Access schedule", newValue: "New clause 7.3 added — building quiet hours 10pm–7am", tag: "Added · re-review required", tone: "green" },
  { field: "Monthly rent", newValue: "$1,200 / mo — unchanged", tag: "No change", tone: "gray" },
];

export type Clause = { number: number; title: string; tag?: { label: string; tone: "amber" | "green" }; body: string };

export const clauses: Clause[] = [
  {
    number: 1,
    title: "Parties & Definitions",
    body: "This Room Agreement (\"Agreement\") is entered into between the Occupant and the Provider identified below, governing the private room described in Section 2. Occupant: the individual signer accepting occupancy rights and obligations under this Agreement. Provider: the party with confirmed listing and agreement-signing authority for the Room, acting directly or through an authorized representative.",
  },
  { number: 2, title: "Premises / Room", body: "Describes the exact room, address, and any shared spaces included under this Agreement, as confirmed in the Room Passport." },
  { number: 3, title: "Term / Dates", tag: { label: "Changed in v3", tone: "amber" }, body: "Sets the move-in and move-out dates and the total stay length. This clause was updated in version 3 — see Section 3 of the change review above." },
  { number: 4, title: "Rent & Charges", body: "States the monthly rent, due date, accepted payment methods, and any late-payment terms." },
  { number: 5, title: "Deposit / Holding Money", body: "Describes the security deposit amount, who holds it, and the conditions for its return or deduction." },
  { number: 6, title: "Use / Occupancy", body: "Defines permitted use of the room, maximum occupancy, and guest policy." },
  { number: 7, title: "Access / Keys", tag: { label: "New clause in v3", tone: "green" }, body: "New in this version: defines building quiet hours, key/fob handover, and access-schedule terms." },
  { number: 8, title: "Maintenance / Condition", body: "Describes move-in condition documentation and each party's maintenance responsibilities during the stay." },
  { number: 9, title: "Conduct / House Rules", body: "Incorporates the House Rules attachment and describes consequences for violations." },
  { number: 10, title: "Ending / Termination", body: "Describes notice periods, early-termination conditions, and cancellation terms referenced from the material terms summary." },
  { number: 11, title: "Special / Additional Terms", body: "Any additional terms specific to this room or provider, including the Quiet Hours Addendum incorporated by reference." },
];

export const attachments = [
  { title: "House Rules (v2)", meta: "PDF · accessible HTML available · 6 pages" },
  { title: "Quiet Hours Addendum (v1)", meta: "PDF · added in this version · 1 page" },
  { title: "Room Passport Snapshot (v4)", meta: "Accessible HTML · incorporated by reference" },
];

export type AckItem = { id: string; label: string; description: string; required: boolean };

export const acknowledgements: AckItem[] = [
  {
    id: "reviewed-agreement",
    label: "I have accessed and reviewed the current full agreement (v3).",
    description: "Confirms access to the current version — not a claim of understanding every legal consequence.",
    required: true,
  },
  {
    id: "reviewed-changes",
    label: "I reviewed the changes made since version 2, including the updated move-in date and new access schedule.",
    description: "Required because this version contains material changes.",
    required: true,
  },
  {
    id: "consent-esign",
    label: "I consent to sign this agreement electronically.",
    description: "Separate consent to electronic signature and delivery, per the e-sign consent text (v1).",
    required: true,
  },
  {
    id: "optional-updates",
    label: "Send me optional updates about my stay.",
    description: "Optional and unchecked by default — has no effect on signing readiness.",
    required: false,
  },
];

export const receiptRows = [
  { label: "Agreement version", value: "v3 (locked at signing)" },
  { label: "Your signature timestamp", value: "Pending" },
  { label: "Provider signature timestamp", value: "Pending" },
  { label: "Signature method", value: "Click-to-sign (e-signature)" },
  { label: "Document integrity reference", value: "Generated at execution" },
];
