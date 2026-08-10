"use client";

type Option = { value: string; label: string };

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  as?: "input" | "select";
  options?: Option[];
  className?: string;
};

export function FormField({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  as = "input",
  options,
  className = "",
}: FormFieldProps) {
  const fieldClasses = `w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-brand-ink outline-none transition-colors placeholder:text-neutral-400 ${
    error ? "border-red-400 focus:border-red-500" : "border-[#E9E0D3] focus:border-brand-navy"
  }`;

  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-medium text-neutral-600">{label}</span>
      {as === "select" ? (
        <select value={value} onChange={(event) => onChange(event.target.value)} className={fieldClasses}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={fieldClasses}
        />
      )}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}
