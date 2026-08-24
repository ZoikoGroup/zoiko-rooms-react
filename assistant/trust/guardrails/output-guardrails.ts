import type { Citation } from "../../types/citations";

export interface OutputValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  sanitized_content?: string;
}

export function validateOutput(params: {
  content: string;
  citations: Citation[];
  answer_type: "GUIDANCE" | "ACCOUNT_DATA" | "MIXED" | "CLARIFICATION" | "ABSTENTION" | "NAVIGATION";
  context?: { market_code?: string; intent?: string };
}): OutputValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (params.content.length === 0) {
    errors.push("Response content is empty");
  }

  if (params.content.length > 10000) {
    errors.push("Response content exceeds maximum length of 10000 characters");
  }

  if (params.answer_type !== "CLARIFICATION" && params.answer_type !== "ABSTENTION" && params.answer_type !== "NAVIGATION") {
    if (params.citations.length === 0) {
      errors.push("Non-conversational response must include at least one citation");
    }
  }

  for (const citation of params.citations) {
    if (!citation.citation_id) {
      errors.push("Citation missing citation_id");
    }
    if (!citation.source_type) {
      errors.push(`Citation ${citation.citation_id} missing source_type`);
    }
    if (!citation.source_id) {
      errors.push(`Citation ${citation.citation_id} missing source_id`);
    }
  }

  const citationIds = new Set(params.citations.map((c) => c.citation_id));
  const refPattern = /\[citation:(\w+)\]/g;
  let match;
  while ((match = refPattern.exec(params.content)) !== null) {
    const refId = match[1];
    if (!citationIds.has(refId) && !citationIds.has(`cit_${refId}`)) {
      errors.push(`Content references fabricated citation: ${refId}`);
    }
  }

  const prohibitedPatterns = [
    /as an ai/i,
    /i am an ai/i,
    /language model/i,
    /trained by/i,
    /i cannot provide legal advice/i,
    /this is not legal advice/i,
    /guaranteed? (approval|success|outcome)/i,
    /100% (accurate|correct|reliable)/i,
    /ai verified/i,
    /ai certified/i,
  ];

  for (const pattern of prohibitedPatterns) {
    if (pattern.test(params.content)) {
      warnings.push(`Content contains prohibited pattern: ${pattern.source}`);
    }
  }

  if (params.context?.market_code && params.context.market_code !== "GB") {
    const regulatedTerms = /tenancy deposit|section 21|section 8|assured shorthold|council tax/i;
    if (regulatedTerms.test(params.content)) {
      warnings.push("Content contains England-specific regulated terms but market is not GB");
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

export function redactSensitiveContent(content: string): string {
  let redacted = content;

  const patterns = [
    { pattern: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g, replacement: "[CARD_REDACTED]" },
    { pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, replacement: "[EMAIL_REDACTED]" },
    { pattern: /\b(?:\+?44|0)\d[\d\s\-()]{8,14}\d\b/g, replacement: "[PHONE_REDACTED]" },
    { pattern: /\b\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{2}\b/g, replacement: "[NI_NUMBER_REDACTED]" },
  ];

  for (const { pattern, replacement } of patterns) {
    redacted = redacted.replace(pattern, replacement);
  }

  return redacted;
}
