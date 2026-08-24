export interface ModelRequest {
  task_class: "guidance" | "account_data" | "action" | "compliance" | "navigation" | "handoff";
  messages: ModelMessage[];
  system_prompt: string;
  context?: Record<string, unknown>;
  response_schema?: Record<string, unknown>;
  tools?: ModelTool[];
  safety_context?: Record<string, unknown>;
  stream: boolean;
  timeout_ms: number;
  max_tokens: number;
  temperature: number;
}

export interface ModelMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  name?: string;
}

export interface ModelTool {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters: Record<string, unknown>;
  };
}

export interface ModelResponse {
  content: string;
  finish_reason: "stop" | "length" | "tool_call" | "content_filter";
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
  tool_calls?: ModelToolCall[];
}

export interface ModelToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface ModelGateway {
  generate(request: ModelRequest): Promise<ModelResponse>;
  generateStream(
    request: ModelRequest,
    onChunk: (chunk: string) => void
  ): Promise<ModelResponse>;
}
