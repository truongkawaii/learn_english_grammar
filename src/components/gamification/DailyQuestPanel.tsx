import { useMemo } from "react";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DAILY_QUESTS, type DailyQuestDef } from "@/lib/dailyQuests";
import { useDailyQuestStore } from "@/store/dailyQuestStore";
import { useUserStore } from "@/store/userStore";
import { useAttemptsStore } from "@/store/attemptsStore";
import { cn, formatDuration } from "@/lib/format";
import { playSfx } from "@/lib/sounds";

const formatMeasure = (q: DailyQuestDef, value: number): string => {
  if (q.id.endsWith("minutes")) return formatDuration(value);
  return `${value}/${q.target}`;
};

export const DailyQuestPanel = () => {
  // Subscribe to stores so progress updates live as the user works
  const studyToday = useUserStore((s) => s.studySecondsByDate);
  const attempts = useAttemptsStore((s) => s.attempts);
  const rewarded = useDailyQuestStore((s) => s.rewarded);
  const ensureToday = useDailyQuestStore((s) => s.ensureToday);
  const markRewarded = useDailyQuestStore((s) => s.markRewarded);
  const addXp = useUserStore((s) => s.addXp);

  // Recompute quest progress whenever stores change
  // (measure() reads live state internally)
  const progresses = useMemo(
    () => DAILY_QUESTS.map((q) => ({ q, value: q.measure() })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [studyToday, attempts, rewarded],
  );

  ensureToday();

  // Auto-claim quests that just completed (effect-like, but cheap each render)
  for (const { q, value } of progresses) {
    if (value >= q.target && !rewarded[q.id]) {
      const newly = markRewarded(q.id);
      if (newly) {
        addXp(q.xpReward);
        playSfx("levelUp");
      }
    }
  }

  const totalDone = progresses.filter((p) => p.value >= p.q.target).length;
  const totalReward = DAILY_QUESTS.reduce((s, q) => s + q.xpReward, 0);
  const claimedReward = DAILY_QUESTS
    .filter((q) => rewarded[q.id])
    .reduce((s, q) => s + q.xpReward, 0);

  return (
    <Card>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-xp text-2xl">flag</span>
            <h3 className="font-display font-bold text-lg">Nhiệm vụ hôm nay</h3>
          </div>
          <div className="text-xs text-ink-500">
            {totalDone}/{DAILY_QUESTS.length} hoàn thành ·{" "}
            <span className="text-xp font-semibold">+{claimedReward}</span> /{" "}
            <span>+{totalReward}</span> XP
          </div>
        </div>
        <div className="space-y-3">
          {progresses.map(({ q, value }) => {
            const ratio = Math.min(1, value / q.target);
            const done = value >= q.target;
            return (
              <div
                key={q.id}
                className={cn(
                  "p-3 rounded-xl border transition",
                  done
                    ? "border-correct/30 bg-correct/5"
                    : "border-ink-200 dark:border-ink-800",
                )}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={cn(
                      "material-symbols-rounded text-[1.2em]",
                      done ? "text-correct" : "text-quest-500",
                    )}
                  >
                    {done ? "check_circle" : q.icon}
                  </span>
                  <div className="flex-1 text-sm font-medium">{q.title}</div>
                  <div className="text-xs text-ink-500 font-mono">
                    {formatMeasure(q, value)}
                  </div>
                  <div className="text-xs text-xp font-bold">+{q.xpReward}</div>
                </div>
                <ProgressBar value={ratio} size="sm" color={done ? "correct" : "xp"} />
                <div className="text-xs text-ink-400 mt-1">{q.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
