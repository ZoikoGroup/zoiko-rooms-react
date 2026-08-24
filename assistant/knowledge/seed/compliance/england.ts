import type { KnowledgeChunk } from "../../../types/citations";

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

export const englandComplianceChunks: KnowledgeChunk[] = [
  chunk("kb_eng_001", "In England, landlords must conduct a Right to Rent check before the tenancy begins. This is a legal requirement under the Immigration Act 2014. The check verifies that prospective tenants have the right to rent property in the UK. Acceptable documents include a valid passport, biometric immigration document, or national identity card from a country in the EEA.", {
    source_type: "knowledge_base",
    source_id: "england-right-to-rent",
    section: "Right to Rent",
    title: "Right to Rent Checks in England",
    url: "/how-it-works/verification-authority",
    market_code: "GB",
    access_class: "K2",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_eng_002", "Tenancy deposits in England must be protected in a government-approved deposit protection scheme within 30 days of receipt. The three approved schemes are: Deposit Protection Service (DPS), MyDeposits, and Tenancy Deposit Scheme (TDS). Landlords must provide tenants with prescribed information about the deposit scheme.", {
    source_type: "knowledge_base",
    source_id: "england-deposit",
    section: "Deposit protection",
    title: "Tenancy Deposit Protection in England",
    url: "/how-it-works/payments-safety-support",
    market_code: "GB",
    access_class: "K2",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_eng_003", "An Energy Performance Certificate (EPC) is required for all properties rented in England. The minimum energy efficiency rating for rental properties is E. Properties rated F or G cannot be rented unless an exemption applies. The EPC is valid for 10 years.", {
    source_type: "knowledge_base",
    source_id: "england-epc",
    section: "Energy Performance",
    title: "EPC Requirements for Rental Properties in England",
    url: "/how-it-works/verification-authority",
    market_code: "GB",
    access_class: "K2",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_eng_004", "Landlords in England must have a valid gas safety certificate (CP12) renewed annually by a Gas Safe registered engineer. A copy must be given to tenants within 28 days of the check. Failure to provide a gas safety certificate is a criminal offence.", {
    source_type: "knowledge_base",
    source_id: "england-gas-safety",
    section: "Gas safety",
    title: "Gas Safety Certificate Requirements",
    url: "/how-it-works/verification-authority",
    market_code: "GB",
    access_class: "K2",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_eng_005", "Smoke alarms are required on every storey of a rental property in England. Carbon monoxide alarms are required in rooms with a fixed combustion appliance. These must be tested and working at the start of each tenancy. Failure to comply can result in a fine of up to £5,000.", {
    source_type: "knowledge_base",
    source_id: "england-smoke-alarms",
    section: "Fire safety",
    title: "Smoke and Carbon Monoxide Alarm Requirements",
    url: "/how-it-works/verification-authority",
    market_code: "GB",
    access_class: "K2",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
  chunk("kb_eng_006", "The Renters Reform Bill is expected to abolish Section 21 no-fault evictions in England. Until the Bill is enacted, landlords can still use Section 21 to end an assured shorthold tenancy, provided the correct notice is given. Tenants have rights under the Housing Act 1988.", {
    source_type: "knowledge_base",
    source_id: "england-renters-reform",
    section: "Tenancy law",
    title: "Renters Reform and Eviction Rules in England",
    url: "/how-it-works/verification-authority",
    market_code: "GB",
    access_class: "K2",
    release_state: "ACTIVE",
    effective_at: "2026-01-01",
  }),
];

export const englandChunks: KnowledgeChunk[] = englandComplianceChunks;
