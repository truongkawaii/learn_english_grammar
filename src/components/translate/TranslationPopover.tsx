import { useEffect, useRef } from "react";
import { useVocabStore } from "@/store/vocabStore";
import { generateId, cn } from "@/lib/format";
import { playSfx } from "@/lib/sounds";

export type PopoverStatus = "loading" | "ready" | "error" | "rate-limited";

export interface PopoverData {
  text: string;            // original selected text
  vi: string;
  pos?: string;
  note?: string;
  status: PopoverStatus;
  errorMessage?: string;
  fromCache?: boolean;
}

interface Props {
  rect: DOMRect;
  data: PopoverData;
  onClose: () => void;
}

const speak = (text: string) => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  } catch {
    /* noop */
  }
};

export const TranslationPopover = ({ rect, data, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const addVocab = useVocabStore((s) => s.add);
  const vocabItems = useVocabStore((s) => s.items);
  const alreadySaved = vocabItems.some(
    (v) => v.text.toLowerCase() === data.text.toLowerCase(),
  );

  // Position once mounted (uses real popover size)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const POPOVER_WIDTH = 320;
    const margin = 8;
    let top = rect.bottom + margin;
    let left = rect.left + rect.width / 2 - POPOVER_WIDTH / 2;

    // Clamp horizontally
    left = Math.max(margin, Math.min(window.innerWidth - POPOVER_WIDTH - margin, left));
    // Flip above if no room below
    const estHeight = el.offsetHeight || 160;
    if (top + estHeight + margin > window.innerHeight) {
      top = Math.max(margin, rect.top - estHeight - margin);
    }
    el.style.top = `${top}px`;
    el.style.left = `${left}px`;
  }, [rect, data]);

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const saveVocab = () => {
    if (alreadySaved) return;
    addVocab({
      id: generateId(),
      text: data.text,
      vi: data.vi,
      partOfSpeech: data.pos,
      savedAt: Date.now(),
    });
    playSfx("levelUp");
  };

  return (
    <div
      ref={ref}
      style={{ position: "fixed", top: -9999, left: -9999, width: 320 }}
      onMouseDown={(e) => e.preventDefault()}  // keep selection from collapsing
      className="z-50 rounded-2xl border bg-white dark:bg-ink-900 border-ink-200 dark:border-ink-700 shadow-2xl animate-pop-in"
    >
      <div className="p-3 space-y-2">
        <div className="flex items-start gap-2">
          <div className="flex-1 min-w-0">
            <div className="font-display font-bold text-quest-700 dark:text-quest-200 break-words">
              {data.text}
            </div>
            {data.pos && (
              <div className="text-xs text-ink-400 italic">{data.pos}</div>
            )}
          </div>
          <button
            onClick={() => speak(data.text)}
            className="p-1.5 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800"
            title="Phát âm"
            type="button"
          >
            <span className="material-symbols-rounded text-quest-500">volume_up</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800"
            title="Đóng (Esc)"
            type="button"
          >
            <span className="material-symbols-rounded text-ink-400">close</span>
          </button>
        </div>

        <div className="min-h-[1.5em]">
          {data.status === "loading" && (
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <span className="material-symbols-rounded animate-spin text-[1.2em]">
                progress_activity
              </span>
              Đang dịch…
            </div>
          )}
          {data.status === "rate-limited" && (
            <div className="text-sm text-streak">
              Đã hết quota dịch AI giờ này. Hệ thống vẫn dùng cache, anh thử lại sau nhé.
            </div>
          )}
          {data.status === "error" && (
            <div className="text-sm text-wrong">
              ❌ {data.errorMessage ?? "Không dịch được. Thử selection ngắn hơn."}
            </div>
          )}
          {data.status === "ready" && (
            <>
              <div className="text-base leading-snug">{data.vi}</div>
              {data.note && (
                <div className="text-xs text-ink-500 mt-1 italic">💡 {data.note}</div>
              )}
            </>
          )}
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-ink-200 dark:border-ink-800">
          <span className="text-xs text-ink-400">
            {data.fromCache ? "📦 Cache" : data.status === "ready" ? "✨ AI" : ""}
          </span>
          <button
            onClick={saveVocab}
            disabled={data.status !== "ready" || alreadySaved}
            className={cn(
              "text-xs inline-flex items-center gap-1 px-2 py-1 rounded-lg transition",
              alreadySaved
                ? "text-correct"
                : "hover:bg-quest-50 dark:hover:bg-quest-900/30 text-quest-600 dark:text-quest-300 disabled:opacity-40",
            )}
            type="button"
          >
            <span className="material-symbols-rounded text-[1.1em]">
              {alreadySaved ? "bookmark_check" : "bookmark_add"}
            </span>
            {alreadySaved ? "Đã lưu" : "Lưu vào sổ từ"}
          </button>
        </div>
      </div>
    </div>
  );
};
