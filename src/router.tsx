import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { HomePage } from "@/pages/HomePage";
import { LearnPage } from "@/pages/LearnPage";
import { PracticePage } from "@/pages/PracticePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { SettingsPage } from "@/pages/SettingsPage";
import { VocabHubPage } from "@/pages/vocab/VocabHubPage";
import { VocabThemePage } from "@/pages/vocab/VocabThemePage";
import { VocabWordPage } from "@/pages/vocab/VocabWordPage";
import { VocabStudyPage } from "@/pages/vocab/VocabStudyPage";
import { HistoryPage } from "@/pages/HistoryPage";
import { AdminGeneratePage } from "@/pages/AdminGeneratePage";
import { BossFightPage } from "@/pages/BossFightPage";
import { MistakeBankPage } from "@/pages/MistakeBankPage";
import { DailyQuizPage } from "@/pages/DailyQuizPage";
import { MockToeicPage } from "@/pages/MockToeicPage";
import { CustomDrillPage } from "@/pages/CustomDrillPage";
import { DiagnosticTestPage } from "@/pages/DiagnosticTestPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const AppRouter = () => (
  <Routes>
    <Route element={<AppShell />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/learn/:topicId" element={<LearnPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/practice/mistakes" element={<MistakeBankPage />} />
      <Route path="/practice/daily" element={<DailyQuizPage />} />
      <Route path="/practice/mock" element={<MockToeicPage />} />
      <Route path="/practice/custom" element={<CustomDrillPage />} />
      <Route path="/practice/diagnostic" element={<DiagnosticTestPage />} />
      <Route path="/practice/:topicId" element={<PracticePage />} />
      <Route path="/practice/:topicId/boss" element={<BossFightPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/vocab" element={<VocabHubPage />} />
      <Route path="/vocab/study" element={<VocabStudyPage />} />
      <Route path="/vocab/study/theme/:themeId" element={<VocabStudyPage />} />
      <Route path="/vocab/theme/:themeId" element={<VocabThemePage />} />
      <Route path="/vocab/word/:wordId" element={<VocabWordPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/admin/generate" element={<AdminGeneratePage />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
