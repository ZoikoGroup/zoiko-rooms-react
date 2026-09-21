// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ChatProvider, useChatContext, type ChatMessage, type ArchivedSession } from "../components/assistant/ChatProvider";
import { ChatPanel } from "../components/assistant/ChatPanel";

const HISTORY_KEY = "zoiko-assistant-history";

function session(id: string, title: string, messages: ChatMessage[]): ArchivedSession {
  return { id, title, createdAt: `2026-01-0${id[id.length - 1]}T00:00:00.000Z`, messages };
}

function HistoryProbe() {
  const { history } = useChatContext();
  return <span data-testid="history-count">{history.length}</span>;
}

function DeleteProbe({ id }: { id: string }) {
  const { deleteHistory } = useChatContext();
  return <button onClick={() => deleteHistory(id)}>Delete {id}</button>;
}

function OpenProbe({ id }: { id: string }) {
  const { openHistory } = useChatContext();
  return <button onClick={() => openHistory(id)}>Open {id}</button>;
}

function ClearChatProbe() {
  const { clearChat } = useChatContext();
  return <button onClick={() => clearChat()}>Clear chat</button>;
}

function NewChatProbe() {
  const { newConversation } = useChatContext();
  return <button onClick={() => newConversation()}>New chat</button>;
}

function MessageCountProbe() {
  const { messages } = useChatContext();
  return <span data-testid="message-count">{messages.length}</span>;
}

function SessionProbe() {
  const { sessionId } = useChatContext();
  return <span data-testid="session-id">{sessionId ?? ""}</span>;
}

function renderWidget(seed: ArchivedSession[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(seed));
  render(
    <ChatProvider>
      <MessageCountProbe />
      <SessionProbe />
      <HistoryProbe />
      <DeleteProbe id="sess_a" />
      <OpenProbe id="sess_a" />
      <OpenProbe id="sess_b" />
      <ClearChatProbe />
      <NewChatProbe />
      <ChatPanel />
    </ChatProvider>
  );
}

function msg(role: "user" | "assistant", content: string): ChatMessage {
  return { id: `${role}_${content}`, role, content, created_at: new Date().toISOString() };
}

function welcomeHtml(): string {
  const node = document.querySelector<HTMLElement>(".prose-chat");
  if (!node) throw new Error("expected a .prose-chat welcome element");
  return node.outerHTML;
}

