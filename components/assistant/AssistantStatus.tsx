"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);
  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

/** "AI Assistant · Online", following the browser's connection state. */
export function AssistantStatus() {
  const online = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  return (
    <p className="flex items-center gap-1.5 text-xs font-medium" role="status">
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: online ? "var(--color-status-online)" : "var(--color-status-offline)" }}
      />
      <span style={{ color: "var(--color-gray-600)" }}>AI Assistant</span>
      <span aria-hidden="true" style={{ color: "var(--color-gray-400)" }}>•</span>
      <span style={{ color: online ? "var(--color-status-online)" : "var(--color-status-offline)" }}>
        {online ? "Online" : "Offline"}
      </span>
    </p>
  );
}
