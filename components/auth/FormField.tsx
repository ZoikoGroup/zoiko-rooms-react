type FormFieldProps = {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

export function FormField({
  label,
  required = false,
  type = "text",
  placeholder,
  autoComplete,
  className = "",
}: FormFieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-brand-ink">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/10"
      />
    </label>
  );
}
