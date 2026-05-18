# TODO — Website Ôn Luyện Ngữ Pháp TOEIC (Grammar Quest)

> Single-user, local-only, React 19 + Vite + TypeScript + Tailwind.
> Nguồn lý thuyết: `noidung/noi_dung_1.md` … `noi_dung_21.md`.

---

## 0. Lộ trình nội dung (đã đọc xong 21 file)

Toàn bộ 21 file đều có cùng format: **lý thuyết + ví dụ song ngữ Anh–Việt, KHÔNG có câu hỏi luyện tập sẵn.** Anh sẽ phải soạn ngân hàng câu hỏi riêng (làm tay hoặc dùng Gemini có review).

Đề xuất gom thành 5 cụm (Course) → 21 chủ đề (Topic):

| Course | Topic | File nguồn |
|---|---|---|
| **A. Nền tảng** | A1. Từ loại & cụm từ | 1 |
| | A2. Mệnh đề & câu | 2 |
| **B. Từ loại** | B1. Danh từ (đếm được, không đếm được) | 3 |
| | B2. Mạo từ, lượng từ, từ hạn định | 4 |
| | B3. Đại từ | 5 |
| | B4. Tính từ | 6 |
| | B5. Trạng từ | 16 |
| | B6. Giới từ ⭐ trọng tâm TOEIC | 17 |
| | B7. Liên từ ⭐ trọng tâm TOEIC | 18 |
| **C. Thì động từ** | C1. Hiện tại (đơn / TD / HT) | 7 |
| | C2. HTHT TD, Quá khứ đơn, QK TD | 8 |
| | C3. QK hoàn thành, QKHT TD, Tương lai đơn | 9 |
| | C4. Tương lai gần / TD / HT / HT TD | 10 |
| **D. Dạng động từ & thể** | D1. Câu bị động ⭐ | 11 |
| | D2. V nguyên mẫu không "to" | 12, 15 (gộp, trùng nội dung) |
| | D3. To V ⭐ rất trọng tâm TOEIC | 13 |
| | D4. Phân từ & participle clause | 14 |
| **E. Cấu trúc nâng cao** | E1. Mệnh đề quan hệ | 19 |
| | E2. Câu điều kiện (kèm đảo ngữ) | 20 |
| | E3. So sánh | 21 |

> **Lưu ý:** file 12 và 15 trùng chủ đề "V nguyên mẫu không to" — anh quyết định: gộp thành 1 topic, hoặc dùng 1 file làm lý thuyết, 1 file làm "deep dive".
> File 20 (điều kiện) phần cuối format Markdown bị dồn dòng — cần clean trước khi render.

---

## 1. Review của TOEIC master — feature anh đang thiếu

Anh đã nêu đủ phần "lõi". Em đề xuất bổ sung **8 nhóm** để website thực sự giúp lên điểm TOEIC, chứ không chỉ là app trắc nghiệm:

### 1.1. Spaced Repetition (SRS) — quan trọng nhất
- Không chỉ "câu sai có nút làm lại". Mỗi câu sai phải được **lập lịch ôn lại** theo khoảng cách tăng dần (Leitner box hoặc SM-2 lite): 1 ngày → 3 ngày → 7 ngày → 14 ngày → 30 ngày.
- Có **hộp "Câu cần ôn hôm nay"** trên dashboard — bấm vào là làm queue đó.
- Đây là yếu tố quyết định kiến thức có "ngấm" hay không.

### 1.2. Mastery Level cho từng chủ đề (4 bậc)
Không chỉ % đã làm. Mỗi chủ đề có 4 bậc, hiện bằng huy hiệu + thanh tiến trình:
- 🥉 **Novice** (< 40% accuracy)
- 🥈 **Familiar** (40–70%)
- 🥇 **Proficient** (70–90%)
- 💎 **Mastered** (≥ 90% **và** đã làm tối thiểu N câu, mỗi câu đúng ít nhất 2 lần ở 2 lần làm khác nhau)

Mastery sẽ là "độ nắm chắc ngữ pháp" mà anh muốn số hoá.

### 1.3. Đa dạng dạng bài (không chỉ MCQ + điền câu)
Anh đã có 2 dạng. Em đề xuất nâng lên **6 dạng**, mỗi chủ đề mix nhiều dạng:

| Dạng | Mô tả | Phù hợp chủ đề |
|---|---|---|
| **MCQ** (4 đáp án) | TOEIC Part 5 chuẩn | Mọi chủ đề |
| **Fill-in (tự gõ)** | Gõ từ vào ô trống | Thì, giới từ, mạo từ |
| **Word Order** | Sắp xếp các "viên gạch" từ thành câu (drag/click) | Mệnh đề quan hệ, điều kiện, bị động |
| **Sentence Transformation** | Chuyển dạng (chủ→bị, trực→tường thuật, gộp 2 câu thành RC) | Bị động, RC, conditional |
| **Error Spotting** | Câu có 4 phần gạch chân, chọn phần sai | Part 5 advanced |
| **Cloze (đoạn văn)** | Đoạn 4–5 chỗ trống | Liên từ, giới từ, thì |

