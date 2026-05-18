import { speak, isTtsAvailable } from "@/lib/tts";
import { cn } from "@/lib/format";

interface Props {
  text: string;
  size?: "sm" | "md";
  className?: string;
  title?: string;
}

export const SpeakerButton = ({ text, size = "md", className, title }: Props) => {
  if (!isTtsAvailable()) return null;
  const sizes = size === "sm" ? "p-1 text-[1em]" : "p-1.5 text-[1.2em]";
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      className={cn(
        "rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 text-quest-500 transition shrink-0",
        sizes,
        className,
      )}
      aria-label="Đọc câu này"
      title={title ?? "Đọc câu"}
      type="button"
    >
      <span className="material-symbols-rounded">volume_up</span>
    </button>
  );
};
