"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import type { LanguageCode } from "@/lib/i18n/translations";
import { useChatContext } from "./ChatProvider";

const LANGUAGE_OPTIONS: Array<{ code: LanguageCode; label: string }> = [
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
  { code: "ES", label: "Español" },
  { code: "PT", label: "Português" },
];

interface LanguageMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

/** Assistant-only language picker; it does not change the website's language. */
export function LanguageMenu({ isOpen, onClose, triggerRef }: LanguageMenuProps) {
  const { language, setLanguage, t } = useChatContext();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    };
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !triggerRef.current?.contains(target)) onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div className="absolute right-3 top-full z-50 mt-1">
      <div
        ref={menuRef}
        role="menu"
        aria-label={t("Language")}
        className="w-44 overflow-hidden rounded-xl border shadow-lg"
        style={{ borderColor: "var(--color-menu-border)", backgroundColor: "var(--color-menu-bg)" }}
      >
        {LANGUAGE_OPTIONS.map(({ code, label }) => (
          <button
            key={code}
            type="button"
            role="menuitemradio"
            aria-checked={language === code}
            onClick={() => {
              setLanguage(code);
              onClose();
            }}
            className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-[var(--color-menu-item-hover)]"
            style={{ color: "var(--color-menu-item-text)" }}
          >
            <span>{label}</span>
            {language === code && <Check className="h-4 w-4" style={{ color: "var(--color-brand-navy)" }} />}
          </button>
        ))}
      </div>
    </div>
  );
}
