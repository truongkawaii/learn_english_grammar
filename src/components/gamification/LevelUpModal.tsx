import { useEffect } from "react";
import confetti from "canvas-confetti";
import { levelTitle } from "@/lib/xp";
import { Button } from "@/components/ui/Button";

interface Props {
  level: number;
  open: boolean;
  onClose: () => void;
}

export const LevelUpModal = ({ level, open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    const fire = (particleRatio: number, opts: confetti.Options) =>
      confetti({
        ...opts,
        origin: { y: 0.5 },
        particleCount: Math.floor(160 * particleRatio),
        colors: ["#6366f1", "#fbbf24", "#a855f7", "#22c55e"],
      });
    fire(0.3, { spread: 30, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 110, decay: 0.91, scalar: 0.9 });
    fire(0.15, { spread: 130, startVelocity: 30, decay: 0.92, scalar: 1.3 });
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-ink-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-white dark:bg-ink-900 rounded-3xl p-8 text-center shadow-2xl animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-xp to-orange-500 flex items-center justify-center text-4xl shadow-glow-xp animate-float">
            <span className="material-symbols-rounded text-white text-5xl">arrow_circle_up</span>
          </div>
        </div>

        <div className="text-xs font-semibold uppercase tracking-widest text-quest-500 mt-8">
          Level Up!
        </div>
        <div className="font-display font-extrabold text-6xl bg-gradient-to-br from-quest-500 to-mastery bg-clip-text text-transparent leading-none mt-2">
          Lv {level}
        </div>
        <div className="font-display font-bold text-xl mt-2">{levelTitle(level)}</div>
        <p className="text-sm text-ink-500 mt-3">
          Chúc mừng anh! Streak và XP đang rất ổn — tiếp tục đà này nhé.
        </p>

        <div className="mt-6">
          <Button onClick={onClose} fullWidth icon="celebration">
            Quẩy tiếp!
          </Button>
        </div>
      </div>
    </div>
  );
};
