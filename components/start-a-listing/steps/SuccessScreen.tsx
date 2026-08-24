"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type SuccessScreenProps = {
  onRestart: () => void;
};

export function SuccessScreen({ onRestart }: SuccessScreenProps) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-[#E9E0D3] bg-white p-10 text-center">
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-emerald-500 text-emerald-600"
      >
        <Check className="h-6 w-6" />
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="font-heading text-xl font-semibold text-brand-navy"
      >
        {t("Submitted for review")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="max-w-sm text-sm text-neutral-500"
      >
        {t(
          "Zoiko Rooms will confirm your authority evidence before this listing can publish. This prototype does not send real data anywhere.",
        )}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.35 }}>
        <Button variant="secondary" size="md" onClick={onRestart}>
          {t("Start Another Listing")}
        </Button>
      </motion.div>
    </div>
  );
}
