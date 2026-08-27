import type { LucideIcon } from "lucide-react";
import { User, Home, TriangleAlert, Share2, Briefcase, MessageSquare, UserCheck, ShieldCheck, Clock, Languages } from "lucide-react";

export type TeamCard = {
  key: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
  contact: string;
  meta: string;
  reportLink?: boolean;
};

export const teamCards: TeamCard[] = [
  {
    key: "room-seekers",
    icon: User,
    title: "Room seekers & general support",
    description: "Questions about searching, applications, agreements, payments, or your account.",
    contact: "support@zoikorooms.com",
    meta: "avg. reply 4h",
  },
  {
    key: "providers",
    icon: Home,
    title: "Providers & listings",
    description: "Help listing a room, verification questions, or managing an existing listing.",
    contact: "providers@zoikorooms.com",
    meta: "avg. reply 6h",
  },
  {
    key: "trust-safety",
    icon: TriangleAlert,
    title: "Trust & safety — report a concern",
    description: "Suspected scam, impersonation, discrimination, or a safety issue with a listing or user.",
    highlight: true,
    contact: "",
    meta: "Priority queue · reviewed within 1 hour",
    reportLink: true,
  },
  {
    key: "organizations",
    icon: Share2,
    title: "Organizations & institutions",
    description: "Universities, employers, healthcare, mobility, and public-sector partnerships.",
    contact: "organizations@zoikorooms.com",
    meta: "1 business day",
  },
  {
    key: "pro",
    icon: Briefcase,
    title: "Zoiko Rooms Pro & integrations",
    description: "Portfolio operations, API access, and enterprise sales conversations.",
    contact: "pro@zoikorooms.com",
    meta: "1 business day",
  },
  {
    key: "press",
    icon: MessageSquare,
    title: "Press & media",
    description: "Interview requests, data requests, and media inquiries.",
    contact: "press@zoikorooms.com",
    meta: "2 business days",
  },
];

export const helpTopics = [
  "General support",
  "Providers & listings",
  "Trust & safety",
  "Organizations & institutions",
  "Zoiko Rooms Pro & integrations",
  "Press & media",
];

export const responseTimes = [
  { label: "General support", time: "~4 hours" },
  { label: "Providers & listings", time: "~6 hours" },
  { label: "Trust & safety", time: "~1 hour" },
  { label: "Organizations / Pro", time: "1 business day" },
];

export type WhyCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyDifferentCards: WhyCard[] = [
  {
    icon: UserCheck,
    title: "Real people",
    description: "Every message is read and answered by a person on the team it's routed to — never a fully automated reply.",
  },
  {
    icon: ShieldCheck,
    title: "Verified replies only",
    description: "We only ever reply from an @zoikorooms.com address — never a personal email or a different domain.",
  },
  {
    icon: Clock,
    title: "Honest timeframes",
    description: "Response times shown above are real medians, not aspirational marketing numbers.",
  },
  {
    icon: Languages,
    title: "Multilingual",
    description: "Support available in 12 languages, so you can explain your situation in the language you're most comfortable in.",
  },
];

export type MarketCard = {
  city: string;
  description: string;
  status: string;
};

export const marketCards: MarketCard[] = [
  { city: "Berlin", description: "Headquarters & trust & safety hub", status: "Live market" },
  { city: "Amsterdam", description: "Regional support team", status: "Live market" },
  { city: "Lisbon", description: "Regional support team", status: "Live market" },
  { city: "Nairobi", description: "Regional support team", status: "Live market" },
];

export type ContactFaq = {
  question: string;
  answer: string;
};

export const contactFaqs: ContactFaq[] = [
  {
    question: "How fast will I hear back?",
    answer:
      "General support replies average around 4 hours. Trust & safety reports are reviewed within about an hour. You'll always get an automatic confirmation the moment your message arrives.",
  },
  {
    question: "How do I know a reply is really from Zoiko Rooms?",
    answer:
      "We only ever reply from a verified @zoikorooms.com email address. We will never ask for your password, one-time codes, or payment details by email or message.",
  },
  {
    question: "I think I'm being scammed — what do I do?",
    answer:
      "Stop all payment or credential sharing immediately, then use the Trust & Safety report option above — it's reviewed within about an hour, not a standard support queue.",
  },
  {
    question: "Can I call instead of emailing?",
    answer:
      "Live chat is available on weekdays for faster back-and-forth. Phone support varies by market — your regional team will share a number if a call is the right next step.",
  },
  {
    question: "I'm a provider — where do I get listing help?",
    answer:
      "Use the Providers & Listings option above, or visit the Help Center for step-by-step guides on starting and managing a listing.",
  },
];
