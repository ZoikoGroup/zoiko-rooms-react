"use client";

import { useEffect, useRef, useCallback } from "react";
import { Sun, Moon, Plus, Trash2, Clock } from "lucide-react";
import { useChatContext } from "./ChatProvider";

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MenuDropdown({ isOpen, onClose, triggerRef }: MenuDropdownProps) {
  const { resolvedTheme, newConversation, clearMessages, setTheme } = useChatContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const trapFocus = useCallback((e: KeyboardEvent) => {
    const focusableElements = dropdownRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
      triggerRef.current?.focus();
    } else if (e.key === "Tab") {
      trapFocus(e);
    }
  }, [onClose, triggerRef, trapFocus]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  }, [onClose, triggerRef]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      dropdownRef.current?.focus();
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleKeyDown, handleClickOutside]);

  const handleNewConversation = () => {
    newConversation();
    onClose();
  };

  const handleClearChat = () => {
    clearMessages();
    onClose();
  };

  const handleThemeToggle = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-50"
      style={{
        top: "64px",
        right: "16px",
      }}
    >
      <div
        className="fixed inset-0"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={dropdownRef}
        tabIndex={-1}
        className="relative w-56 rounded-xl border shadow-lg overflow-hidden"
        style={{
          borderColor: "var(--color-menu-border)",
          backgroundColor: "var(--color-menu-bg)",
        }}
        role="menu"
        aria-orientation="vertical"
      >
        <button
          onClick={handleNewConversation}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-left transition-colors"
          style={{
            color: "var(--color-menu-item-text)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-menu-item-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          role="menuitem"
        >
          <Plus className="h-4 w-4 flex-shrink-0" style={{ color: "var(--color-brand-navy)" }} />
          <span>New conversation</span>
        </button>

        <button
          onClick={handleClearChat}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-left transition-colors"
          style={{
            color: "var(--color-menu-item-text)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-menu-item-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          role="menuitem"
        >
          <Trash2 className="h-4 w-4 flex-shrink-0" style={{ color: "var(--color-brand-red)" }} />
          <span>Clear chat</span>
        </button>

        <button
          onClick={handleThemeToggle}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-left transition-colors"
          style={{
            color: "var(--color-menu-item-text)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-menu-item-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          role="menuitem"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-4 w-4 flex-shrink-0" style={{ color: "var(--color-brand-navy)" }} />
          ) : (
            <Moon className="h-4 w-4 flex-shrink-0" style={{ color: "var(--color-brand-navy)" }} />
          )}
          <span>{resolvedTheme === "dark" ? "Light mode" : "Dark mode"}</span>
        </button>

        <div
          className="border-t px-3 py-1"
          style={{ borderColor: "var(--color-menu-border)" }}
        />

        <button
          disabled
          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-left opacity-50 cursor-not-allowed"
          style={{
            color: "var(--color-menu-item-text)",
          }}
          role="menuitem"
          aria-disabled="true"
        >
          <Clock className="h-4 w-4 flex-shrink-0" style={{ color: "var(--color-gray-400)" }} />
          <span>Conversation history</span>
        </button>
      </div>
    </div>
  );
}