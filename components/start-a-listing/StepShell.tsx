"use client";

type StepShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function StepShell({ title, subtitle, children, footer }: StepShellProps) {
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-[#E9E0D3] bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-1.5">
        <h2 className="font-heading text-xl font-semibold text-brand-navy">{title}</h2>
        <p className="text-sm text-neutral-500">{subtitle}</p>
      </div>

      <div className="flex flex-col gap-4">{children}</div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E9E0D3] pt-5">
        {footer}
      </div>
    </div>
  );
}
