import { useEffect, useState } from "react";
import { ACHIEVEMENTS_BY_ID } from "@/lib/achievements";

interface ToastItem {
  achievementId: string;
  key: number;
}

interface Props {
  /** New unlock IDs detected this render; component manages its own queue. */
  newlyUnlocked: string[];
}

export const AchievementToast = ({ newlyUnlocked }: Props) => {
  const [queue, setQueue] = useState<ToastItem[]>([]);

  // Enqueue newly unlocked IDs
  useEffect(() => {
    if (newlyUnlocked.length === 0) return;
    setQueue((q) => [
      ...q,
      ...newlyUnlocked.map((id) => ({ achievementId: id, key: Date.now() + Math.random() })),
    ]);
  }, [newlyUnlocked]);

  // Auto-dismiss head of queue after 3.5s
  useEffect(() => {
    if (queue.length === 0) return;
    const t = setTimeout(() => setQueue((q) => q.slice(1)), 3500);
    return () => clearTimeout(t);
  }, [queue]);

  if (queue.length === 0) return null;
  const head = queue[0];
  const ach = ACHIEVEMENTS_BY_ID[head.achievementId];
  if (!ach) return null;

  return (
    <div
      key={head.key}
      className="fixed top-20 right-4 z-40 max-w-sm animate-fade-in-up"
    >
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br from-quest-500 to-mastery text-white shadow-glow-quest border border-quest-300/40">
        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
          <span className="material-symbols-rounded text-3xl">{ach.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold opacity-80 uppercase tracking-wider">
            🏆 Mở khoá thành tựu
          </div>
          <div className="font-display font-bold truncate">{ach.title}</div>
          <div className="text-xs opacity-90 line-clamp-1">{ach.description}</div>
        </div>
        <div className="text-xp font-bold whitespace-nowrap">+{ach.xpReward}</div>
      </div>
      {queue.length > 1 && (
        <div className="mt-1 text-xs text-ink-400 text-right">
          +{queue.length - 1} thành tựu khác trong hàng đợi…
        </div>
      )}
    </div>
  );
};
