import { useUserStore } from "@/store/userStore";
import { useAttemptsStore } from "@/store/attemptsStore";
import { todayKey, formatDuration } from "@/lib/format";
import { cn } from "@/lib/format";

const DAILY_TARGET = 20;

/** Count of vocab reviews recorded today via vocabSrsStore.
 *  We piggyback on attempts log (vocab attempts have topicId starting with "vocab-").
 *  Since vocab session uses its own store, we instead snapshot lastReviewedAt against today.
 */
const todayVocabCount = (byWord: Record<string, { lastReviewedAt: number }>): number => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const startMs = start.getTime();
  let n = 0;
  for (const s of Object.values(byWord)) {
    if (s.lastReviewedAt >= startMs) n++;
  }
  return n;
};

interface Props {
  byWord: Record<string, { lastReviewedAt: number }>;
}

export const DailyGoalRing = ({ byWord }: Props) => {
  const studyToday = useUserStore((s) => s.studySecondsByDate[todayKey()] ?? 0);
  void useAttemptsStore; // future hookup
  const done = Math.min(DAILY_TARGET, todayVocabCount(byWord));
  const remaining = DAILY_TARGET - done;
  const pct = done / DAILY_TARGET;

  // Render 20 dots in a ring layout
  const dots = Array.from({ length: DAILY_TARGET }, (_, i) => i < done);

  return (
    <div className="flex items-center gap-5">
      <div className="relative w-28 h-28 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="44" fill="none"
            className="stroke-ink-200 dark:stroke-ink-800" strokeWidth="8" />
          <circle cx="50" cy="50" r="44" fill="none"
            className="stroke-xp transition-all duration-700"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${pct * 276} 276`} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display font-extrabold text-2xl">
            {done}<span className="text-ink-400">/{DAILY_TARGET}</span>
          </div>
          <div className="text-xs text-ink-500">từ hôm nay</div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display font-bold text-lg">
          {done === DAILY_TARGET
            ? "🎉 Đã đạt mục tiêu!"
            : remaining > 0
            ? `Còn ${remaining} từ nữa`
            : "Bắt đầu phiên đầu tiên"}
        </div>
        <div className="text-sm text-ink-500 mt-1">
          Học hôm nay: <span className="font-semibold">{formatDuration(studyToday)}</span>
        </div>
        <div className="mt-2 grid grid-cols-10 gap-1 max-w-xs">
          {dots.map((on, i) => (
            <span
              key={i}
              className={cn(
                "h-2 rounded-full",
                on ? "bg-xp" : "bg-ink-200 dark:bg-ink-800",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
