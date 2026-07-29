"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { SearchModal } from "./SearchModal";

type SearchModalContextValue = {
  open: () => void;
  close: () => void;
};

const SearchModalContext = createContext<SearchModalContextValue | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <SearchModalContext.Provider value={{ open, close }}>
      {children}
      <SearchModal isOpen={isOpen} onClose={close} />
    </SearchModalContext.Provider>
  );
}

export function useSearchModal() {
  const context = useContext(SearchModalContext);
  if (!context) {
    throw new Error("useSearchModal must be used within a SearchProvider");
  }
  return context;
}
