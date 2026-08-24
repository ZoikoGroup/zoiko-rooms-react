"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import type { PillOption } from "@/lib/nav-data";

type NavPillDropdownProps = {
  storageKey: string;
  options: PillOption[];
  ariaLabel: string;
  onSelect?: (code: string) => void;
  /** When provided, the displayed selection is controlled externally (e.g. shared language state) instead of tracked locally. */
  value?: string;
};

export function NavPillDropdown({ storageKey, options, ariaLabel, onSelect, value }: NavPillDropdownProps) {
  const [internalSelected, setInternalSelected] = useState(options[0].code);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = value ?? internalSelected;

  useEffect(() => {
    if (value !== undefined) return;
    const stored = window.localStorage.getItem(storageKey);
    if (stored && options.some((option) => option.code === stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
      setInternalSelected(stored);
      onSelect?.(stored);
    } else {
      onSelect?.(options[0].code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount, to apply the stored (or default) choice's side effect
  }, []);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function handleSelect(code: string) {
    if (value === undefined) setInternalSelected(code);
    setOpen(false);
    window.localStorage.setItem(storageKey, code);
    onSelect?.(code);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-black/10 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors hover:bg-brand-navy/5"
      >
        {selected}
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-black/5 bg-white py-1 shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option.code}
              type="button"
              role="option"
              aria-selected={option.code === selected}
              onClick={() => handleSelect(option.code)}
              className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm text-brand-navy transition-colors hover:bg-brand-navy/5"
            >
              {option.label}
              {option.code === selected && <Check className="h-3.5 w-3.5 text-brand-red" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
