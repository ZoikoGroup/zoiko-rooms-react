"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { StatusBadge } from "@/components/guides/shared";
import type { Guide } from "@/components/guides/data";

interface GuideDetailModalProps {
  guide: Guide | null;
  onClose: () => void;
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="block text-[10px] font-bold tracking-wider text-[#8C9BB0] uppercase">{children}</span>;
}

export default function GuideDetailModal({ guide, onClose }: GuideDetailModalProps) {
  const { t } = useLanguage();
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const isOpen = Boolean(guide);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!guide) return null;

  const guideKey = guide.key;

  // Namespaced by guide key so switching guides never shows a stale checked
  // state, without needing an effect to reset it.
  function toggleItem(item: string) {
    const key = `${guideKey}:${item}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs cursor-pointer"
      >
        <motion.div
          onClick={(event) => event.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex h-[88vh] max-h-[720px] w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-[#EAE6DF] bg-[#0F1A33] text-white shadow-2xl cursor-default"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t("Close modal")}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
          >
            &#x2715;
          </button>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-2 pr-6">
              <StatusBadge status={guide.status} />
              <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">{t(guide.title)}</h2>
              <p className="text-sm leading-relaxed text-white/60">{t(guide.subtitle)}</p>
            </div>

            <div className="mt-5 space-y-4">
              <div className="space-y-1">
                <FieldLabel>{t("Audience / Applies To")}</FieldLabel>
                <p className="text-sm leading-relaxed text-white/75">{t(guide.audience)}</p>
              </div>

              <div className="space-y-1">
                <FieldLabel>{t("Before You Start")}</FieldLabel>
                <p className="text-sm leading-relaxed text-white/75">{t(guide.beforeYouStart)}</p>
              </div>

              <div className="space-y-1">
                <FieldLabel>{t("Safety Warning")}</FieldLabel>
                <p className="text-sm font-medium leading-relaxed text-[#E8967A]">{t(guide.safetyWarning)}</p>
              </div>

              <div className="space-y-1">
                <FieldLabel>{t("What You Will Do")}</FieldLabel>
                <p className="text-sm leading-relaxed text-white/75">{t(guide.whatYouWillDo)}</p>
              </div>

              <div className="space-y-2">
                <FieldLabel>{t("Steps")}</FieldLabel>
                <div className="space-y-2.5">
                  {guide.steps.map((step) => (
                    <div key={step.title} className="flex gap-2.5">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <p className="text-sm leading-relaxed text-white/80">
                        <span className="font-semibold text-white">{t(step.title)}</span> — {t(step.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <FieldLabel>{t("Decision Points")}</FieldLabel>
                <p className="text-sm leading-relaxed text-white/75">{t(guide.decisionPoints)}</p>
              </div>

              <div className="rounded-xl bg-[#F0E4D8] px-4 py-3">
                <FieldLabel>{t("Current-Record Handoff")}</FieldLabel>
                <p className="mt-1 text-xs leading-relaxed text-[#5B4A32]">{t(guide.currentRecordHandoff)}</p>
              </div>

              <div className="space-y-1">
                <FieldLabel>{t("If Something Changes")}</FieldLabel>
                <p className="text-sm leading-relaxed text-white/75">{t(guide.ifSomethingChanges)}</p>
              </div>

              <div className="space-y-1">
                <FieldLabel>{t("Errors & Recovery")}</FieldLabel>
                <p className="text-sm leading-relaxed text-white/75">{t(guide.errorsRecovery)}</p>
              </div>

              <div className="space-y-2">
                <FieldLabel>{t("Checklist")}</FieldLabel>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {guide.checklist.map((item) => (
                    <label key={item} className="flex cursor-pointer items-center gap-2 text-sm text-white/80">
                      <input
                        type="checkbox"
                        checked={Boolean(checked[`${guideKey}:${item}`])}
                        onChange={() => toggleItem(item)}
                        className="h-4 w-4 shrink-0 rounded border-white/30 bg-transparent accent-brand-red"
                      />
                      {t(item)}
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-3">
                <FieldLabel>{t("Sources & Review")}</FieldLabel>
                <p className="mt-1 text-xs leading-relaxed text-white/50">{t(guide.sourcesReview)}</p>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2 border-t border-white/10 bg-[#0F1A33] p-4">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {t("Print / Download")}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-brand-red px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-red-dark"
            >
              {t("Done")}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
