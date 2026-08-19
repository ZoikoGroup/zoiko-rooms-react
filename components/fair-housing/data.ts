import type { PillTone } from "./shared";

export type RegionKey = "england" | "california" | "germany" | "other";

export type RegionOption = { key: RegionKey; label: string };

export const regionOptions: RegionOption[] = [
  { key: "england", label: "England" },
  { key: "california", label: "United States — California" },
  { key: "germany", label: "Germany" },
  { key: "other", label: "Other / Global baseline" },
];

export type RegionalRuleRow = { label: string; value: React.ReactNode };

export type RegionProfile = {
  effectiveDate: string;
  eyebrow: string;
  title: string;
  intro: string;
  rows: { label: string; value: string }[];
  externalLinks: { label: string; href: string }[];
  notice: string;
};

export const regionProfiles: Record<RegionKey, RegionProfile> = {
  england: {
    effectiveDate: "17 Aug 2026",
    eyebrow: "Regional Rules · England",
    title: "Equality Act protections, alongside Right to Rent.",
    intro:
      "The England profile combines Equality Act 2010 premises protections with the Right to Rent regime, without letting identity or immigration checks become a proxy for race or nationality discrimination.",
    rows: [
      { label: "Legal basis", value: "Equality Act 2010, Part 4 — disposal and management of premises." },
      { label: "Race", value: "Includes colour, nationality/citizenship, and ethnic or national origins." },
      { label: "Disability", value: "Reasonable adjustment duties apply; accessibility support route required." },
      { label: "Right to Rent", value: "Required checks follow the approved Home Office workflow, applied consistently — never chosen by appearance, accent, or name." },
      { label: "\"No DSS\" / benefits", value: "Blanket exclusion of benefit recipients is prohibited platform policy." },
      { label: "Shared-home exceptions", value: "Coded narrowly; Zoiko Rooms may still apply a stricter platform standard." },
    ],
    externalLinks: [
      { label: "GOV.UK guidance", href: "https://www.gov.uk/housing-local-and-community/renting-and-leasing" },
      { label: "Equality and Human Rights Commission", href: "https://www.equalityhumanrights.com/" },
    ],
    notice:
      "Updated Home Office Right to Rent codes published 30 June 2026 take effect 1 October 2026 — this page will update on that date, not before.",
  },
  california: {
    effectiveDate: "17 Aug 2026",
    eyebrow: "Regional Rules · United States — California",
    title: "FEHA protections, alongside source-of-income rules.",
    intro:
      "The California profile applies the Fair Employment and Housing Act's housing protections together with the state's source-of-income rules, which prohibit refusing an applicant for using a housing voucher or other lawful income.",
    rows: [
      { label: "Legal basis", value: "Fair Employment and Housing Act (FEHA), Government Code § 12955." },
      { label: "Race", value: "Includes color, ancestry, and national origin, per FEHA and the federal Fair Housing Act." },
      { label: "Disability", value: "Reasonable accommodation and modification duties apply; no diagnosis required to request." },
      { label: "Source of income", value: "Refusing a Section 8 voucher or other lawful income source is prohibited statewide." },
      { label: "\"No DSS\" / benefits", value: "Blanket exclusion of benefit or voucher recipients is prohibited platform policy." },
      { label: "Shared-home exceptions", value: "Coded narrowly; Zoiko Rooms may still apply a stricter platform standard." },
    ],
    externalLinks: [
      { label: "CA Civil Rights Department", href: "https://calcivilrights.ca.gov/" },
      { label: "HUD Fair Housing", href: "https://www.hud.gov/fairhousing" },
    ],
    notice:
      "This profile reflects FEHA as currently in force. Local rent-control and just-cause ordinances are tracked separately and don't change this discrimination baseline.",
  },
  germany: {
    effectiveDate: "17 Aug 2026",
    eyebrow: "Regional Rules · Germany",
    title: "AGG protections in private rentals.",
    intro:
      "The Germany profile applies the Allgemeines Gleichbehandlungsgesetz (AGG) to private rental listings, with narrower statutory exceptions for genuinely shared, owner-occupied housing than for larger portfolios.",
    rows: [
      { label: "Legal basis", value: "Allgemeines Gleichbehandlungsgesetz (AGG), §§ 19–21." },
      { label: "Race / ethnic origin", value: "Protected under AGG §1; no inference from name, accent, or Stadtteil (district)." },
      { label: "Disability", value: "Reasonable adjustment expectations apply; assistance-animal rules override ordinary pet rules." },
      { label: "Small-landlord exception", value: "A narrower AGG exception exists for very small, owner-occupied buildings — coded tightly, never a general opt-out." },
      { label: "\"No DSS\" / benefits", value: "Blanket exclusion of Bürgergeld or housing-benefit recipients is prohibited platform policy." },
      { label: "Shared-home exceptions", value: "Coded narrowly; Zoiko Rooms may still apply a stricter platform standard." },
    ],
    externalLinks: [
      { label: "Antidiskriminierungsstelle des Bundes", href: "https://www.antidiskriminierungsstelle.de/" },
      { label: "AGG full text", href: "https://www.gesetze-im-internet.de/agg/" },
    ],
    notice:
      "State-level (Land) tenant-protection rules vary and are layered on top of this federal AGG baseline — they never narrow it.",
  },
  other: {
    effectiveDate: "17 Aug 2026",
    eyebrow: "Regional Rules · Other / Global Baseline",
    title: "The platform baseline, before local law is layered on.",
    intro:
      "Where a specific regional profile hasn't been published yet, this global platform baseline still applies in full — it's the floor, not a placeholder, and local law may only add protections on top of it.",
    rows: [
      { label: "Legal basis", value: "Zoiko Rooms platform policy, applied globally regardless of local statute." },
      { label: "Protected grounds", value: "The full protected-grounds table above applies, platform-wide, by default." },
      { label: "Disability", value: "Reasonable-adjustment request routing is available regardless of local legal requirement." },
      { label: "\"No DSS\" / benefits", value: "Blanket exclusion of lawful-income or benefit recipients is prohibited platform policy." },
      { label: "Shared-home exceptions", value: "None published for this region yet; standard protections apply without exception." },
    ],
    externalLinks: [{ label: "Contact our fair housing team", href: "/resources" }],
    notice:
      "A dedicated regional profile is added once local statutory detail has been reviewed and published — until then, this baseline governs.",
  },
};

