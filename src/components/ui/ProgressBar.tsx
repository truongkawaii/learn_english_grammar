import { cn } from "@/lib/format";

interface Props {
  value: number;        // 0..1
  className?: string;
  color?: "quest" | "xp" | "correct" | "wrong" | "mastery";
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

const COLOR: Record<NonNullable<Props["color"]>, string> = {
  quest:   "from-quest-500 to-quest-400",
  xp:      "from-xp to-amber-300",
  correct: "from-correct to-emerald-400",
  wrong:   "from-wrong to-rose-400",
  mastery: "from-mastery to-fuchsia-400",
};

const SIZE: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-2",
  md: "h-3",
  lg: "h-4",
};

export const ProgressBar = ({
  value,
  className,
  color = "quest",
  showLabel,
  size = "md",
}: Props) => {
  const clamped = Math.max(0, Math.min(1, value));
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-ink-200 dark:bg-ink-800",
          SIZE[size],
        )}
      >
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-500",
            COLOR[color],
          )}
          style={{ width: `${clamped * 100}%` }}
        />
      </div>
      {showLabel && (
        <span className="absolute -top-5 right-0 text-xs font-semibold text-ink-500 dark:text-ink-400">
          {Math.round(clamped * 100)}%
        </span>
      )}
    </div>
  );
};
