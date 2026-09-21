import type { KnowledgeChunk } from "../../types/citations";
import { englandChunks } from "./compliance/england";

function hashContent(content: string): string {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function chunk(
  id: string,
  content: string,
  metadata: Omit<KnowledgeChunk["metadata"], "content_hash">
): KnowledgeChunk {
  return {
    id,
    content,
    metadata: {
      ...metadata,
      content_hash: hashContent(content),
    },
  };
}

export const helpCenterChunks: KnowledgeChunk[] = [
  chunk("kb_help_001", "Zoiko Rooms is a platform for finding and listing verified private rooms for stays of 30 nights or longer. We connect renters with verified room providers across the UK. All rooms undergo verification before listing.", {
    source_type: "knowledge_base",
    source_id: "help-center-overview",
    section: "What is Zoiko Rooms",
    title: "About Zoiko Rooms",
    url: "/resources/help-center",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_help_002", "To find a room on Zoiko Rooms, browse our listings or use the search function to filter by location, price, room type, and availability date. You can save rooms you are interested in and contact hosts directly through our messaging system.", {
    source_type: "knowledge_base",
    source_id: "help-center-finding",
    section: "How to find a room",
    title: "Finding a Room",
    url: "/find-a-room",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_help_003", "To list a room on Zoiko Rooms, you need to create a provider account, complete verification, and submit your room listing with photos, description, pricing, and availability. Listings are reviewed before going live.", {
    source_type: "knowledge_base",
    source_id: "help-center-listing",
    section: "How to list a room",
    title: "Listing a Room",
    url: "/list-a-room",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_help_004", "Zoiko Rooms uses a secure payment system. Renters pay through the platform, and funds are held in protected escrow until the booking is confirmed. Hosts receive payouts on a regular schedule after deducting the service fee.", {
    source_type: "knowledge_base",
    source_id: "help-center-payments",
    section: "Payments and pricing",
    title: "How Payments Work",
    url: "/how-it-works/payments-safety-support",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_help_005", "The Zoiko Rooms service fee is a small percentage charged to both renters and hosts. This fee covers payment processing, platform maintenance, verification, and support. The exact fee is shown before you confirm any booking.", {
    source_type: "knowledge_base",
    source_id: "help-center-fee",
    section: "Service fees",
    title: "Service Fees Explained",
    url: "/how-it-works/payments-safety-support",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_help_006", "Zoiko Rooms has a verification process for both renters and hosts. This includes identity verification, address verification for hosts, and property inspections where applicable. Verified accounts receive a verification badge.", {
    source_type: "knowledge_base",
    source_id: "help-center-verification",
    section: "Verification process",
    title: "Verification and Trust",
    url: "/how-it-works/verification-authority",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_help_007", "The Room Passport is a digital record of your verified room details, including size, amenities, safety features, and compliance status. It provides transparency for both renters and hosts.", {
    source_type: "knowledge_base",
    source_id: "help-center-passport",
    section: "Room Passport",
    title: "What is a Room Passport",
    url: "/how-it-works/room-passport",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_help_008", "If you have a safety concern or need to report a scam, visit our Safety and Scam Prevention page. You can also contact our support team directly through the Help Center. In emergencies, always call 999.", {
    source_type: "knowledge_base",
    source_id: "help-center-safety",
    section: "Safety and support",
    title: "Safety and Scam Prevention",
    url: "/resources/safety-scam-prevention",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
];

export const howItWorksChunks: KnowledgeChunk[] = [
  chunk("kb_hiw_001", "The Zoiko Rooms process for room seekers: 1) Search and filter listings, 2) View room details and Room Passport, 3) Contact the host or submit an application, 4) Complete verification if not already done, 5) Review and confirm booking terms, 6) Pay securely through the platform, 7) Move in and use the platform for any support needs.", {
    source_type: "knowledge_base",
    source_id: "hiw-seekers",
    section: "How it works for room seekers",
    title: "Room Seeker Journey",
    url: "/how-it-works/for-room-seekers",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_hiw_002", "The Zoiko Rooms process for providers: 1) Create a provider account, 2) Complete host verification, 3) List your room with photos and details, 4) Review incoming applications, 5) Confirm bookings, 6) Receive payouts through the platform. Hosts maintain control over their listings and can update availability at any time.", {
    source_type: "knowledge_base",
    source_id: "hiw-providers",
    section: "How it works for providers",
    title: "Provider Journey",
    url: "/how-it-works/for-providers",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
];

export const paymentChunks: KnowledgeChunk[] = [
  chunk("kb_pay_001", "Payments on Zoiko Rooms are processed securely. Renters pay the first month's rent and any applicable deposit when confirming a booking. Payments are held in escrow until the booking is confirmed by the host.", {
    source_type: "knowledge_base",
    source_id: "payment-overview",
    section: "Payment overview",
    title: "How Payments Work",
    url: "/how-it-works/payments-safety-support",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_pay_002", "Host payouts are processed on the 5th of each month for the previous month's bookings. Payouts are sent to the bank account registered in your provider dashboard. You can view your payout history and upcoming payouts in the Payments section.", {
    source_type: "knowledge_base",
    source_id: "payment-payouts",
    section: "Host payouts",
    title: "Payout Schedule",
    url: "/how-it-works/payments-safety-support",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_pay_003", "Zoiko Rooms uses protected payments. Your payment details are encrypted and never shared directly with hosts. All transactions are processed through our secure payment provider. If there is a dispute, our support team can review the transaction history.", {
    source_type: "knowledge_base",
    source_id: "payment-safety",
    section: "Payment safety",
    title: "Payment Security",
    url: "/how-it-works/payments-safety-support",
    market_code: "GB",
    access_class: "K0",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
];

export const allSeedChunks: KnowledgeChunk[] = [
  ...helpCenterChunks,
  ...howItWorksChunks,
  ...paymentChunks,
  ...englandChunks,
];
