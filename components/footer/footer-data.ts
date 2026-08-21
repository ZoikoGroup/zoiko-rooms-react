import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Scale, Lock, MessageCircle } from "lucide-react";
import type { NavLink } from "@/lib/nav-data";

export type FooterColumnData = {
  title: string;
  links: NavLink[];
};

export const footerColumns: FooterColumnData[] = [
  {
    title: "Find a Room",
    links: [
      { label: "Overview", href: "/find-a-room" },
      { label: "Search Rooms", href: "/find-a-room/search-rooms" },
      { label: "Rooms by City", href: "/rooms-by-city" },
      { label: "University Rooms", href: "/find-a-room/university-rooms" },
      { label: "Work & Healthcare", href: "/find-a-room/work-healthcare-rooms" },
      { label: "International Moves", href: "/find-a-room/international-moves" },
    ],
  },
  {
    title: "List a Room",
    links: [
      { label: "Overview", href: "/list-a-room" },
      { label: "Start a Listing", href: "/list-a-room/start-a-listing" },
      { label: "Live-in Providers", href: "/list-a-room/live-in-providers" },
      { label: "Landlords & Agents", href: "/list-a-room/landlords-agents" },
      { label: "Authorized Sublets", href: "/list-a-room/authorized-sublets" },
      { label: "Requirement & Pricing", href: "/list-a-room/requirements-pricing" },
    ],
  },
  {
    title: "How It Works",
    links: [
      { label: "Overview", href: "/how-it-works" },
      { label: "For Room Seekers", href: "/how-it-works/for-room-seekers" },
      { label: "For Providers", href: "/how-it-works/for-providers" },
      { label: "Verification & Authority", href: "/how-it-works/verification-authority" },
      { label: "Room Passport", href: "/how-it-works/room-passport" },
      { label: "Payments & Safety", href: "/how-it-works/payments-safety-support" },
    ],
  },
  {
    title: "Organizations",
    links: [
      { label: "Overview", href: "/organizations" },
      { label: "Universities", href: "/organizations" },
      { label: "Employers", href: "/organizations" },
      { label: "Healthcare", href: "/organizations" },
      { label: "Relocation & Mobility", href: "/organizations" },
      { label: "Public Sector", href: "/organizations" },
    ],
  },
  {
    title: "Pro & Resources",
    links: [
      { label: "Zoiko Rooms Pro", href: "/pro" },
      { label: "Compliance & Verification", href: "/pro" },
      { label: "Integrations & API", href: "/pro" },
      { label: "Resources", href: "/resources" },
      { label: "Help Center", href: "/resources" },
      { label: "Safety & Scam Prevention", href: "/resources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Use", href: "/legal/terms-of-use" },
      { label: "Privacy Notice", href: "/legal/privacy-notice" },
      { label: "Cookie Notice", href: "/legal/cookie-notice" },
      { label: "Cookie Preferences", href: "/legal/cookie-preferences" },
      { label: "Fair Housing & Anti-Discrimination", href: "/legal/fair-housing-anti-discrimination" },
      { label: "Community Standards", href: "#" },
      { label: "Payment Terms", href: "/legal/payment-terms" },
      { label: "Regional Legal Notices", href: "/legal/regional-notice" },
      { label: "Your Privacy Choices", href: "/legal/your-privacy-choices" },
    ],
  },
];

export type TrustBadge = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tone: "red" | "teal" | "blue" | "purple";
};

export const trustBadges: TrustBadge[] = [
  {
    icon: ShieldCheck,
    title: "Evidence-Specific Verification",
    description: "See exactly which identity, authority, property, or regulatory checks have been completed.",
    href: "/how-it-works",
    tone: "red",
  },
  {
    icon: Scale,
    title: "Fair Housing by Design",
    description: "Anti-discrimination rules and accountable compatibility controls.",
    href: "/legal/fair-housing-anti-discrimination",
    tone: "teal",
  },
  {
    icon: Lock,
    title: "Security and Privacy",
    description: "Platform security, privacy controls, and responsible data practices.",
    href: "#",
    tone: "blue",
  },
  {
    icon: MessageCircle,
    title: "Support and Reporting",
    description: "Direct access to support, reporting, and urgent-safety boundaries.",
    href: "/how-it-works/payments-safety-support",
    tone: "purple",
  },
];

export type FooterOffice = {
  title: string;
  name: string;
  address: string;
};

export const footerOffices: FooterOffice[] = [
  {
    title: "Headquarters",
    name: "Zoiko Rooms",
    address: "1401 21st Street, Suite R Sacramento, CA 95811 USA",
  },
  {
    title: "European Headquarters",
    name: "Zoiko Rooms",
    address: "167-169 Great Portland Street 5th Floor London W1W 5PF UK",
  },
];
