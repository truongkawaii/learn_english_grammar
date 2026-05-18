import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ALL_WORD_IDS,
  THEMES,
  getWordIdsByTheme,
  isCategorized,
  ENTRIES_BY_ID,
} from "@/data/vocab/loader";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { useVocabStore } from "@/store/vocabStore";
import { countDue, computePoolStats } from "@/lib/vocab/scheduler";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DailyGoalRing } from "@/components/vocab/DailyGoalRing";
import { ThemeCard } from "@/components/vocab/ThemeCard";
import { cn, formatNumber } from "@/lib/format";

type Tab = "today" | "themes" | "saved" | "search";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "today",  label: "Hôm nay",     icon: "today" },
  { id: "themes", label: "Chủ đề",      icon: "category" },
  { id: "saved",  label: "Sổ từ riêng", icon: "bookmark" },
  { id: "search", label: "Tìm",         icon: "search" },
];

export const VocabHubPage = () => {
  const [tab, setTab] = useState<Tab>("today");
  const [query, setQuery] = useState("");
  const byWord = useVocabSrsStore((s) => s.byWord);

  const overallStats = useMemo(() => {
    void byWord;
    return computePoolStats(ALL_WORD_IDS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [byWord]);

  const dueCount = useMemo(() => {
    void byWord;
    return countDue(ALL_WORD_IDS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [byWord]);

  const themesWithIds = useMemo(
    () => THEMES.map((t) => ({ theme: t, wordIds: getWordIdsByTheme(t.id) })),
    [],
  );

  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display font-bold text-3xl">📚 Từ vựng TOEIC</h1>
        <p className="text-ink-500 mt-1">
          {formatNumber(ALL_WORD_IDS.length)} từ · 15 chủ đề · Spaced Repetition tự động.
          {!isCategorized() && (
            <span className="ml-2 text-xs text-streak">
              ⚙️ Đang chờ phân loại chủ đề (script đang chạy)…
            </span>
          )}
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 border-b border-ink-200 dark:border-ink-800 overflow-x-auto no-scrollbar">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "px-4 py-2 inline-flex items-center gap-1.5 text-sm font-medium border-b-2 -mb-px transition whitespace-nowrap",
              tab === t.id
                ? "border-quest-500 text-quest-600 dark:text-quest-200"
                : "border-transparent text-ink-500 hover:text-ink-700 dark:hover:text-ink-200",
            )}
          >
            <span className="material-symbols-rounded text-[1.1em]">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "today" && (
        <div className="space-y-4">
          <Card glow>
            <div className="p-5">
              <DailyGoalRing byWord={byWord} />
              <div className="mt-5 grid sm:grid-cols-2 gap-2">
                <Link to="/vocab/study">
                  <Button fullWidth icon="play_arrow" size="lg">
                    Bắt đầu học · {dueCount > 0 ? `${dueCount} cần ôn` : "Mix mới + ôn"}
                  </Button>
                </Link>
                <Button
                  fullWidth
                  variant="secondary"
                  icon="auto_awesome"
                  onClick={() => setTab("themes")}
                >
                  Chọn chủ đề
                </Button>
              </div>
            </div>
          </Card>

          {/* Overall stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatBox icon="diamond" label="Đã thuộc" value={overallStats.mastered} color="text-mastery" />
            <StatBox icon="autorenew" label="Đang ôn" value={overallStats.review} color="text-quest-500" />
            <StatBox icon="grass" label="Đang học" value={overallStats.learning} color="text-correct" />
            <StatBox icon="new_releases" label="Chưa học" value={overallStats.new} color="text-ink-500" />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-quest-600 dark:text-quest-300 font-semibold">
                Tiến độ tổng: {Math.round(overallStats.pctProgress * 100)}%
              </span>
              <span className="text-ink-500">
                {overallStats.touched}/{overallStats.total} đã học · {Math.round(overallStats.pctMastered * 100)}% 💎
              </span>
            </div>
            <ProgressBar value={overallStats.pctProgress} color="quest" />
            {overallStats.mastered > 0 && (
              <ProgressBar value={overallStats.pctMastered} color="mastery" size="sm" />
            )}
          </div>
        </div>
      )}

      {tab === "themes" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {themesWithIds.map(({ theme, wordIds }) => (
            <ThemeCard key={theme.id} theme={theme} wordIds={wordIds} />
          ))}
        </div>
      )}

      {tab === "saved" && <SavedTab />}

      {tab === "search" && (
        <SearchTab query={query} onQueryChange={setQuery} />
      )}
    </div>
  );
};

// ----------------------------------------------------------------------------

const StatBox = ({
  icon, label, value, color,
}: { icon: string; label: string; value: number; color?: string }) => (
  <Card>
    <div className="p-3">
      <div className="text-xs text-ink-500 flex items-center gap-1">
        <span className={cn("material-symbols-rounded text-[1.1em]", color)}>{icon}</span>
        {label}
      </div>
      <div className="font-display font-bold text-2xl mt-0.5">{formatNumber(value)}</div>
    </div>
  </Card>
);

const SavedTab = () => {
  const items = useVocabStore((s) => s.items);
  if (items.length === 0) {
    return (
      <Card>
        <div className="p-10 text-center space-y-2">
          <div className="text-5xl">📒</div>
          <p className="text-ink-500">
            Bôi đen từ trong lý thuyết / câu hỏi → ⭐ để lưu vào sổ riêng.
          </p>
        </div>
      </Card>
    );
  }
  return (
    <div className="space-y-2">
      <p className="text-sm text-ink-500">
        {items.length} từ đã lưu từ auto-translate
      </p>
      <Card>
        <ul className="divide-y divide-ink-200 dark:divide-ink-800">
          {items.map((it) => (
            <li key={it.id} className="p-3 flex items-baseline gap-3">
              <div className="font-semibold text-quest-600 dark:text-quest-200 shrink-0">
                {it.text}
              </div>
              {it.partOfSpeech && (
                <span className="text-xs italic text-ink-400">{it.partOfSpeech}</span>
              )}
              <span className="text-sm text-ink-600 dark:text-ink-300">{it.vi}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

const SearchTab = ({
  query, onQueryChange,
}: { query: string; onQueryChange: (v: string) => void }) => {
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const matches = [];
    for (const id of ALL_WORD_IDS) {
      const e = ENTRIES_BY_ID[id];
      if (!e) continue;
      if (
        e.word.toLowerCase().includes(q) ||
        e.vi.toLowerCase().includes(q) ||
        e.en?.toLowerCase().includes(q)
      ) {
        matches.push(e);
        if (matches.length >= 50) break;
      }
    }
    return matches;
  }, [query]);

  return (
    <div className="space-y-3">
      <div className="relative">
        <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-ink-400">
          search
        </span>
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Tìm từ tiếng Anh / nghĩa Việt…"
          className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 outline-none focus:border-quest-500"
          autoFocus
        />
      </div>
      {query.trim().length < 2 ? (
        <div className="text-center text-ink-400 py-8">
          Gõ ít nhất 2 ký tự để tìm.
        </div>
      ) : results.length === 0 ? (
        <div className="text-center text-ink-400 py-8">
          Không có từ nào khớp "{query}".
        </div>
      ) : (
        <Card>
          <ul className="divide-y divide-ink-200 dark:divide-ink-800">
            {results.map((e) => (
              <li key={e.id}>
                <Link
                  to={`/vocab/word/${e.id}`}
                  className="flex items-baseline gap-3 px-4 py-2.5 hover:bg-ink-100 dark:hover:bg-ink-800"
                >
                  <div className="font-semibold text-quest-600 dark:text-quest-200 shrink-0">
                    {e.word}
                  </div>
                  <span className="text-xs italic text-ink-400 shrink-0">{e.pos}</span>
                  <span className="text-sm text-ink-600 dark:text-ink-300 truncate">
                    {e.vi}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};
