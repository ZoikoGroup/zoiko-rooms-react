import { AuthImagePanel } from "./AuthImagePanel";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream px-4 py-10 sm:px-6">
      <div className="grid w-full max-w-5xl lg:grid-cols-[1.05fr_1fr]">
        <AuthImagePanel />
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-brand-navy/5 sm:p-10">{children}</div>
      </div>
    </div>
  );
}
