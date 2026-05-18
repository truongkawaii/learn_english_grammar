import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { QuestionRunner, type RunnerMode, type SessionStats, type SessionResult } from "@/components/practice/QuestionRunner";
import { getMockToeicQuestions } from "@/lib/practiceSources";
import { predictToeicPart5Band } from "@/lib/xp";
import { formatDuration, formatNumber, cn } from "@/lib/format";
import { renderInline } from "@/components/practice/renderInline";

const MOCK_QUESTION_COUNT = 40;
const MOCK_TIME_LIMIT_SEC = 25 * 60;

export const MockToeicPage = () => {
  const [seed, setSeed] = useState(0);
  const [started, setStarted] = useState(false);
  const questions = useMemo(
    () => getMockToeicQuestions(MOCK_QUESTION_COUNT),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed],
  );

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <Card>
          <div className="p-8 text-center space-y-3">
            <div className="text-6xl">🚧</div>
            <h2 className="font-display font-bold text-xl">
              Chưa đủ câu MCQ để tổ chức Mock TOEIC
            </h2>
            <p className="text-ink-500">
              Soạn thêm câu hỏi MCQ qua <code>/admin/generate</code> rồi quay lại.
            </p>
            <Link to="/">
              <Button>Về bản đồ</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // Intro screen — confirm before starting clock
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto py-6">
        <Card glow>
          <div className="p-8 space-y-4 text-center">
            <div className="text-6xl">📝</div>
            <h1 className="font-display font-extrabold text-3xl">Mock TOEIC Part 5</h1>
            <p className="text-ink-500">
              Mô phỏng trải nghiệm thi thật: <strong>{questions.length} câu MCQ</strong>,
              giới hạn <strong>{Math.round(MOCK_TIME_LIMIT_SEC / 60)} phút</strong>,
              không xem đáp án hay giải thích trong lúc làm. Cuối bài sẽ có review chi tiết và dự đoán band điểm.
            </p>
            <ul className="text-left text-sm text-ink-500 space-y-1 max-w-md mx-auto">
              <li>⏰ Đồng hồ chạy ngay khi bấm Bắt đầu, không pause được.</li>
              <li>⛔ Không có "Xem đáp án", không "Làm lại câu này".</li>
              <li>💯 Hết giờ tự nộp bài, vẫn được tính điểm phần đã làm.</li>
              <li>📈 Sau khi nộp: band điểm dự đoán (200–495) + review từng câu.</li>
            </ul>
            <div className="flex justify-center gap-2 pt-2">
              <Link to="/practice">
                <Button variant="secondary">Để lúc khác</Button>
              </Link>
              <Button icon="play_arrow" onClick={() => setStarted(true)}>
                Bắt đầu thi
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  const mode: RunnerMode = {
    id: "mock",
    allowViewAnswer: false,
    allowRetryQuestion: false,
    revealAfterEachSubmit: false,
    timeLimitSec: MOCK_TIME_LIMIT_SEC,
    introBanner: (
      <div className="rounded-xl px-4 py-3 bg-wrong/10 border border-wrong/30 text-sm flex items-center gap-3">
        <span className="text-2xl">📝</span>
        <div className="flex-1">
          <div className="font-display font-bold text-wrong">Mock TOEIC Part 5</div>
          <div className="text-ink-500 dark:text-ink-300">
            Không xem đáp án giữa chừng · Tự nộp khi hết giờ.
          </div>
        </div>
      </div>
    ),
    renderSummary: (stats) => (
      <MockReview
        stats={stats}
        onRetry={() => {
          stats.restart();
          setStarted(false);
          setSeed((s) => s + 1);
        }}
      />
    ),
  };

  return (
    <div className="max-w-3xl mx-auto space-y-2">
      <div>
        <h1 className="font-display font-bold text-2xl">📝 Mock TOEIC Part 5</h1>
      </div>
      <QuestionRunner
        key={seed}
        topicId="mock"
        topicTitle="Mock TOEIC Part 5"
        questions={questions}
        mode={mode}
      />
    </div>
  );
};

// ----------------------------------------------------------------------------
// Mock review screen — full breakdown + predicted band
// ----------------------------------------------------------------------------

const MockReview = ({
  stats,
  onRetry,
}: {
  stats: SessionStats;
  onRetry: () => void;
}) => {
  const navigate = useNavigate();
  const accuracy = stats.totalQuestions > 0 ? stats.correct / stats.totalQuestions : 0;
  const predictedBand = predictToeicPart5Band(accuracy);
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpenSet((s) => {
      const n = new Set(s);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });

  return (
    <div className="space-y-4 animate-fade-in-up">
      <Card glow>
        <div className="p-6 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-quest-500 font-bold">
            Band điểm dự đoán Part 5
          </div>
          <div className="font-display font-extrabold text-6xl bg-gradient-to-br from-quest-500 to-mastery bg-clip-text text-transparent leading-none">
            {predictedBand}
          </div>
          <ProgressBar value={accuracy} color="quest" size="lg" />
          <div className="text-sm text-ink-500">
            {stats.correct} / {stats.totalQuestions} đúng ·{" "}
            <span className="font-bold">{Math.round(accuracy * 100)}%</span> · ⏱️{" "}
            {formatDuration(stats.durationSec)} · +{formatNumber(stats.xpEarned)} XP
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <Button variant="secondary" icon="refresh" onClick={onRetry}>
              Thi lại
            </Button>
            <Button icon="map" onClick={() => navigate("/")}>
              Về bản đồ
            </Button>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <h2 className="font-display font-bold text-lg">Review từng câu</h2>
        {stats.results.map((r, i) => (
          <MockReviewRow
            key={i}
            index={i}
            result={r}
            expanded={openSet.has(i)}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
};

const MockReviewRow = ({
  index,
  result,
  expanded,
  onToggle,
}: {
  index: number;
  result: SessionResult;
  expanded: boolean;
  onToggle: () => void;
}) => {
  const q = result.question;
  const isMcq = q.type === "mcq";
  return (
    <Card>
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center gap-3 text-left"
      >
        <span className="font-mono text-sm text-ink-400 w-7 text-right shrink-0">
          {index + 1}.
        </span>
        <span
          className={cn(
            "material-symbols-rounded",
            result.isCorrect ? "text-correct" : "text-wrong",
          )}
        >
          {result.isCorrect ? "check_circle" : "cancel"}
        </span>
        <div className="flex-1 min-w-0 text-sm truncate">
          {isMcq ? renderInline(q.sentence) : q.prompt}
        </div>
        <span className="material-symbols-rounded text-ink-400">
          {expanded ? "expand_less" : "expand_more"}
        </span>
      </button>
      {expanded && (
        <div className="px-4 pb-4 -mt-1 space-y-2 text-sm border-t border-ink-200 dark:border-ink-800 pt-3" data-translatable="true">
          {isMcq && (
            <p className="text-base font-medium">{renderInline(q.sentence)}</p>
          )}
          <div>
            <span className="text-ink-500">Đáp án bạn:</span>{" "}
            <span className={result.isCorrect ? "text-correct" : "text-wrong"}>
              {result.userAnswerDisplay || <em className="text-ink-400">(trống)</em>}
            </span>
          </div>
          {!result.isCorrect && isMcq && (
            <div>
              <span className="text-ink-500">Đáp án đúng:</span>{" "}
              <span className="text-correct font-medium">
                {q.options[q.answerIndex]}
              </span>
            </div>
          )}
          <div className="text-ink-500 italic pt-1">
            {renderInline(q.explanationVi)}
          </div>
        </div>
      )}
    </Card>
  );
};
