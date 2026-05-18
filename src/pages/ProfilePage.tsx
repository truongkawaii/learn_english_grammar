import { Link } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import { useProgressStore } from "@/store/progressStore";
import { useAttemptsStore } from "@/store/attemptsStore";
import { getLevelInfo } from "@/lib/xp";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatDuration, formatNumber, todayKey } from "@/lib/format";
import { TOPICS } from "@/data/topics";
import { ActivityHeatmap } from "@/components/profile/ActivityHeatmap";
import { AchievementsGrid } from "@/components/profile/AchievementsGrid";

export const ProfilePage = () => {
  const user = useUserStore();
  const topicProgress = useProgressStore((s) => s.topicProgress);
  const questionProgress = useProgressStore((s) => s.questionProgress);
  const attempts = useAttemptsStore((s) => s.attempts);
  const levelInfo = getLevelInfo(user.totalXp);

  const totalSeen = Object.values(questionProgress).reduce((s, q) => s + q.timesSeen, 0);
  const totalCorrect = Object.values(questionProgress).reduce((s, q) => s + q.timesCorrect, 0);
  const accuracy = totalSeen > 0 ? totalCorrect / totalSeen : 0;
  const todaySec = user.studySecondsByDate[todayKey()] ?? 0;
  const totalSec = Object.values(user.studySecondsByDate).reduce((a, b) => a + b, 0);
  const masteredCount = Object.values(topicProgress).filter((p) => p.mastery === 4).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <div className="p-6 flex items-center gap-4">
          <div className="text-6xl">{user.avatar}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <h1 className="font-display font-bold text-2xl truncate">{user.nickname}</h1>
              <span className="text-sm text-ink-500">Lv {levelInfo.level} · {levelInfo.title}</span>
            </div>
            <div className="mt-2">
              <ProgressBar
                value={levelInfo.xpToNext > 0 ? levelInfo.xpInLevel / levelInfo.xpToNext : 0}
                color="xp"
              />
              <div className="text-xs text-ink-500 mt-1">
                {formatNumber(levelInfo.xpInLevel)} / {formatNumber(levelInfo.xpToNext)} XP tới Lv {levelInfo.level + 1}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="bolt"  label="Tổng XP"      value={formatNumber(user.totalXp)} color="text-xp" />
        <StatCard icon="local_fire_department" label="Streak hiện tại" value={`${user.currentStreak} ngày`} color="text-streak" sub={`Kỷ lục: ${user.bestStreak}`} />
        <StatCard icon="check_circle" label="Tổng câu đúng" value={formatNumber(totalCorrect)} color="text-correct" sub={`/${formatNumber(totalSeen)} câu (${Math.round(accuracy * 100)}%)`} />
        <StatCard icon="timer" label="Học hôm nay"  value={formatDuration(todaySec)} sub={`Tổng: ${formatDuration(totalSec)}`} />
      </div>

      <Card>
        <div className="p-6">
          <h2 className="font-display font-bold text-xl mb-4">Tiến độ theo chủ đề</h2>
          <div className="space-y-3">
            {TOPICS.map((t) => {
              const p = topicProgress[t.id];
              const acc = p && p.questionsSeen > 0 ? p.questionsCorrect / p.questionsSeen : 0;
              return (
                <div key={t.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">
                      <span className="text-ink-400">{t.id}</span> · {t.title}
                    </span>
                    <span className="text-ink-500">
                      {p?.questionsSeen ?? 0} câu · {Math.round(acc * 100)}%
                    </span>
                  </div>
                  <ProgressBar value={acc} size="sm" color="correct" />
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <ActivityHeatmap />
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <AchievementsGrid />
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display font-bold text-xl">Hoạt động gần đây</h2>
            <Link
              to="/history"
              className="text-sm text-quest-500 hover:underline inline-flex items-center gap-1"
            >
              Xem tất cả
              <span className="material-symbols-rounded text-[1.1em]">arrow_forward</span>
            </Link>
          </div>
          <p className="text-sm text-ink-500 mb-4">
            {attempts.length} lượt trả lời · {masteredCount} chủ đề Mastered
          </p>
          {attempts.length === 0 ? (
            <div className="text-center py-8 text-ink-400">
              Chưa có hoạt động. Bắt đầu luyện tập đi anh!
            </div>
          ) : (
            <ul className="divide-y divide-ink-200 dark:divide-ink-800">
              {attempts.slice(0, 7).map((a) => (
                <li key={a.id} className="py-2 flex items-center gap-2 text-sm">
                  <span
                    className={`material-symbols-rounded ${
                      a.isCorrect ? "text-correct" : "text-wrong"
                    }`}
                  >
                    {a.isCorrect ? "check_circle" : "cancel"}
                  </span>
                  <span className="font-medium">{a.topicId}</span>
                  <span className="text-ink-400">·</span>
                  <span className="text-ink-500">{a.type}</span>
                  <span className="ml-auto text-xs text-ink-400">
                    +{a.xpEarned} XP
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </div>
  );
};

const StatCard = ({
  icon, label, value, color, sub,
}: { icon: string; label: string; value: string; color?: string; sub?: string }) => (
  <Card>
    <div className="p-4">
      <div className="flex items-center gap-2 text-ink-500 text-sm">
        <span className={`material-symbols-rounded ${color ?? ""}`}>{icon}</span>
        {label}
      </div>
      <div className="mt-2 font-display font-bold text-2xl">{value}</div>
      {sub && <div className="text-xs text-ink-400 mt-0.5">{sub}</div>}
    </div>
  </Card>
);
