"use client";

export function PaymentSafetyBanner() {
  return (
    <div className="rounded-3xl bg-brand-navy p-6 sm:p-7">
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F2A38C]">Payment Safety</span>
      <p className="mt-2 text-sm leading-relaxed text-[#C6CCDE]">
        A signed agreement can describe an amount owed, but Zoiko Rooms still verifies the current
        payment obligation, recipient, and route in the dedicated payment workflow. Never pay
        using instructions that changed unexpectedly without independent verification.
      </p>
    </div>
  );
}
