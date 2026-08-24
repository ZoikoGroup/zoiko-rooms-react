import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code2,
  FileText,
  GraduationCap,
  Globe,
  Compass,
  Home,
  HelpCircle,
  LayoutGrid,
  Plus,
  Search,
  ShieldCheck,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type NavMenuItem = {
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
};

export type NavMenuColumn = {
  title: string;
  items: NavMenuItem[];
};

export type NavMenuFit = {
  title: string;
  links: NavLink[];
};

export type NavSection = {
  key: string;
  label: string;
  href: string;
  columns: [NavMenuColumn, NavMenuColumn];
  fit: NavMenuFit;
};

export function sectionLinks(section: NavSection): NavLink[] {
  return section.columns.flatMap((column) =>
    column.items.map((item) => ({ label: item.label, href: item.href })),
  );
}

export const navSections: NavSection[] = [
  {
    key: "find-a-room",
    label: "Find a Room",
    href: "/find-a-room",
    columns: [
      {
        title: "Search & Explore",
        items: [
          {
            icon: Compass,
            label: "Find a Room overview",
            description: "Start here to see every way to search",
            href: "/find-a-room",
          },
          {
            icon: Search,
            label: "Search Rooms",
            description: "Filter by budget, dates, and features",
            href: "/find-a-room/search-rooms",
          },
          {
            icon: Home,
            label: "Rooms by City",
            description: "Cost patterns, transport, and coverage",
            href: "/rooms-by-city",
          },
        ],
      },
      {
        title: "By Situation",
        items: [
          {
            icon: GraduationCap,
            label: "University Rooms",
            description: "Near campus, matched to term dates",
            href: "/find-a-room/university-rooms",
          },
          {
            icon: Briefcase,
            label: "Work & Healthcare Rooms",
            description: "Near workplaces, hospitals, rotations",
            href: "/find-a-room/work-healthcare-rooms",
          },
          {
            icon: Globe,
            label: "International Moves",
            description: "Search before you arrive, safely",
            href: "/find-a-room/international-moves",
          },
        ],
      },
    ],
    fit: {
      title: "What's bringing you to Zoiko Rooms?",
      links: [
        { label: "I'm a student", href: "/find-a-room/university-rooms" },
        { label: "I'm relocating for work", href: "/find-a-room/work-healthcare-rooms" },
        { label: "I'm moving internationally", href: "/find-a-room/international-moves" },
      ],
    },
  },
  {
    key: "list-a-room",
    label: "List a Room",
    href: "/list-a-room",
    columns: [
      {
        title: "Get Started",
        items: [
          {
            icon: Compass,
            label: "List a Room overview",
            description: "See requirements for your role",
            href: "/list-a-room",
          },
          {
            icon: Plus,
            label: "Start a Listing",
            description: "Create a Room Passport and publish",
            href: "/list-a-room/start-a-listing",
          },
          {
            icon: FileText,
            label: "Requirements & Pricing",
            description: "Evidence needed and current charges",
            href: "/list-a-room/requirements-pricing",
          },
        ],
      },
      {
        title: "By Provider Type",
        items: [
          {
            icon: Home,
            label: "Live-in Providers",
            description: "Offer a room where you live",
            href: "/list-a-room/live-in-providers",
          },
          {
            icon: Briefcase,
            label: "Landlords & Agents",
            description: "List with clear ownership or instruction",
            href: "/list-a-room/landlords-agents",
          },
          {
            icon: Code2,
            label: "Authorized Sublets",
            description: "Sublet within your permitted scope",
            href: "/list-a-room/authorized-sublets",
          },
        ],
      },
    ],
    fit: {
      title: "How are you offering the room?",
      links: [
        { label: "I live in the home", href: "/list-a-room/live-in-providers" },
        { label: "I own or manage it", href: "/list-a-room/landlords-agents" },
        { label: "I'm subletting", href: "/list-a-room/authorized-sublets" },
      ],
    },
  },
  {
    key: "how-it-works",
    label: "How It Works",
    href: "/how-it-works",
    columns: [
      {
        title: "By Audience",
        items: [
          {
            icon: Compass,
            label: "How It Works overview",
            description: "The full search-to-move-out journey",
            href: "/how-it-works",
          },
          {
            icon: Search,
            label: "For Room Seekers",
            description: "Search, review evidence, apply safely",
            href: "/how-it-works/for-room-seekers",
          },
          {
            icon: Plus,
            label: "For Providers",
            description: "List, verify, and manage demand",
            href: "/how-it-works/for-providers",
          },
        ],
      },
      {
        title: "Trust & Process",
        items: [
          {
            icon: ShieldCheck,
            label: "Verification & Authority",
            description: "What's checked, and what isn't",
            href: "/how-it-works/verification-authority",
          },
          {
            icon: FileText,
            label: "Room Passport",
            description: "The evidence-based room record",
            href: "/how-it-works/room-passport",
          },
          {
            icon: ShieldCheck,
            label: "Payments, Safety & Support",
            description: "Protection and human help",
            href: "/how-it-works/payments-safety-support",
          },
        ],
      },
    ],
    fit: {
      title: "What do you want to understand?",
      links: [
        { label: "I'm searching for a room", href: "/how-it-works/for-room-seekers" },
        { label: "I'm listing a room", href: "/how-it-works/for-providers" },
        { label: "How verification works", href: "/how-it-works/verification-authority" },
      ],
    },
  },
  {
    key: "organizations",
    label: "Organizations",
    href: "/organizations",
    columns: [
      {
        title: "By Sector",
        items: [
          {
            icon: Compass,
            label: "Organizations overview",
            description: "Accountable accommodation at scale",
            href: "/organizations",
          },
          {
            icon: GraduationCap,
            label: "Universities",
            description: "Referrals, safeguarding, reporting",
            href: "/organizations/universities",
          },
          {
            icon: Briefcase,
            label: "Employers",
            description: "Relocation and mobility programs",
            href: "/organizations/employers",
          },
        ],
      },
      {
        title: "More Sectors",
        items: [
          {
            icon: Globe,
            label: "Healthcare",
            description: "Clinicians, trainees, agency staff",
            href: "/organizations/healthcare",
          },
          {
            icon: Globe,
            label: "Relocation & Mobility",
            description: "Partner-distributed inventory",
            href: "/organizations/relocation-mobility",
          },
          {
            icon: Home,
            label: "Government & Public Sector",
            description: "Procurement-ready placement programs",
            href: "/organizations/government-public-sector",
          },
        ],
      },
    ],
    fit: {
      title: "What are you sourcing housing for?",
      links: [
        { label: "I manage student housing", href: "/organizations/universities" },
        { label: "I relocate employees", href: "/organizations/employers" },
        { label: "I place healthcare staff", href: "/organizations/healthcare" },
      ],
    },
  },
  {
    key: "pro",
    label: "Zoiko Rooms Pro",
    href: "/pro",
    columns: [
      {
        title: "Operate",
        items: [
          {
            icon: Compass,
            label: "Zoiko Rooms Pro overview",
            description: "The operating system for portfolios",
            href: "/pro/overview",
          },
          {
            icon: LayoutGrid,
            label: "Portfolio & Availability",
            description: "Rooms, pricing, and team workflow",
            href: "/pro/portfolio",
          },
          {
            icon: ShieldCheck,
            label: "Compliance & Verification",
            description: "Authority, evidence, jurisdiction rules",
            href: "/pro/compliance-and-verification",
          },
        ],
      },
      {
        title: "Scale",
        items: [
          {
            icon: FileText,
            label: "Applications, Agreements & Payments",
            description: "One transaction pipeline",
            href: "/pro/applications",
          },
          {
            icon: Globe,
            label: "Institutional Distribution",
            description: "Reach approved institutional demand",
            href: "/pro/institutional-distribution",
          },
          {
            icon: Code2,
            label: "Integrations & API",
            description: "Verified, permission-driven access",
            href: "/pro/integration-api",
          },
        ],
      },
    ],
    fit: {
      title: "What does your operation need?",
      links: [
        { label: "I manage multiple rooms", href: "/pro" },
        { label: "I need compliance tooling", href: "/pro" },
        { label: "I need to integrate systems", href: "/pro" },
      ],
    },
  },
  {
    key: "resources",
    label: "Resources",
    href: "/resources",
    columns: [
      {
        title: "Learn",
        items: [
          {
            icon: Compass,
            label: "Resources overview",
            description: "Help, guides, and safety in one place",
            href: "/resources",
          },
          {
            icon: HelpCircle,
            label: "Help Center",
            description: "Task-based product support",
            href: "/resources/help-center",
          },
          {
            icon: FileText,
            label: "Guides",
            description: "Seeker and provider education",
            href: "/resources",
          },
        ],
      },
      {
        title: "Stay Safe",
        items: [
          {
            icon: Home,
            label: "City Guides",
            description: "Local inventory and context",
            href: "/resources/city-guides",
          },
          {
            icon: ShieldCheck,
            label: "Safety & Scam Prevention",
            description: "Warning signs and reporting",
            href: "/resources/safety-scam-prevention",
          },
          {
            icon: FileText,
            label: "Room Rental Glossary",
            description: "Plain-language definitions",
            href: "/resources/glossary",
          },
        ],
      },
    ],
    fit: {
      title: "What do you need right now?",
      links: [
        { label: "I need help now", href: "/resources" },
        { label: "I want to learn the process", href: "/resources" },
        { label: "I'm worried about a scam", href: "/resources" },
      ],
    },
  },
];

// Legal links have no destination pages yet — placeholder "#" until built.
export const legalLinks: NavLink[] = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Fair Housing", href: "#" },
  { label: "Regional Notices", href: "#" },
  { label: "Your Privacy Choices", href: "#" },
];

export type PillOption = {
  code: string;
  label: string;
};

export const regionOptions: PillOption[] = [
  { code: "US", label: "United States" },
  { code: "CA", label: "Canada" },
  { code: "UK", label: "United Kingdom" },
];

// Drives real translation for the navbar and footer via lib/i18n — see
// LanguageProvider. Page body copy across the rest of the site stays English.
export const languageOptions: PillOption[] = [
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
  { code: "ES", label: "Español" },
  { code: "PT", label: "Português" },
];

export const currencyOptions: PillOption[] = [
  { code: "USD", label: "US Dollar (USD)" },
  { code: "EUR", label: "Euro (EUR)" },
  { code: "GBP", label: "British Pound (GBP)" },
];
