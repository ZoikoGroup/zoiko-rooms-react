export interface AssistantConfig {
  database: {
    url: string;
    maxConnections: number;
  };
  model: {
    provider: "openai" | "anthropic" | "groq";
    apiKey: string;
    modelId: string;
    maxTokens: number;
    temperature: number;
  };
  retrieval: {
    maxChunks: number;
    minScore: number;
    rerankTopK: number;
  };
  security: {
    secretKey: string;
    sessionTtlMs: number;
    maxTurnsPerConversation: number;
  };
  rateLimit: {
    anonymousRequestsPerMinute: number;
    authenticatedRequestsPerMinute: number;
  };
  features: {
    enabledMarkets: string[];
    defaultMarket: string;
    handoffEnabled: boolean;
    feedbackEnabled: boolean;
  };
}

function getDefaultModelId(provider: "openai" | "anthropic" | "groq"): string {
  switch (provider) {
    case "groq":
      return "openai/gpt-oss-120b";
    case "anthropic":
      return "claude-sonnet-4-20250514";
    default:
      return "gpt-4o";
  }
}

const defaults: AssistantConfig = {
  database: {
    url: process.env.DATABASE_URL || "postgresql://localhost:5432/zoiko_rooms_assistant",
    maxConnections: 10,
  },
  model: {
    provider: (process.env.ASSISTANT_MODEL_PROVIDER as "openai" | "anthropic" | "groq") || "openai",
    apiKey: process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY || process.env.GROQ_API_KEY || "",
    modelId: process.env.ASSISTANT_MODEL_ID || getDefaultModelId((process.env.ASSISTANT_MODEL_PROVIDER as "openai" | "anthropic" | "groq") || "openai"),
    maxTokens: parseInt(process.env.ASSISTANT_MAX_TOKENS || "4096", 10),
    temperature: parseFloat(process.env.ASSISTANT_TEMPERATURE || "0.3"),
  },
  retrieval: {
    maxChunks: parseInt(process.env.ASSISTANT_MAX_CHUNKS || "8", 10),
    minScore: parseFloat(process.env.ASSISTANT_MIN_SCORE || "0.45"),
    rerankTopK: parseInt(process.env.ASSISTANT_RERANK_TOP_K || "4", 10),
  },
  security: {
    secretKey: process.env.ASSISTANT_SECRET_KEY || "dev-secret-change-in-production",
    sessionTtlMs: parseInt(process.env.ASSISTANT_SESSION_TTL_MS || "3600000", 10),
    maxTurnsPerConversation: parseInt(process.env.ASSISTANT_MAX_TURNS || "100", 10),
  },
  rateLimit: {
    anonymousRequestsPerMinute: parseInt(process.env.ASSISTANT_ANON_RPM || "20", 10),
    authenticatedRequestsPerMinute: parseInt(process.env.ASSISTANT_AUTH_RPM || "60", 10),
  },
  features: {
    enabledMarkets: (process.env.ASSISTANT_ENABLED_MARKETS || "GB").split(","),
    defaultMarket: process.env.ASSISTANT_DEFAULT_MARKET || "GB",
    handoffEnabled: process.env.ASSISTANT_HANDOFF_ENABLED !== "false",
    feedbackEnabled: process.env.ASSISTANT_FEEDBACK_ENABLED !== "false",
  },
};

let _config: AssistantConfig | null = null;

export function getConfig(): AssistantConfig {
  if (!_config) {
    _config = { ...defaults };
  }
  return _config;
}

export function resetConfig(): void {
  _config = null;
}
