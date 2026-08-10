"use client";

import { StepShell } from "../StepShell";
import { WizardFooter } from "../WizardFooter";
import { FormField } from "../FormField";
import { PROVIDER_TYPE_OPTIONS, type ListingFormData, type StepErrors } from "../types";

type Step2Props = {
  data: ListingFormData;
  errors: StepErrors;
  onChange: <K extends keyof ListingFormData>(key: K, value: ListingFormData[K]) => void;
  onBack: () => void;
  onSaveExit: () => void;
  onContinue: () => void;
};

export function Step2AccountProviderType({ data, errors, onChange, onBack, onSaveExit, onContinue }: Step2Props) {
  return (
    <StepShell
      title="Account and provider type"
      subtitle="Choose the role that matches your actual relationship to this room. This determines which evidence we'll ask for later."
      footer={<WizardFooter showBack onBack={onBack} onSaveExit={onSaveExit} onContinue={onContinue} />}
    >
      <div className="flex flex-col gap-1.5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {PROVIDER_TYPE_OPTIONS.map((option) => {
            const isSelected = data.providerType === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onChange("providerType", option.value)}
                className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                  isSelected
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-[#E9E0D3] bg-white text-brand-ink hover:border-brand-navy/40"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
        {errors.providerType && <span className="text-xs text-red-500">{errors.providerType}</span>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Full name"
          value={data.fullName}
          onChange={(value) => onChange("fullName", value)}
          error={errors.fullName}
        />
        <FormField
          label="Email"
          type="email"
          value={data.email}
          onChange={(value) => onChange("email", value)}
          error={errors.email}
        />
      </div>
    </StepShell>
  );
}