> Yêu cầu "cho vài từ điền thành câu" của anh → chính là dạng **Word Order**.

### 1.4. Practice Modes — không chỉ "học từng chương"
- **Learn**: lý thuyết + 10 câu cơ bản (Easy/Medium).
- **Drill**: random 20 câu trong chủ đề đã học.
- **Boss Fight** 🐉 (cuối chủ đề): 15 câu mix dạng, đạt 80% mới được badge và unlock chủ đề tiếp theo.
- **Daily Quiz**: 10 câu random toàn bộ chủ đề đã unlock — bonus XP nếu làm đủ mỗi ngày.
- **Mistake Bank**: kho câu đã từng sai, ôn lại bất kỳ lúc nào.
- **Mock TOEIC Part 5/6**: 40 câu mix toàn bộ chủ đề, có đếm giờ — chế độ "test thật".

### 1.5. Daily Streak & Quest
- 🔥 Streak ngày liên tiếp (giống Duolingo). Bonus XP theo streak.
- 🎯 Quest hàng ngày: "Hôm nay làm 20 câu", "Học 1 chủ đề mới", "Đạt 90% ở 1 quiz". Hoàn thành quest → XP + đá quý/tiền in-game.

### 1.6. Error pattern analysis ở Profile
- Mỗi câu hỏi gắn tag chi tiết (vd: "Subject-verb agreement", "Article a/an", "Preposition of time"…).
- Profile có **radar chart** + **danh sách top 5 lỗi hay mắc** → anh biết yếu chỗ nào để tập trung ôn.
- "Predicted TOEIC Part 5 score" tính từ accuracy mix tất cả chủ đề (formula đơn giản, chỉ để có con số động lực).

### 1.7. Diagnostic Test (tuỳ chọn, làm Phase sau)
- Bài 20–30 câu mix tất cả chủ đề lúc bắt đầu sử dụng → khuyến nghị "anh nên học chủ đề X trước". Bỏ qua cũng được.

### 1.8. Backup dữ liệu
- Vì lưu local, một lần clear cache là bay sạch. **Phải có Export JSON / Import JSON** ở Settings để anh tự backup.
- Optional: auto export sang Google Drive (đã có sẵn account smartosc) — Phase stretch.

### 1.9. Sound design (anh yêu cầu thêm)
- **Click sound** trên: option đáp án, nút submit, nút "Tiếp", "Làm lại", "Xem đáp án" — sound nhẹ kiểu "tap"/"click" (~50ms, volume thấp).
- **Sound đúng/sai** khi submit (đã có trong Phase 3).
- **Sound level up / unlock badge / combo x2-x3** — fanfare ngắn.
- **Sound hover** (optional, dễ gây mệt — em đề xuất tắt mặc định).
- Toggle on/off trong Settings, lưu vào localStorage. Tôn trọng `prefers-reduced-motion` để default off cho người nhạy cảm.
- Cách triển khai: 1 hook `useSfx()` wrap `Audio` API hoặc `howler`. Preload các file `.mp3`/`.ogg` ~5–10KB mỗi cái.
- Asset: dùng free SFX từ Mixkit / freesound (CC0) — em sẽ chọn bộ phù hợp Phase 8.

### 1.10. Auto-translate khi bôi đen (anh yêu cầu thêm)
- Trên trang lý thuyết và trong prompt câu hỏi: user bôi đen 1 từ / cụm / câu → hiện **popover dịch nghĩa Anh→Việt** ngay tại vị trí selection.
- Triển khai:
  - Listen `mouseup` / `selectionchange`, lấy `window.getSelection()`.
  - Nếu selection trong vùng cho phép (class `translatable`) + dài 1–200 ký tự → show floating popover.
  - **Lớp 1 — cache local**: với từ phổ biến đã từng tra → trả ngay từ IndexedDB (`translations` table). Miễn phí, instant.
  - **Lớp 2 — Gemini fallback**: nếu chưa có trong cache → gọi `services/gemini.ts` với prompt ngắn "Dịch Anh-Việt và giải thích ngắn 1 dòng nếu là idiom/cụm từ", lưu kết quả vào cache.
  - Popover có nút "🔊 Phát âm" (Web Speech API `speechSynthesis`), nút "⭐ Lưu vào sổ từ".
- **Sổ từ cá nhân** (bonus): trang `/vocab` list các từ đã lưu, có thể export — biến web thành công cụ học vocab luôn, không chỉ ngữ pháp.
- Rate limit: debounce 300ms, cap 60 request Gemini / giờ (tránh quota), nếu vượt → báo "Đã hết quota AI, dùng cache thôi nhé".

### Những thứ em KHÔNG đề xuất (cố tình bỏ)
- ❌ Hệ thống "hearts/năng lượng" giống Duolingo → gây bực với self-learner.
- ❌ Multi-user / login → anh nói single user, đừng vẽ.
- ❌ Server / backend → local là đủ.
- ❌ Push notification trình duyệt → annoying, ngân sách dành cho mặt khác.

---

