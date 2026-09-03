export const organizationPills = ["Universities", "Employers", "Healthcare", "Relocation & Mobility", "Government & Public Sector"];

export const pathwayCards = [
  {
    title: "Universities",
    description: "Support students, staff, visiting academics, placements, arrivals, and approved room supply.",
    image: "/images/organizations-overview/pathway-universities.png",
    href: "/organizations/universities",
  },
  {
    title: "Employers",
    description: "Support new hires, temporary assignments, project teams, seasonal workers, and employee mobility.",
    image: "/images/organizations-overview/pathway-employers.png",
    href: "/organizations/employers",
  },
  {
    title: "Healthcare",
    description: "Support staff rotations, training, temporary workforce needs, approved non-clinical relocation, and duty-location access.",
    image: "/images/organizations-overview/pathway-healthcare.png",
    href: "/organizations/healthcare",
  },
  {
    title: "Relocation & Mobility",
    description: "Coordinate destination services, assignees, international moves, room supply, arrivals, and accountable handoffs.",
    image: "/images/organizations-overview/pathway-relocation-mobility.png",
    href: "/organizations/relocation-mobility",
  },
  {
    title: "Government & Public Sector",
    description: "Support approved workforce, placement, resettlement, education, housing-access, and public-service programs.",
    image: "/images/organizations-overview/pathway-government-public-sector.png",
    href: "/organizations/government-public-sector",
  },
  {
    title: "Zoiko Rooms Pro",
    description: "Operate portfolios, availability, applications, agreements, payments, institutional distribution, and integrations.",
    image: "/images/organizations-overview/pathway-zoiko-rooms-pro.png",
    href: "/pro/overview",
  },
];

export const operatingModelSteps = [
  { number: "01", title: "Define purpose", description: "Audience, geography, dates, outcomes, organization role, and success criteria." },
  { number: "02", title: "Confirm authority", description: "Organization identity, representative role, and provider/inventory relationships, and action permissions." },
  { number: "03", title: "Configure access", description: "Eligibility, referrals, distribution, allocation, subsidy, billing, data, and support." },
  { number: "04", title: "Connect supply", description: "Approved providers, current rooms, availability, complete costs, authority, and maintenance." },
  { number: "05", title: "Support people", description: "Search, matching support, communication, viewing, application, agreement, payment, arrival, and issues." },
  { number: "06", title: "Govern decisions", description: "Declared criteria, human owners, separation of duties, fairness, correction, and review." },
  { number: "07", title: "Measure outcomes", description: "Minimized aggregate reporting, service levels, exceptions, reconciliation, and quality." },
  { number: "08", title: "Renew or close", description: "Reconfirm authority, access, inventory, pricing, retention, offboarding, and unresolved obligations." },
];

export const supplyPoints = [
  { title: "Approved provider network", description: "Provider identity, listing authority, relationship, room evidence, service scope, and review." },
  { title: "Organization-distributed inventory", description: "Authorized audience, inventory set, provider relationship, dates, and data rules." },
  { title: "Supply maintenance", description: "Last-confirmed availability, material-change versioning, and clean exit when inventory is withdrawn." },
];

export const supplyRecordRows = [
  { label: "Provider relationship", value: "Approved network", tone: "green" as const },
  { label: "Room evidence", value: "Document verified", tone: "amber" as const },
  { label: "Distribution audience", value: "Invited only", tone: "gray" as const },
  { label: "Availability freshness", value: "Confirmed 3h ago", tone: "gray" as const },
];

export const journeyPoints = [
  { title: "Invitation / referral", description: "Source, purpose, and whether participation is optional or required.", meta: "Organization · Provider · Zoiko Rooms" },
  { title: "Eligibility / program status", description: "Declared criteria and an authorized human decision owner.", meta: "Organization" },
  { title: "Search or allocation", description: "Current inventory, facts, costs, and choice/alternative rules.", meta: "Provider · Organization · Zoiko Rooms" },
  { title: "Application, agreement & funding", description: "Purpose-limited data, current legal parties, and funding contribution.", meta: "Participant · Organization · Provider" },
  { title: "Arrival, support & exit", description: "Handover ownership, ongoing support, and continuity without an abandoned participant.", meta: "Provider · Organization · Zoiko Rooms" },
];

export const journeyStatusBadges = [
  { label: "Eligible", tone: "green" as const },
  { label: "Under review", tone: "amber" as const },
  { label: "Waitlisted", tone: "gray" as const },
];

export const fundingPoints = [
  { title: "Covered vs. excluded", description: "Exact rent, deposit, fee, bill, or service item covered — and every amount that isn't." },
  { title: "Tax / benefit boundary", description: "States clearly when treatment is unknown or participant responsibility — never legal or tax advice." },
  { title: "Reconciliation", description: "Invoice, receipt, participant/provider balance, exception, dispute, and closure." },
];

