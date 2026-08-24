"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type LanguageCode } from "./translations";

const STORAGE_KEY = "zoiko-language";
const LANGUAGE_CODES: LanguageCode[] = ["EN", "DE", "FR", "ES", "PT"];

function isLanguageCode(value: string): value is LanguageCode {
  return (LANGUAGE_CODES as string[]).includes(value);
}

function detectDeviceLanguage(): LanguageCode | null {
  const candidates = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  for (const candidate of candidates) {
    const primarySubtag = candidate.split("-")[0]?.toUpperCase();
    if (primarySubtag && isLanguageCode(primarySubtag)) return primarySubtag;
  }

  return null;
}

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (code: string) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("EN");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const resolved = stored && isLanguageCode(stored) ? stored : detectDeviceLanguage();
    if (resolved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage/device locale on mount, not a render loop
      setLanguageState(resolved);
      document.documentElement.lang = resolved.toLowerCase();
      if (!stored) window.localStorage.setItem(STORAGE_KEY, resolved);
    }
  }, []);

  const setLanguage = useCallback((code: string) => {
    if (!isLanguageCode(code)) return;
    setLanguageState(code);
    window.localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.lang = code.toLowerCase();
  }, []);

  const t = useCallback(
    (text: string) => (language === "EN" ? text : translations[language]?.[text] ?? text),
    [language],
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
