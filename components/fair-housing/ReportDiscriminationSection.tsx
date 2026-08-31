"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DocSection, Eyebrow, SectionHeading, SubHeading, Paragraph, Card } from "./shared";
import { reportCategories } from "./data";

type FormErrors = Partial<Record<"category" | "whatHappened" | "whenHappened" | "stageAffected" | "contactMethod" | "consent", string>>;

export function ReportDiscriminationSection() {
  const { t } = useLanguage();
  const [category, setCategory] = useState<string | null>(null);
  const [relatedItem, setRelatedItem] = useState("");
  const [whatHappened, setWhatHappened] = useState("");
  const [whenHappened, setWhenHappened] = useState("");
  const [stageAffected, setStageAffected] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!category) nextErrors.category = t("Select a report category.");
    if (!whatHappened.trim()) nextErrors.whatHappened = t("Describe what happened.");
    if (!whenHappened.trim()) nextErrors.whenHappened = t("Let us know when this happened.");
    if (!stageAffected.trim()) nextErrors.stageAffected = t("Tell us which stage was affected.");
    if (!contactMethod.trim()) nextErrors.contactMethod = t("Provide a way to reach you.");
    if (!consent) nextErrors.consent = t("Acknowledgment is required to submit.");

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  return (
    <DocSection id="report-discrimination">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Eyebrow>{t("08 / Taking Action")}</Eyebrow>
          <SectionHeading>{t("Report Discrimination")}</SectionHeading>
          <Paragraph>
            {t(
              "We are committed to keeping Zoiko Rooms a fair and equal environment. If you believe you have experienced or witnessed discrimination, please file a detailed report immediately.",
            )}
          </Paragraph>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t("Select a Report Category")}</span>
          <div className="flex flex-wrap gap-2">
            {reportCategories.map((option) => {
              const isSelected = category === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCategory(isSelected ? null : option)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isSelected
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  {t(option)}
                </button>
              );
            })}
          </div>
          {errors.category && <span className="text-xs text-brand-red">{errors.category}</span>}
        </div>

        <Card>
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <p className="font-heading text-lg font-medium text-brand-navy">{t("Report submitted")}</p>
              <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
                {t("Zoiko Rooms will review the information under the policies, evidence, and legal requirements relevant to the reported activity. Submitting a report does not guarantee a particular outcome.")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <SubHeading>{t("Required Incident Details")}</SubHeading>

              <Field label={`1. ${t("Related listing/account/application/transaction")}`}>
                <input
                  type="text"
                  value={relatedItem}
                  onChange={(event) => setRelatedItem(event.target.value)}
                  placeholder={t("Enter Listing ID, URL, or provider's display name")}
                  className="w-full rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                />
              </Field>

              <Field label={`2. ${t("What happened")}`} error={errors.whatHappened}>
                <textarea
                  value={whatHappened}
                  onChange={(event) => setWhatHappened(event.target.value)}
                  rows={3}
                  placeholder={t("Please describe the specific actions, comments, or decisions in detail")}
                  className="w-full resize-y rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                />
              </Field>

              <Field label={`3. ${t("When did it happen")}`} error={errors.whenHappened}>
                <input
                  type="text"
                  value={whenHappened}
                  onChange={(event) => setWhenHappened(event.target.value)}
                  placeholder={t("YYYY-MM-DD or approximate timeframe")}
                  className="w-full rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                />
              </Field>

              <Field label={`4. ${t("Which stage of housing process affected")}`} error={errors.stageAffected}>
                <input
                  type="text"
                  value={stageAffected}
                  onChange={(event) => setStageAffected(event.target.value)}
                  placeholder={t("E.g., pre-viewing, viewing, screening, lease negotiation")}
                  className="w-full rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                />
              </Field>

              <Field label={`5. ${t("Optional supporting evidence")}`}>
                <input
                  type="file"
                  multiple
                  className="w-full rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-2.5 text-sm text-neutral-500 outline-none file:mr-3 file:rounded-full file:border-0 file:bg-brand-navy file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                />
              </Field>

              <Field label={`6. ${t("Preferred contact method")}`} error={errors.contactMethod}>
                <input
                  type="text"
                  value={contactMethod}
                  onChange={(event) => setContactMethod(event.target.value)}
                  placeholder={t("Email address or phone number")}
                  className="w-full rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                />
              </Field>

              <div className="flex flex-col gap-1.5">
                <label className="flex cursor-pointer items-start gap-2.5 text-sm text-neutral-600">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-brand-red"
                  />
                  <span>
                    <span className="font-semibold text-brand-navy">{`7. ${t("Consent/acknowledgment regarding sensitive information handling")}`}</span>{" "}
                    — {t("I understand this report will be reviewed under Zoiko Rooms' policies and applicable law.")}
                  </span>
                </label>
                {errors.consent && <span className="text-xs text-brand-red">{errors.consent}</span>}
              </div>

              <button
                type="submit"
                className="w-fit rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
              >
                {t("Submit Formal Report")}
              </button>
            </form>
          )}
        </Card>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-800">{t("Submission Confirmation")}</p>
              <p className="mt-1 text-sm leading-relaxed text-emerald-700">
                {t("Your report has been submitted. Zoiko Rooms will review the information under the policies, evidence, and legal requirements relevant to the reported activity. Submitting a report does not guarantee a particular outcome.")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-[#E3C583] bg-[#FBF1DD] p-5">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6A24]" />
            <div>
              <p className="text-sm font-semibold text-[#6B5518]">{t("Emergency Warning")}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#6B5518]">
                {t("If someone is in immediate danger, contact the appropriate local emergency service. Zoiko Rooms is not an emergency-response service.")}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </DocSection>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{label}</label>
      {children}
      {error && <span className="text-xs text-brand-red">{error}</span>}
    </div>
  );
}
