import type { IntentCode, RiskTier, AgencyTier } from "../types/conversation";
import type { Principal } from "../types/context";

interface IntentClassification {
  intent: IntentCode;
  risk_tier: RiskTier;
  agency_tier: AgencyTier;
  confidence: number;
  target_domain?: string;
}

const INTENT_PATTERNS: Array<{
  patterns: RegExp[];
  intent: IntentCode;
  risk: RiskTier;
  agency: AgencyTier;
  domain?: string;
  requirePersonal?: boolean;
}> = [
  {
    patterns: [/\b(account|profile|status|my account|account status)\b/i],
    intent: "ACCOUNT_STATUS",
    risk: "LOW",
    agency: "A0",
    domain: "account",
  },
  {
    patterns: [/\b(action center|pending actions|what do i need to do|to-do|todo|tasks?)\b/i],
    intent: "ACTION_CENTER",
    risk: "LOW",
    agency: "A0",
    domain: "action_center",
  },
  {
    patterns: [/\b(compliance|regulation|legal requirement|right to rent|deposit protection|epc|gas safety|smoke alarm)\b/i],
    intent: "COMPLIANCE",
    risk: "LOW",
    agency: "A0",
    domain: "compliance",
    requirePersonal: true,
  },
  {
    patterns: [/\b(payment|charge|invoice|billing|rent payment)\b/i],
    intent: "PAYMENT_STATUS",
    risk: "LOW",
    agency: "A0",
    domain: "payment",
    requirePersonal: true,
  },
  {
    patterns: [/\b(payout|earnings|withdrawal|payout schedule|paid|get paid)\b/i],
    intent: "PAYOUT_STATUS",
    risk: "LOW",
    agency: "A0",
    domain: "payout",
    requirePersonal: true,
  },
  {
    patterns: [/\b(draft|compose|write.*message|summarise|summarize|summary of messages?)\b/i],
    intent: "MESSAGE_DRAFT",
    risk: "MEDIUM",
    agency: "A2",
    domain: "message",
  },
  {
    patterns: [/\b(navigate|go to|where is|how do i find|deep link|open|page)\b/i],
    intent: "NAVIGATION",
    risk: "LOW",
    agency: "A0",
  },
  {
    patterns: [/\b(support|help|human|agent|talk to someone|escalate|handoff|complaint)\b/i],
    intent: "HANDOFF_REQUEST",
    risk: "LOW",
    agency: "A0",
  },
  {
    patterns: [
      /\b(how (does|do|can)|what is|tell me about|explain|help me understand|guide|guide me)\b/i,
      /\b(booking|listing|verification|room passport|search|filter|sign up|register|login)\b/i,
    ],
    intent: "GUIDANCE",
    risk: "LOW",
    agency: "A0",
  },
];

const PERSONAL_FRAMING = /\b(mine|I\b|me\b|am I|do I|have I|has my|is my|does my|did my|when (will|do|did) I|will I|should I|can I)\b/i;

export function classifyIntent(
  query: string,
  _principal: Principal
): IntentClassification {
  const normalizedQuery = query.trim().toLowerCase();

  for (const { patterns, intent, risk, agency, domain, requirePersonal } of INTENT_PATTERNS) {
    for (const pattern of patterns) {
      if (pattern.test(normalizedQuery)) {
        if (requirePersonal && !PERSONAL_FRAMING.test(normalizedQuery)) {
          continue;
        }
        return {
          intent,
          risk_tier: risk,
          agency_tier: agency,
          confidence: 0.85,
          target_domain: domain,
        };
      }
    }
  }

  return {
    intent: "GUIDANCE",
    risk_tier: "LOW",
    agency_tier: "A0",
    confidence: 0.5,
  };
}
