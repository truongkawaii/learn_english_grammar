import { useMemo } from "react";
import {
  ACHIEVEMENTS,
  ACHIEVEMENT_CATEGORY_LABEL,
  type AchievementCategory,
} from "@/lib/achievements";
import { useAchievementsStore } from "@/store/achievementsStore";
import { cn } from "@/lib/format";

export const AchievementsGrid = () => {
  const unlocked = useAchievementsStore((s) => s.unlocked);

  const byCategory = useMemo(() => {
    const groups: Record<AchievementCategory, typeof ACHIEVEMENTS> = {
      progress: [],
      skill: [],
      streak: [],
      topic: [],
      time: [],
      fun: [],
      vocab: [],
    };
    for (const a of ACHIEVEMENTS) groups[a.category].push(a);
    return groups;
  }, []);

  const unlockedCount = Object.keys(unlocked).length;
  const totalCount = ACHIEVEMENTS.length;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="font-display font-bold text-lg flex items-center gap-2">
          <span className="material-symbols-rounded text-xp">military_tech</span>
          Thành tựu
        </h3>
        <div className="text-xs text-ink-500">
          {unlockedCount}/{totalCount} đã mở · {Math.round((unlockedCount / totalCount) * 100)}%
        </div>
      </div>

      {(Object.keys(byCategory) as AchievementCategory[]).map((cat) => {
        const items = byCategory[cat];
        if (items.length === 0) return null;
        return (
          <div key={cat}>
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-2">
              {ACHIEVEMENT_CATEGORY_LABEL[cat]}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {items.map((a) => {
                const isUnlocked = !!unlocked[a.id];
                return (
                  <div
                    key={a.id}
                    title={a.description}
                    className={cn(
                      "p-3 rounded-xl border-2 transition",
                      isUnlocked
                        ? "border-xp/40 bg-gradient-to-br from-quest-50 to-amber-50 dark:from-quest-900/20 dark:to-amber-900/10"
                        : "border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-900 opacity-60",
                    )}
                  >
                    <div
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center text-2xl",
                        isUnlocked
                          ? "bg-gradient-to-br from-quest-500 to-mastery text-white shadow-glow-quest"
                          : "bg-ink-200 dark:bg-ink-800 text-ink-400",
                      )}
                    >
                      <span className="material-symbols-rounded">
                        {isUnlocked ? a.icon : "lock"}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "mt-2 font-display font-bold text-sm leading-tight",
                        !isUnlocked && "text-ink-500",
                      )}
                    >
                      {a.title}
                    </div>
                    <div className="text-xs text-ink-500 mt-1 line-clamp-2">
                      {a.description}
                    </div>
                    <div
                      className={cn(
                        "text-xs font-bold mt-1.5",
                        isUnlocked ? "text-xp" : "text-ink-400",
                      )}
                    >
                      +{a.xpReward} XP
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
