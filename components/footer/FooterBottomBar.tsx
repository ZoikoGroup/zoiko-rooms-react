"use client";

import Link from "next/link";
import { legalLinks } from "@/lib/nav-data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FooterBottomBar() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
      <p>
        {t(
          "© 2026 Zoiko Rooms. Zoiko Rooms is a trading name of Zoiko Realty Group Inc., a Zoiko Group company. All rights reserved.",
        )}
      </p>
      <p>
        {t(
          "Zoiko Rooms provides technology, marketplace, verification, compliance, and accommodation-management services for individual-room rentals. Products and availability vary by jurisdiction.",
        )}
      </p>
      <p>
        {t(
          "Verification confirms only the evidence and checks expressly identified on the platform. It is not a guarantee of safety, legality, suitability, property condition, or future conduct.",
        )}
      </p>
    </div>
  );
}