## 2. Tech stack chốt

| Layer | Lựa chọn | Ghi chú |
|---|---|---|
| UI | React 19 + TypeScript | Đã có |
| Bundler | Vite | Đã có |
| Styling | Tailwind (Play CDN trong `index.html`) | Đã có — không đổi |
| Routing | `react-router-dom` (HashRouter, vì deploy GH Pages) | Đã có |
| State | **Zustand** + persist middleware | Gọn nhẹ, persist sẵn vào localStorage |
| Storage | localStorage cho state nhỏ + **Dexie (IndexedDB)** cho lịch sử attempt nếu vượt 5MB | localStorage đủ cho 1 user trong vài tháng đầu |
| Animation | Framer Motion | XP popup, level up, confetti |
| Sound | `howler` hoặc raw `Audio` | Đúng/sai/level-up |
| Charts | **Recharts** (đã có importmap sẵn) | Radar, line, heatmap |
| Markdown | `react-markdown` + `remark-gfm` | Render lý thuyết |
| AI (optional) | `services/gemini.ts` (đã có) | Giải thích câu sai, generate câu hỏi |
| Confetti | `canvas-confetti` | Lúc Mastered / level up |

> **Đừng** đụng `react-project/`, `src/`, các trang HTD Corp. Sẽ xoá / archive sau.

---

## 3. Phase plan

### Phase 0 — Dọn dẹp & Setup ✅ DONE (2026-05-17)
- [x] Quyết: xoá nguyên repo HTD Corp cũ trong cùng folder, hay tạo folder con `grammar-quest/`? → **xoá sạch, giữ infra Vite**
- [x] Cập nhật `package.json`: đổi tên dự án (`grammar-quest`), set `homepage` mới (GH Pages).
- [x] Cài thêm: `zustand`, `framer-motion`, `react-markdown`, `remark-gfm`, `canvas-confetti`. (Dexie & howler chưa cần.)
- [x] Cập nhật `index.html` tailwind theme (palette ink/quest/xp/correct/wrong/streak/mastery, font Be Vietnam Pro + Fredoka + Material Symbols Rounded).
- [x] Cấu trúc thư mục (xem `CLAUDE.md` để chi tiết):
  ```
  src/
    app/            # Routes, App.tsx, providers
    features/
      content/      # Topic tree, theory viewer
      practice/     # Question runner, dạng bài
      gamification/ # XP, level, streak, badges
      profile/      # Stats, charts
      timer/        # Time tracking + visibility
      srs/          # Spaced repetition scheduler
    components/     # Shared UI: Button, Card, Modal, ProgressBar...
    store/          # Zustand stores
    data/
      topics.ts     # Topic metadata
      questions/    # Ngân hàng câu hỏi theo topic
    services/
      gemini.ts     # (reuse)
      storage.ts    # localStorage + dexie wrappers
    lib/            # Pure helpers: xp.ts, mastery.ts, srs.ts
    types.ts
  ```

### Phase 1 — Content & Navigation ✅ DONE (2026-05-17)
- [x] Schema `Course → Topic` đã hard-code trong `src/data/topics.ts` (5 course × 21 topic, kèm prerequisites).
- [x] 21 file `.md` được load qua `import.meta.glob('/noidung/*.md', { query: '?raw', eager: true })` trong `src/data/theoryLoader.ts` — không phải copy.
- [x] **Theory Viewer** `/learn/:topicId`: render markdown (react-markdown + remark-gfm), TOC sticky sidebar bên phải (`TableOfContents.tsx`) với active-section highlight bằng IntersectionObserver, anchor scroll mượt, headings auto sinh ID khớp slug, hash URL update khi click TOC.
- [x] **Reading progress bar** thanh ngang dưới header (`ReadingProgress.tsx`).
- [x] **Auto-mark theory as read** khi user scroll qua 80%.
- [x] **Skill Tree / Map** trang `/`: 5 Course × 21 Topic dạng grid, Topic locked khi prerequisites chưa đạt.
- [x] Topic card hiển thị: % câu đúng, mastery emoji badge, icon 📖 nếu đã đọc lý thuyết, icon 🏆 nếu đã clear Boss.
- [x] Fix `noi_dung_20.md` mục 2.4 (định dạng dồn dòng + NBSP) — đã tách thành 2.3 (loại 0) và 2.4 (đặc biệt, có sub a/b/c).
- [x] Prose styling cho table, code, blockquote, h2/h3 đã polish (tô border quest 4px cho h2, table header bg quest tint, code inline bg ink với padding).

### Phase 2 — Question Engine ✅ DONE (2026-05-17)
- [x] Schema:
  ```ts
  type Question = {
    id: string;
    topicId: string;
    type: "mcq" | "fill" | "wordOrder" | "transform" | "errorSpot" | "cloze";
    difficulty: 1 | 2 | 3;
    tags: string[];          // ["passive-voice", "past-simple", ...]
    prompt: string;
    data: {...};             // tuỳ type
    answer: string | string[];
    explanationVi: string;
    explanationEn?: string;
  };
  ```
