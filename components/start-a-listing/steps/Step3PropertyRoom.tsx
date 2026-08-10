"use client";

import { StepShell } from "../StepShell";
import { WizardFooter } from "../WizardFooter";
import { FormField } from "../FormField";
import type { ListingFormData, StepErrors } from "../types";

const roomTypeOptions = [
  { value: "Private room", label: "Private room" },
  { value: "Shared room", label: "Shared room" },
  { value: "Entire home", label: "Entire home" },
];

type Step3Props = {
  data: ListingFormData;
  errors: StepErrors;
  onChange: <K extends keyof ListingFormData>(key: K, value: ListingFormData[K]) => void;
  onBack: () => void;
  onSaveExit: () => void;
  onContinue: () => void;
};

export function Step3PropertyRoom({ data, errors, onChange, onBack, onSaveExit, onContinue }: Step3Props) {
  return (
    <StepShell
      title="Property and room"
      subtitle="Zoiko Rooms will confirm this scope against your authority evidence in step 5."
      footer={<WizardFooter showBack onBack={onBack} onSaveExit={onSaveExit} onContinue={onContinue} />}
    >
      <FormField
        label="Address"
        placeholder="Street and number"
        value={data.address}
        onChange={(value) => onChange("address", value)}
        error={errors.address}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="City" value={data.city} onChange={(value) => onChange("city", value)} error={errors.city} />
        <FormField
          label="Room type"
          as="select"
          options={roomTypeOptions}
          value={data.roomType}
          onChange={(value) => onChange("roomType", value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Household occupancy"
          placeholder="e.g. 3 people, shared kitchen"
          value={data.occupancy}
          onChange={(value) => onChange("occupancy", value)}
          error={errors.occupancy}
        />
        <FormField
          label="Available from"
          type="date"
          value={data.availableFrom}
          onChange={(value) => onChange("availableFrom", value)}
          error={errors.availableFrom}
        />
      </div>
    </StepShell>
  );
}
