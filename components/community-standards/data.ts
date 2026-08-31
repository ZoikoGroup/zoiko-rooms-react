import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  ShieldCheck,
  Lock,
  Info,
  Star,
  CheckCircle,
  AlertTriangle,
  ShieldOff,
  ShieldAlert,
  Flame,
  EyeOff,
  Wand2,
  LayoutGrid,
  Gavel,
  AlertCircle,
} from "lucide-react";

export const tocItems = [
  { id: "principles", label: "Our Community Principles" },
  { id: "respect-everyone", label: "Respect Everyone" },
  { id: "honest-accurate", label: "Be Honest and Accurate" },
  { id: "keep-people-safe", label: "Keep People Safe" },
  { id: "protect-privacy", label: "Protect Privacy" },
  { id: "use-responsibly", label: "Use Zoiko Rooms Responsibly" },
  { id: "respect-homes", label: "Respect Homes & Communities" },
  { id: "conduct-not-allowed", label: "Conduct We Do Not Allow" },
  { id: "reporting", label: "Reporting a Concern" },
  { id: "enforcement", label: "How We Enforce Standards" },
  { id: "reviews-appeals", label: "Reviews and Appeals" },
  { id: "local-requirements", label: "Local Requirements Differ" },
  { id: "related-policies", label: "Related Policies" },
  { id: "faqs", label: "Community Standards FAQs" },
];

export type PrincipleCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const principleCards: PrincipleCard[] = [
  { icon: Sparkles, title: "Respect", description: "Treat people, their homes, property, and communities with dignity." },
  { icon: ShieldCheck, title: "Honesty", description: "Provide accurate information and communicate truthfully." },
  { icon: Lock, title: "Safety", description: "Do not put another person, property, or community at unreasonable risk." },
  { icon: Info, title: "Fairness", description: "Treat people fairly and follow applicable housing and anti-discrimination requirements." },
  { icon: Star, title: "Privacy", description: "Respect personal information, boundaries, communications, and consent." },
  { icon: CheckCircle, title: "Accountability", description: "Take responsibility for your actions and cooperate appropriately when issues arise." },
];

export const respectDos = [
  "Communicate respectfully",
  "Honor personal boundaries",
  "Follow reasonable property and community rules",
  "Resolve disagreements without intimidation",
  "Respect cultural, personal, and accessibility differences",
  "Follow applicable fair-housing requirements",
];

export const respectDonts = [
  "Harass, threaten, intimidate, stalk, or bully",
  "Use hateful, degrading, or abusive language",
  "Sexually harass or make unwanted advances",
  "Deliberately humiliate or target another person",
  "Retaliate against good-faith reporters",
  "Engage in discriminatory conduct",
];

export const providerMisrepresent = [
  "Real physical location",
  "Rent, utility, and extra charges",
  "Fresh, correct availability dates",
  "Room type, size, and photos",
  "Exact room amenities & conditions",
  "Applicable house rules",
  "True provider identity",
  "Verified accessibility features",
];

export const safetyRisks = [
  "Credible threats of violence or intentional property damage",
  "Deliberate physical harm, abuse, or endangerment of any person",
  "Coercion, human exploitation, or forced labor of any kind",
  "Dangerous interference with home safety equipment (smoke detectors, fire escapes)",
  "Creation of serious property hazards (unaddressed structural, electrical, or biological dangers)",
  "Human trafficking or coordinating any serious unlawful platform activity",
];

export const privacyDonts = [
  "Publish other users' private contact, financial, or personal information",
  "Secretly record, photograph, or monitor private spaces within a property",
  "Misuse or leak government identity documents provided for verification",
  "Access another user's account without formal authorization",
  "Misuse private platform communications for off-platform harassment",
  "Use other users' personal information for unauthorized commercial marketing",
];

export const responsibilityRisks = [
  "Scams and fraudulent listings engineered to extract money or data under false pretenses.",
  "Impersonation or fabricated identities designed to mask history or bad-faith intent.",
  "Phishing, malware deployment, or distribution of malicious off-platform links.",
  "Payment fraud, transaction hijacking, or unauthorized payment-method use.",
  "Manipulation of reviews, reputation, trust indicators, or system verification signals.",
  "Artificial account creation or synthetic inquiry activity.",
  "Unauthorized automated access, crawling, or systematic scraping of platform data.",
  "Deliberate circumvention of safety controls, booking flows, or payment protections.",
  "Abuse of core messaging channels, reporting modules, or safety support systems.",
];

