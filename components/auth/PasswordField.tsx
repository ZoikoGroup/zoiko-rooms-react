"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type PasswordFieldProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

export function PasswordField({
  label,
  required = false,
  placeholder = "••••••••",
  autoComplete = "current-password",
  className = "",
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-brand-ink">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </span>
      <div className="relative mt-1.5">
        <input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-11 text-sm text-brand-ink outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/10"
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors duration-200 hover:text-brand-navy"
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </label>
  );
}
