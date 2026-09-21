"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Mic, Square, AlertTriangle } from "lucide-react";
import { useChatContext } from "./ChatProvider";
import { AnswerCard } from "./AnswerCard";
import { ContactCard } from "./ContactCard";
import { SystemMessage } from "./SystemMessage";
import { AssistantAvatar } from "./AssistantAvatar";
import { WELCOME_MESSAGE } from "./welcome";
import { useVoiceInput } from "./use-voice-input";

const SUGGESTIONS = [
  "How do I find a room?",
  "Tell me about verification",
  "How do payments work?",
  "What is a Room Passport?",
];

function TypingDots() {
  return (
    <span className="flex items-center gap-1 py-1">
      <span className="typing-dot-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
      <span className="typing-dot-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
      <span className="typing-dot-3 h-1.5 w-1.5 rounded-full bg-slate-400" />
    </span>
  );
}

export function ChatPanel() {
  const { messages, isLoading, error, sendMessage, contact, stopGenerating } = useChatContext();
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

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div ref={messagesEndRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
        {messages.length === 0 && !isLoading && (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <AssistantAvatar size="lg" />
            <SystemMessage content={WELCOME_MESSAGE} />
            <div className="flex max-w-[320px] flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((prompt, i) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="animate-chat-chip rounded-full px-3.5 py-2 text-xs font-medium text-slate-600 ring-1 ring-slate-200 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/10"
                  style={{ animationDelay: `${0.15 + i * 0.06}s`, borderColor: "var(--color-suggestion-border)", backgroundColor: "var(--color-suggestion-bg)", color: "var(--color-suggestion-text)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-suggestion-hover-bg)";
                    e.currentTarget.style.color = "var(--color-suggestion-hover-text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-suggestion-bg)";
                    e.currentTarget.style.color = "var(--color-suggestion-text)";
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) =>
          msg.role === "user" ? (
            <div key={msg.id} className="animate-chat-msg-right flex justify-end">
              <div
                className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm leading-relaxed text-white"
                style={{ backgroundColor: "var(--color-user-bubble-bg)", color: "var(--color-user-bubble-text)" }}
              >
                {msg.content}
              </div>
            </div>
          ) : msg.role === "system" ? (
            <SystemMessage key={msg.id} content={msg.content} />
          ) : (
            <AnswerCard key={msg.id} message={msg} onSuggestionClick={sendMessage} />
          )
        )}

        {(isLoading) && (
          <div className="animate-chat-msg-left flex flex-col gap-2">
            <div className="flex items-start gap-2.5">
              <AssistantAvatar />
              <div
                className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm leading-relaxed ring-1"
                style={{
                  backgroundColor: "var(--color-assistant-bubble-bg)",
                  color: "var(--color-assistant-bubble-text)",
                  borderColor: "var(--color-assistant-bubble-border)",
                }}
              >
                <TypingDots />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="animate-chat-msg-left flex items-start gap-2 rounded-2xl px-4 py-3 text-sm" style={{ backgroundColor: "var(--color-error-bg)", color: "var(--color-error-text)" }}>
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span className="flex-1">{error}</span>
          </div>
        )}

        {contact && <ContactCard contact={contact} />}
      </div>

      <footer className="border-t p-4" style={{ borderColor: "var(--color-header-border)" }}>
        {voiceNotice && (
          <div className="mb-2 rounded-xl px-3 py-2 text-xs" role="alert" style={{ backgroundColor: "var(--color-error-bg)", color: "var(--color-error-text)" }}>
            {voiceNotice}
          </div>
        )}
        {voice.listening && (
          <div className="mb-2 flex items-center gap-2 rounded-xl px-3 py-2 text-xs" style={{ backgroundColor: "var(--color-welcome-bg)", color: "var(--color-welcome-text)" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="truncate">
              {voice.liveTranscript ? `Listening… "${voice.liveTranscript}"` : "Listening… speak now — it will send automatically."}
            </span>
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-end gap-2"
        >          {micSupported && (
            <button
              type="button"
              onClick={toggleMic}
              disabled={isLoading}
              aria-label={voice.listening ? "Stop listening" : "Start voice input"}
              title={voice.listening ? "Stop listening" : "Voice input"}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors disabled:opacity-50 ${
                voice.listening ? "animate-pulse bg-brand-red text-white" : "text-slate-400 hover:bg-slate-200 hover:text-slate-600 dark:text-slate-400 dark:hover:bg-white/15 dark:hover:text-slate-200"
              }`}
              style={{ backgroundColor: voice.listening ? undefined : "var(--color-composer-bg)" }}
            >
              <Mic className="h-5 w-5" />
            </button>
          )}
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={voice.listening ? "Listening…" : "Ask about rooms, applications, payments…"}
            rows={1}
            disabled={isLoading}
            className="max-h-32 flex-1 resize-none rounded-2xl px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:opacity-60 dark:text-slate-200"
            style={{
              backgroundColor: "var(--color-composer-bg)",
              color: "var(--color-assistant-bubble-text)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--color-focus-ring)";
              e.currentTarget.style.boxShadow = `0 0 0 1px var(--color-focus-ring)`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          {isLoading ? (
            <button
              type="button"
              aria-label="Stop generating"
              title="Stop generating"
              onClick={stopGenerating}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-300 text-slate-700 transition-colors hover:bg-slate-400 dark:bg-white/20 dark:text-slate-100"
            >
              <Square className="h-4 w-4 fill-current" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-red text-white transition-colors hover:bg-brand-red-dark disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          )}
        </form>
        <p className="mt-3 text-center text-[10px] leading-relaxed text-slate-300 dark:text-slate-600">
          Zoiko Rooms is a trading name of Zoiko Realty Group.
        </p>
      </footer>
    </div>
  );
}