import type {
  ModelGateway,
  ModelRequest,
  ModelResponse,
} from "../model-gateway";

export class OpenAIAdapter implements ModelGateway {
  private apiKey: string;
  private modelId: string;
  private baseUrl: string;
  private static MAX_RETRIES = 3;
  private static INITIAL_BACKOFF_MS = 1000;

  constructor(config: { apiKey: string; modelId?: string; baseUrl?: string }) {
    this.apiKey = config.apiKey;
    this.modelId = config.modelId || "gpt-4o";
    this.baseUrl = config.baseUrl || "https://api.openai.com/v1";
  }

  private async fetchWithRetry(url: string, init: RequestInit, timeoutMs: number): Promise<Response> {
    let lastError: Error | undefined;
    for (let attempt = 0; attempt < OpenAIAdapter.MAX_RETRIES; attempt++) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(url, {
          ...init,
          signal: controller.signal,
        });
        clearTimeout(timer);

        if (response.status === 429 || response.status >= 500) {
          const retryAfter = response.headers.get("retry-after");
          const backoffMs = retryAfter
            ? parseInt(retryAfter, 10) * 1000
            : OpenAIAdapter.INITIAL_BACKOFF_MS * Math.pow(2, attempt);
          console.warn(`[model-gateway] transient error ${response.status} on attempt ${attempt + 1}/${OpenAIAdapter.MAX_RETRIES}, retrying in ${backoffMs}ms`);
          await new Promise((r) => setTimeout(r, backoffMs));
          lastError = new Error(`HTTP ${response.status}`);
          continue;
        }
        return response;
      } catch (err) {
        clearTimeout(timer);
        lastError = err instanceof Error ? err : new Error(String(err));
        const isAbort = lastError.name === "AbortError";
        if (isAbort && attempt < OpenAIAdapter.MAX_RETRIES - 1) {
          const backoffMs = OpenAIAdapter.INITIAL_BACKOFF_MS * Math.pow(2, attempt);
          console.warn(`[model-gateway] timeout on attempt ${attempt + 1}/${OpenAIAdapter.MAX_RETRIES}, retrying in ${backoffMs}ms`);
          await new Promise((r) => setTimeout(r, backoffMs));
          continue;
        }
        throw lastError;
      }
    }
    throw lastError || new Error("Max retries exceeded");
  }

  async generate(request: ModelRequest): Promise<ModelResponse> {
    const body = this.buildBody(request, false);

    const response = await this.fetchWithRetry(
      `${this.baseUrl}/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(body),
      },
      request.timeout_ms,
    );

    if (!response.ok) {
      const error = await response.text();
      console.error(`[model-gateway] API error ${response.status} (model=${this.modelId}):`, error);
      throw new Error(`OpenAI API error (${response.status}): ${error}`);
    }

    const data = (await response.json()) as OpenAIChatResponse;
    return this.parseResponse(data);
  }

  async generateStream(
    request: ModelRequest,
    onChunk: (chunk: string) => void
  ): Promise<ModelResponse> {
    const body = this.buildBody(request, true);

    const response = await this.fetchWithRetry(
      `${this.baseUrl}/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(body),
      },
      request.timeout_ms,
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenAI API error (${response.status}): ${error}`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error("No response body");

    const decoder = new TextDecoder();
    let fullContent = "";
    let promptTokens = 0;
    let completionTokens = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value, { stream: true });
      const lines = text.split("\n").filter((line) => line.startsWith("data: "));

      for (const line of lines) {
        const data = line.slice(6);
        if (data === "[DONE]") continue;

        try {
          const parsed = JSON.parse(data) as OpenAIStreamChunk;
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) {
            fullContent += delta;
            onChunk(delta);
          }
          if (parsed.usage) {
            promptTokens = parsed.usage.prompt_tokens;
            completionTokens = parsed.usage.completion_tokens;
          }
        } catch {
          // skip malformed chunks
        }
      }
    }

    return {
      content: fullContent,
      finish_reason: "stop",
      usage: {
        prompt_tokens: promptTokens,
        completion_tokens: completionTokens,
        total_tokens: promptTokens + completionTokens,
      },
      model: this.modelId,
    };
  }

  private buildBody(request: ModelRequest, stream: boolean) {
    const messages = [
      { role: "system" as const, content: request.system_prompt },
      ...request.messages.filter((m) => m.role !== "system"),
    ];

    return {
      model: this.modelId,
      messages,
      max_tokens: request.max_tokens,
      temperature: request.temperature,
      stream,
      ...(stream ? { stream_options: { include_usage: true } } : {}),
    };
  }

  private parseResponse(data: OpenAIChatResponse): ModelResponse {
    const choice = data.choices?.[0];
    return {
      content: choice?.message?.content || "",
      finish_reason: (choice?.finish_reason as ModelResponse["finish_reason"]) || "stop",
      usage: {
        prompt_tokens: data.usage?.prompt_tokens || 0,
        completion_tokens: data.usage?.completion_tokens || 0,
        total_tokens: data.usage?.total_tokens || 0,
      },
      model: data.model || this.modelId,
    };
  }
}

interface OpenAIChatResponse {
  choices?: Array<{
    message?: { content?: string };
    finish_reason?: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model?: string;
}

interface OpenAIStreamChunk {
  choices?: Array<{
    delta?: { content?: string };
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
  };
}
