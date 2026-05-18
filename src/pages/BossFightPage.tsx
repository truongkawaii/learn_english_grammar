import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { getTopicById } from "@/data/topics";
import { getBossQuestions } from "@/lib/practiceSources";
import { QuestionRunner, type SessionStats, type RunnerMode } from "@/components/practice/QuestionRunner";
import { useProgressStore } from "@/store/progressStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { playSfx } from "@/lib/sounds";
import { formatDuration, formatNumber } from "@/lib/format";

const PASS_THRESHOLD = 0.8;
const BOSS_QUESTION_COUNT = 12;

export const BossFightPage = () => {
  const { topicId = "" } = useParams();
  const topic = getTopicById(topicId);
  const [seed, setSeed] = useState(0);
  const questions = useMemo(
    () => (topic ? getBossQuestions(topic.id, BOSS_QUESTION_COUNT) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic?.id, seed],
  );

  if (!topic) {
    return (
      <div className="text-center py-12">
        <p className="text-ink-500">Chủ đề không tồn tại.</p>
        <Link to="/" className="text-quest-500 underline mt-2 inline-block">
          ← Về bản đồ
        </Link>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <Card>
          <div className="p-8 text-center space-y-3">
            <div className="text-6xl">🚧</div>
            <h2 className="font-display font-bold text-xl">
              Chủ đề {topic.id} chưa đủ câu cho Boss Fight
            </h2>
            <p className="text-ink-500">
              Cần soạn thêm câu hỏi cho chủ đề này trước khi mở khoá Boss.
            </p>
            <Link to="/practice">
              <Button>Trở lại luyện tập</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const mode: RunnerMode = {
    id: "boss",
    allowViewAnswer: false,
    allowRetryQuestion: false,
    revealAfterEachSubmit: true,
    introBanner: (
      <div className="rounded-xl px-4 py-3 bg-gradient-to-r from-wrong/15 via-mastery/10 to-wrong/15 border border-wrong/30 text-sm flex items-center gap-3">
        <span className="text-3xl">🐉</span>
        <div className="flex-1">
          <div className="font-display font-bold text-wrong">BOSS FIGHT</div>
          <div className="text-ink-500 dark:text-ink-300">
            {BOSS_QUESTION_COUNT} câu khó · không xem đáp án · cần ≥ 80% để clear.
          </div>
        </div>
      </div>
    ),
    renderSummary: (stats) => (
      <BossSummary
        topicId={topic.id}
        topicTitle={topic.title}
        stats={stats}
        onRetry={() => {
          stats.restart();
          setSeed((s) => s + 1);
        }}
      />
    ),
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <Link to={`/practice/${topic.id}`} className="text-sm text-ink-500 hover:text-quest-500">
          ← Luyện tập thường
        </Link>
        <h1 className="font-display font-bold text-2xl mt-1 flex items-center gap-2">
          <span>🐉</span>
          <span className="text-wrong">Boss Fight</span>
          <span className="text-ink-400">·</span>
          <span>{topic.title}</span>
        </h1>
      </div>
      <QuestionRunner
        key={seed}
        topicId={topic.id}
        topicTitle={`🐉 ${topic.title}`}
        questions={questions}
        mode={mode}
      />
    </div>
  );
};

// ----------------------------------------------------------------------------
// Boss Summary — separate component so we can useEffect safely on completion
// ----------------------------------------------------------------------------

interface BossSummaryProps {
  topicId: string;
  topicTitle: string;
  stats: SessionStats;
  onRetry: () => void;
}

const BossSummary = ({ topicId, topicTitle, stats, onRetry }: BossSummaryProps) => {
  const accuracy = stats.totalQuestions > 0 ? stats.correct / stats.totalQuestions : 0;
  const passed = accuracy >= PASS_THRESHOLD;
  const setBossCleared = useProgressStore((s) => s.setBossCleared);
  const navigate = useNavigate();
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    if (passed) {
      setBossCleared(topicId, true);
      playSfx("levelUp");
      const fire = (r: number, opts: confetti.Options) =>
        confetti({
          ...opts,
          origin: { y: 0.55 },
          particleCount: Math.floor(180 * r),
          colors: ["#f43f5e", "#fbbf24", "#a855f7", "#6366f1"],
        });
      fire(0.3, { spread: 30, startVelocity: 55 });
      fire(0.25, { spread: 70 });
      fire(0.35, { spread: 110, decay: 0.91, scalar: 0.9 });
    } else {
      playSfx("wrong");
    }
  }, [passed, setBossCleared, topicId]);

  return (
    <div className="max-w-2xl mx-auto py-6 animate-fade-in-up">
      <Card glow>
        <div className="p-8 text-center space-y-5">
          <div className="text-7xl">{passed ? "🏆" : "💀"}</div>
          <h2 className="font-display font-extrabold text-3xl">
            {passed ? "BOSS DEFEATED" : "CHƯA QUA"}
          </h2>
          <p className="text-ink-500">{topicTitle}</p>

          <div className="space-y-2">
            <ProgressBar
              value={accuracy}
              color={passed ? "correct" : "wrong"}
              size="lg"
            />
            <div className="text-sm text-ink-500">
              {stats.correct} / {stats.totalQuestions} đúng ·{" "}
              <span className="font-bold">{Math.round(accuracy * 100)}%</span>
              {passed ? (
                <span className="text-correct ml-2">≥ 80% ✓</span>
              ) : (
                <span className="text-wrong ml-2">cần ≥ 80%</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-sm">
            <Stat label="Combo cao" value={`x${stats.bestCombo}`} />
            <Stat label="XP" value={`+${formatNumber(stats.xpEarned)}`} />
            <Stat label="Thời gian" value={formatDuration(stats.durationSec)} />
          </div>

          {passed && (
            <div className="p-3 rounded-xl bg-correct/10 text-correct text-sm">
              🎉 Đã unlock badge Boss cho chủ đề này! Tiếp tục chinh phục chủ đề tiếp theo nhé.
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <Button variant="secondary" icon="refresh" onClick={onRetry}>
              Đánh lại Boss
            </Button>
            <Button icon="map" onClick={() => navigate("/")}>
              Về bản đồ
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="px-3 py-2 rounded-xl bg-ink-100 dark:bg-ink-800">
    <div className="text-xs text-ink-500">{label}</div>
    <div className="font-display font-bold text-lg mt-0.5">{value}</div>
  </div>
);
