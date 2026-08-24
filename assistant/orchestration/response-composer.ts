import type { Citation } from "../types/citations";
import type { KnowledgeChunkResult } from "../types/knowledge";

export interface ResponseComponents {
  answer_type: "GUIDANCE" | "ACCOUNT_DATA" | "MIXED" | "CLARIFICATION" | "ABSTENTION" | "NAVIGATION";
  content: string;
  citations: Citation[];
  suggestions?: string[];
  deep_links?: Array<{ label: string; path: string }>;
}

export function composeResponse(params: {
  intent: string;
  modelOutput: string;
  retrievedChunks: KnowledgeChunkResult[];
  citationMap: Map<string, KnowledgeChunkResult>;
  domainData?: unknown;
  abstain?: boolean;
  abstainReason?: string;
}): ResponseComponents {
  if (params.abstain) {
    return {
      answer_type: "ABSTENTION",
      content: params.abstainReason || "I'm unable to provide a confident answer to this question. Would you like me to connect you with our support team for help?",
      citations: [],
    };
  }

  if (params.domainData && params.intent !== "GUIDANCE") {
    const domainText = formatDomainData(params.intent, params.domainData);
    return {
      answer_type: "ACCOUNT_DATA",
      content: domainText,
      citations: [
        {
          citation_id: `cit_auth_${Date.now()}`,
          source_type: "authoritative_api",
          source_id: `domain:${params.intent}`,
          source_version: "1.0.0",
          effective_at: new Date().toISOString(),
          title: "Authoritative domain service",
        },
      ],
    };
  }

  const extractedCitations = extractCitationsFromContent(params.modelOutput, params.citationMap);
  const cleanedContent = params.modelOutput
    .replace(/\[citation:\s*\w+\s*\]/gi, "")
    .replace(/\[source:\s*[^\]]+\]/gi, "")
    .trim();

  const answerType: ResponseComponents["answer_type"] =
    extractedCitations.length > 0 ? "GUIDANCE" : "CLARIFICATION";

  return {
    answer_type: answerType,
    content: cleanedContent,
    citations: extractedCitations,
    suggestions: generateSuggestions(params.intent),
    deep_links: generateDeepLinks(params.intent),
  };
}

function formatDomainData(intent: string, data: unknown): string {
  const d = data as Record<string, unknown>;

  switch (intent) {
    case "ACCOUNT_STATUS": {
      const account = d as { display_name?: string; role?: string; account_status?: string; verified?: boolean; verification_level?: string; active_bookings?: number; active_listings?: number };
      let text = `Here is your account information:\n\n`;
      text += `- **Account holder**: ${account.display_name || "N/A"}\n`;
      text += `- **Role**: ${account.role || "N/A"}\n`;
      text += `- **Status**: ${account.account_status || "N/A"}\n`;
      text += `- **Verified**: ${account.verified ? "Yes" : "No"}\n`;
      text += `- **Verification level**: ${account.verification_level || "None"}\n`;
      if (account.active_bookings) text += `- **Active bookings**: ${account.active_bookings}\n`;
      if (account.active_listings) text += `- **Active listings**: ${account.active_listings}\n`;
      text += `\n*Source: Authoritative domain service — this data comes directly from the Zoiko Rooms platform.*`;
      return text;
    }
    case "ACTION_CENTER": {
      const ac = d as { summary?: string; pending_actions?: Array<{ title: string; urgency: string; due_date?: string }> };
      let text = `Here is your action center summary:\n\n`;
      if (ac.summary) text += `${ac.summary}\n\n`;
      if (ac.pending_actions?.length) {
        text += `**Pending actions:**\n`;
        for (const action of ac.pending_actions) {
          const urgency = action.urgency === "high" ? "⚠️ High priority" : action.urgency === "medium" ? "Medium priority" : "Low priority";
          text += `- ${action.title} (${urgency})\n`;
          if (action.due_date) text += `  Due: ${new Date(action.due_date).toLocaleDateString("en-GB")}\n`;
        }
      }
      text += `\n*Source: Authoritative domain service.*`;
      return text;
    }
    case "PAYMENT_STATUS": {
      const pay = d as { balance?: number; currency?: string; next_payment_due?: string; next_payment_amount?: number; status?: string };
      let text = `Here is your payment information:\n\n`;
      text += `- **Status**: ${pay.status || "N/A"}\n`;
      if (pay.next_payment_due) {
        text += `- **Next payment due**: ${new Date(pay.next_payment_due).toLocaleDateString("en-GB")}\n`;
      }
      if (pay.next_payment_amount) {
        text += `- **Amount**: £${(pay.next_payment_amount / 100).toFixed(2)}\n`;
      }
      text += `\n*Source: Authoritative domain service — amounts and dates come directly from the Zoiko Rooms payment system.*`;
      return text;
    }
    case "PAYOUT_STATUS": {
      const payout = d as { pending_payout?: number; currency?: string; next_payout_date?: string; payout_destination?: string; status?: string };
      let text = `Here is your payout information:\n\n`;
      text += `- **Status**: ${payout.status || "N/A"}\n`;
      if (payout.pending_payout) {
        text += `- **Pending payout**: £${(payout.pending_payout / 100).toFixed(2)}\n`;
      }
      if (payout.next_payout_date) {
        text += `- **Next payout date**: ${new Date(payout.next_payout_date).toLocaleDateString("en-GB")}\n`;
      }
      if (payout.payout_destination) {
        text += `- **Destination**: ${payout.payout_destination}\n`;
      }
      text += `\n*Source: Authoritative domain service.*`;
      return text;
    }
    case "COMPLIANCE": {
      const comp = d as { requirements?: Array<{ title: string; description: string; status: string }>; overall_status?: string };
      let text = `Here is the compliance status for the England market:\n\n`;
      text += `**Overall status**: ${comp.overall_status || "N/A"}\n\n`;
      if (comp.requirements?.length) {
        for (const req of comp.requirements) {
          const icon = req.status === "met" ? "✅" : req.status === "pending" ? "⏳" : req.status === "required" ? "⚠️" : "—";
          text += `${icon} **${req.title}**: ${req.description}\n\n`;
        }
      }
      text += `*This is general guidance about England compliance requirements. For specific legal advice, please consult a qualified professional.*`;
      return text;
    }
    default:
      return JSON.stringify(data, null, 2);
  }
}

