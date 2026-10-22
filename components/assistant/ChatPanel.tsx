"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Mic, Square, AlertTriangle, Sparkles } from "lucide-react";
import { useChatContext } from "./ChatProvider";
import { AnswerCard } from "./AnswerCard";
import { ContactCard } from "./ContactCard";
import { SystemMessage } from "./SystemMessage";
import { AssistantAvatar } from "./AssistantAvatar";
import { AssistantHome } from "./AssistantHome";
import { useVoiceInput } from "./use-voice-input";

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
  // The home screen stays until the visitor sends their first message (a
  // cleared chat only holds the system welcome, so it shows the home again).
  const showHome = !isLoading && !messages.some((m) => m.role === "user");

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
        {showHome ? (
          <AssistantHome onAsk={sendMessage} disabled={isLoading} />
        ) : (
          messages.map((msg) =>
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
          className="flex items-end gap-1.5 rounded-[1.75rem] border py-1.5 pl-2 pr-1.5 transition-shadow focus-within:shadow-[0_0_0_1px_var(--color-focus-ring)]"
          style={{ borderColor: "var(--color-home-question-border)", backgroundColor: "var(--color-composer-bg)" }}
        >
          <span
            aria-hidden="true"
            className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--color-home-red-bg)", color: "var(--color-brand-red)" }}
          >
            <Sparkles className="h-[18px] w-[18px]" />
          </span>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={voice.listening ? "Listening…" : "Ask me anything about rooms, listings, payments, or rules…"}
            aria-label="Message Ask Zoiko"
            rows={1}
            disabled={isLoading}
            className="max-h-32 min-w-0 flex-1 resize-none bg-transparent px-1 py-2.5 text-sm outline-none disabled:opacity-60"
            style={{ color: "var(--color-assistant-bubble-text)" }}
          />
          {micSupported && (
            <button
              type="button"
              onClick={toggleMic}
              disabled={isLoading}
              aria-label={voice.listening ? "Stop listening" : "Start voice input"}
              title={voice.listening ? "Stop listening" : "Voice input"}
              className={`mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors disabled:opacity-50 ${
                voice.listening ? "animate-pulse bg-brand-red text-white" : "hover:bg-[var(--color-hover-overlay)]"
              }`}
              style={{ color: voice.listening ? undefined : "var(--color-gray-600)" }}
            >
              <Mic className="h-[18px] w-[18px]" />
            </button>
          )}
          {isLoading ? (
            <button
              type="button"
              aria-label="Stop generating"
              title="Stop generating"
              onClick={stopGenerating}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-300 text-slate-700 transition-colors hover:bg-slate-400 dark:bg-white/20 dark:text-slate-100"
            >
              <Square className="h-4 w-4 fill-current" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-11 w-14 shrink-0 items-center justify-center rounded-full bg-brand-red text-white transition-colors hover:bg-brand-red-dark disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          )}
        </form>
        <p className="mt-2.5 text-center text-[10px] leading-relaxed" style={{ color: "var(--color-gray-400)" }}>
          Provides information and helps you use Zoiko Rooms. It does not make platform decisions.
          <br />
          Zoiko Rooms is a trading name of Zoiko Realty Group.
        </p>
      </footer>
    </div>
  );
}