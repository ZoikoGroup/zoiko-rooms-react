export const roleOptions = ["Room Seeker", "Provider", "Organization", "Zoiko Rooms Pro Operator", "Representative / Advocate", "General Visitor"];

export type Destination = {
  key: string;
  title: string;
  description: string;
  audience: string;
  tags: string[];
  boundary: string;
  cta: string;
  href: string;
  status: "current" | "route";
  image: string;
};

export const destinations: Destination[] = [
  {
    key: "help-center",
    title: "Help Center",
    description: "Resolve product, account, workflow, payment, and support questions.",
    audience: "For anyone with an active account issue or case.",
    tags: ["Payment status", "Account access", "Report a concern"],
    boundary: "Self-service and support routing — not a replacement for private case status.",
    cta: "Open Help Center",
    href: "/resources/help-center",
    status: "current",
    image: "/images/resources-overview/destination-help-center.png",
  },
  {
    key: "guides",
    title: "Guides",
    description: "Follow role- and journey-based, step-by-step education.",
    audience: "For seekers, providers, organizations, and Pro operators.",
    tags: ["Review an agreement", "Confirm a payment", "Set up a Room Passport"],
    boundary: "Stable, general journeys — not city-specific or case-specific decisions.",
    cta: "Browse Guides",
    href: "/resources",
    status: "current",
    image: "/images/resources-overview/destination-guides.png",
  },
  {
    key: "city-guides",
    title: "City Guides",
    description: "Provide sourced local context for planning a room search and move.",
    audience: "For local, relocating, and international seekers.",
    tags: ["Berlin rental basics", "Local costs", "Transit context"],
    boundary: "No blanket legal, safety, cost, availability, or neighborhood guarantee.",
    cta: "Explore City Guides",
    href: "/resources/city-guides",
    status: "current",
    image: "/images/resources-overview/destination-city-guides.png",
  },
  {
    key: "safety-scam-prevention",
    title: "Safety & Scam Prevention",
    description: "Recognize, stop, verify, preserve evidence, and escalate high-risk activity.",
    audience: "For anyone who's seen a warning sign, at any stage.",
    tags: ["Payment redirection", "Impersonation", "Unsafe viewings"],
    boundary: "Prevention and support — not emergency response or universal safety certification.",
    cta: "Review Safety Guidance",
    href: "/resources/safety-scam-prevention",
    status: "current",
    image: "/images/resources-overview/destination-safety-scam-prevention.png",
  },
  {
    key: "glossary",
    title: "Room Rental Glossary",
    description: "Explain controlled terms used across Zoiko Rooms and common rental journeys.",
    audience: "For anyone unsure what a term or status actually means.",
    tags: ["Security deposit", "Room Passport", "Direct billing"],
    boundary: "Plain-language definitions — not legal definitions unless sourced and scoped.",
    cta: "Open Glossary",
    href: "/resources/glossary",
    status: "current",
    image: "/images/resources-overview/destination-glossary.png",
  },
  {
    key: "choose-support",
    title: "Choose Support",
    description: "Not sure which of the four resources above fits? Answer a few questions.",
    audience: "For anyone who isn't sure where to start.",
    tags: ["Role", "Stage", "Issue type", "Urgency"],
    boundary: "A routing tool — not a decision-maker or guaranteed answer.",
    cta: "Choose Support",
    href: "#faq",
    status: "route",
    image: "/images/resources-overview/destination-choose-support.png",
  },
];

export const boundaryPoints = [
  { title: "Sourced & scoped", description: "Every answer states its currentness, source, and what it doesn't cover." },
  { title: "Never one answer for every location", description: "Location context is optional, and never required for universal guidance." },
];

export const faqs = [
  {
    question: "Does search here guarantee a correct or complete answer?",
    answer:
      "No. Resources give current, sourced guidance — not a guaranteed answer, official legal advice, or an AI expert. For live status, always check your account or live product record.",
  },
  {
    question: "Do I need to pick a location to get useful guidance?",
    answer:
      "No. Location context is optional and only sharpens results where it applies — every destination still gives universal, non-location-specific guidance without it.",
  },
  {
    question: "What if none of the five destinations fit my question?",
    answer:
      "Use Choose Support — a short routing tool based on your role, stage, issue type, and urgency — to find the right next step instead of guessing between destinations.",
  },
];
