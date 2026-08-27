"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// SpeechRecognition support detection. The Web Speech API recognition is
// vendor-prefixed (webkitSpeechRecognition) and not available everywhere.
type RecognitionConstructor = new () => SpeechRecognitionLike;

interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: RecognitionResultEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

interface RecognitionResultEvent {
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      length: number;
      [i: number]: { transcript: string };
    };
  };
}

function getUserMediaAvailable(): boolean {
  return typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia;
}

export type MicStatus =
  | "idle"
  | "listening"
  | "denied"
  | "no-speech"
  | "error"
  | "unsupported";

interface UseVoiceInputResult {
  supported: boolean;
  status: MicStatus;
  /** Live transcript while listening (interim + final), for UI feedback only. */
  liveTranscript: string;
  /** Finalized transcript committed once when the mic session ends. */
  committed: string;
  listening: boolean;
  start: () => void;
  stop: () => void;
  clearCommitted: () => void;
}

let recognitionCtor: RecognitionConstructor | null | undefined;

function getRecognitionCtor(): RecognitionConstructor | null {
  if (recognitionCtor !== undefined) return recognitionCtor;
  if (typeof window === "undefined") {
    recognitionCtor = null;
    return null;
  }
  const w = window as unknown as Record<string, unknown>;
  const SR = (w.SpeechRecognition || w.webkitSpeechRecognition) as RecognitionConstructor | undefined;
  recognitionCtor = SR ? SR : null;
  return recognitionCtor;
}

/**
 * Robust speech recognition with auto-end + auto-send.
 *
 * Uses `continuous = false` so the browser's natural end-of-speech detection
 * stops recognition on its own once the user has finished talking (no second
 * click needed). When that natural end fires with final text, the transcript is
 * committed so the caller can send it immediately.
 *
 * Clicking the mic again while listening is a *manual cancel* override: it
 * stops recognition and discards the transcript (does not send).
 *
 * The matched phrase is rebuilt from the entire results array on every
 * `onresult` (rather than appending raw chunks), which naturally de-duplicates
 * interim results and prevents the transcript from repeating.
 */
export function useVoiceInput(): UseVoiceInputResult {
  const [status, setStatus] = useState<MicStatus>("idle");
  const [liveTranscript, setLiveTranscript] = useState("");
  const [committed, setCommitted] = useState("");
  const recogRef = useRef<SpeechRecognitionLike | null>(null);
  const finalRef = useRef("");
  const abortRequestedRef = useRef(false);
  const startingRef = useRef(false);

  const supported = getUserMediaAvailable() && getRecognitionCtor() !== null;

  const finish = useCallback(() => {
    recogRef.current = null;
    const text = finalRef.current.trim();
    if (abortRequestedRef.current) {
      // Manual cancel (user clicked the mic again) -> discard, do not send.
      abortRequestedRef.current = false;
      setStatus("idle");
    } else if (text) {
      // Natural end of speech -> commit so the caller auto-sends.
      setCommitted(text);
      setStatus("idle");
    } else {
      setStatus("no-speech");
    }
    finalRef.current = "";
    setLiveTranscript("");
    startingRef.current = false;
  }, []);

  const stop = useCallback(() => {
    abortRequestedRef.current = true;
    const rec = recogRef.current;
    if (rec) {
      try {
        rec.abort();
      } catch {
        try {
          rec.stop();
        } catch {
          // ignore
        }
      }
    } else if (startingRef.current) {
      // Recognition hasn't fully started; force-settle state.
      abortRequestedRef.current = false;
      setStatus("idle");
      startingRef.current = false;
    }
  }, [finish]);

  const clearCommitted = useCallback(() => setCommitted(""), []);

  const start = useCallback(() => {
    if (recogRef.current || startingRef.current) return; // already active
    const Ctor = getRecognitionCtor();
    if (!Ctor) {
      setStatus("unsupported");
      return;
    }
    if (!getUserMediaAvailable()) {
      setStatus("denied");
      return;
    }

    const recognition = new Ctor();
    recognition.lang = "en-GB";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    startingRef.current = true;

    recognition.onstart = () => setStatus("listening");

    recognition.onresult = (event) => {
      // Rebuild from the whole results array each time -> no duplicate chunks.
      let interim = "";
      let finalText = "";
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        const chunk = result[0]?.transcript || "";
        if (result.isFinal) finalText += chunk + " ";
        else interim += chunk + " ";
      }
      finalRef.current = finalText.trim();
      setLiveTranscript((finalRef.current ? finalRef.current + " " : "") + interim.trim());
    };

    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed" || event.error === "security") {
        abortRequestedRef.current = false;
        finalRef.current = "";
        setStatus("denied");
      } else if (event.error === "no-speech" || event.error === "aborted" || event.error === "network") {
        // no-speech/aborted/network still surface their natural onend; the
        // end handler decides whether to commit or discard.
        if (event.error === "network") {
          finalRef.current = "";
        }
      }
    };

    recognition.onend = finish;

    recogRef.current = recognition;
    try {
      recognition.start();
    } catch {
      recogRef.current = null;
      startingRef.current = false;
      setStatus("error");
    }
  }, [finish]);

  useEffect(() => {
    return () => {
      try {
        recogRef.current?.abort?.();
      } catch {
        // ignore
      }
      recogRef.current = null;
      startingRef.current = false;
    };
  }, []);

  return {
    supported,
    status,
    liveTranscript,
    committed,
    listening: status === "listening",
    start,
    stop,
    clearCommitted,
  };
}
