"use client";

import { StepShell } from "../StepShell";
import { WizardFooter } from "../WizardFooter";
import { FormField } from "../FormField";
import type { ListingFormData, StepErrors } from "../types";

type Step5Props = {
  data: ListingFormData;
  errors: StepErrors;
  onChange: <K extends keyof ListingFormData>(key: K, value: ListingFormData[K]) => void;
  onBack: () => void;
  onSaveExit: () => void;
  onContinue: () => void;
};

export function Step5AuthorityCompliance({ data, errors, onChange, onBack, onSaveExit, onContinue }: Step5Props) {
  return (
    <StepShell
      title="Authority and compliance"
      subtitle="Evidence that you own or lawfully control this room."
      footer={<WizardFooter showBack onBack={onBack} onSaveExit={onSaveExit} onContinue={onContinue} />}
    >
      <FormField
        label="Ownership evidence type"
        placeholder="e.g. Title deed"
        value={data.ownershipEvidenceType}
        onChange={(value) => onChange("ownershipEvidenceType", value)}
        error={errors.ownershipEvidenceType}
      />

      <div className="flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-[#E9E0D3] text-sm text-neutral-400">
        Upload ownership evidence (disabled in this prototype)
      </div>
    </StepShell>
  );
}
