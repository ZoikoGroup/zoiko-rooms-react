import { z } from "zod";

export interface ApiResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: ProblemDetail;
  meta?: {
    request_id: string;
    trace_id: string;
    timestamp: string;
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    has_more: boolean;
  };
}

export interface ProblemDetail {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  errors?: Record<string, string[]>;
}

export type StreamingEventType =
  | "response.started"
  | "response.delta"
  | "citation.available"
  | "action_intent.available"
  | "response.completed"
  | "response.blocked"
  | "response.failed"
  | "heartbeat";

export interface StreamingEvent {
  event: StreamingEventType;
  data: Record<string, unknown>;
  id?: string;
  retry?: number;
}

export const CreateSessionSchema = z.object({
  market_code: z.string().default("GB"),
  locale: z.string().default("en-GB"),
  subject_scope_type: z
    .enum(["PERSONAL", "ORGANIZATION", "SYSTEM_CONTROLLED"])
    .default("PERSONAL"),
  subject_scope_id: z.string().optional(),
  resource_context: z
    .object({
      domain: z.string().optional(),
      resource_type: z.string().optional(),
      resource_id: z.string().optional(),
    })
    .optional(),
});

export const SendMessageSchema = z.object({
  content: z.string().min(1).max(10000),
  content_type: z.enum(["text", "json"]).default("text"),
  resource_context: z
    .object({
      domain: z.string().optional(),
      resource_type: z.string().optional(),
      resource_id: z.string().optional(),
    })
    .optional(),
});

export const CreateActionIntentSchema = z.object({
  action_type: z.string(),
  target_domain: z.string(),
  target_resource_type: z.string(),
  target_resource_id: z.string(),
  resource_version: z.string().optional(),
  parameters: z.record(z.string(), z.any()).optional(),
});

export const CreateHandoffSchema = z.object({
  reason: z.string().min(1).max(2000),
  conversation_id: z.string(),
  priority: z.enum(["normal", "urgent"]).default("normal"),
  context_summary: z.string().max(5000).optional(),
});

export const SubmitFeedbackSchema = z.object({
  message_id: z.string(),
  conversation_id: z.string(),
  rating: z.number().int().min(1).max(5).optional(),
  category: z
    .enum([
      "helpful",
      "not_helpful",
      "inaccurate",
      "unsafe",
      "inappropriate",
      "other",
    ])
    .optional(),
  comment: z.string().max(5000).optional(),
});

export const ReportFeedbackSchema = z.object({
  message_id: z.string(),
  conversation_id: z.string(),
  reason: z.enum([
    "safety_concern",
    "abuse",
    "harassment",
    "misinformation",
    "other",
  ]),
  description: z.string().min(1).max(5000),
});