function extractCitationsFromContent(
  content: string,
  citationMap: Map<string, KnowledgeChunkResult>
): Citation[] {
  const citations: Citation[] = [];
  const seen = new Set<string>();

  const refPatterns = [/\[citation:(\w+)\]/gi, /\[source:\s*(\w[\w_]*)\s*\]/gi];
  for (const refPattern of refPatterns) {
    let match;
    while ((match = refPattern.exec(content)) !== null) {
      const chunkId = match[1];
      if (seen.has(chunkId)) continue;
      seen.add(chunkId);

      const chunk = citationMap.get(chunkId);
      if (chunk) {
        citations.push({
          citation_id: `cit_${chunkId}`,
          source_type: chunk.source_type,
          source_id: chunk.source_id,
          source_version: chunk.source_version,
          section: chunk.section,
          chunk_id: chunk.chunk_id,
          effective_at: chunk.effective_at,
          title: chunk.title,
          url: chunk.url,
        });
      }
    }
  }

  for (const [chunkId, chunk] of citationMap) {
    if (!seen.has(chunkId)) {
      seen.add(chunkId);
      citations.push({
        citation_id: `cit_${chunkId}`,
        source_type: chunk.source_type,
        source_id: chunk.source_id,
        source_version: chunk.source_version,
        section: chunk.section,
        chunk_id: chunk.chunk_id,
        effective_at: chunk.effective_at,
        title: chunk.title,
        url: chunk.url,
      });
    }
  }

  return citations;
}

function generateSuggestions(intent: string): string[] {
  const suggestions: Record<string, string[]> = {
    GUIDANCE: ["Tell me about verification", "How do payments work?", "What is a Room Passport?"],
    ACCOUNT_STATUS: ["View my action center", "Check my payments", "Update my profile"],
    ACTION_CENTER: ["Tell me about my account", "How do I complete this action?"],
    PAYMENT_STATUS: ["When is my next payment?", "How do payments work?"],
    PAYOUT_STATUS: ["When is my next payout?", "How do I update my payout details?"],
    MESSAGE_DRAFT: ["Summarize my messages", "Help me draft a reply"],
    COMPLIANCE: ["What is Right to Rent?", "Tell me about deposit protection"],
    NAVIGATION: ["Go to my dashboard", "Find a room", "List a room"],
    HANDOFF_REQUEST: [],
  };
  return suggestions[intent] || [];
}

function generateDeepLinks(intent: string): Array<{ label: string; path: string }> {
  const links: Record<string, Array<{ label: string; path: string }>> = {
    ACCOUNT_STATUS: [
      { label: "Go to Dashboard", path: "/pro/overview" },
    ],
    ACTION_CENTER: [
      { label: "View Applications", path: "/pro/applications" },
    ],
    NAVIGATION: [
      { label: "Find a Room", path: "/find-a-room" },
      { label: "List a Room", path: "/list-a-room" },
      { label: "Help Center", path: "/resources/help-center" },
    ],
  };
  return links[intent] || [];
}
