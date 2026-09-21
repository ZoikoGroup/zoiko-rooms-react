"use client";

import { useState, useEffect } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Volume2, VolumeX } from "lucide-react";
import Markdown from "react-markdown";
import type { ChatMessage } from "./ChatProvider";
import { Citation } from "./Citation";
import { AssistantAvatar } from "./AssistantAvatar";
import { onTtsState, isSpeakingId, speakText, stopTts, ttsAvailable } from "./tts";

interface AnswerCardProps {
  message: ChatMessage;
  onSuggestionClick?: (suggestion: string) => void;
}

export function AnswerCard({ message, onSuggestionClick }: AnswerCardProps) {
  const [showSources, setShowSources] = useState(false);
  const [speakingThis, setSpeakingThis] = useState(() => isSpeakingId(message.id));
  const canSpeak = ttsAvailable();

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
    <div className="animate-chat-msg-left flex flex-col">
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
          <div className="prose-chat">
            <Markdown>{message.content}</Markdown>
          </div>

          {message.suggestions && message.suggestions.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {message.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => onSuggestionClick?.(s)}
                  className="rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-slate-200 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/10"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {message.citations && message.citations.length > 0 && (
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

          {message.deep_links && message.deep_links.length > 0 && (
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

          {message.handoff && (
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