- [x] Component `<QuestionRunner>` switch theo `type`, mỗi dạng 1 sub-component. 3 dạng đã build: **MCQ**, **Fill**, **Word Order**.
- [x] Logic chấm điểm cho từng dạng (Fill normalize NFD strip dấu + lowercase trim).
- [x] Nút **"Xem đáp án"** (XP = 30% base), **"Làm lại câu này"** (sau khi sai), **"Câu tiếp"**.
- [x] Giải thích đáp án sau khi submit (banner màu correct/wrong + icon).
- [x] **Phụ trợ**: XP popup floating, combo x2/x3 indicator, shake animation, SessionSummary cuối phiên (grade S/A/B/C/D + confetti khi ≥70%), Web Audio SFX (click/select/correct/wrong/levelUp/complete) — không cần asset.
- [x] **Seed câu hỏi thủ công**: A1 (12 câu) + B6 (14 câu) = 26 câu.
- [x] **Bulk-generated** 18 topic còn lại × 10 câu = 180 câu qua `scripts/generate-all-questions.mjs` (Node + Gemini REST API, schema validate, 0 rejected). **Tổng kho: 206 câu / 20 topic**.

### Phase 2.5 — Admin question generator ✅ DONE (2026-05-17)
- [x] Trang `/admin/generate` chỉ truy cập qua URL trực tiếp (không có trong nav).
- [x] Form: chọn topicId, dạng (multi-select mcq/fill/wordOrder), số câu (1-20), độ khó (mix/1/2/3), ghi chú tự do.
- [x] Service `src/services/questionGenerator.ts`: build prompt giàu ví dụ, gọi Gemini, extract JSON array kể cả khi có markdown fence, validate schema chặt chẽ (reject câu sai schema và log console).
- [x] Render preview card mỗi câu: hiển thị đúng dạng (MCQ tô đáp án đúng, Fill show accepted, WordOrder show tiles + đáp án), explanationVi, tags, difficulty, ID, prompt.
- [x] Duyệt/Từ chối từng câu, có thể undo. Đếm số câu đã duyệt real-time.
- [x] **Copy TS** (kèm câu cũ đã có) hoặc **Tải `<TopicId>.ts`** xuống Downloads.
- [x] Auto-merge với ngân hàng câu hỏi hiện có cho topic đó.
- [x] **Registry auto-discover** (`src/data/questions/index.ts` dùng `import.meta.glob`) — chỉ cần drop file `C1.ts` vào folder là tự register, không cần edit index.

### Phase 3 — Gamification Core ✅ DONE (2026-05-17)
- [ ] **XP formula** (em đề xuất, có thể chỉnh):
  ```
  base = { easy: 10, medium: 15, hard: 25 }[difficulty]
  firstTryCorrect: +5 bonus
  noHint:          +5 bonus
  streak (combo):  +1 per câu đúng liên tiếp trong session, cap +10
  retryCorrect:    base * 0.6  (làm lại đúng được 60% XP)
  viewedAnswer:    base * 0.3
  wrong:           +2 (vẫn cho XP nhỏ để khuyến khích thử)
  ```
- [ ] **Level**: `level = floor(sqrt(totalXP / 50))`. Mỗi level có title (Beginner → Apprentice → Grammarian → Linguist → TOEIC Master).
- [ ] **Combo system**: streak câu đúng trong 1 session, hiển thị x2 / x3 / x4 floating.
- [ ] **Daily streak** lưu `lastActiveDate`, +1 nếu hôm qua có học, reset nếu nghỉ 1 ngày.
- [ ] **Achievement engine** (~20 badges): "First Blood", "100 câu", "7-day streak", "Hoàn hảo tuyệt đối (10 đúng liên tiếp)", "Master of Tenses", "Owl (học sau 22h)"…
- [ ] Animations: XP popup, level-up modal có confetti, sound effect đúng/sai/level-up.

### Phase 4 — Timer & Lịch sử ✅ DONE (2026-05-17)
- [x] **useStudyTimer** hook (`src/features/timer/useStudyTimer.ts`): tick 1s, accumulate khi `visibilityState === "visible"` AND có tương tác trong 60s, flush batch 5s vào `userStore.studySecondsByDate[today]`. Cap mỗi tick ≤2s để tránh sleeping-tab over-count.
- [x] Mount global trong AppShell, hiển thị compact "⏱️ Xm" / "Xs" trên header (tooltip giải thích cơ chế pause).
- [x] Idle detection: listen `mousemove / mousedown / keydown / scroll / touchstart / click + visibilitychange`, idle threshold 60s.
- [x] **Attempt log** đã có sẵn từ Phase 2 (`useAttemptsStore`, capped 5000 lượt). Không cần Dexie cho v0.1.
- [x] Trang **`/history`**: filter theo chủ đề / dạng bài / kết quả / khoảng thời gian (today/week/month/all), stats summary trên đầu, mỗi row expand để xem câu hỏi gốc + đáp án đúng + giải thích + link luyện lại.
- [x] **ActivityHeatmap** (12 tuần × 7 ngày grid, intensity theo XP/ngày, hôm nay có ring vàng XP) tích hợp vào Profile.
- [x] Nav header thêm icon "Lịch sử" (label ẩn ở viewport nhỏ hơn xl, chỉ icon).

