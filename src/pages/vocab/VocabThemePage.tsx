import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ENTRIES_BY_ID,
  THEMES_BY_ID,
  getWordIdsByTheme,
} from "@/data/vocab/loader";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { computePoolStats } from "@/lib/vocab/scheduler";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { statusEmoji, statusLabel } from "@/lib/vocab/srs";
import { prettyPos } from "@/data/vocab/types";
import { cn } from "@/lib/format";

export const VocabThemePage = () => {
  const { themeId = "" } = useParams();
  const navigate = useNavigate();
  const theme = THEMES_BY_ID[themeId];
  const wordIds = getWordIdsByTheme(themeId);
  const byWord = useVocabSrsStore((s) => s.byWord);
  const getState = useVocabSrsStore((s) => s.getState);

  const stats = useMemo(() => {
    void byWord;
    return computePoolStats(wordIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIds, byWord]);

  if (!theme) {
    return (
      <div className="text-center py-12">
        <p className="text-ink-500">Chủ đề không tồn tại.</p>
        <Link to="/vocab" className="text-quest-500 underline mt-2 inline-block">
          ← Về Vocab Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div>
        <Link to="/vocab" className="text-sm text-ink-500 hover:text-quest-500">
          ← Vocab Hub
        </Link>
        <h1 className="font-display font-bold text-3xl mt-1 flex items-center gap-2">
          <span>{theme.emoji}</span>
          {theme.label}
        </h1>
        <p className="text-ink-500 mt-1">{wordIds.length} từ trong chủ đề này.</p>
      </div>

      <Card>
        <div className="p-5 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <Stat label="💎 Đã thuộc"    value={stats.mastered} />
            <Stat label="🔁 Đang ôn"      value={stats.review} />
            <Stat label="🌱 Đang học"     value={stats.learning} />
            <Stat label="🆕 Chưa học"     value={stats.new} />
          </div>
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-quest-600 dark:text-quest-300 font-semibold">
                Tiến độ: {Math.round(stats.pctProgress * 100)}%
              </span>
              <span className="text-ink-500">
                {stats.touched}/{stats.total} đã học · {Math.round(stats.pctMastered * 100)}% 💎
              </span>
            </div>
            <ProgressBar value={stats.pctProgress} color="quest" size="lg" />
            {stats.mastered > 0 && (
              <div className="mt-1.5">
                <ProgressBar value={stats.pctMastered} color="mastery" size="sm" />
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              icon="play_arrow"
              onClick={() => navigate(`/vocab/study/theme/${theme.id}`)}
              disabled={wordIds.length === 0}
            >
              Học chủ đề này
              {stats.due > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 rounded bg-xp text-ink-950 text-xs font-bold">
                  {stats.due} cần ôn
                </span>
              )}
            </Button>
            <span className="text-xs text-ink-400">
              Phím tắt: Space = lật · 1/2/3/4 = Sai/Khó/Vừa/Dễ
            </span>
          </div>
        </div>
      </Card>

      {wordIds.length === 0 ? (
        <Card>
          <div className="p-8 text-center text-ink-400">
            Chủ đề chưa có từ — chờ script categorize hoàn tất.
          </div>
        </Card>
      ) : (
        <Card>
          <ul className="divide-y divide-ink-200 dark:divide-ink-800">
            {wordIds.map((id) => {
              const e = ENTRIES_BY_ID[id];
              const st = getState(id);
              if (!e) return null;
              return (
                <li key={id}>
                  <Link
                    to={`/vocab/word/${id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-ink-100 dark:hover:bg-ink-800/60"
                  >
                    <span className="text-xl shrink-0" title={statusLabel(st.status)}>
                      {statusEmoji(st.status)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-quest-600 dark:text-quest-200">
                          {e.word}
                        </span>
                        <span className="text-xs italic text-ink-400">
                          {prettyPos(e.pos)}
                        </span>
                      </div>
                      <div className="text-sm text-ink-600 dark:text-ink-300 truncate">
                        {e.vi}
                      </div>
                    </div>
                    {st.status !== "new" && (
                      <span
                        className={cn(
                          "text-xs tabular-nums",
                          st.dueAt <= Date.now() ? "text-streak font-bold" : "text-ink-500",
                        )}
                        title={`Ôn lại: ${new Date(st.dueAt).toLocaleString("vi-VN")}`}
                      >
                        {st.intervalDays > 0 ? `${st.intervalDays}d` : "~"}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Card>
      )}
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: number }) => (
  <div className="px-2.5 py-1.5 rounded-lg bg-ink-100 dark:bg-ink-800">
    <div className="text-xs text-ink-500">{label}</div>
    <div className="font-display font-bold text-lg">{value}</div>
  </div>
);
