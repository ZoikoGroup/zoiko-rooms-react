export type NavLink = {
  label: string;
  href: string;
};

export type NavSection = {
  key: string;
  label: string;
  href: string;
  links: NavLink[];
};

// Sub-links all point at the parent section's placeholder page for now —
// swap in real routes as each destination page gets built.
function withParentHref(href: string, labels: string[]): NavLink[] {
  return labels.map((label) => ({ label, href }));
}

export const navSections: NavSection[] = [
  {
    key: "find-a-room",
    label: "Find a Room",
    href: "/find-a-room",
    links: withParentHref("/find-a-room", [
      "Overview",
      "Search Rooms",
      "Rooms by City",
      "University Rooms",
      "Work & Healthcare",
      "International Moves",
    ]),
  },
  {
    key: "list-a-room",
    label: "List a Room",
    href: "/list-a-room",
    links: withParentHref("/list-a-room", [
      "Overview",
      "Start a Listing",
      "Live-in Providers",
      "Landlords & Agents",
      "Authorized Sublets",
      "Requirements & Pricing",
    ]),
  },
  {
    key: "how-it-works",
    label: "How It Works",
    href: "/how-it-works",
    links: withParentHref("/how-it-works", [
      "Overview",
      "For Room Seekers",
      "For Providers",
      "Verification & Authority",
      "Room Passport",
      "Payments & Safety",
    ]),
  },
  {
    key: "organizations",
    label: "Organizations",
    href: "/organizations",
    links: withParentHref("/organizations", [
      "Overview",
      "Universities",
      "Employers",
      "Healthcare",
      "Relocation & Mobility",
      "Public Sector",
    ]),
  },
  {
    key: "pro",
    label: "Zoiko Rooms Pro",
    href: "/pro",
    links: withParentHref("/pro", [
      "Compliance & Verification",
      "Integrations & API",
    ]),
  },
  {
    key: "resources",
    label: "Resources",
    href: "/resources",
    links: withParentHref("/resources", ["Help Center", "Safety & Scam Prevention"]),
  },
];

// Legal links have no destination pages yet — placeholder "#" until built.
export const legalLinks: NavLink[] = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Cookie preferences", href: "#" },
  { label: "Fair housing", href: "#" },
];
