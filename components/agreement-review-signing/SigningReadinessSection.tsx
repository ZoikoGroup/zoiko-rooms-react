"use client";

import { useMemo } from "react";
import { Check, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Card } from "./shared";

type SigningReadinessSectionProps = {
  checked: Record<string, boolean>;
  signed: boolean;
  onSign: () => void;
};

export function SigningReadinessSection({ checked, signed, onSign }: SigningReadinessSectionProps) {
  const gates = useMemo(
    () => [
      { label: "Agreement version review-ready", pass: true },
      { label: "Signer identity & session current", pass: true },
      { label: "Material changes reviewed (v2 → v3)", pass: Boolean(checked["reviewed-changes"]) },
      {
        label: "Required acknowledgements complete",
        pass: Boolean(checked["reviewed-agreement"] && checked["reviewed-changes"] && checked["consent-esign"]),
      },
      { label: "No unresolved correction", pass: true },
    ],
    [checked],
  );

  const remaining = gates.filter((gate) => !gate.pass).length;
  const canSign = remaining === 0 && !signed;

  return (
    <Card id="signature">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Eyebrow>Signing Readiness</Eyebrow>
          <SectionTitle>You can sign only when all required review gates pass</SectionTitle>
          <p className="text-sm text-neutral-500">
            {signed
              ? "All gates passed — this agreement has been signed."
              : remaining === 0
                ? "All gates passed — you're ready to sign."
                : `${remaining} of ${gates.length} gates remain — complete them above to unlock signing.`}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-[#E9E0D3] bg-[#F6ECD4] px-5 py-4">
              <span className="block text-sm font-semibold text-brand-navy">You — Occupant</span>
              <span className="block text-xs text-neutral-500">Signing authority confirmed for this role</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {gates.map((gate) => (
                <div key={gate.label} className="flex items-center gap-2.5 text-sm">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      gate.pass ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    {gate.pass ? <Check className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                  </span>
                  <span className={gate.pass ? "text-neutral-600" : "text-neutral-500"}>{gate.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-[#E9E0D3] bg-white p-5">
            <p className="text-sm text-neutral-600">
              You are about to sign <strong className="font-semibold text-brand-navy">Version 3</strong> of this
              agreement, generated 19 Aug 2026.
            </p>
            <motion.button
              type="button"
              whileHover={canSign ? { scale: 1.02 } : undefined}
              whileTap={canSign ? { scale: 0.98 } : undefined}
              onClick={onSign}
              disabled={!canSign}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                canSign
                  ? "bg-brand-navy text-white hover:bg-brand-navy-dark"
                  : signed
                    ? "bg-emerald-100 text-emerald-700"
                    : "cursor-not-allowed bg-neutral-200 text-neutral-400"
              }`}
            >
              {signed ? "Signed ✓" : "Review and sign"}
            </motion.button>
            <p className="text-xs text-neutral-400">
              {signed
                ? "Your signature has been recorded. The provider representative is notified next."
                : "Signing is disabled until change review and acknowledgements above are complete. No signature is pre-selected or assumed."}
            </p>
          </div>
        </div>
      </Reveal>
    </Card>
  );
}
