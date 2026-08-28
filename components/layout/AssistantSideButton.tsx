"use client";

import { Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

// A persistent, site-wide floating button (not part of the navbar) that
// stays fixed to the bottom-left of the viewport while scrolling.
export function AssistantSideButton() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-40 max-md:bottom-4 max-md:left-4">
      <Button href="/chat" variant="secondary" size="sm" className="shadow-lg">
        {t("Assistant")}
      </Button>
    </div>
  );
}
