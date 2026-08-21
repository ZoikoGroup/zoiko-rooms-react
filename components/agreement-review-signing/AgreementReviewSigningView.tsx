"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { TableOfContentsSidebar } from "./TableOfContentsSidebar";
import { HeroBannerSection } from "./HeroBannerSection";
import { MaterialTermsSection } from "./MaterialTermsSection";
import { ChangeReviewSection } from "./ChangeReviewSection";
import { FullAgreementSection } from "./FullAgreementSection";
import { AttachmentsSection } from "./AttachmentsSection";
import { CorrectionsSection } from "./CorrectionsSection";
import { AcknowledgementsSection } from "./AcknowledgementsSection";
import { PaymentSafetyBanner } from "./PaymentSafetyBanner";
import { SigningReadinessSection } from "./SigningReadinessSection";
import { CoSignerReceiptSection } from "./CoSignerReceiptSection";

const DEFAULT_CHECKED: Record<string, boolean> = { "reviewed-agreement": true };

export function AgreementReviewSigningView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [checked, setChecked] = useState<Record<string, boolean>>(DEFAULT_CHECKED);
  const [signed, setSigned] = useState(false);

  function toggleAck(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <Container className="py-10 sm:py-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-6">
        <TableOfContentsSidebar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <HeroBannerSection />
          <MaterialTermsSection />
          <ChangeReviewSection />
          <FullAgreementSection searchQuery={searchQuery} />
          <AttachmentsSection />
          <CorrectionsSection />
          <AcknowledgementsSection checked={checked} onToggle={toggleAck} />
          <PaymentSafetyBanner />
          <SigningReadinessSection checked={checked} signed={signed} onSign={() => setSigned(true)} />
          <CoSignerReceiptSection signed={signed} />
        </div>
      </div>
    </Container>
  );
}
