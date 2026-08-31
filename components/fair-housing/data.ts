import type { LucideIcon } from "lucide-react";
import { Globe, Settings, Info, Compass, Accessibility, ShieldCheck } from "lucide-react";

export const tocItems = [
  { id: "commitment", label: "Our Fair Housing Commitment" },
  { id: "discrimination-look-like", label: "What Discrimination Can Look Like" },
  { id: "listings-advertising", label: "Listings & Advertising" },
  { id: "viewings-applications", label: "Viewings & Applications" },
  { id: "screening-rental-terms", label: "Screening & Rental Terms" },
  { id: "accessibility", label: "Accessibility & Accommodations" },
  { id: "shared-homes", label: "Shared Homes & Roommate Preferences" },
  { id: "report-discrimination", label: "Report Discrimination" },
  { id: "review-reports", label: "How We Review Reports" },
  { id: "enforcement-reviews", label: "Enforcement & Reviews" },
  { id: "local-requirements", label: "Local Requirements" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

export type CommitmentCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const commitmentCards: CommitmentCard[] = [
  {
    icon: Globe,
    title: "Equal Access",
    description: "Housing opportunities should not be hidden, withheld, or made materially harder to access because of a protected or policy-protected characteristic.",
  },
  {
    icon: Settings,
    title: "Consistent Criteria",
    description: "Providers should apply legitimate eligibility criteria consistently to similarly situated applicants.",
  },
  {
    icon: Info,
    title: "Accurate Information",
    description: "Availability, pricing, requirements, and property information should be communicated accurately and consistently.",
  },
  {
    icon: Compass,
    title: "No Steering",
    description: "Do not direct, discourage, or channel people toward or away from particular housing opportunities for discriminatory reasons.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Users should have a clear way to request reasonable accommodations or adjustments where applicable.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description: "Discrimination reports are reviewed under applicable policy, evidence, and law, with proportionate action where warranted.",
  },
];

export const protectedCategoriesText =
  "Zoiko Rooms does not allow discrimination based on race, color, ethnicity, nationality or national origin, religion or belief, sex, sexual orientation, gender identity or expression, disability, age, pregnancy or maternity, marital or civil partnership status, family or familial status, lawful source of income or receipt of benefits where protected, or any other characteristic protected by applicable law. Local rules and lawful exceptions may differ.";

export const prohibitedConductExamples = [
  "Refusing to provide property information, a viewing, or an application opportunity for a discriminatory reason.",
  "Falsely stating that a room is unavailable to discourage a person because of a protected characteristic.",
  "Applying different deposits, fees, rent, rules, screening thresholds, or tenancy terms for discriminatory reasons.",
  "Using coded language or proxies to exclude protected groups.",
  "Harassing or retaliating against someone for asserting fair housing rights or reporting discrimination.",
  "Deliberately steering people toward or away from locations based on protected characteristics.",
  "Ignoring a legally required accommodation or adjustment process.",
];

export const listingsTableRows = [
  { label: "Listing title", description: "Block explicit discriminatory exclusions and coded preference language." },
  { label: "Description", description: "Detect and route potentially discriminatory statements; show contextual rewrite guidance." },
  { label: "House rules", description: "Cannot override applicable anti-discrimination or accessibility obligations." },
  { label: "Eligibility fields", description: "Only expose jurisdiction-approved questions and options." },
  { label: "Images/captions", description: "Do not communicate discriminatory preference or exclusion." },
  { label: "Outbound messages", description: "Apply the same policy controls to communications." },
  { label: "Imported inventory", description: "Third-party feeds must pass the same controls." },
];

export const viewingsTableRows = [
  { label: "Property info", description: "Provide detailed room features, rent breakdown, availability dates, and rule boundaries consistently to all seekers." },
  { label: "Viewings", description: "Do not deny or delay viewings for discriminatory reasons. Apply consistent scheduling processes." },
  { label: "Applications", description: "Use consistent, documented criteria for evaluating applications. Do not request prohibited information." },
  { label: "Referencing/screening", description: "Collect only lawful, necessary, and relevant reference data in a consistent manner." },
  { label: "Decision reasons", description: "Use factual eligibility criteria. State non-discriminatory reasons for application decline." },
  { label: "Rent, deposit, fees", description: "Do not vary deposit sizes, rental amounts, or service charges for discriminatory reasons." },
  { label: "Agreement terms", description: "Do not impose different lease lengths or material covenants based on protected status." },
  { label: "Post-move-in", description: "Anti-discrimination expectations continue through maintenance requests, service access, and renewals." },
];

export const screeningTableRows = [
  { label: "Credit & background checks", description: "Apply the same check types and providers to similarly situated applicants." },
  { label: "Income verification", description: "Use a consistent, documented income-to-rent threshold rather than an ad-hoc judgment." },
  { label: "Guarantor requirements", description: "Request a guarantor only under consistent, disclosed criteria — never as a proxy for a protected characteristic." },
  { label: "Rent-setting", description: "Base rent on disclosed, market-consistent factors, not on an applicant's protected status." },
  { label: "Deposit calculation", description: "Calculate deposits the same way for similarly situated applicants and tenancy terms." },
  { label: "Lease term & renewal", description: "Offer comparable lease lengths and renewal treatment to similarly situated tenants." },
];

export const accessibilitySteps = [
  { title: "Select Context", description: "Choose the specific listing, application, transaction, or account process you need support with." },
  { title: "Choose Support Type", description: "Select from predefined accessibility categories or describe custom communication needs." },
  { title: "Describe Changes", description: "Detail the requested accommodation clearly without requiring deep diagnostic details." },
  { title: "Supporting Info", description: "Upload minimal verifying information only if permitted, relevant, and strictly necessary." },
  { title: "System Routing", description: "Your request is securely routed to the verified provider or internal legal compliance team." },
  { title: "Track Progress", description: "A secure, shared dashboard allows tracking and real-time messaging on accommodation setup." },
];

export const sharedHomesRequiredContext = [
  { label: "Property type and occupancy model:", detail: "Explicit category definition (e.g. individual room in co-living, apartment share)." },
  { label: "Whether the provider/owner occupies the dwelling:", detail: "Status of live-in versus absent landlords or primary tenants." },
  { label: "Whether living areas are genuinely shared:", detail: "Confirmation that tenants share bathrooms, kitchens, or living rooms." },
  { label: "Which spaces are shared:", detail: "Granular checklist of communal areas within the property." },
  { label: "Jurisdiction and applicable market pack:", detail: "Local governing regulations applied based on address verification." },
  { label: "Relevant lawful-exception code:", detail: "Documented legal grounds mapped to statutory local exceptions." },
  { label: "Effective date and policy version:", detail: "Full audit trail mapping compliance checks to the current standard." },
];

export const sharedHomesGuardrails = [
  { title: "Don't ask providers to interpret the law", description: "Providers configure their property attributes natively; our compliance engine determines legal options in the background." },
  { title: "Explain narrowly why a field exists", description: "Contextual tips explain exactly which local fair housing regulations require or allow specific fields." },
  { title: "Hide the field where context doesn't support it", description: "If the property is a self-contained entire apartment, gender or identity preference fields are automatically suppressed." },
  { title: "Never reuse preferences for unrelated ranking", description: "Shared-living preferences are strictly used for filtering compatibility and are never fed into search visibility algorithms." },
];

export const reportCategories = [
  "Discriminatory listing or house rule",
  "Denied or restricted property information",
  "Viewing discrimination",
  "Application or screening discrimination",
  "Different rent, deposit, fee, or rental term",
  "Harassment or discriminatory communication",
  "Accessibility/accommodation issue",
  "Retaliation",
  "Search or platform visibility concern",
  "Other housing discrimination concern",
];

export type ReviewFactor = {
  title: string;
  description: string;
};

export const reviewFactors: ReviewFactor[] = [
  { title: "Severity and immediacy of harm", description: "Evaluating whether the reported act places users in immediate housing insecurity or physical vulnerability." },
  { title: "Available evidence and provenance", description: "Assessing the reliability and audit trail of provided screenshots, messages, and transactional logs." },
  { title: "Whether conduct affected access to housing opportunity", description: "Determining if the seeker was directly prevented from viewing, applying, or securing the room." },
  { title: "Intent where relevant", description: "Analyzing patterns of interaction to identify structural bias versus systemic errors." },
  { title: "Repeated or prior relevant violations", description: "Querying historical account logs to see if the provider is a repeat offender." },
  { title: "Potential for remediation", description: "Deciding if the infraction can be corrected through education or content updates." },
  { title: "Applicable market rules and legal obligations", description: "Reviewing local regional statutes mapped directly to the local market pack." },
  { title: "Risk of retaliation or ongoing harm", description: "Mitigating further negative impact on the reporting user through proactive protective blocks." },
];

export type EnforcementAction = {
  title: string;
  description: string;
};

export const enforcementActions: EnforcementAction[] = [
  { title: "Education / correction", description: "Clarify policy requirements or require mandatory listing/content updates before republication." },
  { title: "Content restriction", description: "Remove, suppress, or prevent publication of noncompliant room descriptions and rules." },
  { title: "Feature restriction", description: "Temporarily or permanently limit private messaging, listing creations, or applications." },
  { title: "Transaction intervention", description: "Pause active room agreements or restrict ongoing payment workflows pending investigation." },
  { title: "Warning", description: "Issue a formal written notice regarding specific conduct or repeated minor policy breaches." },
  { title: "Suspension", description: "Implement a temporary account block to freeze all platform activity for a specified period." },
  { title: "Removal", description: "Permanently disable the user account and associated listings for severe or repeated violations." },
  { title: "Legal / safety escalation", description: "Initiate reporting to regulatory authorities or local law enforcement as required by statute." },
];

export const localRequirementsRows = [
  { label: "Protected grounds", description: "Local laws extend protections to specific groups (e.g. military status, receipt of public assistance)." },
  { label: "Shared-living rules", description: "Variations in how gender and occupancy preferences are permitted in shared apartments." },
  { label: "Advertising", description: "Stricter pre-publication scans for local housing authority compliance." },
  { label: "Screening", description: "Bans on specific financial or background screening checks in select cities." },
  { label: "Accommodation", description: "Differing statutory definitions of what constitutes a 'reasonable' process adjustment." },
  { label: "Reporting", description: "Statutory requirements to route specific discrimination reports directly to local civil rights commissions." },
  { label: "Enforcement", description: "Varying warning periods and fine structures mandated by municipal housing codes." },
  { label: "Retention", description: "Local data privacy guidelines determining how long compliance logs must be archived." },
  { label: "Localization", description: "Applying regional translations and terminology matches for compliance readability." },
];

export type FairHousingFaq = {
  question: string;
  answer: string;
};

export const faqs: FairHousingFaq[] = [
  { question: "What is Zoiko Rooms' fair housing policy?", answer: "Zoiko Rooms prohibits discrimination that unlawfully or unfairly restricts access to housing opportunities on the platform." },
  { question: "What housing discrimination is prohibited on Zoiko Rooms?", answer: "Discrimination based on race, color, ethnicity, nationality, religion, sex, sexual orientation, gender identity, disability, pregnancy, marital status, family status, source of income, or other protected characteristic." },
  { question: "Can a room listing state a roommate preference?", answer: "Only through structured, jurisdiction-approved fields where legally permitted, not through free-text exclusions." },
  { question: "How do I report housing discrimination on Zoiko Rooms?", answer: "Use the Report Discrimination option from the listing, profile, message, application, or support pathway." },
  { question: "How do I request an accommodation?", answer: "Use the Request an Accommodation button or contact Accessibility Support." },
  { question: "Can a provider use different screening criteria for different applicants?", answer: "Providers should apply consistent, documented criteria to similarly situated applicants." },
  { question: "What happens after a discrimination report?", answer: "Zoiko Rooms reviews relevant information and determines whether action is appropriate." },
  { question: "Do fair housing rules differ by country or state?", answer: "Yes. Local housing and anti-discrimination requirements vary. Zoiko Rooms applies jurisdiction-specific rules where relevant." },
];

export const documentMeta = {
  title: "Fair Housing & Anti-Discrimination Policy",
  version: "2.0",
  effective: "August 28, 2026",
  lastUpdated: "August 28, 2026",
};
