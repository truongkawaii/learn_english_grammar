import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Attempt, QuestionType } from "@/types";
import { useAttemptsStore } from "@/store/attemptsStore";
import { TOPICS, getTopicById } from "@/data/topics";
import { getQuestionsByTopic } from "@/data/questions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { renderInline } from "@/components/practice/renderInline";
import { cn, formatDuration, formatNumber } from "@/lib/format";

type CorrectFilter = "all" | "correct" | "wrong";
type DateFilter = "today" | "week" | "month" | "all";

const TYPE_LABEL: Record<QuestionType, string> = {
  mcq: "Trắc nghiệm",
  fill: "Điền từ",
  wordOrder: "Xếp câu",
  transform: "Chuyển",
  errorSpot: "Tìm lỗi",
  cloze: "Đoạn văn",
};

const dateFilterFloor = (filter: DateFilter): number => {
  const now = Date.now();
  const DAY = 86_400_000;
  switch (filter) {
    case "today": {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    }
    case "week":  return now - 7 * DAY;
    case "month": return now - 30 * DAY;
    case "all":   return 0;
  }
};

export const HistoryPage = () => {
  const allAttempts = useAttemptsStore((s) => s.attempts);

  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<"all" | QuestionType>("all");
  const [correctFilter, setCorrectFilter] = useState<CorrectFilter>("all");
  const [dateFilter, setDateFilter] = useState<DateFilter>("all");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const floor = dateFilterFloor(dateFilter);
    return allAttempts.filter((a) => {
      if (a.timestamp < floor) return false;
      if (topicFilter !== "all" && a.topicId !== topicFilter) return false;
      if (typeFilter !== "all" && a.type !== typeFilter) return false;
      if (correctFilter === "correct" && !a.isCorrect) return false;
      if (correctFilter === "wrong" && a.isCorrect) return false;
      return true;
    });
  }, [allAttempts, topicFilter, typeFilter, correctFilter, dateFilter]);

  const stats = useMemo(() => {
    const total = filtered.length;
    const correct = filtered.filter((a) => a.isCorrect).length;
    const xp = filtered.reduce((s, a) => s + a.xpEarned, 0);
    const time = filtered.reduce((s, a) => s + a.durationMs, 0);
    return { total, correct, xp, time, accuracy: total > 0 ? correct / total : 0 };
  }, [filtered]);

  const topicIdsWithAttempts = useMemo(
    () => Array.from(new Set(allAttempts.map((a) => a.topicId))).sort(),
    [allAttempts],
  );

  const toggleExpand = (id: string) =>
    setExpanded((s) => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-bold text-3xl">Lịch sử làm bài</h1>
        <p className="text-ink-500 mt-1">
          Toàn bộ {formatNumber(allAttempts.length)} lượt đã ghi lại (giới hạn 5000 lượt gần nhất).
        </p>
      </div>

      {/* Filters */}
      <Card>
        <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <FilterSelect
            label="Chủ đề"
            value={topicFilter}
            onChange={setTopicFilter}
            options={[
              { value: "all", label: "Tất cả" },
              ...topicIdsWithAttempts.map((id) => {
                const t = getTopicById(id);
                return { value: id, label: `${id} · ${t?.title ?? id}` };
              }),
            ]}
          />
          <FilterSelect
            label="Dạng bài"
            value={typeFilter}
            onChange={(v) => setTypeFilter(v as "all" | QuestionType)}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "mcq", label: TYPE_LABEL.mcq },
              { value: "fill", label: TYPE_LABEL.fill },
              { value: "wordOrder", label: TYPE_LABEL.wordOrder },
            ]}
          />
          <FilterSelect
            label="Kết quả"
            value={correctFilter}
            onChange={(v) => setCorrectFilter(v as CorrectFilter)}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "correct", label: "Đúng" },
              { value: "wrong", label: "Sai" },
            ]}
          />
          <FilterSelect
            label="Thời gian"
            value={dateFilter}
            onChange={(v) => setDateFilter(v as DateFilter)}
            options={[
              { value: "today", label: "Hôm nay" },
              { value: "week", label: "7 ngày" },
              { value: "month", label: "30 ngày" },
              { value: "all", label: "Tất cả" },
            ]}
          />
        </div>
      </Card>

      {/* Stats summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatChip icon="checklist" label="Tổng" value={formatNumber(stats.total)} />
        <StatChip
          icon="check_circle"
          label="Đúng"
          value={`${formatNumber(stats.correct)} (${Math.round(stats.accuracy * 100)}%)`}
          color="text-correct"
        />
        <StatChip icon="bolt" label="XP" value={`+${formatNumber(stats.xp)}`} color="text-xp" />
        <StatChip icon="timer" label="Thời gian" value={formatDuration(Math.round(stats.time / 1000))} />
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <Card>
          <div className="p-8 text-center text-ink-400">
            Không có lượt nào khớp bộ lọc.
          </div>
        </Card>
      ) : (
        <div className="space-y-2">
          {filtered.map((a) => (
            <AttemptRow
              key={a.id}
              attempt={a}
              expanded={expanded.has(a.id)}
              onToggle={() => toggleExpand(a.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------------
// Subcomponents
// ----------------------------------------------------------------------------

const FilterSelect = <T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) => (
  <div>
    <label className="text-xs text-ink-500">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className="mt-1 w-full px-3 py-2 rounded-lg bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 outline-none focus:border-quest-500 text-sm"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);

const StatChip = ({
  icon, label, value, color,
}: { icon: string; label: string; value: string; color?: string }) => (
  <Card>
    <div className="px-3 py-2.5">
      <div className="text-xs text-ink-500 flex items-center gap-1">
        <span className={cn("material-symbols-rounded text-[1.1em]", color)}>{icon}</span>
        {label}
      </div>
      <div className="font-display font-bold text-lg mt-0.5">{value}</div>
    </div>
  </Card>
);

const AttemptRow = ({
  attempt,
  expanded,
  onToggle,
}: {
  attempt: Attempt;
  expanded: boolean;
  onToggle: () => void;
}) => {
  const t = getTopicById(attempt.topicId);
  const fullQ = useMemo(
    () => getQuestionsByTopic(attempt.topicId).find((q) => q.id === attempt.questionId),
    [attempt.questionId, attempt.topicId],
  );
  const d = new Date(attempt.timestamp);
  const dateLabel = d.toLocaleString("vi-VN", { hour12: false });

  // Reconstruct user answer display
  const userAnswerLabel = useMemo(() => {
    if (!fullQ) return attempt.userAnswer;
    if (fullQ.type === "mcq") {
      const idx = Number(attempt.userAnswer);
      return Number.isNaN(idx) ? attempt.userAnswer : fullQ.options[idx] ?? attempt.userAnswer;
    }
    return attempt.userAnswer;
  }, [fullQ, attempt]);

  const correctAnswerLabel = useMemo(() => {
    if (!fullQ) return "—";
    if (fullQ.type === "mcq") return fullQ.options[fullQ.answerIndex];
    if (fullQ.type === "fill") return fullQ.acceptedAnswers[0];
    if (fullQ.type === "wordOrder") return fullQ.answer;
    return "—";
  }, [fullQ]);

  return (
    <Card>
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center gap-3 text-left"
      >
        <span
          className={cn(
            "material-symbols-rounded text-2xl",
            attempt.isCorrect ? "text-correct" : "text-wrong",
          )}
        >
          {attempt.isCorrect ? "check_circle" : "cancel"}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium flex items-center gap-2 flex-wrap">
            <span className="text-quest-500 font-bold">{attempt.topicId}</span>
            {t && <span className="text-ink-500 dark:text-ink-300">· {t.title}</span>}
            <span className="px-1.5 py-0.5 text-xs rounded bg-ink-100 dark:bg-ink-800 text-ink-500">
              {TYPE_LABEL[attempt.type]}
            </span>
            {attempt.viewedAnswer && (
              <span className="px-1.5 py-0.5 text-xs rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-200">
                Đã xem ĐA
              </span>
            )}
            {attempt.isRetry && (
              <span className="px-1.5 py-0.5 text-xs rounded bg-ink-100 dark:bg-ink-800 text-ink-500">
                Làm lại
              </span>
            )}
          </div>
          <div className="text-xs text-ink-400 mt-0.5 truncate">
            {dateLabel} · {formatDuration(Math.round(attempt.durationMs / 1000))}
          </div>
        </div>
        <div className="text-xp font-bold text-sm shrink-0">+{attempt.xpEarned}</div>
        <span className="material-symbols-rounded text-ink-400">
          {expanded ? "expand_less" : "expand_more"}
        </span>
      </button>

      {expanded && (
        <div className="px-4 pb-4 -mt-1 space-y-2 text-sm border-t border-ink-200 dark:border-ink-800 pt-3" data-translatable="true">
          {fullQ ? (
            <>
              <div>
                <span className="text-ink-500">Câu hỏi:</span>{" "}
                {fullQ.type === "wordOrder" ? (
                  <span className="text-ink-400 italic">{fullQ.prompt}</span>
                ) : (
                  <span>{renderInline((fullQ as any).sentence ?? fullQ.prompt)}</span>
                )}
              </div>
              <div>
                <span className="text-ink-500">Đáp án bạn:</span>{" "}
                <span className={attempt.isCorrect ? "text-correct" : "text-wrong"}>
                  {userAnswerLabel || <em className="text-ink-400">(trống)</em>}
                </span>
              </div>
              {!attempt.isCorrect && (
                <div>
                  <span className="text-ink-500">Đáp án đúng:</span>{" "}
                  <span className="text-correct font-medium">{correctAnswerLabel}</span>
                </div>
              )}
              <div className="text-ink-500 italic pt-1">
                {renderInline(fullQ.explanationVi)}
              </div>
              <div className="pt-1">
                <Link
                  to={`/practice/${attempt.topicId}`}
                  className="text-quest-500 hover:underline text-sm inline-flex items-center gap-1"
                >
                  <span className="material-symbols-rounded text-[1.1em]">refresh</span>
                  Luyện lại chủ đề này
                </Link>
              </div>
            </>
          ) : (
            <div className="text-ink-400 italic">
              Câu hỏi gốc không còn trong ngân hàng (đã xoá hoặc đổi id).
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
