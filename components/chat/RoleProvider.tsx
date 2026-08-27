"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type DemoRole = "user" | "admin" | "super_admin";

const ROLE_PRINCIPAL: Record<DemoRole, string> = {
  user: "u_guest_1",
  admin: "u_admin_1",
  super_admin: "u_admin_2",
};

export const ROLE_LABEL: Record<DemoRole, string> = {
  user: "User",
  admin: "Admin",
  super_admin: "Super Admin",
};

interface RoleState {
  role: DemoRole;
  principalId: string;
  isAdmin: boolean;
  setRole: (role: DemoRole) => void;
}

const RoleContext = createContext<RoleState | null>(null);

const ROLE_STORAGE_KEY = "zoiko_chat_role";
const SESSION_KEY = "zoiko_chat_admin_session";

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<DemoRole>(() => {
    if (typeof window === "undefined") return "user";
    const stored = window.localStorage.getItem(ROLE_STORAGE_KEY) as DemoRole | null;
    return stored && stored in ROLE_PRINCIPAL ? stored : "user";
  });

  // Admin-specific: persist a "Continuing: <title>" style session in sessionStorage.
  useEffect(() => {
    if (role === "admin" || role === "super_admin") {
      window.sessionStorage.setItem(SESSION_KEY, `${ROLE_LABEL[role]} session started`);
    }
  }, [role]);

  const setRole = useCallback((next: DemoRole) => {
    setRoleState(next);
    window.localStorage.setItem(ROLE_STORAGE_KEY, next);
    if (next === "user") {
      window.sessionStorage.removeItem(SESSION_KEY);
    }
  }, []);

  const value: RoleState = {
    role,
    principalId: ROLE_PRINCIPAL[role],
    isAdmin: role === "admin" || role === "super_admin",
    setRole,
  };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole(): RoleState {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used within RoleProvider");
  return ctx;
}

export function adminSessionNote(): string | null {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(SESSION_KEY);
}
