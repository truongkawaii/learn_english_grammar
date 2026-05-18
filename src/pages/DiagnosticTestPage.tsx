import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  QuestionRunner,
  type RunnerMode,
  type SessionStats,
} from "@/components/practice/QuestionRunner";
import { getDiagnosticQuestions } from "@/lib/practiceSources";
import { useUserStore } from "@/store/userStore";
import { TOPICS, getTopicById, COURSES } from "@/data/topics";
import { cn, formatDuration } from "@/lib/format";

type Stage = "intro" | "running" | "result";

const TOTAL = 25;

export const DiagnosticTestPage = () => {
  const navigate = useNavigate();
  const saved = useUserStore((s) => s.diagnostic);
  const saveDiagnostic = useUserStore((s) => s.saveDiagnostic);

  const [stage, setStage] = useState<Stage>("intro");
  const [seed, setSeed] = useState(0);
  const [finalStats, setFinalStats] = useState<SessionStats | null>(null);

  const questions = useMemo(
    () => getDiagnosticQuestions(TOTAL),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed],
  );

  const mode: RunnerMode = {
    id: "mock", // reuse mock semantics: no view-answer, no retry, no reveal-per-question
    allowViewAnswer: false,
    allowRetryQuestion: false,
    revealAfterEachSubmit: false,
    introBanner: (
      <div className="rounded-xl px-4 py-3 bg-quest-50 dark:bg-quest-900/20 border border-quest-200 dark:border-quest-800 text-sm flex items-center gap-3">
        <span className="text-3xl">🧭</span>
        <div className="flex-1">
          <div className="font-display font-bold text-quest-600 dark:text-quest-300">
            Diagnostic Test
          </div>
          <div className="text-ink-500 dark:text-ink-300">
            {questions.length} câu mix toàn bộ {TOPICS.length} chủ đề · không xem đáp án trong khi làm
          </div>
        </div>
      </div>
    ),
    renderSummary: (stats) => {
      const perTopic: Record<string, { correct: number; total: number }> = {};
      for (const r of stats.results) {
        const id = r.question.topicId;
        if (!perTopic[id]) perTopic[id] = { correct: 0, total: 0 };
        perTopic[id].total++;
        if (r.isCorrect) perTopic[id].correct++;
      }
      // Persist + transition to result screen (deferred to avoid setState-in-render)
      queueMicrotask(() => {
        saveDiagnostic({
          takenAt: Date.now(),
          totalQuestions: stats.totalQuestions,
          correctCount: stats.correct,
          perTopic,
        });
        setFinalStats(stats);
        setStage("result");
      });
      // Brief placeholder while transition happens
      return (
        <div className="text-center py-8 text-ink-500">
          Đang phân tích kết quả…
        </div>
      );
    },
  };

  if (stage === "running") {
    return (
      <div className="max-w-3xl mx-auto space-y-2">
        <QuestionRunner
          key={seed}
          topicId="diagnostic"
          topicTitle="Diagnostic Test"
          questions={questions}
          mode={mode}
        />
      </div>
    );
  }

  if (stage === "result" && finalStats) {
    return (
      <DiagnosticResult
        stats={finalStats}
        onRetake={() => {
          setSeed((s) => s + 1);
          setFinalStats(null);
          setStage("running");
        }}
        onHome={() => navigate("/")}
      />
    );
  }

  // ---- Intro stage ----
  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div>
        <Link to="/" className="text-sm text-ink-500 hover:text-quest-500">
          ← Bản đồ
        </Link>
        <h1 className="font-display font-bold text-3xl mt-1">🧭 Diagnostic Test</h1>
        <p className="text-ink-500 mt-1">
          Bài test 25 câu giúp đo nhanh trình độ hiện tại và đề xuất chủ đề nên ưu tiên.
        </p>
      </div>

      <Card glow>
        <div className="p-6 space-y-4">
          <Row icon="quiz" label="Số câu" value={`${questions.length} câu`} />
          <Row icon="visibility_off" label="Trong khi làm" value="Không xem đáp án, không retry" />
          <Row icon="map" label="Phạm vi" value={`Mix toàn bộ ${TOPICS.length} chủ đề`} />
          <Row icon="schedule" label="Thời gian" value="Tuỳ ý — không giới hạn" />

          {saved && (
            <div className="rounded-xl bg-ink-100 dark:bg-ink-800 p-3 text-sm">
              <div className="font-semibold mb-0.5">Kết quả gần nhất</div>
              <div className="text-ink-500">
                {new Date(saved.takenAt).toLocaleString("vi-VN")} ·{" "}
                <span className="font-bold text-quest-600 dark:text-quest-300">
                  {saved.correctCount}/{saved.totalQuestions}
                </span>{" "}
                ({Math.round((saved.correctCount / saved.totalQuestions) * 100)}%)
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            <Button
              icon="play_arrow"
              onClick={() => setStage("running")}
              disabled={questions.length === 0}
            >
              {saved ? "Làm lại" : "Bắt đầu"}
            </Button>
            {saved && (
              <Button
                variant="ghost"
                icon="bar_chart"
                onClick={() => {
                  // Reconstruct minimal "stats" from saved for result viewing
                  const fakeStats: SessionStats = {
                    topicTitle: "Diagnostic Test",
                    totalQuestions: saved.totalQuestions,
                    correct: saved.correctCount,
                    xpEarned: 0,
                    bestCombo: 0,
                    durationSec: 0,
                    results: [],
                    restart: () => {},
                  };
                  setFinalStats(fakeStats);
                  setStage("result");
                }}
              >
                Xem kết quả gần nhất
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Result analysis
// ---------------------------------------------------------------------------

const DiagnosticResult = ({
  stats,
  onRetake,
  onHome,
}: {
  stats: SessionStats;
  onRetake: () => void;
  onHome: () => void;
}) => {
  // Prefer fresh per-topic data; fallback to userStore.diagnostic if results empty
  // (i.e. user opened "Xem kết quả gần nhất").
  const savedDiag = useUserStore.getState().diagnostic;
  const perTopic = useMemo(() => {
    if (stats.results.length > 0) {
      const m: Record<string, { correct: number; total: number }> = {};
      for (const r of stats.results) {
        const id = r.question.topicId;
        if (!m[id]) m[id] = { correct: 0, total: 0 };
        m[id].total++;
        if (r.isCorrect) m[id].correct++;
      }
      return m;
    }
    return savedDiag?.perTopic ?? {};
  }, [stats.results, savedDiag]);

  const overall = stats.totalQuestions > 0 ? stats.correct / stats.totalQuestions : 0;
  const sortedTopics = Object.entries(perTopic)
    .map(([id, p]) => ({
      id,
      topic: getTopicById(id),
      accuracy: p.total > 0 ? p.correct / p.total : 0,
      ...p,
    }))
    .filter((t) => t.topic)
    .sort((a, b) => a.accuracy - b.accuracy);

  const weakest = sortedTopics.slice(0, 5);
  const strongest = sortedTopics.slice(-3).reverse();
  const predictedBand = Math.round(200 + overall * 295);

  return (
    <div className="max-w-3xl mx-auto space-y-5 animate-fade-in-up">
      <div>
        <h1 className="font-display font-extrabold text-3xl">📊 Kết quả Diagnostic</h1>
        <p className="text-ink-500 mt-1">
          {stats.durationSec > 0 && `Thời gian: ${formatDuration(stats.durationSec)} · `}
          Tổng: <span className="font-bold">{stats.correct}/{stats.totalQuestions}</span> ·{" "}
          {Math.round(overall * 100)}%
        </p>
      </div>

      <Card glow>
        <div className="p-6 space-y-3 text-center">
          <div className="text-xs uppercase tracking-wider text-ink-500">
            Band điểm dự đoán (Part 5)
          </div>
          <div className="font-display font-extrabold text-5xl text-quest-600 dark:text-quest-200">
            {predictedBand}
          </div>
          <div className="text-sm text-ink-500">trên thang 200-495</div>
          <ProgressBar value={overall} color="quest" size="lg" />
        </div>
      </Card>

      {weakest.length > 0 && (
        <Card>
          <div className="p-5 space-y-3">
            <h2 className="font-display font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-rounded text-wrong">priority_high</span>
              Nên ưu tiên ôn
            </h2>
            <ul className="space-y-2">
              {weakest.map((t) => {
                const course = COURSES.find((c) => c.id === t.topic!.courseId);
                return (
                  <li key={t.id}>
                    <Link
                      to={`/learn/${t.id}`}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-xl border-2 transition",
                        "border-wrong/30 bg-wrong/5 hover:border-wrong",
                      )}
                    >
                      <div className="text-xl shrink-0">
                        {t.accuracy >= 0.5 ? "🟡" : "🔴"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display font-bold text-sm">
                          {t.topic!.id} · {t.topic!.title}
                        </div>
                        <div className="text-xs text-ink-500">
                          {course?.title} · {t.correct}/{t.total} đúng ({Math.round(t.accuracy * 100)}%)
                        </div>
                      </div>
                      <span className="material-symbols-rounded text-ink-400">arrow_forward</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Card>
      )}

      {strongest.length > 0 && strongest[0].accuracy > 0 && (
        <Card>
          <div className="p-5 space-y-3">
            <h2 className="font-display font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-rounded text-correct">verified</span>
              Đã nắm chắc
            </h2>
            <ul className="space-y-2">
              {strongest.map((t) => (
                <li
                  key={t.id}
                  className="flex items-center gap-3 p-3 rounded-xl border-2 border-correct/30 bg-correct/5"
                >
                  <div className="text-xl shrink-0">✅</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-bold text-sm">
                      {t.topic!.id} · {t.topic!.title}
                    </div>
                    <div className="text-xs text-ink-500">
                      {t.correct}/{t.total} đúng ({Math.round(t.accuracy * 100)}%)
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}

      <div className="flex flex-wrap gap-2 justify-center pt-3">
        <Button variant="secondary" icon="refresh" onClick={onRetake}>
          Làm lại Diagnostic
        </Button>
        <Button icon="map" onClick={onHome}>
          Về bản đồ
        </Button>
      </div>
    </div>
  );
};

const Row = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center gap-3">
    <span className="material-symbols-rounded text-quest-500">{icon}</span>
    <div className="flex-1 text-sm text-ink-500">{label}</div>
    <div className="font-medium">{value}</div>
  </div>
);
