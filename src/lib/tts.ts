// Web Speech API helpers — shared by vocab + grammar.

let preferredVoice: SpeechSynthesisVoice | null = null;

const pickVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  if (preferredVoice) return preferredVoice;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  // Prefer en-US natural voices; fall back to any en-*.
  preferredVoice =
    voices.find((v) => /en-US/i.test(v.lang) && /google|natural|samantha|aria|jenny/i.test(v.name)) ??
    voices.find((v) => /en-US/i.test(v.lang)) ??
    voices.find((v) => v.lang.startsWith("en")) ??
    null;
  return preferredVoice;
};

if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    preferredVoice = null;
    pickVoice();
  };
}

/**
 * Strip markdown-style ____ / **bold** / [B] tokens so the speaker doesn't
 * read literal underscores.
 */
const cleanForSpeech = (text: string): string =>
  text
    .replace(/_{2,}/g, " blank ")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\[[A-D]\]\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const speak = (text: string, opts: { lang?: string; rate?: number } = {}): void => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const clean = cleanForSpeech(text);
  if (!clean) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(clean);
    utter.lang = opts.lang ?? "en-US";
    utter.rate = opts.rate ?? 0.95;
    const v = pickVoice();
    if (v) utter.voice = v;
    window.speechSynthesis.speak(utter);
  } catch {
    /* noop */
  }
};

export const stopSpeaking = (): void => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
  } catch {
    /* noop */
  }
};

export const isTtsAvailable = (): boolean =>
  typeof window !== "undefined" && !!window.speechSynthesis;
