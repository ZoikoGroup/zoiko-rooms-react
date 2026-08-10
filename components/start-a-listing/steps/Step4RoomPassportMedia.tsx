"use client";

import { StepShell } from "../StepShell";
import { WizardFooter } from "../WizardFooter";
import type { ListingFormData } from "../types";

const checklistItems = ["Room, wide angle", "Window and lock", "Bathroom / shared facilities", "Building entrance"];

type Step4Props = {
  data: ListingFormData;
  onToggleChecklist: (item: string) => void;
  onBack: () => void;
  onSaveExit: () => void;
  onContinue: () => void;
};

export function Step4RoomPassportMedia({ data, onToggleChecklist, onBack, onSaveExit, onContinue }: Step4Props) {
  return (
    <StepShell
      title="Room Passport media"
      subtitle="Upload current, real photos — not stock images. Each item strengthens the evidence level shown to seekers."
      footer={<WizardFooter showBack onBack={onBack} onSaveExit={onSaveExit} onContinue={onContinue} />}
    >
      <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-[#E9E0D3] text-sm text-neutral-400">
        Drag photos here, or click to upload (disabled in this prototype)
      </div>

      <div className="flex flex-col gap-2.5">
        {checklistItems.map((item) => (
          <label key={item} className="flex items-center gap-2.5 text-sm text-brand-ink">
            <input
              type="checkbox"
              checked={Boolean(data.photoChecklist[item])}
              onChange={() => onToggleChecklist(item)}
              className="h-4 w-4 rounded border-neutral-300 accent-brand-navy"
            />
            {item}
          </label>
        ))}
      </div>
    </StepShell>
  );
}
