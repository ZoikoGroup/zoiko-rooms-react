"use client";

import { ExternalLink } from "lucide-react";

interface CitationProps {
  citation: {
    citation_id: string;
    source_type: string;
    source_id: string;
    title?: string;
    section?: string;
    url?: string;
  };
}

export function Citation({ citation }: CitationProps) {
  const label = citation.title || citation.section || citation.source_id;
  const sourceTypeLabel =
    citation.source_type === "authoritative_api"
      ? "Platform data"
      : citation.source_type === "knowledge_base"
        ? "Knowledge base"
        : "Source";

  return (
    <div className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px]"
      style={{
        borderColor: "var(--color-citation-border)",
        backgroundColor: "var(--color-citation-bg)",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <span className="shrink-0 rounded px-1.5 py-0.5 font-medium"
        style={{
          backgroundColor: "var(--color-citation-label-bg)",
          color: "var(--color-citation-label-text)",
        }}
      >
        {sourceTypeLabel}
      </span>
      <span className="truncate" style={{ color: "var(--color-citation-text)" }}>{label}</span>
      {citation.url && (
        <a
          href={citation.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 hover:opacity-80 transition-opacity"
          style={{ color: "var(--color-citation-label-text)" }}
          aria-label={`Open ${label}`}
        >
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}