### Phase 5 — Mastery & SRS (2 ngày)
- [ ] Per-question state: `{ timesSeen, timesCorrect, timesWrong, lastAnswered, nextReviewAt, srsBox }`.
- [ ] **SRS scheduler**:
  - Box 1 (sai vừa rồi) → review +1 ngày.
  - Box 2 (đúng 1 lần) → +3 ngày.
  - Box 3 → +7 ngày. Box 4 → +14 ngày. Box 5 (mastered) → +30 ngày.
- [ ] Dashboard widget "📌 Câu cần ôn hôm nay (12 câu)" — click vào để chạy queue đó.
- [ ] **Mastery per topic**:
  ```
  mastery = 0.6 * weightedAccuracy + 0.3 * coverage + 0.1 * recency
  ```
  trong đó coverage = % câu của topic đã được đụng tới, recency giảm nếu lâu không học.

### Phase 6 — Profile & Analytics (2 ngày)
- [ ] Trang `/profile`:
  - **Header**: avatar + nickname tự đặt, level + title + thanh XP tới level sau.
  - **Tổng quan**: tổng câu đã làm, accuracy tổng, total time, streak hiện tại / kỷ lục.
  - **Heatmap activity** (kiểu GitHub): mỗi ô = 1 ngày, màu theo XP kiếm trong ngày.
  - **Radar chart** theo 5 Course (A–E): mastery score mỗi nhánh.
  - **Bar chart** mastery theo từng Topic (21 cột).
  - **Top 5 weakness tags**: list tag user hay sai nhất.
  - **Predicted TOEIC Part 5 score** (200–495 scale, formula đơn giản): `200 + accuracy * 2.95` hoặc tinh hơn.
  - **Achievements** grid: đã mở vs chưa mở.
- [ ] Settings: Export / Import JSON, Reset progress (có confirm), Toggle sound, Toggle dark mode.

### Phase 7 — Practice Modes nâng cao ✅ DONE (2026-05-17)
- [x] **Boss Fight** `/practice/:topicId/boss`: 12 câu (ưu tiên difficulty ≥ 2), không xem đáp án, không retry. Đạt ≥ 80% → setBossCleared + confetti + badge. Có intro banner đỏ/tím + summary "BOSS DEFEATED / CHƯA QUA".
- [x] **Daily Quiz** `/practice/daily`: 10 câu random từ các chủ đề user đã đụng (theoryRead OR questionsSeen > 0), fallback toàn bộ nếu chưa đủ.
- [x] **Mistake Bank** `/practice/mistakes`: 2 tab — "SRS hôm nay" (Leitner due) / "Tất cả câu sai" (lifetime). Live count.
- [x] **Mock TOEIC Part 5** `/practice/mock`: 40 câu MCQ ngẫu nhiên toàn bộ kho, đếm ngược 25 phút (auto-submit khi hết), không xem đáp án/retry trong khi làm. Sau khi nộp: trang **MockReview** với band điểm dự đoán (200–495, công thức `200 + accuracy × 295`) + review từng câu mở rộng.
- [x] QuestionRunner đã refactor để nhận `RunnerMode` config: `allowViewAnswer`, `allowRetryQuestion`, `revealAfterEachSubmit`, `timeLimitSec`, `renderSummary`, `introBanner` — tái sử dụng cho cả 4 mode + practice thường.
- [x] Trang `/practice` (hub) có section **"Chế độ đặc biệt"** với 4 card + badge "X cần ôn" cho Mistake Bank.
- [x] Trang topic practice có nút "Vào Boss Fight" / "Đã clear 🏆" góc trên phải.

### Phase 7.5 — Sound & Auto-translate ✅ DONE (2026-05-17)
- [ ] Hook `useSfx()` + asset sounds (click, correct, wrong, level-up, combo).
- [ ] Wire click sound vào tất cả option/button trong practice.
- [ ] Component `<SelectionTranslator>` global: bắt `selectionchange`, hiện popover.
- [ ] Cache dịch trong IndexedDB (`translations` table: `{ text, vi, en, partOfSpeech, savedToVocab, hits, updatedAt }`).
- [ ] Tích hợp Gemini fallback với prompt dịch + giải thích ngắn.
- [ ] Trang `/vocab` (sổ từ đã lưu).
- [ ] Speech synthesis cho nút 🔊 phát âm.
- [ ] Settings toggle: sound on/off, auto-translate on/off.

### Phase 8 — Polish (1 ngày)
- [ ] Sound effect on/off.
- [ ] Reduced motion respect (`prefers-reduced-motion`).
- [ ] Loading skeleton.
- [ ] Empty states đẹp.
- [ ] Toast notification (level up, badge mở, streak…).
- [ ] Onboarding 3 bước lần đầu mở app.
- [ ] PWA manifest (optional).

