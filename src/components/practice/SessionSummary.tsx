import { useEffect } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { gradeForAccuracy, gradeColor, type Grade } from "@/lib/practice";
import { playSfx } from "@/lib/sounds";
import { cn, formatDuration, formatNumber } from "@/lib/format";

interface Props {
  topicTitle: string;
  totalQuestions: number;
  correct: number;
  xpEarned: number;
  bestCombo: number;
  durationSec: number;
  onRetry: () => void;
  practiceUrl: string;
}

const GRADE_LABEL: Record<Grade, string> = {
  S: "Tuyệt vời!",
  A: "Xuất sắc!",
  B: "Khá tốt!",
  C: "Cần cố gắng thêm",
  D: "Ôn lại lý thuyết nhé",
};

export const SessionSummary = ({
  topicTitle,
  totalQuestions,
  correct,
  xpEarned,
  bestCombo,
  durationSec,
  onRetry,
}: Props) => {
  const accuracy = totalQuestions > 0 ? correct / totalQuestions : 0;
  const grade = gradeForAccuracy(accuracy);
  const isWin = accuracy >= 0.7;

  useEffect(() => {
    playSfx(isWin ? "complete" : "click");
    if (isWin) {
      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...opts,
          origin: { y: 0.6 },
          particleCount: Math.floor(120 * particleRatio),
        });
      };
      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-6 animate-fade-in-up">
      <Card glow>
        <div className="p-8 text-center space-y-6">
          <div className="text-sm text-ink-500">{topicTitle}</div>

          <div className="flex justify-center">
            <div
              className={cn(
                "w-32 h-32 rounded-full bg-gradient-to-br flex items-center justify-center text-7xl font-display font-extrabold text-white shadow-2xl",
                gradeColor(grade),
              )}
            >
              {grade}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-3xl">
              {GRADE_LABEL[grade]}
            </h2>
            <p className="text-ink-500 mt-1">
              {correct} / {totalQuestions} đúng · {Math.round(accuracy * 100)}%
            </p>
          </div>

          <ProgressBar
            value={accuracy}
            color={isWin ? "correct" : "wrong"}
            size="lg"
          />

          <div className="grid grid-cols-3 gap-3 pt-2">
            <Stat icon="bolt"  label="XP" value={`+${formatNumber(xpEarned)}`} color="text-xp" />
            <Stat icon="bolt" label="Combo cao nhất" value={`x${bestCombo}`} color="text-streak" />
            <Stat icon="timer" label="Thời gian" value={formatDuration(durationSec)} />
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <Button variant="secondary" icon="refresh" onClick={onRetry}>
              Làm lại
            </Button>
            <Link to="/">
              <Button icon="map">Về bản đồ</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Stat = ({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  color?: string;
}) => (
  <div className="px-3 py-2 rounded-xl bg-ink-100 dark:bg-ink-800">
    <div className="text-xs text-ink-500 flex items-center justify-center gap-1">
      <span className={cn("material-symbols-rounded text-[1.1em]", color)}>{icon}</span>
      {label}
    </div>
    <div className="font-display font-bold text-xl mt-0.5">{value}</div>
  </div>
);
