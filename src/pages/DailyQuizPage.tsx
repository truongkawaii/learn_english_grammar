import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuestionRunner, type RunnerMode } from "@/components/practice/QuestionRunner";
import { getDailyQuizQuestions } from "@/lib/practiceSources";

const DEFAULT_COUNT = 10;

export const DailyQuizPage = () => {
  const [seed, setSeed] = useState(0);
  const questions = useMemo(
    () => getDailyQuizQuestions(DEFAULT_COUNT),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed],
  );

  const mode: RunnerMode = {
    id: "daily",
    allowViewAnswer: true,
    allowRetryQuestion: true,
    revealAfterEachSubmit: true,
    introBanner: (
      <div className="rounded-xl px-4 py-3 bg-quest-50 dark:bg-quest-900/20 border border-quest-200 dark:border-quest-800 text-sm flex items-center gap-3">
        <span className="text-3xl">🎲</span>
        <div className="flex-1">
          <div className="font-display font-bold text-quest-600 dark:text-quest-300">
            Daily Quiz
          </div>
          <div className="text-ink-500 dark:text-ink-300">
            10 câu random từ các chủ đề đã đụng tới — warm up đầu ngày.
          </div>
        </div>
      </div>
    ),
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <Card>
          <div className="p-8 text-center space-y-3">
            <div className="text-6xl">🚧</div>
            <h2 className="font-display font-bold text-xl">Chưa có câu nào</h2>
            <p className="text-ink-500">
              Hãy học và làm 1-2 câu trong các chủ đề trước, sau đó quay lại Daily Quiz.
            </p>
            <Link to="/">
              <Button icon="map">Về bản đồ</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-2">
      <div>
        <Link to="/practice" className="text-sm text-ink-500 hover:text-quest-500">
          ← Luyện tập
        </Link>
        <h1 className="font-display font-bold text-2xl mt-1">🎲 Daily Quiz</h1>
      </div>
      <QuestionRunner
        key={seed}
        topicId="daily"
        topicTitle="Daily Quiz"
        questions={questions}
        mode={mode}
      />
      <div className="text-xs text-ink-400 text-center pt-4">
        Làm xong → bấm nút "Làm lại" trong summary, hệ thống sẽ shuffle bộ mới.
      </div>
    </div>
  );
};
