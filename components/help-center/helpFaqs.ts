export interface HelpFaq {
  id: string;
  question: string;
  answer: string;
  href: string;
  linkLabel: string;
}

export const helpFaqs: HelpFaq[] = [
  {
    id: "search-room",
    question: "How do I search for a room?",
    answer:
      "Use the search bar on Find a Room to filter by location, move-in date, and monthly budget, then compare current listings side by side before you contact a provider.",
    href: "/find-a-room/search-rooms",
    linkLabel: "Search Rooms",
  },
  {
    id: "verify-payment",
    question: "How do I verify where a payment should go?",
    answer:
      "Always check the payment request shown inside your account before paying. Never pay based on a message, email, or text that conflicts with your account record.",
    href: "/how-it-works/payments-safety-support",
    linkLabel: "Payments, Safety & Support",
  },
  {
    id: "room-passport",
    question: "What is a Room Passport?",
    answer:
      "A Room Passport is the record of sourced, dated facts about one specific room — address, size, access, and more — so you're never relying on an unverified claim.",
    href: "/how-it-works/room-passport",
    linkLabel: "Room Passport",
  },
  {
    id: "list-a-room",
    question: "How do I list a room?",
    answer:
      "Start a listing, confirm your relationship to the property, and complete your Room Passport with evidence before you publish.",
    href: "/list-a-room/start-a-listing",
    linkLabel: "Start a Listing",
  },
  {
    id: "password-request",
    question: "What if someone asks for my password or a verification code?",
    answer:
      "Don't share it. Zoiko Rooms will never ask for your password or a one-time verification code in a message, email, or call. Stop contact and report it.",
    href: "/resources/safety-scam-prevention",
    linkLabel: "Safety & Scam Prevention",
  },
  {
    id: "verified-listing",
    question: "How do I know if a listing is verified?",
    answer:
      "Check the Room Passport's status badges — each one shows whether identity, authority, or property evidence is declared, documented, or inspected, and when it was last reviewed.",
    href: "/how-it-works/verification-authority",
    linkLabel: "Verification & Authority",
  },
  {
    id: "report-scam",
    question: "How do I report a scam or a suspicious listing?",
    answer:
      "Use the Risk Checker to get a severity band and next steps, or go straight to the Report a Safety Issue form if you already know what happened.",
    href: "/resources/safety-scam-prevention",
    linkLabel: "Safety & Scam Prevention",
  },
  {
    id: "review-agreement",
    question: "How do I review a room agreement before signing?",
    answer:
      "Compare the recipient, dates, and cost against what you were originally shown. If something looks wrong, request a correction — this pauses signing until it's resolved.",
    href: "/agreement-review-signing",
    linkLabel: "Agreement Review & Signing",
  },
  {
    id: "payment-failed",
    question: "What happens if my payment fails or is delayed?",
    answer:
      "You'll see the current status directly in your account. Failed or pending payments are never silently retried — you'll be told whether retrying is safe before you do anything.",
    href: "/how-it-works/payments-safety-support",
    linkLabel: "Payments, Safety & Support",
  },
  {
    id: "org-pro-help",
    question: "How do I get help as an organization or Pro operator?",
    answer:
      "Zoiko Rooms Pro covers portfolio management, compliance, institutional distribution, and integrations in one governed operating view.",
    href: "/pro/overview",
    linkLabel: "Zoiko Rooms Pro",
  },
  {
    id: "help-without-account",
    question: "Can I get help without creating an account?",
    answer:
      "Yes. Most Help Center content and Guides are open without signing in — you'll only be asked to sign in when opening or changing something private.",
    href: "/resources/guides",
    linkLabel: "Guides",
  },
  {
    id: "cancel-application",
    question: "How do I change or cancel a room application?",
    answer:
      "Applications can usually be withdrawn from your account before a decision is made. Once approved, changes typically move through the agreement instead.",
    href: "/how-it-works/for-room-seekers",
    linkLabel: "For Room Seekers",
  },
  {
    id: "accessibility-not-listed",
    question: "What if a room's accessibility needs aren't listed?",
    answer:
      "Report the specific missing or unclear detail. We show the source and date behind every accessibility fact rather than a blanket \"accessible\" label with no evidence.",
    href: "/legal/fair-housing-anti-discrimination",
    linkLabel: "Fair Housing & Anti-Discrimination",
  },
  {
    id: "glossary-term",
    question: "What does a specific rental term mean?",
    answer:
      "The Room Rental Glossary explains controlled terms — like holding deposit, direct billing, or authorized sublet — in plain language, with related terms and journeys linked.",
    href: "/resources/glossary",
    linkLabel: "Room Rental Glossary",
  },
];
