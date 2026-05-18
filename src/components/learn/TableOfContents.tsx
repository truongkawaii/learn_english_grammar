import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/markdown";
import { cn } from "@/lib/format";

interface Props {
  items: TocItem[];
}

export const TableOfContents = ({ items }: Props) => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSlug(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: [0, 1] },
    );

    const elements = items
      .map((i) => document.getElementById(i.slug))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="text-sm">
      <div className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-2">
        Mục lục
      </div>
      <ul className="space-y-1 border-l border-ink-200 dark:border-ink-800">
        {items.map((item) => {
          const isActive = activeSlug === item.slug;
          return (
            <li key={item.slug}>
              <a
                href={`#${item.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.slug);
                  if (!el) return;
                  // -64px to offset sticky header
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                  history.replaceState(null, "", `#${item.slug}`);
                }}
                className={cn(
                  "block py-1 -ml-px border-l-2 transition-colors",
                  item.level === 2 ? "pl-3" : item.level === 3 ? "pl-6" : "pl-9",
                  isActive
                    ? "border-quest-500 text-quest-600 dark:text-quest-300 font-medium"
                    : "border-transparent text-ink-500 dark:text-ink-400 hover:text-ink-700 dark:hover:text-ink-200",
                )}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
