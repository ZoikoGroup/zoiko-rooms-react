export interface InjectionCheckResult {
  safe: boolean;
  threats: string[];
  sanitized_input?: string;
}

const INJECTION_PATTERNS = [
  { pattern: /ignore (all |any )?(previous|prior|above|earlier) (instructions?|prompts?|rules?|guidelines?)/i, threat: "prompt_overwrite" },
  { pattern: /you are now (a |an )?(?:DAN|jailbreak|unrestricted|uncensored)/i, threat: "persona_hijack" },
  { pattern: /system prompt|system message|<\|system\|>/i, threat: "system_injection" },
  { pattern: /repeat (the |your )?(system |initial )?(prompt|instructions?|message)/i, threat: "prompt_extraction" },
  { pattern: /\[INST\]|\[\/INST\]|<\|im_start\|>|<\|im_end\|>/i, threat: "format_injection" },
  { pattern: /(?:curl|wget|fetch|eval|exec|import os|subprocess|child_process)\s*\(/i, threat: "code_injection" },
  { pattern: /DROP\s+TABLE|DELETE\s+FROM|INSERT\s+INTO|UPDATE\s+\w+\s+SET/i, threat: "sql_injection" },
  { pattern: /\b(?:roleplay|pretend|act as if|simulate)\b.*\b(?:you have|you are|you can|you will)\b/i, threat: "roleplay_hijack" },
];

const DANGEROUS_CONTENT_PATTERNS = [
  /<script[\s>]/i,
  /javascript:/i,
  /on\w+\s*=/i,
  /data:text\/html/i,
];

export function checkForInjection(userInput: string): InjectionCheckResult {
  const threats: string[] = [];

  for (const { pattern, threat } of INJECTION_PATTERNS) {
    if (pattern.test(userInput)) {
      threats.push(threat);
    }
  }

  for (const pattern of DANGEROUS_CONTENT_PATTERNS) {
    if (pattern.test(userInput)) {
      threats.push("xss_attempt");
    }
  }

  return {
    safe: threats.length === 0,
    threats,
    sanitized_input: threats.length > 0 ? sanitizeInput(userInput) : undefined,
  };
}

function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export function isPromptLeakageAttempt(content: string): boolean {
  const leakagePatterns = [
    /what (is|are) (your|the) (system )?(prompt|instructions?|rules?)/i,
    /show me (your|the) (system )?(prompt|instructions?|rules?)/i,
    /what (instructions?|rules?|guidelines?) (were|are) you (given|provided|trained)/i,
    /reveal (your|the) (system )?(prompt|instructions?)/i,
  ];

  return leakagePatterns.some((p) => p.test(content));
}
