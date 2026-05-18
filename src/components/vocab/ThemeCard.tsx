import { Link } from "react-router-dom";
import type { ThemeMeta } from "@/data/vocab/types";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { computePoolStats } from "@/lib/vocab/scheduler";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/format";

interface Props {
  theme: ThemeMeta;
  wordIds: string[];
}

export const ThemeCard = ({ theme, wordIds }: Props) => {
  // Subscribe to store so stats live-update when user studies
  const byWord = useVocabSrsStore((s) => s.byWord);
  void byWord; // dependency for memo
  const stats = computePoolStats(wordIds);
  const isEmpty = wordIds.length === 0;

  return (
    <Card interactive>
      <Link to={`/vocab/theme/${theme.id}`} className="block p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{theme.emoji}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-base truncate">
              {theme.label}
            </h3>
            <div className="text-xs text-ink-500">
              {wordIds.length} từ
            </div>
          </div>
          {stats.due > 0 && (
            <span
              className="px-2 py-0.5 rounded-full bg-xp text-ink-950 text-xs font-bold animate-pop-in"
              title="Số câu cần ôn hôm nay"
            >
              {stats.due}
            </span>
          )}
        </div>

        {!isEmpty && (
          <>
            <div className="flex justify-between text-xs text-ink-500 mb-1">
              <span>💎 {stats.mastered}</span>
              <span>🔁 {stats.review}</span>
              <span>🌱 {stats.learning}</span>
              <span>🆕 {stats.new}</span>
            </div>
            <ProgressBar value={stats.pctProgress} size="sm" color="quest" />
            <div className="flex items-center justify-between text-xs mt-1">
              <span className="text-quest-600 dark:text-quest-300 font-medium">
                {Math.round(stats.pctProgress * 100)}% tiến độ
              </span>
              <span className="text-mastery font-medium" title="% đã đạt mastered 💎">
                {Math.round(stats.pctMastered * 100)}% 💎
              </span>
            </div>
          </>
        )}
        {isEmpty && (
          <div
            className={cn(
              "text-xs italic text-ink-400 py-2",
            )}
          >
            (chờ categorize hoàn tất)
          </div>
        )}
      </Link>
    </Card>
  );
};
