"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Volume2, VolumeX } from "lucide-react";
import type { ChatMessage } from "./ChatProvider";
import { Citation } from "./Citation";
import { AssistantAvatar } from "./AssistantAvatar";
import { MessageMarkdown } from "./MessageMarkdown";
import { useChatContext, freshMessageIds } from "./ChatProvider";
import { onTtsState, isSpeakingId, speakText, stopTts, ttsAvailable } from "./tts";

interface AnswerCardProps {
  message: ChatMessage;
  onSuggestionClick?: (suggestion: string) => void;
}

/**
 * Keeps the chat pinned to the newest text, but only while the reader is already at
 * the bottom; once they scroll up to read, the reveal never pulls them back down.
 */
function followBottom(el: HTMLElement | null) {
  const scroller = el?.closest<HTMLElement>(".overflow-y-auto");
  if (!scroller) return;
  const gap = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight;
  if (gap > 120) return;
  requestAnimationFrame(() => {
    scroller.scrollTop = scroller.scrollHeight;
  });
}

/**
 * Reveals a reply progressively (word by word) like a streamed answer. The reply
 * arrives whole, so this is purely visual; long answers speed up to stay short.
 */
function useReveal(messageId: string, content: string, onTick: () => void) {
  const [animate] = useState(
    () => freshMessageIds.has(messageId) && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
  );
  const total = content.split(/(\s+)/).length;
  const [count, setCount] = useState(animate ? 0 : total);
  const tickRef = useRef(onTick);
  useEffect(() => {
    tickRef.current = onTick;
  });

  useEffect(() => {
    if (!animate) return;
    const step = Math.max(2, Math.ceil(total / 50));
    let shown = 0;
    const id = window.setInterval(() => {
      shown = Math.min(total, shown + step);
      setCount(shown);
      tickRef.current();
      if (shown >= total) window.clearInterval(id);
    }, 50);
    return () => window.clearInterval(id);
  }, [animate, total]);

  const done = count >= total;
  useEffect(() => {
    if (done) freshMessageIds.delete(messageId);
  }, [done, messageId]);

  return { text: done ? content : content.split(/(\s+)/).slice(0, count).join(""), done };
}

export function AnswerCard({ message, onSuggestionClick }: AnswerCardProps) {
  const { t } = useChatContext();
  const [showSources, setShowSources] = useState(false);
  const [speakingThis, setSpeakingThis] = useState(() => isSpeakingId(message.id));
  const canSpeak = ttsAvailable();
  const rootRef = useRef<HTMLDivElement>(null);
  const { text, done } = useReveal(message.id, message.content, () => followBottom(rootRef.current));
  useEffect(() => {
    const unsubscribe = onTtsState(() => setSpeakingThis(isSpeakingId(message.id)));
    return unsubscribe;
  }, [message.id]);

  const toggleSpeak = () => {
    if (speakingThis) {
      stopTts();
    } else {
      speakText(message.content, message.id);
    }
  };

  return (
    <div ref={rootRef} className="animate-chat-msg-left flex flex-col">
      <div className="flex items-start gap-2.5">
        <AssistantAvatar />
        <div
          className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm leading-relaxed text-slate-700 ring-1 ring-slate-200"
          style={{
            backgroundColor: "var(--color-assistant-bubble-bg)",
            color: "var(--color-assistant-bubble-text)",
            borderColor: "var(--color-assistant-bubble-border)",
          }}
        >
          <MessageMarkdown content={text} />
          {!done && <span className="chat-reveal-caret" aria-hidden="true" />}

          {done && message.suggestions && message.suggestions.length > 0 && (
            <div className="animate-chat-fade-slide mt-2 flex flex-wrap gap-1.5">
              {message.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => onSuggestionClick?.(s)}
                  className="rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-slate-200 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/10"
                >
                  {t(s)}
                </button>
              ))}
            </div>
          )}

          {done && message.citations && message.citations.length > 0 && (
            <div className="mt-2">
              <button
                onClick={() => setShowSources(!showSources)}
                className="flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-slate-700 hover:underline"
              >
                {showSources ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                {message.citations.length} source{message.citations.length !== 1 ? "s" : ""}
              </button>

              {showSources && (
                <div className="mt-2 space-y-1.5">
                  {message.citations.map((citation) => (
                    <Citation key={citation.citation_id} citation={citation} />
                  ))}
                </div>
              )}
            </div>
          )}

          {done && message.deep_links && message.deep_links.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {message.deep_links.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-slate-200 transition-colors hover:bg-slate-100"
                >
                  {link.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          )}

          {done && message.handoff && (
            <div className="mt-2 rounded-lg border px-3 py-2 text-xs" style={{ borderColor: "var(--color-handoff-border)", backgroundColor: "var(--color-handoff-bg)", color: "var(--color-handoff-text)" }}>
              <span className="font-medium">Human support requested.</span> Reference: {message.handoff.id}
            </div>
          )}
        </div>
      </div>
      {canSpeak && message.content.trim() && (
        <div className="ml-9 mt-1 flex">
          <button
            onClick={toggleSpeak}
            aria-label={speakingThis ? "Stop reading" : "Read aloud"}
            title={speakingThis ? "Stop reading" : "Read aloud"}
            className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
              speakingThis
                ? "text-brand-red"
                : "text-slate-300 hover:bg-slate-100 hover:text-slate-500 dark:text-slate-600 dark:hover:bg-white/10 dark:hover:text-slate-300"
            }`}
          >
            {speakingThis ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      )}
    </div>
  );
}