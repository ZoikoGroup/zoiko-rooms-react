import type { PillTone } from "./shared";

export const previewCards: { title: string; status: string; tone: PillTone }[] = [
  { title: "Essential & Security", status: "Always active", tone: "gray" },
  { title: "Preferences & Functionality", status: "Region dependent", tone: "amber" },
  { title: "Analytics & Measurement", status: "Region dependent", tone: "amber" },
  { title: "Advertising & Personalisation", status: "Your choice", tone: "green" },
  { title: "External Media & Integrations", status: "Your choice", tone: "green" },
];

export type CategoryRow = {
  category: string;
  purpose: string;
  treatment: string;
  tone: PillTone;
  examples: string;
};

export const categoryRows: CategoryRow[] = [
  {
    category: "Essential & Security",
    purpose: "Sign-in, session continuity, transaction integrity, fraud prevention, load balancing, consent storage.",
    treatment: "Always active",
    tone: "gray",
    examples: "Session ID, CSRF token, fraud/security token, consent-state cookie",
  },
  {
    category: "Preferences & Functionality",
    purpose: "Remember non-essential interface choices and enhanced functions.",
    treatment: "Region dependent",
    tone: "amber",
    examples: "Language preference, display choices, optional feature state",
  },
  {
    category: "Analytics & Measurement",
    purpose: "Understand aggregate use, diagnose performance, improve product journeys.",
    treatment: "Consent-gated",
    tone: "green",
    examples: "First-party analytics, performance measurement, experiment measurement",
  },
  {
    category: "Advertising & Personalisation",
    purpose: "Measure or personalise advertising; build or use advertising audiences where permitted.",
    treatment: "Off by default",
    tone: "rose",
    examples: "Ad conversion tags, audience pixels, campaign attribution",
  },
  {
    category: "External Media & Integrations",
    purpose: "Load third-party maps, video, chat, social or embedded services.",
    treatment: "Gated",
    tone: "rose",
    examples: "Video player, map embed, social content, support widget",
  },
];

export type InventoryTech = {
  technology: string;
  provider: string;
  domain: string;
  purpose: string;
  type: string;
  party: "First" | "Third";
  duration: string;
  trigger: string;
  control: string;
};

export const inventoryGroups: { category: string; items: InventoryTech[] }[] = [
  {
    category: "Essential & Security",
    items: [
      { technology: "Session ID (zk_session)", provider: "Zoiko Rooms", domain: "zoikorooms.example", purpose: "Keeps you signed in during your visit.", type: "Cookie", party: "First", duration: "Session", trigger: "Sign-in", control: "Always active" },
      { technology: "CSRF token (zk_csrf)", provider: "Zoiko Rooms", domain: "zoikorooms.example", purpose: "Protects forms and payments from cross-site request forgery.", type: "Cookie", party: "First", duration: "Session", trigger: "Page load", control: "Always active" },
      { technology: "Consent-state record (zk_consent)", provider: "Zoiko Rooms", domain: "zoikorooms.example", purpose: "Remembers your cookie choices so we don't ask again unnecessarily.", type: "Cookie", party: "First", duration: "12 months", trigger: "Preference save", control: "Always active" },
    ],
  },
  {
    category: "Preferences & Functionality",
    items: [
      { technology: "Display preference (zk_prefs)", provider: "Zoiko Rooms", domain: "zoikorooms.example", purpose: "Remembers language and layout choices.", type: "Local storage", party: "First", duration: "6 months", trigger: "Setting change", control: "Optional — appearance exception (UK)" },
    ],
  },
  {
    category: "Analytics & Measurement",
    items: [
      { technology: "Aggregate analytics (zk_ana)", provider: "Zoiko Rooms (first-party analytics)", domain: "zoikorooms.example", purpose: "Measures aggregate feature usage to improve the product.", type: "Cookie", party: "First", duration: "13 months", trigger: "Page load", control: "Managed in Cookie Preferences" },
      { technology: "Experiment measurement (zk_exp)", provider: "Zoiko Rooms", domain: "zoikorooms.example", purpose: "Measures which product test group you're in.", type: "Local storage", party: "First", duration: "30 days", trigger: "Consent", control: "Managed in Cookie Preferences" },
    ],
  },
  {
    category: "Advertising & Personalisation",
    items: [
      { technology: "Conversion tag (_ad_conv)", provider: "Named ad platform partner", domain: "Third-party domain", purpose: "Measures whether an ad led to a completed booking.", type: "Pixel / tag", party: "Third", duration: "90 days", trigger: "Consent", control: "Managed in Cookie Preferences" },
      { technology: "Audience pixel (_aud_ps)", provider: "Named ad platform partner", domain: "Third-party domain", purpose: "Builds an advertising audience from site visitors, where permitted.", type: "Pixel", party: "Third", duration: "90 days", trigger: "Consent", control: "Managed in Cookie Preferences" },
    ],
  },
  {
    category: "External Media & Integrations",
    items: [
      { technology: "Map embed", provider: "Named mapping provider", domain: "Third-party domain", purpose: "Shows room location on an interactive map.", type: "Embed", party: "Third", duration: "Session", trigger: "User-initiated load", control: "User-initiated embed" },
      { technology: "Support chat widget", provider: "Named support platform", domain: "Third-party domain", purpose: "Loads live chat when you open support.", type: "Script / embed", party: "Third", duration: "Session", trigger: "User opens chat", control: "User-initiated embed" },
    ],
  },
];

