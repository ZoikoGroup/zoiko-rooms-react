// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChatProvider, useChatContext } from "../components/assistant/ChatProvider";
import { ChatPanel } from "../components/assistant/ChatPanel";
import { WELCOME_MESSAGE } from "../components/assistant/welcome";

function ClearChatProbe() {
  const { clearChat } = useChatContext();
  return <button onClick={() => clearChat()}>Clear chat</button>;
}

function MessageCountProbe() {
  const { messages } = useChatContext();
  return <span data-testid="message-count">{messages.length}</span>;
}

function renderWidget() {
  render(
    <ChatProvider>
      <MessageCountProbe />
      <ClearChatProbe />
      <ChatPanel />
    </ChatProvider>
  );
}

function welcomeHtml(): string {
  const node = document.querySelector<HTMLElement>(".prose-chat");
  if (!node) throw new Error("expected a .prose-chat welcome element");
  return node.outerHTML;
}

describe("Ask Zoiko welcome message", () => {
  beforeEach(() => {
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

  it("ships a single shared markdown source with the five topic bullets", () => {
    expect(WELCOME_MESSAGE).toContain("**Finding a room**");
    expect(WELCOME_MESSAGE).toContain("- **Listing a room**");
    expect(WELCOME_MESSAGE).toContain("- **Payments & payouts**");
    expect(WELCOME_MESSAGE).toContain("- **Compliance**");
    expect(WELCOME_MESSAGE).toContain("- **Account help**");
  });

  it("renders the welcome message with markdown structure (bold + bullets) on first open", () => {
    renderWidget();
    const html = welcomeHtml();
    expect(html).toContain("<strong>Finding a room</strong>");
    expect(html).toContain("<strong>Listing a room</strong>");
    expect(html).toContain("<strong>Account help</strong>");
    expect(html).toContain("<ul>");
    expect(html).toContain("<li>");
    expect(html).not.toContain("**");
    expect(html).not.toContain("- **");
  });

  it("renders the clear-chat welcome reset with the exact same formatted structure", () => {
    renderWidget();
    const before = welcomeHtml();

    fireEvent.click(screen.getByRole("button", { name: "Clear chat" }));

    expect(screen.getByTestId("message-count").textContent).toBe("1");
    const after = welcomeHtml();
    expect(after).toBe(before);
    expect(after).toContain("<strong>Finding a room</strong>");
    expect(after).not.toContain("**");
  });
});