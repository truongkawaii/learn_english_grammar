import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTopicById, TOPICS } from "@/data/topics";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuestionRunner } from "@/components/practice/QuestionRunner";
import { getQuestionsByTopic, hasQuestionsForTopic, ALL_TOPIC_IDS_WITH_QUESTIONS } from "@/data/questions";
import { buildSessionQuestions } from "@/lib/practice";
import { useProgressStore } from "@/store/progressStore";
import { countDueToday } from "@/lib/practiceSources";
import { cn } from "@/lib/format";

// Practice all questions of the topic. Use a very large cap so buildSessionQuestions
// returns the entire pool (still shuffled).
const FULL_TOPIC_SIZE = 1000;

// ----------------------------------------------------------------------------
// Special modes panel (shown only on the topic-less landing /practice)
// ----------------------------------------------------------------------------

const SpecialModes = ({ dueCount }: { dueCount: number }) => (
  <section>
    <h2 className="font-display font-bold text-xl mb-3">Chế độ đặc biệt</h2>
    <div className="grid sm:grid-cols-2 gap-3">
      <ModeCard
        to="/practice/mistakes"
        icon="📌"
        title="Câu cần ôn"
        description="SRS hôm nay + ngân hàng câu sai. Ôn đúng cách, nhớ lâu."
        badge={dueCount > 0 ? `${dueCount} cần ôn` : undefined}
        accent="from-quest-500/15 to-quest-700/15"
      />
      <ModeCard
        to="/practice/daily"
        icon="🎲"
        title="Daily Quiz"
        description="10 câu random từ các chủ đề đã đụng — warm up đầu ngày."
        accent="from-emerald-500/15 to-teal-700/15"
      />
      <ModeCard
        to="/practice/mock"
        icon="📝"
        title="Mock TOEIC Part 5"
        description="40 câu MCQ trong 25 phút · dự đoán band điểm cuối bài."
        accent="from-rose-500/15 to-orange-700/15"
      />
      <ModeCard
        to="/practice/custom"
        icon="🎯"
        title="Custom Drill"
        description="Tự thiết kế bộ ôn theo tag · độ khó · dạng bài."
        accent="from-violet-500/15 to-indigo-700/15"
      />
      <ModeCard
        to="/practice/diagnostic"
        icon="🧭"
        title="Diagnostic Test"
        description="25 câu mix → đo trình độ + gợi ý chủ đề nên ưu tiên."
        accent="from-sky-500/15 to-cyan-700/15"
      />
      <ModeCard
        to="/"
        icon="🐉"
        title="Boss Fight"
        description="Mở từng chủ đề: vào trang Boss để clear cuối topic (≥80%)."
        accent="from-mastery/15 to-pink-700/15"
      />
    </div>
  </section>
);

const ModeCard = ({
  to, icon, title, description, badge, accent,
}: {
  to: string; icon: string; title: string; description: string;
  badge?: string; accent: string;
}) => (
  <Link to={to}>
    <Card interactive>
      <div className={cn("p-4 rounded-2xl bg-gradient-to-br", accent)}>
        <div className="flex items-start justify-between gap-2">
          <div className="text-3xl">{icon}</div>
          {badge && (
            <span className="px-2 py-0.5 rounded-full bg-xp text-ink-950 text-xs font-bold">
              {badge}
            </span>
          )}
        </div>
        <h3 className="font-display font-bold text-lg mt-2">{title}</h3>
        <p className="text-sm text-ink-500 mt-1">{description}</p>
      </div>
    </Card>
  </Link>
);

export const PracticePage = () => {
  const { topicId } = useParams();
  const topic = topicId ? getTopicById(topicId) : undefined;
  const progressStore = useProgressStore((s) => s.questionProgress);
  const topicProgress = useProgressStore((s) => (topic ? s.topicProgress[topic.id] : undefined));
  const dueCount = useMemo(() => {
    void progressStore;
    return countDueToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressStore]);

  const [sessionKey, setSessionKey] = useState(0);
  const sessionQuestions = useMemo(() => {
    if (!topic) return [];
    const pool = getQuestionsByTopic(topic.id);
    return buildSessionQuestions(pool, FULL_TOPIC_SIZE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic?.id, sessionKey]);

  // ----------------- No topic selected: hub -----------------
  if (!topic) {
    const available = ALL_TOPIC_IDS_WITH_QUESTIONS.map((id) => getTopicById(id)).filter(
      (t): t is NonNullable<typeof t> => t !== undefined,
    );
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="font-display font-bold text-3xl">Luyện tập</h1>
          <p className="text-ink-500 mt-1">Chọn chế độ hoặc 1 chủ đề.</p>
        </div>

        <SpecialModes dueCount={dueCount} />

        <section>
          <h2 className="font-display font-bold text-xl mb-3">Theo chủ đề</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {available.map((t) => (
              <Link key={t.id} to={`/practice/${t.id}`}>
                <Card interactive>
                  <div className="p-4">
                    <div className="text-xs font-semibold text-quest-500">{t.id}</div>
                    <h3 className="font-display font-bold text-lg">{t.title}</h3>
                    <p className="text-sm text-ink-500 mt-1">{t.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          {TOPICS.length > available.length && (
            <p className="text-xs text-ink-400 text-center pt-4">
              {TOPICS.length - available.length} chủ đề khác đang được soạn câu hỏi…
            </p>
          )}
        </section>
      </div>
    );
  }

  // ----------------- Topic exists but no questions yet -----------------
  if (!hasQuestionsForTopic(topic.id)) {
    return (
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-sm text-ink-500 hover:text-quest-500">
          ← Bản đồ
        </Link>
        <Card>
          <div className="p-8 text-center space-y-3">
            <div className="text-6xl">🚧</div>
            <h2 className="font-display font-bold text-xl">
              Chưa có câu hỏi cho chủ đề {topic.id} · {topic.title}
            </h2>
            <p className="text-ink-500">
              Ngân hàng câu hỏi cho chủ đề này đang được soạn. Hiện đã có câu hỏi cho:{" "}
              <strong>{ALL_TOPIC_IDS_WITH_QUESTIONS.join(", ")}</strong>.
            </p>
            <Link to="/practice">
              <Button icon="swords">Xem chủ đề khác</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // ----------------- Running -----------------
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4 flex items-start justify-between flex-wrap gap-2">
        <div>
          <Link to="/" className="text-sm text-ink-500 hover:text-quest-500">
            ← Bản đồ
          </Link>
          <h1 className="font-display font-bold text-2xl mt-1">
            <span className="text-quest-500">{topic.id}</span> · {topic.title}
          </h1>
        </div>
        <Link to={`/practice/${topic.id}/boss`}>
          <Button
            variant="danger"
            icon="local_fire_department"
            size="sm"
            title={topicProgress?.bossCleared ? "Boss đã clear, vào đánh lại" : "Boss Fight"}
          >
            {topicProgress?.bossCleared ? "Boss · Đã clear 🏆" : "Vào Boss Fight"}
          </Button>
        </Link>
      </div>
      <QuestionRunner
        key={sessionKey}
        topicId={topic.id}
        topicTitle={topic.title}
        questions={sessionQuestions}
      />
    </div>
  );
};
