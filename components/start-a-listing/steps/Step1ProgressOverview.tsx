"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { StepShell } from "../StepShell";
import { WizardFooter } from "../WizardFooter";

const items = [
  { title: "Account and provider type", description: "your name, contact details, and which of the four provider paths applies to you." },
  { title: "Property and room", description: "address, room type, occupancy, and availability." },
  { title: "Room Passport media", description: "current photos covering the room, access, and shared spaces." },
  { title: "Authority and compliance", description: "the evidence required for your specific provider path." },
  { title: "Terms and pricing", description: "rent, deposit, bills, and minimum stay." },
  { title: "Preview and submit", description: "a full preview of what seekers will see, before anything goes public." },
];

type Step1Props = {
  onSaveExit: () => void;
  onContinue: () => void;
};

export function Step1ProgressOverview({ onSaveExit, onContinue }: Step1Props) {
  const { t } = useLanguage();
  return (
    <StepShell
      title="Preparing your listing"
      subtitle="Here's what you'll need. You can stop after any step and come back — your progress is saved automatically as a private draft."
      footer={<WizardFooter showBack={false} onBack={() => {}} onSaveExit={onSaveExit} onContinue={onContinue} />}
    >
      <ul className="flex flex-col gap-3">
        {items.map(({ title, description }) => (
          <li key={title} className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
            <span>
              <span className="font-semibold text-brand-navy">{t(title)}</span> — {t(description)}
            </span>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border-l-4 border-brand-red bg-[#F6ECD4] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">{t("Nothing Is Public Yet")}</p>
        <p className="mt-2 text-sm leading-relaxed text-brand-navy">
          {t(
            "Everything you enter stays in a private draft. Zoiko Rooms reviews authority evidence before any listing can publish.",
          )}
        </p>
      </div>
    </StepShell>
  );
}