export const protectedGrounds: { ground: string; treatment: string; tone: PillTone; notes: string }[] = [
  { ground: "Race, colour, ethnicity, ancestry, caste or descent", treatment: "Protected", tone: "green", notes: "No inference from name, photo, language, location or cultural markers." },
  { ground: "National origin, nationality or citizenship", treatment: "Protected, with checks", tone: "amber", notes: "Eligibility checks only through the approved uniform workflow." },
  { ground: "Religion, belief or non-belief", treatment: "Protected", tone: "green", notes: "No coded \"preferred faith\" language." },
  { ground: "Sex", treatment: "Protected", tone: "green", notes: "Shared-facility exceptions need structured, market-approved criteria." },
  { ground: "Sexual orientation", treatment: "Protected", tone: "green", notes: "Platform-wide, regardless of narrower local law." },
  { ground: "Gender identity or expression", treatment: "Protected", tone: "green", notes: "Includes misgendering or identity-based exclusion." },
  { ground: "Pregnancy, maternity or reproductive status", treatment: "Protected", tone: "green", notes: "No exclusion or disadvantage due to pregnancy or parental status." },
  { ground: "Family, familial or parental status", treatment: "Protected", tone: "green", notes: "\"No children\" requires a lawful, market-specific basis." },
  { ground: "Disability, health condition or neurodivergence", treatment: "Protected", tone: "green", notes: "Includes accommodation and assistance-animal rules." },
  { ground: "Age", treatment: "Protected, with lawful limits", tone: "amber", notes: "Age-restricted or adult-only housing needs a structured legal basis." },
  { ground: "Marital, civil-partnership or relationship status", treatment: "Protected", tone: "green", notes: "No exclusion based on single, married or divorced status." },
  { ground: "Source of lawful income / benefits", treatment: "Protected as policy", tone: "amber", notes: "Affordability may be assessed on amount and reliability, not stigma." },
  { ground: "Military or veteran status", treatment: "Protected as policy", tone: "amber", notes: "Some markets add explicit statutory duties." },
  { ground: "Immigration status", treatment: "Protected against bias", tone: "amber", notes: "Eligibility checks preserved; never conflated with nationality or race." },
  { ground: "Other locally protected status", treatment: "Where market applies", tone: "gray", notes: "Local rules can add state, provincial or city-level grounds." },
];

export const prohibitedConduct = [
  { title: "Refusal or exclusion", description: "Refusing to consider, rent to, communicate with, or progress someone because of a protected ground." },
  { title: "Different terms", description: "Different rent, deposit, fees, stay length, access or house rules based on protected status." },
  { title: "Steering", description: "Directing users toward or away from rooms or areas because of a protected attribute." },
  { title: "Discriminatory advertising", description: "Listing text, photos, or off-platform links that signal a prohibited preference." },
  { title: "Discriminatory screening", description: "Different income thresholds, documentation demands or response times for different groups." },
  { title: "Proxy discrimination", description: "Using names, schools, postcodes or social profiles to reproduce excluded outcomes." },
  { title: "Selective availability", description: "Claiming a room is unavailable to one person while offering it to another." },
  { title: "Retaliation", description: "Punishing someone for reporting discrimination or requesting an accommodation." },
  { title: "Off-platform circumvention", description: "Moving discriminatory screening to WhatsApp, phone or external forms to dodge controls." },
];

