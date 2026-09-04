"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const PLATFORM_API_URL = process.env.NEXT_PUBLIC_PLATFORM_API_URL || "http://localhost:8000";

export function FinalCtaSection() {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function submitAlert() {
    setError("");
    if (!email.trim() || !email.includes("@")) {
      setError(t("Enter a valid email"));
      return;
    }
    if (!city.trim()) {
      setError(t("Enter a city"));
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${PLATFORM_API_URL}/api/public/alerts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), city: city.trim() }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSaved(true);
      setShowForm(false);
    } catch {
      setError(t("Could not save your alert. Please try again."));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 rounded-4xl bg-[#F1E7DA] py-20 text-center">
          <motion.h2
            variants={fadeUp}
            className=" font-heading text-3xl font-medium text-brand-navy sm:text-4xl"
          >
            {t("Find your next room with confidence")}
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/find-a-room/search-rooms" size="lg" variant="secondary">
              {t("Search verified rooms")}
            </Button>
            <Button
              size="lg"
              variant="outline-red"
              onClick={() => !saved && setShowForm((v) => !v)}
            >
              {saved ? t("Alert saved") : t("Create a free alert")}
            </Button>
          </motion.div>

          {showForm && (
            <motion.div
              variants={fadeUp}
              className="flex w-full max-w-md flex-col gap-2 rounded-2xl border border-[#E9E0D3] bg-white p-4 sm:flex-row sm:items-center"
            >
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={t("City you're watching")}
                className="h-10 flex-1 rounded-lg border border-[#E9E0D3] px-3 text-sm outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-10 flex-1 rounded-lg border border-[#E9E0D3] px-3 text-sm outline-none"
              />
              <button
                type="button"
                disabled={submitting}
                onClick={submitAlert}
                className="h-10 shrink-0 rounded-full bg-brand-red px-5 text-sm font-semibold text-white disabled:opacity-60"
              >
                {submitting ? t("Saving...") : t("Confirm alert")}
              </button>
              {error && <p className="text-xs text-red-600 sm:basis-full">{error}</p>}
            </motion.div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
