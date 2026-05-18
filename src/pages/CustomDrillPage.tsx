import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuestionRunner, type RunnerMode } from "@/components/practice/QuestionRunner";
import {
  getAllTagsWithCounts,
  getCustomDrillQuestions,
  type CustomDrillOptions,
} from "@/lib/practiceSources";
import { cn } from "@/lib/format";

type Stage = "configure" | "running";

const DEFAULT_OPTS: CustomDrillOptions = {
  tags: [],
  matchMode: "any",
  difficulties: [],
  types: [],
  count: 15,
};

const TYPE_LABEL: Record<"mcq" | "fill" | "wordOrder", string> = {
  mcq: "Trắc nghiệm",
  fill: "Điền từ",
  wordOrder: "Xếp từ",
};

const DIFF_LABEL: Record<1 | 2 | 3, string> = { 1: "Dễ", 2: "Vừa", 3: "Khó" };

export const CustomDrillPage = () => {
  const [stage, setStage] = useState<Stage>("configure");
  const [opts, setOpts] = useState<CustomDrillOptions>(DEFAULT_OPTS);
  const [tagFilter, setTagFilter] = useState("");
  const [seed, setSeed] = useState(0);

  const tagsWithCounts = useMemo(() => getAllTagsWithCounts(), []);
  const filteredTags = useMemo(
    () =>
      tagFilter.trim()
        ? tagsWithCounts.filter((t) =>
            t.tag.toLowerCase().includes(tagFilter.toLowerCase()),
          )
        : tagsWithCounts,
    [tagsWithCounts, tagFilter],
  );

  // Preview count: how many questions match the current filters?
  const previewQuestions = useMemo(
    () => getCustomDrillQuestions({ ...opts, count: 9999 }),
    [opts],
  );

  const questions = useMemo(
    () => getCustomDrillQuestions(opts),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed, opts.count, opts.matchMode, opts.tags.join(","), opts.difficulties.join(","), (opts.types ?? []).join(",")],
  );

  const toggleTag = (tag: string) => {
    setOpts((o) => ({
      ...o,
      tags: o.tags.includes(tag) ? o.tags.filter((t) => t !== tag) : [...o.tags, tag],
    }));
  };

  const toggleDiff = (d: 1 | 2 | 3) => {
    setOpts((o) => ({
      ...o,
      difficulties: o.difficulties.includes(d)
        ? o.difficulties.filter((x) => x !== d)
        : [...o.difficulties, d],
    }));
  };

  const toggleType = (t: "mcq" | "fill" | "wordOrder") => {
    setOpts((o) => {
      const cur = o.types ?? [];
      return {
        ...o,
        types: cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t],
      };
    });
  };

  const start = () => {
    if (questions.length === 0) return;
    setStage("running");
  };

  const reconfigure = () => {
    setStage("configure");
    setSeed((s) => s + 1);
  };

  const mode: RunnerMode = {
    id: "practice",
    allowViewAnswer: true,
    allowRetryQuestion: true,
    revealAfterEachSubmit: true,
    introBanner: (
      <div className="rounded-xl px-4 py-3 bg-quest-50 dark:bg-quest-900/20 border border-quest-200 dark:border-quest-800 text-sm flex items-center gap-3">
        <span className="text-3xl">🎯</span>
        <div className="flex-1">
          <div className="font-display font-bold text-quest-600 dark:text-quest-300">
            Custom Drill
          </div>
          <div className="text-ink-500 dark:text-ink-300">
            {opts.tags.length > 0
              ? `${opts.tags.length} tag · ${opts.matchMode === "all" ? "phải có tất cả" : "có bất kỳ"}`
              : "Tất cả tag"}{" "}
            · {questions.length} câu
          </div>
        </div>
      </div>
    ),
  };

  if (stage === "running") {
    return (
      <div className="max-w-3xl mx-auto space-y-2">
        <div className="flex items-center justify-between">
          <button
            onClick={reconfigure}
            className="text-sm text-ink-500 hover:text-quest-500 inline-flex items-center gap-1"
          >
            <span className="material-symbols-rounded text-[1.1em]">tune</span>
            Đổi bộ lọc
          </button>
        </div>
        <QuestionRunner
          key={seed}
          topicId="custom"
          topicTitle="Custom Drill"
          questions={questions}
          mode={mode}
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div>
        <Link to="/practice" className="text-sm text-ink-500 hover:text-quest-500">
          ← Luyện tập
        </Link>
        <h1 className="font-display font-bold text-3xl mt-1">🎯 Custom Drill</h1>
        <p className="text-ink-500 mt-1">
          Tự thiết kế bộ ôn theo tag · độ khó · dạng bài.
        </p>
      </div>

      {/* Tags */}
      <Card>
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="font-display font-bold text-lg">
              Tags
              {opts.tags.length > 0 && (
                <span className="ml-2 text-xs text-ink-500 font-normal">
                  ({opts.tags.length} đã chọn)
                </span>
              )}
            </h2>
            <div className="flex items-center gap-2">
              <input
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value)}
                placeholder="Tìm tag…"
                className="px-3 py-1.5 rounded-lg bg-ink-100 dark:bg-ink-800 text-sm outline-none focus:ring-2 focus:ring-quest-500"
              />
              {opts.tags.length > 0 && (
                <button
                  onClick={() => setOpts((o) => ({ ...o, tags: [] }))}
                  className="text-xs text-wrong hover:underline"
                >
                  Xoá tất cả
                </button>
              )}
            </div>
          </div>

          {opts.tags.length > 1 && (
            <div className="flex items-center gap-3 text-sm">
              <span className="text-ink-500">Chế độ khớp:</span>
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  checked={opts.matchMode === "any"}
                  onChange={() => setOpts((o) => ({ ...o, matchMode: "any" }))}
                  className="accent-quest-500"
                />
                Có bất kỳ tag
              </label>
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  checked={opts.matchMode === "all"}
                  onChange={() => setOpts((o) => ({ ...o, matchMode: "all" }))}
                  className="accent-quest-500"
                />
                Phải có tất cả tag
              </label>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 max-h-72 overflow-y-auto">
            {filteredTags.length === 0 ? (
              <div className="text-sm text-ink-400 italic">Không tag nào khớp.</div>
            ) : (
              filteredTags.map(({ tag, count }) => {
                const selected = opts.tags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={cn(
                      "px-2.5 py-1 rounded-lg text-xs font-medium border-2 transition",
                      selected
                        ? "bg-quest-500 border-quest-500 text-white"
                        : "bg-white dark:bg-ink-900 border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 hover:border-quest-400",
                    )}
                  >
                    {tag}
                    <span className={cn("ml-1 text-[10px]", selected ? "text-white/70" : "text-ink-400")}>
                      ({count})
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      </Card>

      {/* Difficulty + Type */}
      <Card>
        <div className="p-5 space-y-4">
          <div>
            <h2 className="font-display font-bold text-lg mb-2">Độ khó</h2>
            <div className="flex flex-wrap gap-2">
              {([1, 2, 3] as const).map((d) => {
                const selected = opts.difficulties.includes(d);
                return (
                  <button
                    key={d}
                    onClick={() => toggleDiff(d)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium border-2 transition",
                      selected
                        ? "bg-quest-500 border-quest-500 text-white"
                        : "bg-white dark:bg-ink-900 border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 hover:border-quest-400",
                    )}
                  >
                    {"★".repeat(d)} {DIFF_LABEL[d]}
                  </button>
                );
              })}
            </div>
            <div className="text-xs text-ink-400 mt-1">
              {opts.difficulties.length === 0 ? "Không chọn = tất cả độ khó." : null}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg mb-2">Dạng bài</h2>
            <div className="flex flex-wrap gap-2">
              {(["mcq", "fill", "wordOrder"] as const).map((t) => {
                const selected = (opts.types ?? []).includes(t);
                return (
                  <button
                    key={t}
                    onClick={() => toggleType(t)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium border-2 transition",
                      selected
                        ? "bg-quest-500 border-quest-500 text-white"
                        : "bg-white dark:bg-ink-900 border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 hover:border-quest-400",
                    )}
                  >
                    {TYPE_LABEL[t]}
                  </button>
                );
              })}
            </div>
            <div className="text-xs text-ink-400 mt-1">
              {(opts.types ?? []).length === 0 ? "Không chọn = tất cả dạng." : null}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg mb-2">Số câu</h2>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={5}
                max={50}
                step={5}
                value={opts.count}
                onChange={(e) => setOpts((o) => ({ ...o, count: Number(e.target.value) }))}
                className="flex-1 accent-quest-500"
              />
              <span className="font-display font-bold text-2xl w-12 text-right tabular-nums">
                {opts.count}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Preview + start */}
      <Card glow>
        <div className="p-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-sm text-ink-500">
              Có{" "}
              <span className="font-bold text-quest-600 dark:text-quest-300">
                {previewQuestions.length}
              </span>{" "}
              câu khớp bộ lọc · lấy ngẫu nhiên{" "}
              <span className="font-bold">{Math.min(opts.count, previewQuestions.length)}</span> câu.
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => setOpts(DEFAULT_OPTS)}
              icon="refresh"
            >
              Reset
            </Button>
            <Button
              icon="play_arrow"
              onClick={start}
              disabled={previewQuestions.length === 0}
            >
              Bắt đầu
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
