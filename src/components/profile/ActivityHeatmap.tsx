import { useMemo } from "react";
import { useUserStore } from "@/store/userStore";
import { useAttemptsStore } from "@/store/attemptsStore";
import { cn, formatDuration, todayKey } from "@/lib/format";

const WEEKS = 12;
const DAYS_PER_WEEK = 7;

interface DayCell {
  date: string;        // YYYY-MM-DD
  xp: number;          // total: grammar XP + vocab XP
  studySec: number;
  grammarAttempts: number;
  vocabReviews: number;
  intensity: 0 | 1 | 2 | 3 | 4;
}

const dateKey = (d: Date): string => {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const ActivityHeatmap = () => {
  const studySecondsByDate = useUserStore((s) => s.studySecondsByDate);
  const vocabReviewsByDate = useUserStore((s) => s.vocabReviewsByDate);
  const attempts = useAttemptsStore((s) => s.attempts);

  const cells = useMemo<DayCell[]>(() => {
    // Aggregate grammar XP + attempt counts per day
    const grammarXpByDate = new Map<string, number>();
    const grammarAttemptsByDate = new Map<string, number>();
    for (const a of attempts) {
      const key = dateKey(new Date(a.timestamp));
      grammarXpByDate.set(key, (grammarXpByDate.get(key) ?? 0) + a.xpEarned);
      grammarAttemptsByDate.set(key, (grammarAttemptsByDate.get(key) ?? 0) + 1);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = today.getDay(); // 0 = Sun
    // Anchor the rightmost column to the current week (Mon–Sun grid).
    const days: DayCell[] = [];
    const totalDays = WEEKS * DAYS_PER_WEEK;
    const offsetFromMonday = (dayOfWeek + 6) % 7; // 0 = Mon
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (totalDays - 1 - (DAYS_PER_WEEK - 1 - offsetFromMonday)));

    for (let i = 0; i < totalDays; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      const key = dateKey(d);
      const grammarXp = grammarXpByDate.get(key) ?? 0;
      const vocab = vocabReviewsByDate[key] ?? { count: 0, xp: 0 };
      const xp = grammarXp + vocab.xp;
      const studySec = studySecondsByDate[key] ?? 0;
      const grammarAttempts = grammarAttemptsByDate.get(key) ?? 0;
      const vocabReviews = vocab.count;
      let intensity: DayCell["intensity"] = 0;
      if (xp >= 200) intensity = 4;
      else if (xp >= 100) intensity = 3;
      else if (xp >= 40) intensity = 2;
      else if (xp > 0) intensity = 1;
      days.push({ date: key, xp, studySec, grammarAttempts, vocabReviews, intensity });
    }
    return days;
  }, [attempts, studySecondsByDate, vocabReviewsByDate]);

  // Reshape to 7 rows x WEEKS columns (rows = Mon..Sun)
  const grid: DayCell[][] = Array.from({ length: DAYS_PER_WEEK }, () => []);
  for (let i = 0; i < cells.length; i++) {
    grid[i % DAYS_PER_WEEK].push(cells[i]);
  }

  const total = cells.reduce(
    (acc, c) => ({
      xp: acc.xp + c.xp,
      sec: acc.sec + c.studySec,
      days: acc.days + (c.intensity > 0 ? 1 : 0),
      grammar: acc.grammar + c.grammarAttempts,
      vocab: acc.vocab + c.vocabReviews,
    }),
    { xp: 0, sec: 0, days: 0, grammar: 0, vocab: 0 },
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="font-display font-bold text-lg">Hoạt động {WEEKS} tuần qua</h3>
        <div className="text-xs text-ink-500">
          {total.days} ngày hoạt động · {total.xp.toLocaleString()} XP ·{" "}
          {total.grammar > 0 && <>📝 {total.grammar} câu · </>}
          {total.vocab > 0 && <>📖 {total.vocab} từ · </>}
          {formatDuration(total.sec)}
        </div>
      </div>
      <div className="overflow-x-auto no-scrollbar -mx-2 px-2">
        <div className="inline-grid grid-flow-col grid-rows-7 gap-1">
          {grid.flat().map((cell) => (
            <div
              key={cell.date}
              title={[
                cell.date,
                `${cell.xp} XP`,
                cell.grammarAttempts > 0 && `📝 ${cell.grammarAttempts} câu`,
                cell.vocabReviews > 0 && `📖 ${cell.vocabReviews} từ`,
                cell.studySec > 0 && formatDuration(cell.studySec),
              ].filter(Boolean).join(" · ")}
              className={cn(
                "w-3 h-3 rounded-sm",
                cell.intensity === 0 && "bg-ink-200 dark:bg-ink-800",
                cell.intensity === 1 && "bg-quest-200 dark:bg-quest-900",
                cell.intensity === 2 && "bg-quest-300 dark:bg-quest-700",
                cell.intensity === 3 && "bg-quest-400 dark:bg-quest-500",
                cell.intensity === 4 && "bg-quest-500 dark:bg-quest-300 ring-1 ring-quest-400/40",
                cell.date === todayKey() && "ring-2 ring-xp",
              )}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-ink-400">
        <span>Ít</span>
        <span className="w-3 h-3 rounded-sm bg-ink-200 dark:bg-ink-800" />
        <span className="w-3 h-3 rounded-sm bg-quest-200 dark:bg-quest-900" />
        <span className="w-3 h-3 rounded-sm bg-quest-300 dark:bg-quest-700" />
        <span className="w-3 h-3 rounded-sm bg-quest-400 dark:bg-quest-500" />
        <span className="w-3 h-3 rounded-sm bg-quest-500 dark:bg-quest-300" />
        <span>Nhiều</span>
      </div>
    </div>
  );
};