### Phase 9 — Stretch (mở rộng sau)
- [ ] **AI tutor**: bấm "Tại sao đáp án này đúng?" → gọi Gemini giải thích sâu hơn theo trình độ.
- [ ] **Custom drill**: chọn nhiều tag cụ thể, sinh quiz riêng.
- [ ] **TTS** đọc câu hỏi (Web Speech API).
- [ ] **Auto backup** lên Google Drive.
- [ ] **Diagnostic test** đầu vào.
- [ ] Theme đổi màu theo level (mở khoá theme khi lên level).

---

## 4. Module mới — VOCAB (folder `tuvung/`, 1230 từ TOEIC)

> Module mới (tách khỏi grammar). Anh đã có sẵn 23 file `tuvung/list1.md` … `list23.md`, tổng **1230 từ** mỗi từ kèm POS + IPA + định nghĩa song ngữ + 3 ví dụ song ngữ. Các file là chunks alphabetical chứ không theo chủ đề → em sẽ re-categorize.

### 4.1. Phân tích yêu cầu của anh & review chỗ thiếu

| Anh yêu cầu | Em đánh giá | Đề xuất bổ sung |
|---|---|---|
| Chia 23 list thành chủ đề | ✅ rõ | Em đề xuất **15 chủ đề chuẩn TOEIC** (Business, Office & Documents, Communication, Marketing & Sales, Finance & Banking, HR, Travel & Transport, Hotel, Restaurant & Dining, Shopping & Retail, Health & Medicine, Technology & IT, Education, Manufacturing, Daily Life). Re-categorize bằng Gemini, anh duyệt mẫu trước khi commit. |
| Lặp lại ngắt quãng (SRS) | ✅ lõi | Anh đề xuất 4 mức Hard/Med/Easy/Very Easy với 1m/6h/1d/3d. Em đề xuất nâng cấp thành **SM-2 lite** (Anki-style): 4 nút **Again / Hard / Good / Easy**, có "ease factor" (EF) tăng giảm theo lựa chọn → interval × EF, EF khởi tạo 2.5, dao động 1.3-3.0. Lý do: rule cứng cố định không phản ánh "độ khó tương đối" của từng từ với từng user. SM-2 đã được Anki/SuperMemo dùng 30 năm, hiệu quả đã chứng minh. Anh vẫn thấy 4 nút giống yêu cầu, chỉ là dưới hood tinh hơn. |
| Tăng dần ("cực dễ 9d") | ✅ | Trong SM-2: cực dễ tuần 1 = 3d, tuần 2 = 7d, tuần 3 = 18d, tuần 4 = 45d, ... tăng exponential. Đúng tinh thần anh muốn. |
| 4 cách học: flashcard / typing / examples / synonyms | ✅ | Em đề xuất thêm **2 mode**: **Multiple Choice** (chọn nghĩa Việt từ 4 options, dễ + nhanh, tốt cho từ mới) và **Listening** (nghe TTS → gõ từ, rèn lỗ tai TOEIC Part 1/2). Đều dùng dữ liệu sẵn có. Bonus: **Sentence cloze** — ví dụ có blank, điền từ (huấn luyện thấy từ trong ngữ cảnh thật). |
| Mục tiêu 20 từ/ngày | ✅ rõ | Em đề xuất split mặc định **5 từ mới + 15 từ ôn** (configurable). Lý do: nếu chỉ học từ mới mà bỏ ôn, sẽ quên ngay. 15:5 là tỷ lệ Anki khuyến nghị. Hiển thị **Daily Goal Ring** 20 chấm trên Home. |
| % học / số từ còn lại / mỗi chủ đề | ✅ | Hiển thị 5 con số per theme: **% Mastered** (interval ≥ 21d), **% Đang học**, **% Chưa học**, **# Due hôm nay**, **streak ngày học theme này**. Plus 1 progress bar tổng. |
| Notification giờ ôn | ✅ | 2 layer: (a) **In-app**: bell icon ở header với badge số due, click → list các theme và số due của từng theme; (b) **Hệ thống** (optional): Notification API request permission khi anh bật toggle, browser sẽ bắn notify cả khi tab background. Anh chốt: chỉ in-app, hay cho phép cả notification hệ thống? |
| Button góc chủ đề quản lý ôn | ✅ | Mỗi theme card có icon ⚙️ → mở **Theme Settings**: bật/tắt notify cho theme này, tự chọn số từ học/ngày cho theme, pause theme (không xuất hiện trong daily session), priority (high/normal/low). |

### 4.2. Chỗ anh chưa đề cập — em đề xuất thêm

1. **Word Detail page** `/vocab/word/:id`: full info gồm POS, IPA, audio (TTS), nghĩa VN+EN, 3 ví dụ (mỗi ví dụ có dịch), synonyms (Gemini gen), word family (achieve/achievement/achievable), history learn của user, next review date, độ thành thạo.

2. **Learning steps trước khi vào review** (chuẩn Anki):
   - New word → learning step 1 (1 min)
   - Trả lời đúng → step 2 (10 min)
   - Đúng tiếp → graduate vào review queue (1 day interval)
   - Nếu sai bất kỳ step → quay về step 1
   - Tránh việc "vừa thấy lần đầu đã hẹn 1 ngày sau" — quá xa.

