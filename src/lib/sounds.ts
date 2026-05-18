// Lightweight SFX generated on the fly with Web Audio API — no audio files needed.
// Volume is purposely low; respects the user's sound toggle.

import { useUserStore } from "@/store/userStore";

let audioCtx: AudioContext | null = null;

const getCtx = (): AudioContext | null => {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch {
      return null;
    }
  }
  if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
  return audioCtx;
};

interface ToneOpts {
  freq: number;
  durationMs: number;
  type?: OscillatorType;
  startGain?: number;
  endGain?: number;
  delayMs?: number;
}

const playTone = (ctx: AudioContext, opts: ToneOpts) => {
  const t0 = ctx.currentTime + (opts.delayMs ?? 0) / 1000;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = opts.type ?? "sine";
  osc.frequency.setValueAtTime(opts.freq, t0);
  gain.gain.setValueAtTime(opts.startGain ?? 0.18, t0);
  gain.gain.exponentialRampToValueAtTime(
    Math.max(opts.endGain ?? 0.001, 0.0001),
    t0 + opts.durationMs / 1000,
  );
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + opts.durationMs / 1000);
};

export type SfxKind = "click" | "select" | "correct" | "wrong" | "levelUp" | "complete";

export const playSfx = (kind: SfxKind) => {
  if (!useUserStore.getState().soundEnabled) return;
  const ctx = getCtx();
  if (!ctx) return;

  switch (kind) {
    case "click":
      playTone(ctx, { freq: 880, durationMs: 50, type: "triangle", startGain: 0.1 });
      break;
    case "select":
      playTone(ctx, { freq: 660, durationMs: 70, type: "triangle", startGain: 0.12 });
      playTone(ctx, { freq: 990, durationMs: 70, type: "triangle", startGain: 0.1, delayMs: 40 });
      break;
    case "correct":
      // C5 → E5 → G5 arpeggio
      playTone(ctx, { freq: 523, durationMs: 110, type: "triangle", startGain: 0.18 });
      playTone(ctx, { freq: 659, durationMs: 110, type: "triangle", startGain: 0.18, delayMs: 90 });
      playTone(ctx, { freq: 784, durationMs: 200, type: "triangle", startGain: 0.18, delayMs: 180 });
      break;
    case "wrong":
      playTone(ctx, { freq: 220, durationMs: 140, type: "square", startGain: 0.12 });
      playTone(ctx, { freq: 165, durationMs: 220, type: "square", startGain: 0.12, delayMs: 120 });
      break;
    case "levelUp":
      // C → E → G → C ascending fanfare
      playTone(ctx, { freq: 523, durationMs: 120, type: "triangle", startGain: 0.2 });
      playTone(ctx, { freq: 659, durationMs: 120, type: "triangle", startGain: 0.2, delayMs: 100 });
      playTone(ctx, { freq: 784, durationMs: 120, type: "triangle", startGain: 0.2, delayMs: 200 });
      playTone(ctx, { freq: 1047, durationMs: 320, type: "triangle", startGain: 0.22, delayMs: 300 });
      break;
    case "complete":
      playTone(ctx, { freq: 784, durationMs: 100, type: "sine", startGain: 0.16 });
      playTone(ctx, { freq: 1047, durationMs: 100, type: "sine", startGain: 0.16, delayMs: 80 });
      playTone(ctx, { freq: 1319, durationMs: 240, type: "sine", startGain: 0.18, delayMs: 160 });
      break;
  }
};
