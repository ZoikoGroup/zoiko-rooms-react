"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Markdown from "react-markdown";
import type { ChatMessage } from "./ChatProvider";
import { Citation } from "./Citation";

interface AnswerCardProps {
  message: ChatMessage;
  onSuggestionClick?: (suggestion: string) => void;
}

export function AnswerCard({ message, onSuggestionClick }: AnswerCardProps) {
  const [showSources, setShowSources] = useState(false);

  const answerLabel = getAnswerLabel(message.answer_type);
  const { badgeBg, badgeText, badgeBorder } = getAnswerBadgeColors(message.answer_type);

  return (
    <div className="mb-3">
      <div className="max-w-[85%]">
        <div className="mb-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
          style={{
            backgroundColor: badgeBg,
            color: badgeText,
            borderColor: badgeBorder,
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          {answerLabel}
        </div>

        <div className="rounded-2xl rounded-bl-sm px-4 py-3 text-sm prose-chat"
          style={{
            backgroundColor: "var(--color-assistant-bubble-bg)",
            color: "var(--color-assistant-bubble-text)",
          }}
        >
          <Markdown>{message.content}</Markdown>
        </div>

        <span className="mt-1 block text-[10px] px-1" style={{ color: "var(--color-gray-400)" }}>
          {formatTime(message.created_at)}
        </span>

        {message.citations && message.citations.length > 0 && (
          <div className="mt-2">
            <button
              onClick={() => setShowSources(!showSources)}
              className="flex items-center gap-1 text-xs font-medium hover:underline transition-colors"
              style={{ color: "var(--color-brand-navy)" }}
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

        {message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {message.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => onSuggestionClick?.(s)}
                className="rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors"
                style={{
                  borderColor: "var(--color-suggestion-border)",
                  backgroundColor: "var(--color-suggestion-bg)",
                  color: "var(--color-suggestion-text)",
                  borderWidth: "1px",
                  borderStyle: "solid",
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
        )}

        {message.deep_links && message.deep_links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {message.deep_links.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors"
                style={{
                  borderColor: "var(--color-deep-link-border)",
                  backgroundColor: "var(--color-deep-link-bg)",
                  color: "var(--color-deep-link-text)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-deep-link-hover-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-deep-link-bg)";
                }}
              >
                {link.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}

        {message.handoff && (
          <div className="mt-2 rounded-lg px-3 py-2 text-xs"
            style={{
              backgroundColor: "var(--color-handoff-bg)",
              borderColor: "var(--color-handoff-border)",
              color: "var(--color-handoff-text)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <span className="font-medium">Human support requested.</span> Reference: {message.handoff.id}
          </div>
        )}
      </div>
    </div>
  );
}

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

function getAnswerLabel(type?: string): string {
  switch (type) {
    case "ACCOUNT_DATA": return "Account data";
    case "GUIDANCE": return "Guidance";
    case "MIXED": return "Mixed";
    case "CLARIFICATION": return "Assistant";
    case "ABSTENTION": return "Assistant";
    case "NAVIGATION": return "Navigation";
    default: return "Assistant";
  }
}

function getAnswerBadgeColors(type?: string): { badgeBg: string; badgeText: string; badgeBorder: string } {
  switch (type) {
    case "ACCOUNT_DATA":
      return {
        badgeBg: "var(--color-badge-account-bg)",
        badgeText: "var(--color-badge-account-text)",
        badgeBorder: "var(--color-badge-account-bg)",
      };
    case "GUIDANCE":
      return {
        badgeBg: "var(--color-badge-guidance-bg)",
        badgeText: "var(--color-badge-guidance-text)",
        badgeBorder: "var(--color-badge-guidance-bg)",
      };
    case "MIXED":
      return {
        badgeBg: "var(--color-badge-mixed-bg)",
        badgeText: "var(--color-badge-mixed-text)",
        badgeBorder: "var(--color-badge-mixed-bg)",
      };
    case "ABSTENTION":
      return {
        badgeBg: "var(--color-badge-abstention-bg)",
        badgeText: "var(--color-badge-abstention-text)",
        badgeBorder: "var(--color-badge-abstention-bg)",
      };
    case "NAVIGATION":
      return {
        badgeBg: "var(--color-badge-navigation-bg)",
        badgeText: "var(--color-badge-navigation-text)",
        badgeBorder: "var(--color-badge-navigation-bg)",
      };
    default:
      return {
        badgeBg: "var(--color-badge-abstention-bg)",
        badgeText: "var(--color-badge-abstention-text)",
        badgeBorder: "var(--color-badge-abstention-bg)",
      };
  }
}