export const legitimateCriteria: { criterion: string; posture: string; guardrail: string }[] = [
  { criterion: "Affordability / income", posture: "Assess ability to pay with consistent criteria.", guardrail: "Accept lawful income sources; no source-based stigma." },
  { criterion: "Identity verification", posture: "Verify identity where necessary.", guardrail: "Same workflow for every comparable applicant." },
  { criterion: "Credit / tenancy history", posture: "Use where lawful and disclosed.", guardrail: "No protected-status proxies in scoring." },
  { criterion: "References", posture: "Request neutral references where lawful.", guardrail: "Don't demand culturally narrow reference types." },
  { criterion: "Occupancy limits", posture: "Enforce lawful, objective capacity limits.", guardrail: "Never a pretext to exclude families." },
  { criterion: "Smoking / substance rules", posture: "Set lawful property conduct rules.", guardrail: "Apply to conduct, not disability or medical status." },
  { criterion: "Pets", posture: "Set pet rules.", guardrail: "Assistance-animal requirements override ordinary pet rules." },
  { criterion: "Legal rental eligibility", posture: "Conduct required eligibility checks.", guardrail: "Only through the approved uniform process — no nationality shortcuts." },
];

export const accessibilityCards = [
  {
    title: "Request accessibility support",
    description: "Tell us what you need and we'll route it to a trained specialist. Accommodation requests tied to a live housing transaction are prioritised.",
    points: [
      "Accessible form, plus chat, email or phone where supported",
      "Alternative communication formats on request",
      "Health and accessibility details kept separate from your general profile",
    ],
  },
  {
    title: "What listings should tell you",
    description: "Structured accessibility features — step-free routes, lift access, doorway widths, bathroom features — with a verification status where a host has confirmed them.",
    points: [
      "Qualifying assistance animals are never treated as ordinary pets",
      "Accommodation requests against neutral house rules aren't auto-denied",
      "A denial comes with reasoning and, where appropriate, an alternative",
    ],
  },
];

export const harassmentRouting = [
  { what: "A discriminatory message, slur, or exclusion", where: "Discrimination queue" },
  { what: "A threat or immediate danger", where: "Safety escalation first" },
  { what: "A retaliatory cancellation or eviction threat", where: "High-priority transaction review" },
  { what: "Harassment in shared accommodation", where: "Safety + discrimination, dual track" },
  { what: "Retaliation after an accommodation request", where: "Accommodation specialist" },
  { what: "Reporting on behalf of someone else", where: "Third-party report, with consent check" },
];

export const enforcementLevels = [
  { title: "Policy reminder & guidance", description: "First-time, lower-severity wording or conduct issues.", tone: "bg-emerald-400" },
  { title: "Listing or message correction", description: "Discriminatory wording removed or edited before republishing.", tone: "bg-emerald-500" },
  { title: "Feature restriction", description: "Listing publication or messaging limited pending review.", tone: "bg-amber-500" },
  { title: "Temporary suspension", description: "Repeated or serious discriminatory conduct, or an open investigation.", tone: "bg-brand-red" },
  { title: "Permanent removal", description: "Egregious or repeated discrimination, subject to governed human review.", tone: "bg-red-900" },
];

export const reportSteps = ["Where", "What happened", "Related to", "Evidence", "What you need"];

export const reportWhereOptions = ["Listing", "Message", "Application / decision", "Stay / tenancy", "Other"];

export const reportConductOptions = [
  "Refusal or exclusion",
  "Different terms",
  "Steering",
  "Discriminatory advertising or screening",
  "Selective availability",
  "Retaliation",
  "Harassment",
  "A threat or immediate danger",
  "Other",
];

export const reportGroundOptions = [
  "Race, ethnicity, or national origin",
  "Religion or belief",
  "Sex, sexual orientation, or gender identity",
  "Pregnancy or family status",
  "Disability or health condition",
  "Age",
  "Source of income or immigration status",
  "I'd rather not say",
];

export const reportOutcomeOptions = [
  "I just want this reported and reviewed",
  "I need a specific accommodation or adjustment",
  "I need urgent safety help",
  "I'd like someone to contact me directly",
];

export const faqs = [
  {
    question: "Can a host say \"no children\" or \"no pets\"?",
    answer:
      "\"No pets\" can be a lawful house rule, but assistance animals are never treated as ordinary pets. \"No children\" is treated as family-status discrimination unless a specific market pack recognizes a narrow, lawful exception for that listing type.",
  },
  {
    question: "Is a Right to Rent check discriminatory?",
    answer:
      "Not when it's the required, uniform check applied to every applicant through the approved workflow. It becomes discriminatory the moment it's applied selectively — for example, only to applicants who look or sound like they might not be citizens.",
  },
  {
    question: "Can I be excluded for receiving housing benefit?",
    answer:
      "No. Blanket \"no DSS\" or no-benefits exclusions are prohibited platform policy, regardless of whether local law treats source of income as a protected ground.",
  },
  {
    question: "What happens after I submit a discrimination report?",
    answer:
      "Your report is routed based on what happened — straight to safety escalation for a threat, to the discrimination queue for other conduct — and reviewed by a trained specialist, with confidentiality maintained on a need-to-know basis.",
  },
  {
    question: "Will reporting discrimination affect my account?",
    answer:
      "No. Retaliation against anyone for reporting discrimination or requesting an accommodation is itself prohibited conduct, and is tracked separately if it occurs.",
  },
];
