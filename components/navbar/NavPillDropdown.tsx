"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import type { PillOption } from "@/lib/nav-data";

type NavPillDropdownProps = {
  storageKey: string;
  options: PillOption[];
  ariaLabel: string;
};

export function NavPillDropdown({ storageKey, options, ariaLabel }: NavPillDropdownProps) {
  const [selected, setSelected] = useState(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored && options.some((option) => option.code === stored)) {
      return stored;
    }
    return options[0].code;
  });
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

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
    setSelected(code);
    setOpen(false);
    window.localStorage.setItem(storageKey, code);
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
