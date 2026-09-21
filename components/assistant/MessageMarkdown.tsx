"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

/**
 * Shared, sanitized Markdown renderer for every chat bubble.
 *
 * `react-markdown` escapes raw HTML by default (no `rehype-raw`), so untrusted
 * model output can never inject markup. Links are additionally hardened:
 * `javascript:`/`data:`/`vbscript:` targets are neutralized and external links
 * open in a new tab with `noopener`.
 */
const markdownComponents: Components = {
  a: ({ node: _node, ...props }) => {
    const href = typeof props.href === "string" ? props.href : "";
    const unsafeScheme = /^(?:javascript|data|vbscript):/i;
    const safeHref = unsafeScheme.test(href) ? "#" : href;
    return (
      <a
        {...props}
        href={safeHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (safeHref !== href) {
            e.preventDefault();
          }
        }}
      />
    );
  },
};

export function MessageMarkdown({ content }: { content: string }) {
  return (
    <div className="prose-chat">
      <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </Markdown>
    </div>
  );
}