export const providerQuestions = [
  { question: "Who sets or receives it?", answer: "We name the Zoiko Rooms entity and the specific third-party provider or recipient role — never a generic \"partners.\"" },
  { question: "Why is the third party involved?", answer: "Tied to a specific capability, such as advertising measurement or map rendering — not a vague catch-all purpose." },
  { question: "What can be transmitted?", answer: "Understandable categories: device/browser data, page/event data, approximate location, or account/booking event identifiers where applicable." },
  { question: "Used for the provider's own purposes?", answer: "Flagged explicitly where a provider acts as an independent controller for its own purposes, not just as our processor." },
  { question: "Does it cross borders?", answer: "Our Privacy Notice covers international transfer mechanisms in detail — we don't overstuff this table with transfer clauses." },
  { question: "How can it be controlled?", answer: "Zoiko Rooms first-party controls in Cookie Preferences come first; provider opt-out links are supplementary, never the only mechanism." },
];

export const englandUseCases = [
  { useCase: "Strictly necessary", treatment: "Operates without consent only where a genuine PECR exception applies — still explained transparently here." },
  { useCase: "Statistical purposes", treatment: "May qualify for the newer purpose-specific exception only where all statutory and ICO conditions are met and configured to stay within them." },
  { useCase: "Appearance / functionality preference", treatment: "May qualify for the current appearance exception under the specific conditions — never generalised to unrelated functionality." },
  { useCase: "Advertising / profiling", treatment: "Consent-gated where required; never folded into a statistical or appearance exception to avoid asking." },
  { useCase: "Mixed-purpose technology", treatment: "If one purpose needs consent, an exception for another purpose on the same tag doesn't authorise the mixed use — we split the technology or obtain consent." },
  { useCase: "Consent withdrawal", treatment: "As easy to withdraw as it was to give; Cookie Preferences stays persistently reachable from every page." },
  { useCase: "Children", treatment: "Heightened data-protection-by-design and age-appropriate controls apply where the service is likely to be accessed by children." },
];

export const marketPacks = [
  { title: "EEA / EU", description: "Consent-first for non-essential storage or access, GDPR-valid consent conditions, and no deceptive design — reviewed per member state before launch." },
  { title: "United States — state overlay", description: "No fictional single \"US cookie law.\" State sale/share/targeted-ad rules and recognized opt-out signals are mapped individually; cookie consent and statutory opt-outs stay distinct concepts." },
  { title: "California", description: "Where Zoiko Rooms sells or shares personal information as defined by law, we honor qualifying signals like GPC — you're never required to configure each vendor individually." },
  { title: "Brazil", description: "LGPD/ANPD transparency and consent guidance, with a maintained local-language legal pack." },
  { title: "Canada", description: "Meaningful consent, with an easy, persistent opt-out model for behavioural advertising that avoids sensitive or children's tracking." },
  { title: "Australia", description: "Privacy Act / APP minimization — tracking pixels don't disclose sensitive information without the required consent or authority." },
  { title: "India", description: "Mapped to DPDP Act/Rules processing requirements where applicable — EU cookie terminology isn't imported as if it were Indian statute." },
];
