// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import { ChatProvider, useChatContext } from "../components/assistant/ChatProvider";
import { ChatPanel } from "../components/assistant/ChatPanel";
import { ChatShell } from "../components/assistant/ChatShell";
import { WELCOME_MESSAGE } from "../components/assistant/welcome";
import { HOME_CATEGORIES, POPULAR_QUESTIONS, POPULAR_QUESTIONS_SHOWN } from "../components/assistant/home-content";

function ClearChatProbe() {
  const { clearChat } = useChatContext();
  return <button onClick={() => clearChat()}>Clear chat probe</button>;
}

function MessageCountProbe() {
  const { messages } = useChatContext();
  return <span data-testid="message-count">{messages.length}</span>;
}

function OpenOnMount() {
  const { openChat } = useChatContext();
  useEffect(() => openChat(), [openChat]);
  return null;
}

function renderPanel() {
  render(
    <ChatProvider>
      <MessageCountProbe />
      <ClearChatProbe />
      <ChatPanel />
    </ChatProvider>
  );
}

function renderShell() {
  render(
    <ChatProvider>
      <OpenOnMount />
      <ChatShell />
    </ChatProvider>
  );
}

describe("Ask Zoiko home screen", () => {
  beforeEach(() => {
    localStorage.clear();
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

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("keeps the shared welcome text with the five topic bullets", () => {
    expect(WELCOME_MESSAGE).toContain("**Finding a room**");
    expect(WELCOME_MESSAGE).toContain("- **Listing a room**");
    expect(WELCOME_MESSAGE).toContain("- **Account help**");
  });

  it("shows the greeting, the six topic cards and six popular questions on first open", () => {
    renderPanel();
    expect(screen.getByRole("heading", { name: /Hello! I'm Ask Zoiko/ })).toBeTruthy();
    for (const card of HOME_CATEGORIES) {
      expect(screen.getByRole("button", { name: new RegExp(card.title) })).toBeTruthy();
    }
    for (const { question } of POPULAR_QUESTIONS.slice(0, POPULAR_QUESTIONS_SHOWN)) {
      expect(screen.getByRole("button", { name: question })).toBeTruthy();
    }
    expect(screen.queryByRole("button", { name: POPULAR_QUESTIONS[POPULAR_QUESTIONS_SHOWN].question })).toBeNull();
  });

  it("'See all' reveals every popular question and can collapse again", () => {
    renderPanel();
    fireEvent.click(screen.getByRole("button", { name: /See all/ }));
    for (const { question } of POPULAR_QUESTIONS) {
      expect(screen.getByRole("button", { name: question })).toBeTruthy();
    }
    fireEvent.click(screen.getByRole("button", { name: /Show fewer/ }));
    expect(screen.queryByRole("button", { name: POPULAR_QUESTIONS[POPULAR_QUESTIONS_SHOWN].question })).toBeNull();
  });

  it("a topic card sends its question and the conversation replaces the home screen", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      async json() {
        return { ok: true, answer: "Sure, which city?", citations: [] };
      },
    });
    vi.stubGlobal("fetch", fetchMock);
    renderPanel();

    fireEvent.click(screen.getByRole("button", { name: /Find a room/ }));

    await waitFor(() => expect(screen.getByText("Sure, which city?")).toBeTruthy());
    expect(screen.getByText("Help me find a room")).toBeTruthy();
    expect(screen.queryByTestId("assistant-home")).toBeNull();
    expect(JSON.stringify(fetchMock.mock.calls[0])).toContain("Help me find a room");
  });

  it("clear chat brings the home screen back", () => {
    renderPanel();
    fireEvent.click(screen.getByRole("button", { name: "Clear chat probe" }));
    expect(screen.getByTestId("message-count").textContent).toBe("1");
    expect(screen.getByTestId("assistant-home")).toBeTruthy();
  });

  it("the input bar has no attachment button (uploads are not supported)", () => {
    renderPanel();
    expect(screen.queryByRole("button", { name: /Attach/ })).toBeNull();
    expect(screen.getByPlaceholderText(/Ask me anything about rooms, listings, payments, or rules/)).toBeTruthy();
  });

  it("header: Online status, expand toggle (remembered) and the More menu", () => {
    renderShell();
    expect(screen.getByText("Online")).toBeTruthy();

    const dialog = screen.getByRole("dialog", { name: "Ask Zoiko assistant" });
    expect(dialog.getAttribute("data-expanded")).toBe("false");
    fireEvent.click(screen.getByRole("button", { name: "Expand" }));
    expect(dialog.getAttribute("data-expanded")).toBe("true");
    expect(localStorage.getItem("zoiko-assistant-expanded")).toBe("1");

    fireEvent.click(screen.getByRole("button", { name: "More options" }));
    expect(screen.getByRole("menuitem", { name: /New conversation/ })).toBeTruthy();
    expect(screen.getByRole("menuitem", { name: /Clear chat/ })).toBeTruthy();
    expect(screen.getByRole("menuitem", { name: /Contact admin/ })).toBeTruthy();
  });
});