3. **Audio (TTS Web Speech API)**:
   - Auto-play khi flip flashcard hoặc khi vào listening mode
   - Có nút 🔊 ở mọi chỗ có từ (giống auto-translate popover đã làm).

4. **Search toàn bộ kho** `/vocab/search?q=`: gõ → list từ khớp + theme + status.

5. **Calendar Heatmap** trong Profile: số từ ôn mỗi ngày 12 tuần (giống grammar đã có).

6. **Achievements vocab**:
   - "First Word" (1 từ đã master)
   - "Polyglot" (100 từ master)
   - "Wordsmith" (500 từ master)
   - "Theme Master" (1 theme 100% master)
   - "20-Day Vocab Streak"
   - "Lightning Quick" (10 đúng liên tiếp trong typing mode)

7. **XP cho vocab**: mỗi từ master = +5 XP, mỗi review correct = +2 XP, daily 20-word goal = +30 XP bonus. Tích hợp vào `userStore.totalXp` chung — anh thấy tiến bộ ở mọi mặt cùng 1 hệ.

8. **Đánh dấu nguồn**: 1230 từ này gọi là "TOEIC Core". Phân biệt với từ user lưu từ auto-translate (Phase 7.5 đã có) — gọi là "Sổ từ riêng". Có thể merge nếu user lưu 1 từ trùng với kho TOEIC.

9. **Difficulty marker**: TOEIC từ vựng có "tần số" — từ nào Common (xuất hiện part 5/7 nhiều) vs Rare. Em dùng Gemini gán nhãn `frequency: "high" | "medium" | "low"` để optionally **chỉ học từ high-frequency trước**.

10. **Reverse review**: ngoài EN→VN, có mode VN→EN (khó hơn, kiểm tra recall thật). Toggle trong settings.

### 4.3. Tech & SRS design chi tiết

**SM-2 lite state mỗi từ:**
```ts
{
  wordId: string,
  status: "new" | "learning" | "review" | "mastered" | "buried",
  learningStep: 0 | 1 | 2,         // chỉ áp dụng khi status === "learning"
  ease: number,                      // 1.3..3.0, default 2.5
  intervalDays: number,             // 0 nếu learning
  dueAt: number,                    // epoch ms
  reps: number,                     // tổng số lần đã review
  lapses: number,                   // số lần "Again" sau khi vào review
  lastReviewedAt: number,
  totalCorrect: number,
  totalWrong: number,
}
```

**Nút bấm trong session:**
| Nút | Hành động (status === "review") |
|---|---|
| Again 🟥 | status="learning", step=0, due=now+1m, EF -= 0.20 (min 1.3), lapses++ |
| Hard 🟧 | interval *= 1.2, EF -= 0.15 |
| Good 🟩 | interval *= EF, EF không đổi |
| Easy 🟦 | interval *= EF * 1.3, EF += 0.15 (max 3.0) |

Khi status === "learning":
- Again → step 0, due +1m
- Good → step++; nếu step ≥ 2 → graduate (status="review", interval=1d)
- Easy → graduate ngay (interval=3d)

**Mastered** = interval ≥ 21d (≈ 3 tuần liên tiếp đúng). UI tô vàng badge 💎.

**Buried** = user "Suspend" thủ công (ít dùng, có thể bỏ).

### 4.4. Phase plan

#### Phase V1 — Data ingestion ✅ DONE (2026-05-18)
- [x] `scripts/parse-vocab.mjs`: parsed **1248 entries** from 23 markdown files (758 noun / 217 verb / 201 adj / 69 adv). 1246 với đầy đủ vi+en+≥3 ví dụ.
- [x] `scripts/categorize-vocab.mjs`: chạy với Gemini 2.5 Flash. **7/16 batches thành công** (~560 từ phân loại đúng). 9 batches dính HTTP 429 → 720 từ bị rơi về "daily" theme. Script đã update có mode `--skip-existing` để rerun chỉ batch fail khi quota reset.

#### Phase V2 — SRS engine ✅ DONE
- [x] `src/lib/vocab/srs.ts`: SM-2 lite pure functions, 4 choices (Again/Hard/Good/Easy), 2-phase lifecycle learning → review → mastered (≥ 21d).
- [x] `src/lib/vocab/scheduler.ts`: `buildSession`, `countDue`, `countNew`, `computePoolStats`. Interleave 3 review : 1 new.
- [x] `src/store/vocabSrsStore.ts`: Zustand persist key `grammar-quest:vocab-srs`.

