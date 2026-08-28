// Text-to-speech helper for reading assistant responses aloud.
// - Strips Markdown so the user hears natural language, not literal symbols.
// - Only one utterance plays at a time (starting new output stops the current).
// - Speak/stop are idempotent and safe to call repeatedly.

export interface TtsState {
  speaking: boolean;
  currentId: string | null;
}

type TtsListener = (state: TtsState) => void;

let currentUtterance: SpeechSynthesisUtterance | null = null;
let currentId: string | null = null;
let speaking = false;
const listeners = new Set<TtsListener>();

function emit(): void {
  const state: TtsState = { speaking, currentId };
  listeners.forEach((l) => l(state));
}

export function onTtsState(listener: TtsListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSynthesis(): SpeechSynthesis | null {
  if (typeof window === "undefined") return null;
  return window.speechSynthesis || null;
}

function stripMarkdown(markdown: string): string {
  return markdown
    // code fences
    .replace(/```[\s\S]*?```/g, " ")
    // inline code
    .replace(/`([^`]*)`/g, "$1")
    // citations / bracket refs like [1] or [src]
    .replace(/\[[^\]]*\]/g, " ")
    // links [label](url) -> label
    .replace(/\[(.*?)\]\((?:https?:\/\/[^)\s]+|\/[^)\s]*)\)/g, "$1")
    // image syntax
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    // headers
    .replace(/^#{1,6}\s+/gm, "")
    // bold/italic/emphasis (handles ***, **, *, __, ~~)
    .replace(/(\*\*\*|___)/g, " ")
    .replace(/(\*\*|__)/g, " ")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1")
    // blockquote
    .replace(/^\s*>\s?/gm, "")
    // list markers
    .replace(/^\s*([-*+]|\d+\.)\s+/gm, "")
    // horizontal rules
    .replace(/^\s*(-{3,}|\*{3,}|\_{3,})\s*$/gm, " ")
    // tables: collapse pipe + separator rows to plain space-separated text
    .split("\n")
    .map((line) => line.replace(/\|/g, " "))
    .map((line) => line.replace(/^\s*-{2,}\s*$/, ""))
    .join("\n")
    // collapse whitespace
    .replace(/\s+/g, " ")
    .trim();
}

export function ttsAvailable(): boolean {
  return getSynthesis() !== null;
}

export function speakText(rawText: string, id: string): boolean {
  const synth = getSynthesis();
  if (!synth) return false;

  // Stop any currently playing response first (one-at-a-time).
  if (currentUtterance) {
    try {
      synth.cancel();
    } catch {
      // ignore
    }
  }

  const clean = stripMarkdown(rawText);
  if (!clean) return false;

  const utterance = new SpeechSynthesisUtterance(clean);
  currentUtterance = utterance;
  currentId = id;
  speaking = true;
  emit();

  utterance.onend = () => {
    if (currentUtterance === utterance) {
      currentUtterance = null;
      currentId = null;
      speaking = false;
      emit();
    }
  };
  utterance.onerror = () => {
    if (currentUtterance === utterance) {
      currentUtterance = null;
      currentId = null;
      speaking = false;
      emit();
    }
  };

  synth.speak(utterance);
  return true;
}

export function stopTts(): void {
  const synth = getSynthesis();
  if (synth) {
    try {
      synth.cancel();
    } catch {
      // ignore
    }
  }
  currentUtterance = null;
  currentId = null;
  speaking = false;
  emit();
}

export function isSpeakingId(id: string): boolean {
  return speaking && currentId === id;
}
