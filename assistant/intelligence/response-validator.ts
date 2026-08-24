import type { Citation } from "../types/citations";
import type { ContextEnvelope } from "../types/context";
import { validateOutput, redactSensitiveContent } from "../trust/guardrails/output-guardrails";
import { validateCitations } from "../knowledge/citation-resolver";
import { logAuditEvent } from "../evidence/audit-logger";

export interface ValidationResult {
  valid: boolean;
  content: string;
  citations: Citation[];
  errors: string[];
  warnings: string[];
  blocked: boolean;
}

export function validateResponse(params: {
  content: string;
  citations: Citation[];
  answer_type: string;
  context: ContextEnvelope;
}): ValidationResult {
  const { content, citations, context } = params;

  const outputCheck = validateOutput({
    content,
    citations,
    answer_type: params.answer_type as "GUIDANCE" | "ACCOUNT_DATA" | "MIXED" | "CLARIFICATION" | "ABSTENTION" | "NAVIGATION",
    context: {
      market_code: context.market.market_code,
      intent: context.task.intent_code,
    },
  });

  const citationCheck = validateCitations(citations);

  const errors = [...outputCheck.errors];
  const warnings = [...outputCheck.warnings];

  if (!citationCheck.valid) {
    errors.push(`Fabricated citations detected: ${citationCheck.fabricated.join(", ")}`);
    logAuditEvent({
      trace_id: context.trace_id,
      request_id: context.request_id,
      conversation_id: context.conversation_id,
      turn_id: context.turn_id,
      event_type: "citation.fabricated_rejected",
      principal_id: context.principal.id,
      principal_role: context.principal.role,
      payload: {
        fabricated_citations: citationCheck.fabricated,
        content_length: content.length,
      },
    });
  }

  if (!outputCheck.valid) {
    logAuditEvent({
      trace_id: context.trace_id,
      request_id: context.request_id,
      conversation_id: context.conversation_id,
      turn_id: context.turn_id,
      event_type: "guardrail.triggered",
      principal_id: context.principal.id,
      principal_role: context.principal.role,
      payload: {
        errors: outputCheck.errors,
        warnings: outputCheck.warnings,
      },
    });
  }

  const redactedContent = redactSensitiveContent(content);

  const validCitations = citationCheck.valid
    ? citations
    : citations.filter((c) => citationCheck.resolved.includes(c.citation_id));

  return {
    valid: errors.length === 0,
    content: redactedContent,
    citations: validCitations,
    errors,
    warnings,
    blocked: errors.length > 0,
  };
}