#### Phase V3 — Learning UI ✅ DONE
- [x] **`/vocab`** VocabHubPage — hub 4 tab: Hôm nay (DailyGoalRing + nút bắt đầu) / Chủ đề (15 theme cards với 5 stats mỗi card) / Sổ từ riêng (auto-translate saves) / Tìm.
- [x] **`/vocab/theme/:themeId`** VocabThemePage — list từ trong theme + nút Học chủ đề.
- [x] **`/vocab/word/:wordId`** VocabWordPage — detail full, audio TTS, ví dụ, tiến độ SRS (status / next due / reps / accuracy / lapses).
- [x] **`/vocab/study`** + **`/vocab/study/theme/:themeId`** VocabStudyPage — flashcard mode hoàn chỉnh: Front (word/phonetic/POS/audio) → click/Space lật → Back (VN + EN def + 3 ví dụ với audio mỗi câu).
- [x] **AnswerBar** Again/Hard/Good/Easy, preview interval (1m / 10m / 1d / 3d), shortcut phím 1/2/3/4 + Space lật + Enter ≡ Good.
- [x] Confetti animation khi hoàn tất phiên.

> Phase V3 v1 chỉ build dạng **Flashcard**. Các mode còn lại (Typing / MCQ / Listening / Sentence Cloze) sẽ là phase mở rộng — flashcard đã đủ cho user start dùng SRS hôm nay.

#### Phase V4 — NotificationBell ✅ DONE
- [x] `src/components/layout/NotificationBell.tsx`: bell icon ở header với badge đỏ số due tổng. Click → dropdown 3 section:
  - **Ngữ pháp · SRS** → `/practice/mistakes`
  - **Từ vựng · SRS** → `/vocab/study`
  - **Theo chủ đề** (list theme có due > 0, click → `/vocab/study/theme/:id`)
- [x] Animate pulse `notifications_active` icon khi có due.
- [x] Đóng khi click outside.
- [ ] ThemeSettings modal (per-theme notify toggle / pause / quota override) — defer Phase V4.5 nếu anh cần.

#### Phase V5 — Synonyms enrichment ⛔ BLOCKED (Gemini quota)
- [ ] `scripts/enrich-vocab.mjs`: gọi Gemini gán synonyms (3-5 từ) + antonyms + word family cho 1248 entries. ~16 calls × 80 từ.
- [ ] Lưu `src/data/vocab/synonyms.json`.
- [ ] Hiển thị trong Flashcard back + VocabWordPage.

#### Phase V6 — Polish + Integration ✅ DONE
- [x] **6 vocab achievements** thêm vào `lib/achievements.ts` category mới "Từ vựng": vocab-first-word (+10), vocab-50-touched (+30), vocab-mastered-10 (+80), vocab-mastered-100 (+300), vocab-mastered-500 (+1000), vocab-daily-goal (+60).
- [x] **Vocab XP** cộng vào `userStore.totalXp`: again=+1, hard=+3, good=+5, easy=+6; bonus +2 lần đầu, +10 nếu vừa mastered. Áp dụng streak multiplier như grammar.
- [x] **Daily Quest mới** "20 từ vựng hôm nay" → +50 XP. (Bây giờ có 4 quest/ngày.)
- [x] Profile AchievementsGrid auto-grouped category "Từ vựng".
- [ ] Profile Activity Heatmap: cần update để include vocab reviews (Phase 6 grammar) — defer.
- [ ] Settings: thêm options vocab (số từ mới/ngày, reverse mode toggle) — defer.

### 4.5. Câu hỏi cần anh chốt trước khi em bắt đầu Phase V1

1. **15 theme TOEIC em đề xuất** ở trên có hợp ý anh không? Anh muốn thêm/bớt theme nào (vd "Politics & News" cho TOEIC reading khó)?
2. **SM-2 lite hay rule cứng anh ban đầu?** Em mạnh khuyến nghị SM-2 nhưng tôn trọng nếu anh thích cách của anh đơn giản hơn.
3. **6 learning mode** OK hay anh chỉ muốn 4 ban đầu (flashcard / typing / MCQ / examples — em bỏ Listening và Sentence Cloze)?
4. **Notification hệ thống** (Browser Notification API có request permission) hay chỉ in-app bell badge?
5. **Reverse mode (VN→EN)** bật mặc định, hay chỉ làm option trong Settings?
6. **Synonyms** gen sẵn lúc seed (Phase V5, mất thêm 5 phút gọi Gemini), hay lazy-load khi user mở WordDetail (chậm hơn)?

Anh trả lời rồi em bắt đầu Phase V1 luôn.

---

## 5. Câu hỏi cần anh chốt trước khi em bắt đầu Phase 0

1. **Repo strategy**: xoá toàn bộ code HTD Corp trong repo này, hay tạo folder con riêng cho app TOEIC?
2. **Tên app + branding**: em đang tạm gọi "Grammar Quest". Anh muốn tên khác?
3. **Cách sinh câu hỏi**: tự soạn tay 100% hay cho phép em làm trang admin nội bộ generate bằng Gemini rồi anh duyệt?
4. **Ngôn ngữ UI**: chỉ tiếng Việt? Hay vẫn đa ngôn ngữ như `LanguageContext` cũ (VI/EN/ZH/KO)?
5. **Deploy**: vẫn GitHub Pages như cũ, hay anh có ý định khác (Vercel, Netlify)?

Trả lời 5 câu này xong, em bắt đầu Phase 0.
