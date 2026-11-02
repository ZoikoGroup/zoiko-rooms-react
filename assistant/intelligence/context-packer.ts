import type { KnowledgeChunkResult } from "../types/knowledge";
import type { ContextEnvelope } from "../types/context";
import type { ModelMessage } from "./model-gateway";

export interface PackedContext {
  messages: ModelMessage[];
  systemPromptAddendum: string;
  citationMap: Map<string, KnowledgeChunkResult>;
}

export function packContext(params: {
  retrievedChunks: KnowledgeChunkResult[];
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>;
  userQuery: string;
  context: ContextEnvelope;
}): PackedContext {
  const citationMap = new Map<string, KnowledgeChunkResult>();

  let knowledgeBlock = "";
  if (params.retrievedChunks.length > 0) {
    knowledgeBlock = "\n\n## Approved Knowledge Base Content\n\n";
    for (const chunk of params.retrievedChunks) {
      citationMap.set(chunk.chunk_id, chunk);
      knowledgeBlock += `[Source: ${chunk.chunk_id}] ${chunk.content}\n\n`;
    }
  }

  const messages: ModelMessage[] = [];

  const recentHistory = params.conversationHistory.slice(-10);
  for (const msg of recentHistory) {
    messages.push({ role: msg.role, content: msg.content });
  }

  messages.push({
    role: "user",
    content: params.userQuery + knowledgeBlock,
  });

  const systemPromptAddendum = buildSystemAddendum(params.context);

  return {
    messages,
    systemPromptAddendum,
    citationMap,
  };
}

const REPLY_LANGUAGES: Record<string, string> = { de: "German", fr: "French", es: "Spanish", pt: "Portuguese" };

function buildSystemAddendum(context: ContextEnvelope): string {
  const parts: string[] = [];

  parts.push(`Active role: ${context.principal.role}`);
  parts.push(`Market: ${context.market.market_code} (${context.market.jurisdiction})`);
  parts.push(`Locale: ${context.market.locale}`);
  const replyLanguage = REPLY_LANGUAGES[context.market.locale.split("-")[0]];
  if (replyLanguage) parts.push(`Reply language: write the entire answer in ${replyLanguage}.`);
  parts.push(`Currency: ${context.market.currency}`);
  parts.push(`Intent: ${context.task.intent_code}`);
  parts.push(`Agency: ${context.task.agency_tier}`);

  if (context.principal.id) {
    parts.push(`Principal: ${context.principal.id}`);
  }

  return parts.join("\n");
}
