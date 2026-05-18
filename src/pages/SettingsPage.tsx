import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import { useProgressStore } from "@/store/progressStore";
import { useAttemptsStore } from "@/store/attemptsStore";
import { useVocabStore } from "@/store/vocabStore";
import { useVocabSrsStore } from "@/store/vocabSrsStore";
import { useAchievementsStore } from "@/store/achievementsStore";
import { useDailyQuestStore } from "@/store/dailyQuestStore";
import { useTranslateCacheStore } from "@/store/translateCacheStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const AVATARS = ["🦊", "🐱", "🦉", "🐉", "🦄", "🐧", "🐯", "🦁", "🐺", "🦅"];

export const SettingsPage = () => {
  const user = useUserStore();
  const [nickname, setNickname] = useState(user.nickname);

  const exportData = () => {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            version: 1,
            exportedAt: new Date().toISOString(),
            user: useUserStore.getState(),
            progress: useProgressStore.getState(),
            attempts: useAttemptsStore.getState(),
            vocab: useVocabStore.getState(),
            vocabSrs: useVocabSrsStore.getState(),
            achievements: useAchievementsStore.getState(),
            dailyQuest: useDailyQuestStore.getState(),
            translateCache: useTranslateCacheStore.getState(),
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `grammar-quest-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        if (data.user) useUserStore.setState(data.user.state ?? data.user);
        if (data.progress) useProgressStore.setState(data.progress.state ?? data.progress);
        if (data.attempts) useAttemptsStore.setState(data.attempts.state ?? data.attempts);
        if (data.vocab) useVocabStore.setState(data.vocab.state ?? data.vocab);
        if (data.vocabSrs) useVocabSrsStore.setState(data.vocabSrs.state ?? data.vocabSrs);
        if (data.achievements) useAchievementsStore.setState(data.achievements.state ?? data.achievements);
        if (data.dailyQuest) useDailyQuestStore.setState(data.dailyQuest.state ?? data.dailyQuest);
        if (data.translateCache) useTranslateCacheStore.setState(data.translateCache.state ?? data.translateCache);
        alert("Đã import xong!");
      } catch (e) {
        alert("File không hợp lệ.");
      }
    };
    reader.readAsText(file);
  };

  const resetAll = () => {
    if (!confirm("Xoá toàn bộ tiến độ? Hành động không thể hoàn tác.")) return;
    useUserStore.getState().reset();
    useProgressStore.getState().reset();
    useAttemptsStore.getState().reset();
    useVocabStore.getState().reset();
    useVocabSrsStore.getState().reset();
    useAchievementsStore.getState().reset();
    useDailyQuestStore.getState().reset();
    useTranslateCacheStore.getState().reset();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="font-display font-bold text-3xl">Cài đặt</h1>

      <Card>
        <div className="p-6 space-y-4">
          <h2 className="font-display font-bold text-lg">Hồ sơ</h2>
          <div>
            <label className="text-sm text-ink-500">Biệt danh</label>
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onBlur={() => user.setNickname(nickname)}
              className="mt-1 w-full px-3 py-2 rounded-lg bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 outline-none focus:border-quest-500"
            />
          </div>
          <div>
            <label className="text-sm text-ink-500">Avatar</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  onClick={() => user.setAvatar(a)}
                  className={`text-3xl w-12 h-12 rounded-xl ${
                    user.avatar === a
                      ? "bg-quest-100 dark:bg-quest-900/40 ring-2 ring-quest-500"
                      : "bg-ink-100 dark:bg-ink-800 hover:bg-ink-200"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6 space-y-3">
          <h2 className="font-display font-bold text-lg">Tuỳ chỉnh</h2>
          <ToggleRow
            label="Âm thanh"
            description="Bật/tắt sound effect khi click, đúng, sai, level up."
            value={user.soundEnabled}
            onToggle={user.toggleSound}
          />
          <ToggleRow
            label="Tự động dịch khi bôi đen"
            description="Bôi đen từ/cụm trong lý thuyết để xem nghĩa tiếng Việt."
            value={user.autoTranslateEnabled}
            onToggle={user.toggleAutoTranslate}
          />
        </div>
      </Card>

      <Card>
        <div className="p-6 space-y-3">
          <h2 className="font-display font-bold text-lg">Sao lưu dữ liệu</h2>
          <p className="text-sm text-ink-500">
            Toàn bộ tiến độ lưu trên trình duyệt của anh. Hãy export định kỳ phòng khi clear cache.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={exportData} icon="download">Export JSON</Button>
            <label className="inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-[0.97] h-11 px-5 text-base rounded-xl bg-ink-200 hover:bg-ink-300 text-ink-900 dark:bg-ink-800 dark:hover:bg-ink-700 dark:text-ink-50 cursor-pointer">
              <span className="material-symbols-rounded text-[1.2em]">upload</span>
              <span>Import JSON</span>
              <input
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) importData(f);
                }}
              />
            </label>
            <Button variant="danger" onClick={resetAll} icon="delete_forever">
              Reset toàn bộ
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ToggleRow = ({
  label, description, value, onToggle,
}: {
  label: string;
  description?: string;
  value: boolean;
  onToggle: () => void;
}) => (
  <div className="flex items-center gap-4 py-2">
    <div className="flex-1">
      <div className="font-medium">{label}</div>
      {description && <div className="text-xs text-ink-500">{description}</div>}
    </div>
    <button
      onClick={onToggle}
      className={`relative w-12 h-7 rounded-full transition ${
        value ? "bg-quest-500" : "bg-ink-300 dark:bg-ink-700"
      }`}
      role="switch"
      aria-checked={value}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
          value ? "translate-x-5" : ""
        }`}
      />
    </button>
  </div>
);
