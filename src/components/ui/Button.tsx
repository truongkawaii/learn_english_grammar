import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/format";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "success";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: string;        // material symbol name
  iconRight?: string;
  children?: ReactNode;
  fullWidth?: boolean;
}

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-quest-600 hover:bg-quest-500 active:bg-quest-700 text-white shadow-glow-quest disabled:opacity-50",
  secondary:
    "bg-ink-200 hover:bg-ink-300 text-ink-900 dark:bg-ink-800 dark:hover:bg-ink-700 dark:text-ink-50",
  ghost:
    "bg-transparent hover:bg-ink-200/60 text-ink-700 dark:text-ink-200 dark:hover:bg-ink-800/60",
  danger:
    "bg-wrong hover:bg-rose-400 text-white shadow-glow-wrong",
  success:
    "bg-correct hover:bg-emerald-400 text-white shadow-glow-correct",
};

const SIZE: Record<Size, string> = {
  sm: "h-9 px-3 text-sm rounded-lg",
  md: "h-11 px-5 text-base rounded-xl",
  lg: "h-14 px-7 text-lg rounded-2xl",
};

export const Button = ({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth,
  className,
  children,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-[0.97]",
        VARIANT[variant],
        SIZE[size],
        fullWidth && "w-full",
        className,
      )}
    >
      {icon && <span className="material-symbols-rounded text-[1.2em]">{icon}</span>}
      {children}
      {iconRight && (
        <span className="material-symbols-rounded text-[1.2em]">{iconRight}</span>
      )}
    </button>
  );
};
