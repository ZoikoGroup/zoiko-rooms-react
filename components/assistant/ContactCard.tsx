"use client";

import { useEffect, useState } from "react";
import { Mail, Send, X, Loader2 } from "lucide-react";
import { useChatContext, type ContactDraft } from "./ChatProvider";

interface ContactCardProps {
  contact: ContactDraft;
}

/**
 * In-chat email ActionCard. Rendered as a normal assistant-styled message
 * inside the scrollable thread (never a popup). Shows recipient / subject /
 * body with confirm + cancel. On confirm the email executes and the result is
 * posted as a chat message by ChatProvider.
 */
export function ContactCard({ contact }: ContactCardProps) {
  const { confirmContact, cancelContact } = useChatContext();
  const [recipient, setRecipient] = useState(contact.recipient);
  const [subject, setSubject] = useState(contact.subject);
  const [body, setBody] = useState(contact.body);

  // Reset local fields if a fresh draft is opened.
  useEffect(() => {
    setRecipient(contact.recipient);
    setSubject(contact.subject);
    setBody(contact.body);
  }, [contact.recipient, contact.subject, contact.body]);

  const busy = contact.status === "sending";

  const handleConfirm = () => {
    confirmContact({ recipient: recipient.trim(), subject: subject.trim(), body: body.trim() });
  };

  return (
    <div className="mb-3">
      <div className="max-w-[85%]">
        <div
          className="mb-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
          style={{ backgroundColor: "var(--color-badge-account-bg)", color: "var(--color-badge-account-text)" }}
        >
          <Mail className="h-3 w-3" />
          Email support
        </div>

        <div
          className="rounded-2xl rounded-bl-sm border p-4 text-sm"
          style={{
            backgroundColor: "var(--color-assistant-bubble-bg)",
            color: "var(--color-assistant-bubble-text)",
            borderColor: "var(--color-header-border)",
          }}
        >
          <div className="mb-3 flex flex-col gap-2">
            <label className="flex items-center gap-2 text-xs">
              <span className="w-16 shrink-0" style={{ color: "var(--color-gray-500)" }}>Recipient</span>
              <span
                className="min-w-0 flex-1 rounded-lg border px-2.5 py-1.5 text-sm"
                style={{
                  borderColor: "var(--color-composer-border)",
                  backgroundColor: "var(--color-composer-bg)",
                  color: "var(--color-gray-600)",
                  cursor: "not-allowed",
                }}
                title={recipient}
              >
                {recipient}
              </span>
            </label>

            <label className="flex items-center gap-2 text-xs">
              <span className="w-16 shrink-0" style={{ color: "var(--color-gray-500)" }}>Subject</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={busy}
                aria-label="Email subject"
                className="min-w-0 flex-1 rounded-lg border px-2.5 py-1.5 text-sm focus:outline-none focus:ring-1"
                style={{
                  borderColor: "var(--color-composer-border)",
                  backgroundColor: "var(--color-composer-bg)",
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
            </label>

            <label className="flex items-start gap-2 text-xs">
              <span className="w-16 shrink-0 pt-1.5" style={{ color: "var(--color-gray-500)" }}>Message</span>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                disabled={busy}
                rows={3}
                aria-label="Email message"
                placeholder="How can we help?"
                className="min-w-0 flex-1 resize-none rounded-lg border px-2.5 py-1.5 text-sm focus:outline-none focus:ring-1"
                style={{
                  borderColor: "var(--color-composer-border)",
                  backgroundColor: "var(--color-composer-bg)",
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
            </label>
          </div>

          {contact.status === "error" && (
            <div
              className="mb-3 rounded-lg px-3 py-2 text-xs"
              style={{
                backgroundColor: "var(--color-error-bg)",
                borderColor: "var(--color-error-border)",
                color: "var(--color-error-text)",
              }}
            >
              {contact.error}
            </div>
          )}

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={cancelContact}
              disabled={busy}
              className="flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs transition-colors disabled:opacity-40"
              style={{ borderColor: "var(--color-header-border)", color: "var(--color-gray-600)" }}
            >
              <X className="h-3.5 w-3.5" />
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={busy || !recipient.trim() || !subject.trim() || !body.trim()}
              className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-colors disabled:opacity-40"
              style={{ backgroundColor: "var(--color-brand-navy)" }}
            >
              {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
              {busy ? "Sending…" : "Confirm & send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
