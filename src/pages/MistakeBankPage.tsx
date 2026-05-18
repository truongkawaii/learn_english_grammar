import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuestionRunner, type RunnerMode } from "@/components/practice/QuestionRunner";
import { getMistakeQuestions, getSrsDueQuestions } from "@/lib/practiceSources";
import { useProgressStore } from "@/store/progressStore";

type FilterMode = "due" | "all";

export const MistakeBankPage = () => {
  const [filter, setFilter] = useState<FilterMode>("due");
  const [sessionKey, setSessionKey] = useState(0);
  // Subscribe to progress so list updates after answering
  const progress = useProgressStore((s) => s.questionProgress);

  const questions = useMemo(() => {
    void progress; // dependency for memo
    return filter === "due" ? getSrsDueQuestions() : getMistakeQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, progress, sessionKey]);

  const dueCount = useMemo(() => {
    void progress;
    return getSrsDueQuestions().length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const mistakeCount = useMemo(() => {
    void progress;
    return getMistakeQuestions().length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const mode: RunnerMode = {
    id: "mistakes",
    allowViewAnswer: true,
    allowRetryQuestion: true,
    revealAfterEachSubmit: true,
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div>
        <Link to="/practice" className="text-sm text-ink-500 hover:text-quest-500">
          ← Luyện tập
        </Link>
        <h1 className="font-display font-bold text-3xl mt-1">
          📌 Câu cần ôn
        </h1>
        <p className="text-ink-500 mt-1">
          Hệ thống Spaced Repetition lập lịch ôn lại theo box Leitner 1d / 3d / 7d / 14d / 30d.
        </p>
      </div>

      <div className="flex gap-2">
        <FilterBtn
          active={filter === "due"}
          onClick={() => setFilter("due")}
          label={`SRS hôm nay (${dueCount})`}
          icon="schedule"
        />
        <FilterBtn
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={`Tất cả câu sai (${mistakeCount})`}
          icon="error"
        />
      </div>

      {questions.length === 0 ? (
        <Card>
          <div className="p-10 text-center space-y-3">
            <div className="text-6xl">{filter === "due" ? "🌤️" : "🎯"}</div>
            <h2 className="font-display font-bold text-xl">
              {filter === "due"
                ? "Không có câu nào cần ôn hôm nay!"
                : "Chưa có câu sai nào"}
            </h2>
            <p className="text-ink-500">
              {filter === "due"
                ? "Đẹp lắm — quay lại sau hoặc luyện thêm chủ đề mới."
                : "Sai một vài câu để tạo Mistake Bank, hoặc thử SRS hôm nay."}
            </p>
            <Link to="/">
              <Button icon="map">Về bản đồ</Button>
            </Link>
          </div>
        </Card>
      ) : (
        <QuestionRunner
          key={`${filter}-${sessionKey}`}
          topicId={questions[0]?.topicId ?? "mistakes"}
          topicTitle={filter === "due" ? "SRS hôm nay" : "Mistake Bank"}
          questions={questions}
          mode={mode}
        />
      )}
    </div>
  );
};

const FilterBtn = ({
  active, onClick, label, icon,
}: { active: boolean; onClick: () => void; label: string; icon: string }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
      active
        ? "bg-quest-500 border-quest-500 text-white"
        : "border-ink-200 dark:border-ink-700 hover:border-quest-400"
    }`}
  >
    <span className="material-symbols-rounded text-[1.1em]">{icon}</span>
    {label}
  </button>
);
