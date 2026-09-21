"use client";

import { useEffect, useState } from "react";
import CookiePreferencesHeader from "./CookiePreferencesHeader";
import CookiePreferencesList, { categoriesData } from "./CookiePreferencesList";

const STORAGE_KEY = "zoiko-cookie-preferences";

function buildInitialToggles(): Record<string, boolean> {
  const initial: Record<string, boolean> = {};
  categoriesData.forEach((cat) => {
    cat.settings.forEach((s) => {
      if (s.type === "toggle") {
        initial[s.id] = s.defaultChecked ?? false;
      }
    });
  });
  return initial;
}

export default function CookiePreferencesView() {
  const [toggles, setToggles] = useState<Record<string, boolean>>(() => buildInitialToggles());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
        setToggles((prev) => ({ ...prev, ...parsed }));
      } catch {
        // Ignore malformed stored state — fall back to defaults.
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toggles));
  }, [toggles, hydrated]);

  function handleToggle(id: string, disabled?: boolean) {
    if (disabled) return;
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function setAll(value: boolean) {
    setToggles((prev) => {
      const next = { ...prev };
      categoriesData.forEach((cat) => {
        cat.settings.forEach((s) => {
          // A privacy signal (e.g. Global Privacy Control) already blocked
          // this one — bulk actions never override that, same as an
          // individual toggle can't while it's disabled.
          if (s.type === "toggle" && !s.disabled) {
            next[s.id] = value;
          }
        });
      });
      return next;
    });
  }

  return (
    <main>
      <CookiePreferencesHeader onAcceptAll={() => setAll(true)} onRejectNonEssential={() => setAll(false)} />
      <CookiePreferencesList toggles={toggles} onToggle={handleToggle} />
    </main>
  );
}