export const respectHomesDos = [
  "Respect disclosed occupancy limits and stay boundaries unconditionally.",
  "Observe reasonable, disclosed house rules, shared area guidelines, and noise schedules.",
  "Use shared spaces, appliances, and common amenities responsibly and with cleanliness.",
  "Avoid intentional or reckless property damage, vandalism, or unauthorized alterations.",
  "Manage noise levels responsibly, showing courtesy to adjacent neighbors and flatmates.",
  "Handle household waste, trash disposal, and building facilities appropriately.",
  "Do not access restricted private quarters or locked zones of the property.",
  "Respect local neighbors, occupants, structural rules, and building security bylaws.",
];

export type ConductCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const conductNotAllowedCards: ConductCard[] = [
  {
    icon: AlertTriangle,
    title: "Harassment & Abuse",
    description: "Threats, stalking, bullying, coercion, sexual harassment, targeted abuse, or retaliatory conduct.",
  },
  {
    icon: ShieldOff,
    title: "Discrimination",
    description: "Conduct inconsistent with applicable anti-discrimination laws or Zoiko Rooms Fair Housing standards.",
  },
  {
    icon: ShieldAlert,
    title: "Fraud & Deception",
    description: "Fraudulent listings, fabricated documents, financial scams, identity theft, or misrepresentations.",
  },
  {
    icon: Flame,
    title: "Violence & Safety Risks",
    description: "Acts of physical violence, exploitation, human trafficking, or creation of life-threatening building hazards.",
  },
  {
    icon: EyeOff,
    title: "Privacy Violations",
    description: "Secret recordings, publishing other users' personal details, or unauthorized access to platform databases.",
  },
  {
    icon: Wand2,
    title: "Platform Manipulation",
    description: "Inauthentic reviews, false reporting systems, account cycling, crawling, or systematic data scraping.",
  },
  {
    icon: LayoutGrid,
    title: "Property Abuse",
    description: "Intentional structural damage, reckless misuse, unpermitted subletting, or accessing restricted property areas.",
  },
  {
    icon: Gavel,
    title: "Unlawful Activity",
    description: "Facilitating criminal behavior, local ordinance evasion, illicit substances, or unpermitted commercial ventures.",
  },
  {
    icon: AlertCircle,
    title: "Reporting Abuse",
    description: "Knowingly submitting false, retaliatory, coercive, or malicious reports targeting competitor listings.",
  },
];

export const reportCategories = [
  "Listing",
  "User or account",
  "Message or communication",
  "Safety concern",
  "Fraud or scam",
  "Discrimination",
  "Privacy concern",
  "Payment issue",
  "Property or stay issue",
  "Something else",
];

export const reportSteps = [
  "Select category",
  "Confirm related item",
  "Describe what happened",
  "Add evidence",
  "Choose preference",
  "Review & submit",
  "Confirmation",
];

export type EnforcementCard = {
  title: string;
  description: string;
};

export const enforcementCards: EnforcementCard[] = [
  { title: "Guidance", description: "Education, clarification, or corrective direction regarding appropriate platform behavior." },
  { title: "Warning", description: "Formal notice regarding documented conduct or direct warning about future policy expectations." },
  { title: "Content Action", description: "Correction, restriction, shadow suppression, or complete removal of violating content listings." },
  { title: "Feature Restriction", description: "Temporary or scoped limitation of specific platform capabilities (e.g. messaging, listing limit)." },
  { title: "Transaction Action", description: "Action affecting an active inquiry, room application, reservation, payment processing, or stay agreements." },
  { title: "Account Restriction", description: "Temporary limitation or safety-suspension of account access pending formal compliance reviews." },
  { title: "Account Removal", description: "Permanent disablement and banning for sufficiently serious, harmful, or repeated violations." },
  { title: "Legal / Safety Escalation", description: "External law enforcement action required by local authorities or for immediate fraud, safety, and security threats." },
];

