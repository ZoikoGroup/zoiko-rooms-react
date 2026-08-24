"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type WizardFooterProps = {
  showBack: boolean;
  onBack: () => void;
  onSaveExit: () => void;
  onContinue: () => void;
  continueLabel?: string;
};

export function WizardFooter({ showBack, onBack, onSaveExit, onContinue, continueLabel = "Continue" }: WizardFooterProps) {
  const { t } = useLanguage();
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {showBack && (
          <Button variant="outline" size="md" onClick={onBack}>
            {t("Back")}
          </Button>
        )}
        <Button variant="outline" size="md" onClick={onSaveExit}>
          {t("Save & Exit")}
        </Button>
      </div>
      <motion.button
        type="button"
        onClick={onContinue}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-navy-dark"
      >
        {t(continueLabel)}
      </motion.button>
    </>
  );
}
