import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "@/app/ThemeContext";
import { useUserStore } from "@/store/userStore";
import { getLevelInfo } from "@/lib/xp";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn, formatNumber, todayKey } from "@/lib/format";
import { useStudyTimer } from "@/features/timer/useStudyTimer";
import { SelectionTranslator } from "@/components/translate/SelectionTranslator";
import { NotificationBell } from "@/components/layout/NotificationBell";

const NAV_LINKS = [
  { to: "/",         label: "Bản đồ",   icon: "map" },
  { to: "/practice", label: "Luyện tập", icon: "swords" },
  { to: "/vocab",    label: "Sổ từ",    icon: "auto_stories" },
  { to: "/history",  label: "Lịch sử",  icon: "history" },
  { to: "/profile",  label: "Hồ sơ",    icon: "account_circle" },
  { to: "/settings", label: "Cài đặt",  icon: "settings" },
];

export const AppShell = () => {
  // mount study timer once globally
  useStudyTimer();

  const { theme, toggleTheme } = useTheme();
  const totalXp = useUserStore((s) => s.totalXp);
  const streak = useUserStore((s) => s.currentStreak);
  const nickname = useUserStore((s) => s.nickname);
  const avatar = useUserStore((s) => s.avatar);
  const todaySec = useUserStore((s) => s.studySecondsByDate[todayKey()] ?? 0);
  const levelInfo = getLevelInfo(totalXp);
  const progress = levelInfo.xpToNext > 0 ? levelInfo.xpInLevel / levelInfo.xpToNext : 0;
  const todayMin = Math.floor(todaySec / 60);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 backdrop-blur-md bg-white/80 dark:bg-ink-950/80 border-b border-ink-200 dark:border-ink-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-2 mr-2 shrink-0">
            <span className="material-symbols-rounded text-quest-500 text-3xl">
              swords
            </span>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:inline">
              Grammar <span className="text-quest-500">Quest</span>
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1 ml-2">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-2.5 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1.5 whitespace-nowrap shrink-0",
                    isActive
                      ? "bg-quest-100 text-quest-700 dark:bg-quest-900/40 dark:text-quest-200"
                      : "text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800",
                  )
                }
              >
                <span className="material-symbols-rounded text-[1.1em]">{l.icon}</span>
                <span className="hidden xl:inline">{l.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div
              className="hidden sm:flex items-center gap-1.5 text-ink-500 dark:text-ink-400 text-sm"
              title="Thời gian học hôm nay (tạm dừng khi đổi tab / không tương tác 60s)"
            >
              <span className="material-symbols-rounded text-[1.2em]">timer</span>
              <span>
                {todayMin > 0
                  ? `${todayMin}m`
                  : `${todaySec}s`}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-streak font-semibold">
              <span className="material-symbols-rounded">local_fire_department</span>
              <span>{streak}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xp font-semibold">
              <span className="material-symbols-rounded">bolt</span>
              <span>{formatNumber(totalXp)}</span>
            </div>
            <div className="hidden lg:flex flex-col items-end min-w-[120px]">
              <div className="text-xs text-ink-500 dark:text-ink-400 flex items-center gap-1">
                <span className="font-display font-bold text-ink-700 dark:text-ink-200">
                  Lv {levelInfo.level}
                </span>
                <span>· {levelInfo.title}</span>
              </div>
              <ProgressBar value={progress} color="xp" size="sm" className="mt-1" />
            </div>
            <NotificationBell />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800 transition"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-rounded">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <div className="text-2xl" title={nickname}>{avatar}</div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>

      <footer className="py-4 text-center text-xs text-ink-400">
        Grammar Quest · Made for self-learning · v0.1
      </footer>

      <SelectionTranslator />
    </div>
  );
};
