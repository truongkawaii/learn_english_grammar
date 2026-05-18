import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/format";
import { playSfx } from "@/lib/sounds";

export type TypingResult = "correct" | "wrong" | "skipped";

interface Props {
  /** Word the user should type (case/accent-insensitive). */
  expected: string;
  onResult: (result: TypingResult, value: string) => void;
  /** Auto-focus the input on mount. */
  autoFocus?: boolean;
}

/** Normalize for fuzzy comparison: trim, lowercase, strip non-letter chars. */
const normalize = (s: string): string =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z'\s-]/g, "");

export const TypingCheck = ({ expected, onResult, autoFocus = true }: Props) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const finish = (r: TypingResult, v: string) => {
    if (r === "correct") playSfx("correct");
    else if (r === "wrong") playSfx("wrong");
    setTimeout(() => onResult(r, v), r === "skipped" ? 0 : 700);
  };

  const submit = () => {
    if (result !== null) return;
    const trimmed = value.trim();
    if (!trimmed) {
      finish("skipped", "");
      return;
    }
    const isMatch = normalize(trimmed) === normalize(expected);
    setResult(isMatch ? "correct" : "wrong");
    finish(isMatch ? "correct" : "wrong", trimmed);
  };

  const skip = () => {
    if (result !== null) return;
    finish("skipped", value.trim());
  };

  return (
    <div className="space-y-2">
      <div className="text-xs text-ink-500 text-center">
        Kiểm tra: nhập lại từ tiếng Anh · <kbd className="px-1 text-[10px]">Enter</kbd> gửi · <kbd className="px-1 text-[10px]">Esc</kbd> bỏ qua
      </div>
      <div className="flex gap-2 items-stretch">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            } else if (e.key === "Escape") {
              e.preventDefault();
              skip();
            }
          }}
          disabled={result !== null}
          placeholder="Gõ từ rồi nhấn Enter…"
          className={cn(
            "flex-1 px-4 py-3 rounded-xl border-2 outline-none transition text-lg font-mono",
            "bg-white dark:bg-ink-900 text-ink-800 dark:text-ink-100",
            result === "correct" && "border-correct text-correct bg-correct/5",
            result === "wrong" && "border-wrong text-wrong bg-wrong/5",
            result === null && "border-ink-200 dark:border-ink-700 focus:border-quest-500",
          )}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          onClick={skip}
          disabled={result !== null}
          className="px-3 rounded-xl text-sm text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-800 disabled:opacity-30 border border-ink-200 dark:border-ink-700"
          title="Bỏ qua (Esc)"
        >
          Bỏ qua
        </button>
      </div>
      {result === "wrong" && (
        <div className="text-xs text-wrong text-center animate-fade-in-up">
          ✗ Sai · đáp án đúng: <span className="font-bold font-mono">{expected}</span>
        </div>
      )}
      {result === "correct" && (
        <div className="text-xs text-correct text-center animate-fade-in-up">
          ✓ Chính xác!
        </div>
      )}
    </div>
  );
};
