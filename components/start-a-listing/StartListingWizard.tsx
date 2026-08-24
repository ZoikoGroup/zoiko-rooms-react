"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { easeOut } from "@/lib/motion";
import { StepSidebar } from "./StepSidebar";
import { Step1ProgressOverview } from "./steps/Step1ProgressOverview";
import { Step2AccountProviderType } from "./steps/Step2AccountProviderType";
import { Step3PropertyRoom } from "./steps/Step3PropertyRoom";
import { Step4RoomPassportMedia } from "./steps/Step4RoomPassportMedia";
import { Step5AuthorityCompliance } from "./steps/Step5AuthorityCompliance";
import { Step6TermsPricing } from "./steps/Step6TermsPricing";
import { Step7PreviewSubmit } from "./steps/Step7PreviewSubmit";
import { SuccessScreen } from "./steps/SuccessScreen";
import { EMPTY_FORM_DATA, TOTAL_STEPS, validateStep, type ListingFormData, type StepErrors } from "./types";

const STORAGE_KEY = "zoiko-start-a-listing-draft";

export function StartListingWizard() {
  const { t } = useLanguage();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<ListingFormData>(EMPTY_FORM_DATA);
  const [errors, setErrors] = useState<StepErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { data: ListingFormData; currentStep: number };
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
        setData({ ...EMPTY_FORM_DATA, ...parsed.data });
        setCurrentStep(parsed.currentStep ?? 1);
      }
    } catch {
      // Corrupt or unavailable storage — start from a blank draft.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated || submitted) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, currentStep }));
  }, [data, currentStep, hydrated, submitted]);

  function handleChange<K extends keyof ListingFormData>(key: K, value: ListingFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleToggleChecklist(item: string) {
    setData((prev) => ({
      ...prev,
      photoChecklist: { ...prev.photoChecklist, [item]: !prev.photoChecklist[item] },
    }));
  }

  function handleContinue() {
    const stepErrors = validateStep(currentStep, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCurrentStep((step) => Math.min(step + 1, TOTAL_STEPS));
  }

  function handleBack() {
    setErrors({});
    setCurrentStep((step) => Math.max(step - 1, 1));
  }

  function handleSaveExit() {
    router.push("/list-a-room");
  }

  function handleSubmit() {
    setSubmitted(true);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  function handleRestart() {
    setData(EMPTY_FORM_DATA);
    setErrors({});
    setCurrentStep(1);
    setSubmitted(false);
  }

  function handleStepClick(step: number) {
    setErrors({});
    setCurrentStep(step);
  }

  return (
    <Container className="flex flex-col gap-8 py-10 sm:py-14">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-heading text-2xl font-semibold text-brand-navy">{t("Start a listing")}</h1>
        <p className="text-sm text-neutral-500">
          {t(
            "This takes about 10–15 minutes. You can save a private draft and continue later at any step — nothing here is public until you submit for review.",
          )}
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <StepSidebar currentStep={currentStep} submitted={submitted} onStepClick={handleStepClick} />

        <AnimatePresence mode="wait">
          <motion.div
            key={submitted ? "success" : currentStep}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="flex flex-1"
          >
            {submitted ? (
              <SuccessScreen onRestart={handleRestart} />
            ) : (
              <>
                {currentStep === 1 && <Step1ProgressOverview onSaveExit={handleSaveExit} onContinue={handleContinue} />}
                {currentStep === 2 && (
                  <Step2AccountProviderType
                    data={data}
                    errors={errors}
                    onChange={handleChange}
                    onBack={handleBack}
                    onSaveExit={handleSaveExit}
                    onContinue={handleContinue}
                  />
                )}
                {currentStep === 3 && (
                  <Step3PropertyRoom
                    data={data}
                    errors={errors}
                    onChange={handleChange}
                    onBack={handleBack}
                    onSaveExit={handleSaveExit}
                    onContinue={handleContinue}
                  />
                )}
                {currentStep === 4 && (
                  <Step4RoomPassportMedia
                    data={data}
                    onToggleChecklist={handleToggleChecklist}
                    onBack={handleBack}
                    onSaveExit={handleSaveExit}
                    onContinue={handleContinue}
                  />
                )}
                {currentStep === 5 && (
                  <Step5AuthorityCompliance
                    data={data}
                    errors={errors}
                    onChange={handleChange}
                    onBack={handleBack}
                    onSaveExit={handleSaveExit}
                    onContinue={handleContinue}
                  />
                )}
                {currentStep === 6 && (
                  <Step6TermsPricing
                    data={data}
                    errors={errors}
                    onChange={handleChange}
                    onBack={handleBack}
                    onSaveExit={handleSaveExit}
                    onContinue={handleContinue}
                  />
                )}
                {currentStep === 7 && (
                  <Step7PreviewSubmit data={data} onBack={handleBack} onSaveExit={handleSaveExit} onSubmit={handleSubmit} />
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  );
}