export const fundingExampleRows = [
  { label: "Monthly room rent", value: "$1,200 / mo" },
  { label: "Security deposit", value: "$1,200" },
  { label: "Organization contribution", value: "$700 / mo for 3 months" },
  { label: "Participant recurring responsibility", value: "$600 / mo (during contribution)" },
  { label: "Participant upfront responsibility", value: "$1,275 before move-in" },
  { label: "Direct-billing status", value: "Approval pending" },
];

export const governanceRoles = [
  { title: "Executive sponsor", description: "Program oversight and renewal — not participant or room record access by default." },
  { title: "Program owner", description: "Configures the approved program — cannot exceed organization or provider authority." },
  { title: "Referral coordinator", description: "Invites or refers approved audience — no allocation or payment access by default." },
  { title: "Allocation coordinator", description: "Allocates approved rooms under current criteria — no hidden criteria or payment authority." },
  { title: "Decision owner", description: "Makes the named eligibility or allocation decision under approved criteria." },
  { title: "Billing administrator", description: "Manages billing entity, invoices, and reconciliation — no participant decision authority." },
  { title: "Data / privacy administrator", description: "Manages data configuration, retention, and incidents — no unrestricted operational use." },
  { title: "Auditor / compliance reviewer", description: "Reads approved evidence, status, and reports — no operational changes by default." },
];

export const procurementCards = [
  { title: "Identity & authority", description: "Organization identity, representative role, and current relationship evidence." },
  { title: "Data & privacy", description: "What's shared, with whom, retention, correction, and deletion paths." },
  { title: "Funding & payments", description: "Recipients, routes, approval status, and reconciliation evidence." },
  { title: "Fairness & equity", description: "Aggregate monitoring approach with privacy and legal governance." },
  { title: "Security", description: "Access control, incident response, and monitoring practices." },
  { title: "Implementation", description: "Discovery through exit, with named owners and go/no-go gates." },
];

export const procurementSteps = [
  { number: "01", title: "Discovery & qualification", description: "Purpose, audience, geography, relationship model, and current process." },
  { number: "02", title: "Due diligence", description: "Organization identity, representative authority, security, privacy, and legal evidence." },
  { number: "03", title: "Solution design & contract", description: "Roles, journey, decisions, funding, and an approved responsibility map." },
  { number: "04", title: "Configuration & pilot", description: "Workspace, criteria, integrations, controlled audience, and defined success criteria." },
  { number: "05", title: "Launch, operate & renew", description: "Current supply, reporting, governed exceptions, and reconfirmed authority or clean exit." },
];

export const faqs = [
  {
    question: "How can universities use Zoiko Rooms?",
    answer:
      "Universities can use approved referral, inventory-distribution, managed, allocation, subsidy, direct-billing, support, and reporting models with current authority, data, cost, and participant boundaries.",
  },
  {
    question: "How can employers support employee housing?",
    answer:
      "Employers can offer referral, allocation, or subsidy models for new hires, relocations, and temporary assignments — with the funding split, eligibility, and data boundary shown before anyone commits.",
  },
  {
    question: "How can healthcare organizations use Zoiko Rooms?",
    answer:
      "Healthcare organizations can support staff rotations, training placements, and temporary workforce needs through the same governed relationship models, scoped to approved non-clinical relocation and duty-location access.",
  },
  {
    question: "What can relocation and mobility teams manage?",
    answer:
      "Relocation and mobility teams can coordinate destination services, assignee search, international moves, and accountable handoffs — with named ownership at every stage of the participant journey.",
  },
  {
    question: "Can government or public-sector programs use Zoiko Rooms?",
    answer:
      "Yes, through procurement-ready relationship models supporting approved workforce, placement, resettlement, education, and housing-access programs, with the audit and governance evidence procurement teams expect.",
  },
  {
    question: "Does an organization relationship verify every room?",
    answer:
      "No. Organization-distributed and provider-network supply still traces back to a canonical Room Passport — the distribution relationship is always shown separately from room verification, never implied by it.",
  },
  {
    question: "Can an organization pay all or part of the cost?",
    answer:
      "Yes, under subsidy or direct-billing models. Every covered and excluded amount is itemized and shown as approved, never assumed — participant and organization responsibility are never blended into one opaque total.",
  },
  {
    question: "Does Zoiko Rooms make eligibility or allocation decisions?",
    answer:
      "No. Eligibility and allocation decisions belong to a named, authorized human owner within the organization or provider — Zoiko Rooms runs the governed workflow, never the decision itself.",
  },
];
