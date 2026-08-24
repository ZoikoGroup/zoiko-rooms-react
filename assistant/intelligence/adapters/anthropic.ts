import type {
  ModelGateway,
  ModelRequest,
  ModelResponse,
} from "../model-gateway";

export class AnthropicAdapter implements ModelGateway {
  private apiKey: string;
  private modelId: string;
  private baseUrl: string;

  constructor(config: { apiKey: string; modelId?: string; baseUrl?: string }) {
    this.apiKey = config.apiKey;
    this.modelId = config.modelId || "claude-sonnet-4-6";
    this.baseUrl = config.baseUrl || "https://api.anthropic.com/v1";
  }

  async generate(request: ModelRequest): Promise<ModelResponse> {
    const body = this.buildBody(request, false);

    const response = await fetch(`${this.baseUrl}/messages`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(request.timeout_ms),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Anthropic API error (${response.status}): ${error}`);
    }

    const data = (await response.json()) as AnthropicMessageResponse;
    return this.parseResponse(data);
  }

  async generateStream(
    request: ModelRequest,
    onChunk: (chunk: string) => void
  ): Promise<ModelResponse> {
    const body = this.buildBody(request, true);

    const response = await fetch(`${this.baseUrl}/messages`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(request.timeout_ms),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Anthropic API error (${response.status}): ${error}`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error("No response body");

    const decoder = new TextDecoder();
    let fullContent = "";
    let inputTokens = 0;
    let outputTokens = 0;

    let buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6);

        try {
          const parsed = JSON.parse(data) as AnthropicStreamEvent;
          if (parsed.type === "content_block_delta" && parsed.delta?.text) {
            fullContent += parsed.delta.text;
            onChunk(parsed.delta.text);
          }
          if (parsed.type === "message_start" && parsed.message?.usage) {
            inputTokens = parsed.message.usage.input_tokens || 0;
          }
          if (parsed.type === "message_delta" && parsed.usage) {
            outputTokens = parsed.usage.output_tokens || 0;
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
        prompt_tokens: inputTokens,
        completion_tokens: outputTokens,
        total_tokens: inputTokens + outputTokens,
      },
      model: this.modelId,
    };
  }

  private headers() {
    return {
      "Content-Type": "application/json",
      "x-api-key": this.apiKey,
      "anthropic-version": "2023-06-01",
    };
  }

  private buildBody(request: ModelRequest, stream: boolean) {
    const messages = request.messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: m.content }));

    return {
      model: this.modelId,
      system: request.system_prompt,
      messages,
      max_tokens: request.max_tokens,
      temperature: request.temperature,
      stream,
    };
  }

  private parseResponse(data: AnthropicMessageResponse): ModelResponse {
    const textBlock = data.content?.find((b) => b.type === "text");
    return {
      content: textBlock?.text || "",
      finish_reason: data.stop_reason === "max_tokens" ? "length" : "stop",
      usage: {
        prompt_tokens: data.usage?.input_tokens || 0,
        completion_tokens: data.usage?.output_tokens || 0,
        total_tokens:
          (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0),
      },
      model: data.model || this.modelId,
    };
  }
}

interface AnthropicMessageResponse {
  content?: Array<{ type: string; text?: string }>;
  stop_reason?: string;
  usage?: { input_tokens?: number; output_tokens?: number };
  model?: string;
}

interface AnthropicStreamEvent {
  type: string;
  delta?: { text?: string };
  message?: { usage?: { input_tokens?: number } };
  usage?: { output_tokens?: number };
}
