type Tone = "green" | "amber" | "teal" | "gray";
type Variant = "plain" | "dashed" | "outline";

const toneClasses: Record<Tone, { dot: string; text: string; border: string; bg: string }> = {
  green: {
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    border: "border-emerald-300",
    bg: "bg-emerald-50",
  },
  amber: {
    dot: "bg-amber-500",
    text: "text-amber-700",
    border: "border-amber-300",
    bg: "bg-amber-50",
  },
  teal: {
    dot: "bg-teal-500",
    text: "text-teal-700",
    border: "border-teal-300",
    bg: "bg-teal-50",
  },
  gray: {
    dot: "bg-neutral-400",
    text: "text-neutral-600",
    border: "border-neutral-300",
    bg: "bg-neutral-50",
  },
};

type EvidenceBadgeProps = {
  label: string;
  tone: Tone;
  variant?: Variant;
  className?: string;
};

export function EvidenceBadge({ label, tone, variant = "plain", className = "" }: EvidenceBadgeProps) {
  const t = toneClasses[tone];
  const shape =
    variant === "plain"
      ? ""
      : variant === "dashed"
        ? `rounded-full border border-dashed px-3 py-1 ${t.border}`
        : `rounded-full border px-3 py-1 ${t.border} ${t.bg}`;

  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 text-xs font-medium ${t.text} ${shape} ${className}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${t.dot}`} />
      {label}
    </span>
  );
}