export const reviewPrinciples = [
  "Reviews are conducted strictly against the applicable platform policy framework.",
  "Allow affected users to submit relevant additional information, missing evidence, or contextual proof.",
  "Reduce reviewer conflicts of interest by assigning independent, un-involved trust & safety officers.",
  "Provide a clear, written record of the review outcome and specific reasons.",
  "Communicate the outcome transparently within a reasonable timeframe.",
  "Note: Not every platform decision is eligible for appeal (especially those triggered by direct legal mandates).",
];

export type RelatedPolicy = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const relatedPolicies: RelatedPolicy[] = [
  {
    title: "Fair Housing",
    description: "How Zoiko Rooms approaches fair access and applicable housing-related anti-discrimination requirements.",
    cta: "Read policy",
    href: "/legal/fair-housing-anti-discrimination",
  },
  {
    title: "Terms of Use",
    description: "The foundational contractual terms governing your use of the Zoiko Rooms platform.",
    cta: "Read terms",
    href: "/legal/terms-of-use",
  },
  {
    title: "Privacy Notice",
    description: "How Zoiko Rooms handles, stores, and protects your personal information.",
    cta: "Read notice",
    href: "/legal/privacy-notice",
  },
  {
    title: "Payment Terms",
    description: "Requirements applying to relevant payments, security deposits, and rental transactions.",
    cta: "Read terms",
    href: "/legal/payment-terms",
  },
  {
    title: "Regional Notices",
    description: "Localized requirements and notices applicable to specific countries, states, or jurisdictions.",
    cta: "View notices",
    href: "/legal/regional-notice",
  },
  {
    title: "Cookie Notice",
    description: "How Zoiko Rooms uses cookies and similar tracking technologies across the platform.",
    cta: "Read notice",
    href: "/legal/cookie-notice",
  },
  {
    title: "Cookie Preferences",
    description: "Manage your cookie consent choices and tracking preferences at any time.",
    cta: "Manage preferences",
    href: "/legal/cookie-preferences",
  },
  {
    title: "Your Privacy Choices",
    description: "Region-specific privacy rights and opt-out choices available to you.",
    cta: "View choices",
    href: "/legal/your-privacy-choices",
  },
];

export type CommunityFaq = {
  question: string;
  answer: string;
};

export const communityFaqs: CommunityFaq[] = [
  {
    question: "What are the Zoiko Rooms Community Standards?",
    answer: "They explain the behavior expected from people using Zoiko Rooms and the conduct that may result in platform enforcement actions.",
  },
  {
    question: "Who must follow the Community Standards?",
    answer: "These standards apply universally to all people, organizations, landlords, and service operators using Zoiko Rooms where relevant to their platform activities.",
  },
  {
    question: "How do I report something on Zoiko Rooms?",
    answer: "Use the dedicated 'Report' option directly on the relevant listing page, profile, message thread, application view, transaction record, stay details, or contact support.",
  },
  {
    question: "What happens after I submit a report?",
    answer: "Zoiko Rooms' trust & safety specialists will securely review relevant details and determine whether appropriate corrective action is required.",
  },
  {
    question: "Can Zoiko Rooms suspend or remove an account?",
    answer: "Yes. Depending on the severity of safety risk or recurring platform abuse, we reserve the right to suspend or remove accounts immediately.",
  },
  {
    question: "Can I request a review of a decision?",
    answer: "Some enforcement actions are eligible for appeal. If eligible, instructions on requesting a review will be sent directly to your registered email.",
  },
  {
    question: "Does Zoiko Rooms allow discrimination?",
    answer: "No. Zoiko Rooms strictly prohibits discriminatory conduct or denial of housing options inconsistent with our Fair Housing Standards.",
  },
  {
    question: "Can I make an anonymous report?",
    answer: "Yes, for selected safety and fraud concerns, you can choose to limit identity sharing while reporting. Specific details are on the report form.",
  },
  {
    question: "What should I do in an emergency?",
    answer: "If you feel you or someone else is in immediate physical danger, contact local emergency services immediately. Zoiko Rooms is not an emergency response system.",
  },
];

export const documentMeta = {
  title: "Community Standards",
  effective: "January 1, 2025",
  lastUpdated: "January 1, 2025",
  version: "2.0",
};
