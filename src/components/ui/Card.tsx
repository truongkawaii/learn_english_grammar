import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/format";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
  glow?: boolean;
}

export const Card = ({ children, interactive, glow, className, ...rest }: Props) => (
  <div
    {...rest}
    className={cn(
      "rounded-2xl border bg-white dark:bg-ink-900 border-ink-200 dark:border-ink-800 shadow-card",
      interactive && "transition-all hover:-translate-y-0.5 hover:shadow-glow-quest cursor-pointer",
      glow && "shadow-glow-quest",
      className,
    )}
  >
    {children}
  </div>
);
