import type { Metadata } from "next";
import { AuthShell, AuthHeader } from "@/components/auth";

export const metadata: Metadata = {
  title: "Sign in — Zoiko Rooms",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthShell>
      <AuthHeader />
      <div className="mt-6">{children}</div>
    </AuthShell>
  );
}
