import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { useProgressStore } from "@/store/progressStore";
import { countDue } from "@/lib/vocab/scheduler";
import { ALL_WORD_IDS, THEMES, getWordIdsByTheme } from "@/data/vocab/loader";
import { countDueToday } from "@/lib/practiceSources";
import { cn, formatNumber } from "@/lib/format";

export const NotificationBell = () => {
  const byWord = useVocabSrsStore((s) => s.byWord);
  const grammarProgress = useProgressStore((s) => s.questionProgress);
  void grammarProgress;
  void byWord;

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Compute due counts across both modules
  const stats = useMemo(() => {
    const grammarDue = countDueToday();
    const vocabDue = countDue(ALL_WORD_IDS);
    const perTheme = THEMES.map((t) => ({
      ...t,
      due: countDue(getWordIdsByTheme(t.id)),
    })).filter((t) => t.due > 0);
    return { grammarDue, vocabDue, perTheme, total: grammarDue + vocabDue };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [byWord, grammarProgress]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "relative p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 transition",
          stats.total > 0 ? "text-streak" : "text-ink-500",
        )}
        title={`${stats.total} mục cần ôn`}
        aria-label="Thông báo"
      >
        <span className="material-symbols-rounded">
          {stats.total > 0 ? "notifications_active" : "notifications"}
        </span>
        {stats.total > 0 && (
          <span className="absolute -top-0.5 -right-0.5 px-1 min-w-[18px] h-[18px] rounded-full bg-wrong text-white text-[10px] font-bold flex items-center justify-center animate-pop-in">
            {stats.total > 99 ? "99+" : stats.total}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-72 max-h-[70vh] overflow-y-auto rounded-2xl border bg-white dark:bg-ink-900 border-ink-200 dark:border-ink-700 shadow-2xl z-30 animate-fade-in-up">
          <div className="px-4 py-3 border-b border-ink-200 dark:border-ink-800">
            <div className="font-display font-bold">Cần ôn</div>
            <div className="text-xs text-ink-500">
              Tổng: <span className="font-semibold">{formatNumber(stats.total)}</span> mục
            </div>
          </div>

          {stats.total === 0 ? (
            <div className="px-4 py-8 text-center space-y-2 text-ink-500">
              <div className="text-3xl">🌤️</div>
              <div className="text-sm">Không có gì cần ôn ngay. Quẩy chủ đề mới đi!</div>
            </div>
          ) : (
            <>
              {stats.grammarDue > 0 && (
                <Link
                  to="/practice/mistakes"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-ink-100 dark:hover:bg-ink-800 border-b border-ink-200 dark:border-ink-800"
                >
                  <span className="material-symbols-rounded text-quest-500 text-2xl">
                    fact_check
                  </span>
                  <div className="flex-1">
                    <div className="font-medium">Ngữ pháp · SRS</div>
                    <div className="text-xs text-ink-500">
                      {stats.grammarDue} câu cần ôn
                    </div>
                  </div>
                  <span className="material-symbols-rounded text-ink-400">arrow_forward</span>
                </Link>
              )}

              {stats.vocabDue > 0 && (
                <Link
                  to="/vocab/study"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-ink-100 dark:hover:bg-ink-800 border-b border-ink-200 dark:border-ink-800"
                >
                  <span className="material-symbols-rounded text-mastery text-2xl">
                    menu_book
                  </span>
                  <div className="flex-1">
                    <div className="font-medium">Từ vựng · SRS</div>
                    <div className="text-xs text-ink-500">
                      {stats.vocabDue} từ cần ôn
                    </div>
                  </div>
                  <span className="material-symbols-rounded text-ink-400">arrow_forward</span>
                </Link>
              )}

              {stats.perTheme.length > 0 && (
                <div className="px-4 py-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1.5">
                    Theo chủ đề
                  </div>
                  <ul className="space-y-1">
                    {stats.perTheme.map((t) => (
                      <li key={t.id}>
                        <Link
                          to={`/vocab/study/theme/${t.id}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 px-2 py-1 rounded hover:bg-ink-100 dark:hover:bg-ink-800 text-sm"
                        >
                          <span>{t.emoji}</span>
                          <span className="flex-1 truncate">{t.label}</span>
                          <span className="text-xs font-bold text-streak">
                            {t.due}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