describe("History delete behavior", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useRealTimers();
    vi.clearAllTimers();
    let idCounter = 0;
    vi.stubGlobal(
      "crypto",
      Object.assign({}, globalThis.crypto, {
        randomUUID: vi.fn(() => `test-uuid-${idCounter++}`),
      })
    );
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
    (window.Element.prototype as unknown as { scrollIntoView: unknown }).scrollIntoView = vi.fn();
  });

  it("deletes a non-active conversation from state and localStorage", () => {
    const seed = [
      session("sess_a", "First chat", [msg("user", "hello")]),
      session("sess_b", "Second chat", [msg("user", "hi")]),
    ];
    renderWidget(seed);

    fireEvent.click(screen.getByRole("button", { name: "Delete sess_a" }));

    expect(screen.getByTestId("history-count").textContent).toBe("1");
    const stored = JSON.parse(localStorage.getItem(HISTORY_KEY)!) as ArchivedSession[];
    expect(stored.map((s) => s.id)).toEqual(["sess_b"]);
    expect(screen.getByTestId("message-count").textContent).toBe("0");
  });

  it("deleting the currently-active conversation falls back to the welcome message", () => {
    const seed = [
      session("sess_a", "Active chat", [msg("user", "tell me about verification"), msg("assistant", "Here's the answer.")]),
    ];
    renderWidget(seed);

    fireEvent.click(screen.getByRole("button", { name: "Open sess_a" }));
    expect(screen.getByTestId("message-count").textContent).toBe("2");

    fireEvent.click(screen.getByRole("button", { name: "Delete sess_a" }));

    expect(screen.getByTestId("history-count").textContent).toBe("0");
    expect(screen.getByTestId("message-count").textContent).toBe("1");
    const html = welcomeHtml();
    expect(html).toContain("<strong>Finding a room</strong>");
    expect(html).not.toContain("**");
  });

  it("deletes the only conversation and leaves an empty history", () => {
    const seed = [session("sess_a", "Only chat", [msg("user", "hello")])];
    renderWidget(seed);

    fireEvent.click(screen.getByRole("button", { name: "Delete sess_a" }));

    expect(screen.getByTestId("history-count").textContent).toBe("0");
    expect(JSON.parse(localStorage.getItem(HISTORY_KEY)!)).toEqual([]);
  });

  it("clear chat resets in place without creating a new history entry", () => {
    const seed = [session("sess_a", "Open chat", [msg("user", "hello")])];
    renderWidget(seed);

    fireEvent.click(screen.getByRole("button", { name: "Open sess_a" }));
    expect(screen.getByTestId("message-count").textContent).toBe("1");

    fireEvent.click(screen.getByRole("button", { name: "Clear chat" }));

    expect(screen.getByTestId("history-count").textContent).toBe("0");
    expect(screen.getByTestId("message-count").textContent).toBe("1");
    expect(welcomeHtml()).toContain("<strong>Finding a room</strong>");
  });

  it("new chat archives the open conversation and starts a fresh session id", () => {
    const seed = [session("sess_a", "First chat", [msg("user", "hello")])];
    renderWidget(seed);

    fireEvent.click(screen.getByRole("button", { name: "Open sess_a" }));
    expect(screen.getByTestId("session-id").textContent).toBe("sess_a");
    expect(screen.getByTestId("message-count").textContent).toBe("1");

    fireEvent.click(screen.getByRole("button", { name: "New chat" }));

    expect(screen.getByTestId("session-id").textContent).not.toBe("sess_a");
    expect(screen.getByTestId("session-id").textContent).not.toBe("");
    expect(screen.getByTestId("history-count").textContent).toBe("1");
    expect(screen.getByTestId("message-count").textContent).toBe("1");
    expect(welcomeHtml()).toContain("<strong>Finding a room</strong>");
    const stored = JSON.parse(localStorage.getItem(HISTORY_KEY)!) as ArchivedSession[];
    expect(stored.map((s) => s.id)).toContain("sess_a");
  });

  it("new chat accumulates separate archived conversations across multiple uses", async () => {
    const seed = [session("sess_a", "First chat", [msg("user", "hello")])];
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      async json() {
        return { ok: true, answer: "Fake answer.", citations: [] };
      },
    });
    vi.stubGlobal("fetch", fetchMock);
    renderWidget(seed);

    const ask = async (prompt: string) => {
      fireEvent.change(screen.getByPlaceholderText(/Ask about rooms/), { target: { value: prompt } });
      fireEvent.click(screen.getByRole("button", { name: "Send message" }));
      // "2" here is welcome + the user prompt; do NOT archive until the mocked
      // assistant reply is actually committed ("3") — otherwise the archived
      // conversation races ahead of the reply and flakes 1-message vs 2.
      await waitFor(() => expect(screen.getByTestId("message-count").textContent).toBe("3"));
      fireEvent.click(screen.getByRole("button", { name: "New chat" }));
      await waitFor(() => expect(screen.getByTestId("message-count").textContent).toBe("1"));
    };

    await ask("How do payments work?");
    await ask("Tell me about verification");

    const stored = JSON.parse(localStorage.getItem(HISTORY_KEY)!) as ArchivedSession[];
    expect(stored.map((s) => s.id)).toContain("sess_a");
    expect(stored.some((s) => s.title === "How do payments work?" && s.messages.length === 2)).toBe(true);
    expect(stored.some((s) => s.title === "Tell me about verification" && s.messages.length === 2)).toBe(true);
    expect(screen.getByTestId("history-count").textContent).toBe("3");
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });
});