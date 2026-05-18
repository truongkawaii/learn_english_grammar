import { Link } from "react-router-dom";
import { COURSES, TOPICS, getTopicsByCourse } from "@/data/topics";
import { useProgressStore } from "@/store/progressStore";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { tierToEmoji, tierToLabel } from "@/lib/mastery";
import { cn } from "@/lib/format";
import { DailyQuestPanel } from "@/components/gamification/DailyQuestPanel";

export const HomePage = () => {
  const topicProgress = useProgressStore((s) => s.topicProgress);

  // First topic always unlocked even if no progress saved
  const isUnlocked = (topicId: string) => {
    if (topicId === "A1") return true;
    const t = TOPICS.find((x) => x.id === topicId);
    if (!t) return false;
    if (!t.prerequisiteTopicIds || t.prerequisiteTopicIds.length === 0) return true;
    return t.prerequisiteTopicIds.every((pid) => {
      const p = topicProgress[pid];
      return p?.bossCleared || (p?.questionsCorrect ?? 0) > 0;
    });
  };

  return (
    <div className="space-y-10">
      <section className="text-center pt-4 pb-2">
        <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
          Chinh phục <span className="text-quest-500">ngữ pháp TOEIC</span>
        </h1>
        <p className="mt-3 text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
          21 chủ đề từ nền tảng đến nâng cao · Học → Luyện → Boss → Mastery.
          Mỗi câu đúng = XP. Mỗi ngày = Streak.
        </p>
      </section>

      <DailyQuestPanel />

      {COURSES.map((course) => {
        const topics = getTopicsByCourse(course.id);
        return (
          <section key={course.id}>
            <header className="mb-4 flex items-center gap-3">
              <div
                className={cn(
                  "h-12 w-12 rounded-2xl bg-gradient-to-br shrink-0 flex items-center justify-center text-white text-2xl shadow-glow-quest",
                  course.colorFrom,
                  course.colorTo,
                )}
              >
                <span className="material-symbols-rounded">{course.icon}</span>
              </div>
              <div>
                <h2 className="font-display font-bold text-xl">
                  Chương {course.id} · {course.title}
                </h2>
                <p className="text-sm text-ink-500 dark:text-ink-400">
                  {course.subtitle}
                </p>
              </div>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map((t) => {
                const progress = topicProgress[t.id];
                const unlocked = isUnlocked(t.id);
                const accuracy =
                  progress && progress.questionsSeen > 0
                    ? progress.questionsCorrect / progress.questionsSeen
                    : 0;
                const tier = progress?.mastery ?? 0;
                return (
                  <Link
                    key={t.id}
                    to={unlocked ? `/learn/${t.id}` : "#"}
                    aria-disabled={!unlocked}
                    className={cn(!unlocked && "pointer-events-none")}
                  >
                    <Card interactive={unlocked} className={cn(!unlocked && "opacity-60")}>
                      <div className="p-4 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-quest-500 flex items-center gap-2">
                              <span>{t.id}</span>
                              {progress?.theoryRead && (
                                <span
                                  title="Đã đọc lý thuyết"
                                  className="inline-flex items-center gap-0.5 text-correct"
                                >
                                  <span className="material-symbols-rounded text-[1em]">
                                    menu_book
                                  </span>
                                </span>
                              )}
                              {progress?.bossCleared && (
                                <span
                                  title="Đã thắng Boss"
                                  className="inline-flex items-center gap-0.5 text-xp"
                                >
                                  <span className="material-symbols-rounded text-[1em]">
                                    emoji_events
                                  </span>
                                </span>
                              )}
                            </div>
                            <h3 className="font-display font-bold text-lg leading-tight truncate">
                              {t.title}
                            </h3>
                          </div>
                          <span
                            className="text-2xl shrink-0"
                            title={tierToLabel(tier)}
                          >
                            {unlocked ? tierToEmoji(tier) : "🔒"}
                          </span>
                        </div>
                        <p className="text-sm text-ink-500 dark:text-ink-400 line-clamp-2 min-h-[2.5em]">
                          {t.description}
                        </p>
                        <div>
                          <div className="flex justify-between text-xs text-ink-500 dark:text-ink-400 mb-1">
                            <span>{progress?.questionsSeen ?? 0} câu</span>
                            <span>{Math.round(accuracy * 100)}% đúng</span>
                          </div>
                          <ProgressBar value={accuracy} size="sm" color="correct" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
