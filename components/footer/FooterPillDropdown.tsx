"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import type { PillOption } from "@/lib/nav-data";

type FooterPillDropdownProps = {
  storageKey: string;
  options: PillOption[];
  ariaLabel: string;
  showCode?: boolean;
};

export function FooterPillDropdown({ storageKey, options, ariaLabel, showCode = false }: FooterPillDropdownProps) {
  const [selected, setSelected] = useState(options[0].code);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored && options.some((option) => option.code === stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
      setSelected(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
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
    setSelected(code);
    setOpen(false);
    window.localStorage.setItem(storageKey, code);
  }

  const current = options.find((option) => option.code === selected) ?? options[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 items-center gap-1.5 rounded-lg bg-white/[0.08] px-3 text-xs font-medium text-white/80 transition-colors hover:bg-white/[0.14]"
      >
        {showCode ? current.code : current.label}
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#1B2438] py-1 shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option.code}
              type="button"
              role="option"
              aria-selected={option.code === selected}
              onClick={() => handleSelect(option.code)}
              className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm text-white/80 transition-colors hover:bg-white/10"
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
