export type CostRow = { item: string; display: string };

export const providerTypeOptions = ["Live-in provider — private room", "Live-in provider — shared room"];
export const locationOptions = ["Berlin", "Amsterdam", "Lisbon", "Nairobi"];

export const costDisclosures: Record<string, Record<string, CostRow[]>> = {
  "Live-in provider — private room": {
    Berlin: [
      { item: "Monthly rent", display: "$1,100 per month" },
      { item: "Security deposit", display: "$1,100 due after agreement signing" },
      { item: "Required cleaning fee", display: "$50 one time" },
      { item: "Bills", display: "Internet included; electricity estimated at $60/month; water estimated at $30/month" },
      { item: "Known upfront total", display: "$2,250 plus any disclosed variable utility amount" },
      { item: "Known monthly total", display: "$1,190 estimated, including listed utilities" },
    ],
    Amsterdam: [
      { item: "Monthly rent", display: "$1,250 per month" },
      { item: "Security deposit", display: "$1,250 due after agreement signing" },
      { item: "Required cleaning fee", display: "$60 one time" },
      { item: "Bills", display: "Internet included; electricity estimated at $70/month; water estimated at $35/month" },
      { item: "Known upfront total", display: "$2,560 plus any disclosed variable utility amount" },
      { item: "Known monthly total", display: "$1,355 estimated, including listed utilities" },
    ],
    Lisbon: [
      { item: "Monthly rent", display: "$750 per month" },
      { item: "Security deposit", display: "$750 due after agreement signing" },
      { item: "Required cleaning fee", display: "$40 one time" },
      { item: "Bills", display: "Internet included; electricity estimated at $45/month; water estimated at $20/month" },
      { item: "Known upfront total", display: "$1,540 plus any disclosed variable utility amount" },
      { item: "Known monthly total", display: "$815 estimated, including listed utilities" },
    ],
    Nairobi: [
      { item: "Monthly rent", display: "$350 per month" },
      { item: "Security deposit", display: "$350 due after agreement signing" },
      { item: "Required cleaning fee", display: "$20 one time" },
      { item: "Bills", display: "Internet not included; electricity estimated at $25/month; water estimated at $10/month" },
      { item: "Known upfront total", display: "$720 plus any disclosed variable utility amount" },
      { item: "Known monthly total", display: "$385 estimated, including listed utilities" },
    ],
  },
  "Live-in provider — shared room": {
    Berlin: [
      { item: "Monthly rent", display: "$750 per month" },
      { item: "Security deposit", display: "$750 due after agreement signing" },
      { item: "Required cleaning fee", display: "$50 one time" },
      { item: "Bills", display: "Internet included; electricity estimated at $45/month; water estimated at $25/month" },
      { item: "Known upfront total", display: "$1,550 plus any disclosed variable utility amount" },
      { item: "Known monthly total", display: "$820 estimated, including listed utilities" },
    ],
    Amsterdam: [
      { item: "Monthly rent", display: "$850 per month" },
      { item: "Security deposit", display: "$850 due after agreement signing" },
      { item: "Required cleaning fee", display: "$60 one time" },
      { item: "Bills", display: "Internet included; electricity estimated at $55/month; water estimated at $25/month" },
      { item: "Known upfront total", display: "$1,760 plus any disclosed variable utility amount" },
      { item: "Known monthly total", display: "$930 estimated, including listed utilities" },
    ],
    Lisbon: [
      { item: "Monthly rent", display: "$500 per month" },
      { item: "Security deposit", display: "$500 due after agreement signing" },
      { item: "Required cleaning fee", display: "$40 one time" },
      { item: "Bills", display: "Internet included; electricity estimated at $35/month; water estimated at $15/month" },
      { item: "Known upfront total", display: "$1,040 plus any disclosed variable utility amount" },
      { item: "Known monthly total", display: "$550 estimated, including listed utilities" },
    ],
    Nairobi: [
      { item: "Monthly rent", display: "$220 per month" },
      { item: "Security deposit", display: "$220 due after agreement signing" },
      { item: "Required cleaning fee", display: "$20 one time" },
      { item: "Bills", display: "Internet not included; electricity estimated at $18/month; water estimated at $8/month" },
      { item: "Known upfront total", display: "$460 plus any disclosed variable utility amount" },
      { item: "Known monthly total", display: "$246 estimated, including listed utilities" },
    ],
  },
};

export const authorityStages = [
  "Identity",
  "Current residence",
  "Ownership / occupation / control",
  "Permission (if required)",
  "Room evidence",
  "Availability",
];

export const readinessItems = [
  "Room facts",
  "Household",
  "Access",
  "Media",
  "Availability",
  "Costs",
  "Viewing plan",
  "Agreement / payment",
];

export const householdCards = [
  { title: "Occupancy", description: "Current household size, intended additional occupancy, and room occupancy limit." },
  { title: "Bathroom", description: "Private, shared, or en suite; sharing count; access; cleaning responsibility." },
  { title: "Kitchen & cooking", description: "Access, storage, appliances, and any material schedule limits." },
  { title: "Quiet hours & visitors", description: "Specific times, overnight-guest policy, and shared-space impact." },
  { title: "Pets & smoking", description: "Current animals and home policy, described factually and neutrally." },
  { title: "Accessibility", description: "Specific physical and communication features, with known limitations stated." },
];

export const lifecycleStages = [
  "Path confirmed",
  "Private draft",
  "Identity in progress",
  "Residence / authority in progress",
  "Room / household details",
  "Fairness / privacy review",
  "Preview",
  "Published",
];

export const faqs = [
  {
    question: "Who is a live-in provider?",
    answer: "A person who currently lives in the home and offers a room within that occupied household through current authority.",
  },
  {
    question: "Does living in the home mean I can list the room?",
    answer:
      "No. Living in the home is necessary but not sufficient — Zoiko Rooms must also confirm your ownership, tenancy, occupancy, or permission before a listing can publish.",
  },
  {
    question: "What household information must I show?",
    answer:
      "Current household size, shared-space access, quiet hours, visitor policy, pets and smoking status, and any accessibility features — described as specific facts, not vague lifestyle labels.",
  },
  {
    question: "Can I choose a preferred type of housemate?",
    answer:
      "No. Listings may describe factual household arrangements and practical rules, but may not use discriminatory wording, coded exclusions, or hidden preference scoring.",
  },
  {
    question: "What costs must I disclose?",
    answer:
      "Monthly rent, security deposit, required fees, bills, and the known upfront and monthly totals — shown before any applicant commits.",
  },
  {
    question: "Should I show my exact address?",
    answer:
      "No, not publicly. The public listing shows an approximate area; the exact address is disclosed only at an approved viewing, application, or agreement stage.",
  },
  {
    question: "How are viewings handled safely?",
    answer:
      "Through a scheduled time with an identified attendee, exact-address disclosure only at the approved stage, and a remote-viewing alternative where practical. Payment or sensitive documents are never required just to arrange a viewing.",
  },
  {
    question: "What happens if I move out?",
    answer:
      "The listing pauses immediately and must be reassessed under the correct provider path — your original authority no longer applies once you no longer live in the home.",
  },
];
