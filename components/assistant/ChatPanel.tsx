"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Trash2, Mic, MicOff } from "lucide-react";
import Markdown from "react-markdown";
import { useChatContext } from "./ChatProvider";
import { AnswerCard } from "./AnswerCard";
import { ContactCard } from "./ContactCard";
import { useVoiceInput } from "./use-voice-input";

const WELCOME_MESSAGE = "Hello! I'm the Zoiko Rooms assistant. I can help you with:\n\n- **Finding a room** — search, filtering, and application guidance\n- **Listing a room** — how to list and manage your property\n- **Payments & payouts** — understanding how payments work\n- **Compliance** — England housing requirements\n- **Account help** — navigating your dashboard\n\nHow can I help you today?";

const SUGGESTIONS = [
  "How do I find a room?",
  "Tell me about verification",
  "How do payments work?",
  "What is a Room Passport?",
];

function formatTime(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();
  const time = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  if (isToday) return time;
  return `${date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })} ${time}`;
}

function SystemMessage({ content }: { content: string }) {
  return (
    <div className="mb-3 flex justify-center">
      <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm text-center prose-chat"
        style={{
          backgroundColor: "var(--color-welcome-bg)",
          color: "var(--color-welcome-text)",
        }}
      >
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

export function ChatPanel() {
  const { messages, isLoading, error, sendMessage, clearMessages, contact } = useChatContext();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const voice = useVoiceInput();
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);

  // When voice recognition finalizes, send the spoken text immediately so the
  // user doesn't have to stop the mic / press send. The mic turns off by itself.
  useEffect(() => {
    if (voice.committed) {
      sendMessage(voice.committed);
      voice.clearCommitted();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voice.committed]);

  // Surface validation/permission/error states as visible, non-silent feedback.
  useEffect(() => {
    switch (voice.status) {
      case "denied":
        setVoiceNotice(
          "Microphone access is blocked. Enable the mic in your browser (lock icon by the address bar) and try again."
        );
        break;
      case "no-speech":
        setVoiceNotice("No speech detected — please try speaking again or type your message.");
        break;
      case "error":
        setVoiceNotice("Speech recognition ran into a problem. You can still type your message.");
        break;
      default:
        setVoiceNotice(null);
    }
  }, [voice.status]);

  const toggleMic = () => {
    setVoiceNotice(null);
    if (voice.listening) {
      voice.stop();
    } else {
      voice.start();
    }
  };

  const micSupported = voice.supported;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage(trimmed);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (s: string) => {
    sendMessage(s);
  };

  const handleClearChat = () => {
    clearMessages();
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.length === 0 && (
          <div className="space-y-4">
            <SystemMessage content={WELCOME_MESSAGE} />
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSuggestion(s)}
                  className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                  style={{
                    borderColor: "var(--color-suggestion-border)",
                    backgroundColor: "var(--color-suggestion-bg)",
                    color: "var(--color-suggestion-text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-suggestion-hover-bg)";
                    e.currentTarget.style.color = "var(--color-suggestion-hover-text)";
                    e.currentTarget.style.borderColor = "var(--color-suggestion-hover-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-suggestion-bg)";
                    e.currentTarget.style.color = "var(--color-suggestion-text)";
                    e.currentTarget.style.borderColor = "var(--color-suggestion-border)";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) =>
          msg.role === "user" ? (
            <div key={msg.id} className="mb-3 flex flex-col items-end gap-1">
              <div className="max-w-[80%] rounded-2xl rounded-br-sm px-4 py-2.5 text-sm text-white whitespace-pre-wrap"
                style={{ backgroundColor: "var(--color-user-bubble-bg)", color: "var(--color-user-bubble-text)" }}
              >
                {msg.content}
              </div>
              <span className="text-[10px] px-1" style={{ color: "var(--color-gray-400)" }}>
                {formatTime(msg.created_at)}
              </span>
            </div>
          ) : msg.role === "system" ? (
            <SystemMessage key={msg.id} content={msg.content} />
          ) : (
            <AnswerCard key={msg.id} message={msg} onSuggestionClick={sendMessage} />
          )
        )}

        {isLoading && (
          <div className="mb-3 flex">
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm px-4 py-3"
              style={{ backgroundColor: "var(--color-assistant-bubble-bg)" }}
            >
              <span className="h-2 w-2 animate-bounce rounded-full" style={{ backgroundColor: "var(--color-loading-dot)" }} />
              <span className="h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]" style={{ backgroundColor: "var(--color-loading-dot)" }} />
              <span className="h-2 w-2 animate-bounce rounded-full [animation-delay:-0.3s]" style={{ backgroundColor: "var(--color-loading-dot)" }} />
            </div>
          </div>
        )}

        {error && (
          <div className="mb-3 rounded-lg px-4 py-2.5 text-sm"
            style={{
              backgroundColor: "var(--color-error-bg)",
              borderColor: "var(--color-error-border)",
              color: "var(--color-error-text)",
            }}
          >
            {error}
          </div>
        )}

        {contact && <ContactCard contact={contact} />}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-3" style={{ borderTopColor: "var(--color-header-border)", borderTopWidth: "1px", borderTopStyle: "solid" }}>
        {voiceNotice && (
          <div className="mb-2 rounded-lg px-3 py-2 text-xs" role="alert" style={{ backgroundColor: "var(--color-error-bg)", color: "var(--color-error-text)" }}>
            {voiceNotice}
          </div>
        )}
        {voice.listening && (
          <div className="mb-2 flex items-center gap-2 rounded-lg px-3 py-2 text-xs" style={{ backgroundColor: "var(--color-welcome-bg)", color: "var(--color-welcome-text)" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="truncate">
              {voice.liveTranscript ? `Listening… "${voice.liveTranscript}"` : "Listening… speak now — it will send automatically."}
            </span>
          </div>
        )}
        <div className="flex items-end gap-2">
          {micSupported && (
            <button
              onClick={toggleMic}
              aria-label={voice.listening ? "Stop listening" : "Start voice input"}
              title={voice.listening ? "Stop listening" : "Voice input"}
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl transition-colors"
              style={{
                backgroundColor: voice.listening ? "var(--color-brand-navy)" : "var(--color-hover-overlay)",
                color: voice.listening ? "#fff" : "var(--color-gray-500)",
              }}
            >
              {voice.listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </button>
          )}
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={voice.listening ? "Listening…" : "Ask me anything..."}
            rows={1}
            className="flex-1 resize-none rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-1"
            style={{
              minHeight: "42px",
              maxHeight: "120px",
              backgroundColor: "var(--color-composer-bg)",
              borderColor: "var(--color-composer-border)",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "var(--color-assistant-bubble-text)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--color-focus-ring)";
              e.currentTarget.style.boxShadow = `0 0 0 1px var(--color-focus-ring)`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--color-composer-border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <button
            onClick={handleClearChat}
            aria-label="Clear chat"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl transition-colors"
            style={{
              backgroundColor: "var(--color-hover-overlay)",
              color: "var(--color-gray-400)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-gray-200)";
              e.currentTarget.style.color = "var(--color-gray-600)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
              e.currentTarget.style.color = "var(--color-gray-400)";
            }}
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-brand-navy text-white transition-colors hover:bg-brand-navy/90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
