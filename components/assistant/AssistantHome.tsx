"use client";

import { useState } from "react";
import { ChevronRight, ChevronUp } from "lucide-react";
import {
  ASSISTANT_ILLUSTRATION,
  HOME_CATEGORIES,
  HOME_GREETING,
  POPULAR_QUESTIONS,
  POPULAR_QUESTIONS_SHOWN,
  type CardTone,
} from "./home-content";

const TONES: Record<CardTone, { bg: string; iconBg: string; icon: string }> = {
  blue: { bg: "var(--color-home-blue-bg)", iconBg: "var(--color-home-blue-icon-bg)", icon: "var(--color-home-blue-icon)" },
  red: { bg: "var(--color-home-red-bg)", iconBg: "var(--color-home-red-icon-bg)", icon: "var(--color-home-red-icon)" },
};

function HeroIllustration() {
  if (ASSISTANT_ILLUSTRATION) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={ASSISTANT_ILLUSTRATION}
        alt="Ask Zoiko, the Zoiko Rooms assistant"
        className="-mb-10 h-40 w-auto shrink-0 self-end object-contain @lg:h-52"
        draggable={false}
      />
    );
  }
  // Placeholder until the illustration is delivered: the brand icon.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/zoikorooms-icon-png.png"
      alt=""
      className="h-16 w-16 shrink-0 self-center rounded-2xl shadow-lg @lg:h-24 @lg:w-24"
      draggable={false}
    />
  );
}

/** Home screen shown before the first message (designer mockup): greeting hero,
 *  topic cards and popular questions. Bleeds to the panel edges. */
export function AssistantHome({ onAsk, disabled = false }: { onAsk: (text: string) => void; disabled?: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const questions = showAll ? POPULAR_QUESTIONS : POPULAR_QUESTIONS.slice(0, POPULAR_QUESTIONS_SHOWN);
  const hasMore = POPULAR_QUESTIONS.length > POPULAR_QUESTIONS_SHOWN;

  return (
    <div className="@container -mx-5 -mt-4 flex flex-col" data-testid="assistant-home">
      <section
        aria-labelledby="ask-zoiko-greeting"
        className="animate-chat-fade-slide relative flex items-center gap-3 overflow-hidden px-4 pb-10 pt-6 @lg:gap-4 @lg:px-5"
        style={{ background: "var(--color-home-hero-bg)" }}
      >
        <HeroIllustration />
        <div
          className="relative min-w-0 flex-1 rounded-3xl px-4 py-4 shadow-md @lg:mr-20 @lg:px-5"
          style={{ backgroundColor: "var(--color-home-bubble-bg)", color: "var(--color-home-text)" }}
        >
          {/* Speech-bubble tail pointing at the assistant */}
          <span
            aria-hidden="true"
            className="absolute -left-1.5 top-8 h-4 w-4 rotate-45 rounded-sm"
            style={{ backgroundColor: "var(--color-home-bubble-bg)" }}
          />
          <h2
            id="ask-zoiko-greeting"
            className="relative text-xl font-extrabold leading-tight @lg:text-2xl"
            style={{ color: "var(--color-home-title)" }}
          >
            {HOME_GREETING.title}
          </h2>
          <p className="relative text-[15px] font-semibold @lg:text-base" style={{ color: "var(--color-home-title)" }}>
            {HOME_GREETING.subtitle}
          </p>
          <p className="relative mt-2 text-[13px] leading-relaxed @lg:text-sm" style={{ color: "var(--color-home-muted)" }}>
            {HOME_GREETING.body}
          </p>
          <p className="relative mt-2.5 text-sm font-medium" style={{ color: "var(--color-home-title)" }}>
            {HOME_GREETING.question}
          </p>
        </div>
        <p
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-4 hidden -rotate-12 text-lg leading-tight @lg:block"
          style={{ color: "var(--color-brand-red)", fontFamily: '"Segoe Script", "Brush Script MT", "Comic Sans MS", cursive' }}
        >
          {HOME_GREETING.tagline.map((word, i) => (
            <span key={word} className="block" style={{ paddingLeft: `${i * 0.6}rem` }}>
              {word}
            </span>
          ))}
          <span className="mt-0.5 block h-0.5 w-16 rounded-full" style={{ backgroundColor: "var(--color-brand-red)" }} />
        </p>
      </section>

      {/* White sheet overlapping the hero, as in the mockup */}
      <div
        className="relative -mt-6 flex flex-col gap-4 rounded-t-3xl px-4 pt-4 @lg:px-5"
        style={{ backgroundColor: "var(--color-chat-panel-bg)" }}
      >
        <div className="grid grid-cols-2 gap-2.5 @lg:grid-cols-3">
          {HOME_CATEGORIES.map(({ title, subtitle, prompt, icon: Icon, tone }, i) => (
            <button
              key={title}
              type="button"
              disabled={disabled}
              onClick={() => onAsk(prompt)}
              className="animate-chat-chip group flex items-center gap-1.5 rounded-2xl p-3.5 text-left transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
              style={{ backgroundColor: TONES[tone].bg, animationDelay: `${0.1 + i * 0.05}s`, outlineColor: "var(--color-focus-ring)" }}
            >
              <span className="min-w-0 flex-1">
                <span
                  className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: TONES[tone].iconBg, color: TONES[tone].icon }}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <span className="block text-[15px] font-extrabold leading-snug" style={{ color: "var(--color-home-title)" }}>
                  {title}
                </span>
                <span className="mt-1 block text-xs leading-snug" style={{ color: "var(--color-home-muted)" }}>
                  {subtitle}
                </span>
              </span>
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                style={{ color: "var(--color-home-title)" }}
              />
            </button>
          ))}
        </div>

        <section aria-labelledby="ask-zoiko-popular">
          <div className="mb-2 flex items-center justify-between">
            <h3 id="ask-zoiko-popular" className="text-base font-extrabold" style={{ color: "var(--color-home-title)" }}>
              Popular questions
            </h3>
            {hasMore && (
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                className="flex items-center gap-0.5 text-xs font-medium hover:underline"
                style={{ color: "var(--color-home-muted)" }}
              >
                {showAll ? "Show fewer" : "See all"}
                {showAll ? <ChevronUp aria-hidden="true" className="h-3.5 w-3.5" /> : <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />}
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2 @md:grid-cols-2">
            {questions.map(({ question, icon: Icon }) => (
              <button
                key={question}
                type="button"
                disabled={disabled}
                onClick={() => onAsk(question)}
                className="flex items-center gap-2.5 rounded-full border px-3.5 py-2.5 text-left text-[13px] transition-colors hover:bg-[var(--color-hover-overlay)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
                style={{ borderColor: "var(--color-home-question-border)", color: "var(--color-home-text)", outlineColor: "var(--color-focus-ring)" }}
              >
                <Icon aria-hidden="true" className="h-[18px] w-[18px] shrink-0" style={{ color: "var(--color-brand-red)" }} strokeWidth={2.2} />
                <span className="min-w-0 flex-1">{question}</span>
                <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0" style={{ color: "var(--color-home-title)" }} />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
