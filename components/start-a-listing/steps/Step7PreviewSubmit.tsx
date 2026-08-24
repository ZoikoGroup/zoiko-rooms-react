"use client";

import { EvidenceBadge } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { StepShell } from "../StepShell";
import { WizardFooter } from "../WizardFooter";
import { PROVIDER_TYPE_OPTIONS, type ListingFormData } from "../types";

type Step7Props = {
  data: ListingFormData;
  onBack: () => void;
  onSaveExit: () => void;
  onSubmit: () => void;
};

export function Step7PreviewSubmit({ data, onBack, onSaveExit, onSubmit }: Step7Props) {
  const { t } = useLanguage();
  const providerLabel = PROVIDER_TYPE_OPTIONS.find((option) => option.value === data.providerType)?.label ?? "—";

  return (
    <StepShell
      title="Preview and submit"
      subtitle="This is what seekers will see, alongside your scoped authority status."
      footer={<WizardFooter showBack onBack={onBack} onSaveExit={onSaveExit} onContinue={onSubmit} continueLabel="Submit for Review" />}
    >
      <div className="flex flex-col gap-3 rounded-xl bg-[#F7F2EA] p-5 text-sm">
        <p>
          <span className="font-semibold text-brand-navy">{t("Provider role:")}</span> {t(providerLabel)}
        </p>
        <p>
          <span className="font-semibold text-brand-navy">{t("Listed by:")}</span> {data.fullName || "—"}
        </p>
        <p>
          <span className="font-semibold text-brand-navy">{t("Address:")}</span> {data.address || "—"}
          {data.city ? `, ${data.city}` : ""}
        </p>
        <p>
          <span className="font-semibold text-brand-navy">{t("Room type:")}</span> {t(data.roomType)}
        </p>
        <p>
          <span className="font-semibold text-brand-navy">{t("Available from:")}</span> {data.availableFrom || "—"}
        </p>
        <p>
          <span className="font-semibold text-brand-navy">{t("Monthly rent:")}</span> {data.monthlyRent || "—"} ·{" "}
          <span className="font-semibold text-brand-navy">{t("Deposit:")}</span> {data.deposit || "—"}
        </p>
        <p>
          <span className="font-semibold text-brand-navy">{t("Bills:")}</span> {data.bills || "—"} ·{" "}
          <span className="font-semibold text-brand-navy">{t("Min. stay:")}</span>{" "}
          {data.minStay ? (
            <>
              {data.minStay} {t("month(s)")}
            </>
          ) : (
            "—"
          )}
        </p>

        <div className="border-t border-[#E9E0D3] pt-3">
          <p>
            <span className="font-semibold text-brand-navy">{t("Ownership evidence:")}</span>{" "}
            {data.ownershipEvidenceType || "—"}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <span className="font-semibold text-brand-navy">{t("Status on publish:")}</span>
          <EvidenceBadge label={t("Availability to confirm")} tone="amber" variant="dashed" />
          <span className="text-neutral-500">{t("until authority evidence is reviewed.")}</span>
        </div>
      </div>
    </StepShell>
  );
}
