import { describe, it, expect, beforeEach } from "vitest";
import { buildRetrievalQuery } from "../assistant/intelligence/retrieval";
import { handleTurn, type TurnRequest } from "../assistant/orchestration/turn-handler";
import { seedChunks, clearChunks } from "../assistant/knowledge/chunk-store";
import { allSeedChunks } from "../assistant/knowledge/seed";
import type { ModelGateway, ModelRequest, ModelResponse } from "../assistant/intelligence/model-gateway";

describe("buildRetrievalQuery", () => {
  it("returns the message unchanged when there is no prior user turn", () => {
    expect(buildRetrievalQuery("what about international ones?", [])).toBe("what about international ones?");
  });

  it("returns the message unchanged for an independent, longer question", () => {
    const history = [{ role: "user" as const, content: "How do I find a room?" }];
    const q = "What are the listing fees for hosts in London?";
    expect(buildRetrievalQuery(q, history)).toBe(q);
  });

  it("expands a deictic followup with the prior user turn", () => {
    const history = [{ role: "user" as const, content: "How do I find a room?" }];
    expect(buildRetrievalQuery("what about international ones?", history)).toBe(
      "How do I find a room what about international ones?"
    );
  });

  it("expands an elliptical 'and how long…' followup", () => {
    const history = [{ role: "user" as const, content: "How do I find a room?" }];
    expect(buildRetrievalQuery("and how long must a stay be", history)).toBe(
      "How do I find a room and how long must a stay be"
    );
  });

  it("expands a short 'is it…' followup with the last user turn, not the assistant reply", () => {
    const history = [
      { role: "user" as const, content: "How do payments work?" },
      { role: "assistant" as const, content: "Rent is held in escrow." },
    ];
    expect(buildRetrievalQuery("is it free to list?", history)).toBe("How do payments work is it free to list?");
  });
});

const makeGateway = (onGenerate: (request: ModelRequest) => string) => {
  const calls: ModelRequest[] = [];
  const gateway: ModelGateway = {
    async generate(request: ModelRequest) {
      calls.push(request);
      return {
        content: onGenerate(request),
        finish_reason: "stop",
        usage: { prompt_tokens: 10, completion_tokens: 10, total_tokens: 20 },
        model: "test-model",
      } satisfies ModelResponse;
    },
    async generateStream() {
      return { content: "", finish_reason: "stop", usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }, model: "test-model" };
    },
  };
  return { gateway, calls };
};

const requestContext: TurnRequest = {
  conversation_id: "conv_followup_001",
  session_id: "sess_followup_001",
  user_message: "",
  principal_role: "anonymous",
  market_code: "GB",
  locale: "en-GB",
};

describe("contextual retrieval for follow-ups (turn-handler)", () => {
  beforeEach(() => {
    clearChunks();
    seedChunks(allSeedChunks);
  });

  it("abstains on the bare deictic follow-up with no history (control)", async () => {
    const { gateway, calls } = makeGateway(() => "ignored");
    const result = await handleTurn(
      { ...requestContext, user_message: "and how long must a stay be" },
      gateway
    );
    expect(result.response_components.answer_type).toBe("ABSTENTION");
    expect(calls).toHaveLength(0);
  });

  it("answers the deictic follow-up using context from the prior user turn", async () => {
    const { gateway, calls } = makeGateway(() => "Stays run for 30 nights or longer.");
    const result = await handleTurn(
      {
        ...requestContext,
        user_message: "and how long must a stay be",
        conversation_history: [{ role: "user", content: "How do I find a room?" }],
      },
      gateway
    );

    expect(result.response_components.answer_type).toBe("GUIDANCE");
    expect(result.response_components.content).toContain("30 nights");

    // The retrieval must have run against the contextual (expanded) query, not the
    // bare follow-up: the packed model user message must include the retrieved
    // knowledge chunks that only the expanded query could surface.
    expect(calls).toHaveLength(1);
    const packedUser = [...calls[0].messages].reverse().find((m) => m.role === "user")?.content ?? "";
    expect(packedUser).toContain("## Approved Knowledge Base Content");
    expect(packedUser).toContain("[Source: kb_help_002]");
    expect(packedUser).toContain("[Source: kb_help_001]");
    expect(packedUser).toContain("stays of 30 nights or longer");
  });
});