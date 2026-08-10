"use client";

import { StepShell } from "../StepShell";
import { WizardFooter } from "../WizardFooter";
import { FormField } from "../FormField";
import type { ListingFormData, StepErrors } from "../types";

type Step6Props = {
  data: ListingFormData;
  errors: StepErrors;
  onChange: <K extends keyof ListingFormData>(key: K, value: ListingFormData[K]) => void;
  onBack: () => void;
  onSaveExit: () => void;
  onContinue: () => void;
};

export function Step6TermsPricing({ data, errors, onChange, onBack, onSaveExit, onContinue }: Step6Props) {
  return (
    <StepShell
      title="Terms and pricing"
      subtitle="Every seeker-facing amount must be shown before application or payment."
      footer={<WizardFooter showBack onBack={onBack} onSaveExit={onSaveExit} onContinue={onContinue} />}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Monthly rent"
          type="number"
          value={data.monthlyRent}
          onChange={(value) => onChange("monthlyRent", value)}
          error={errors.monthlyRent}
        />
        <FormField
          label="Deposit"
          type="number"
          value={data.deposit}
          onChange={(value) => onChange("deposit", value)}
          error={errors.deposit}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Bills"
          placeholder="e.g. Included"
          value={data.bills}
          onChange={(value) => onChange("bills", value)}
          error={errors.bills}
        />
        <FormField
          label="Minimum stay (months)"
          type="number"
          value={data.minStay}
          onChange={(value) => onChange("minStay", value)}
          error={errors.minStay}
        />
      </div>
    </StepShell>
  );
}
