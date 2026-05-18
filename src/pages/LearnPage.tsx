import { useCallback, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getTopicById } from "@/data/topics";
import { getTheoryCombined } from "@/data/theoryLoader";
import { Button } from "@/components/ui/Button";
import { useProgressStore } from "@/store/progressStore";
import { extractToc, nodeToText, slugify } from "@/lib/markdown";
import { TableOfContents } from "@/components/learn/TableOfContents";
import { ReadingProgress } from "@/components/learn/ReadingProgress";

// Custom heading renderer that injects an anchor `id` matching the TOC slug.
const makeHeading = (Tag: "h1" | "h2" | "h3" | "h4") =>
  function Heading({ children, ...rest }: { children?: React.ReactNode }) {
    const slug = slugify(nodeToText(children));
    return (
      <Tag id={slug} {...rest} className="scroll-mt-24">
        <a href={`#${slug}`} className="no-underline group">
          {children}
          <span className="ml-2 opacity-0 group-hover:opacity-60 transition text-quest-500 text-sm select-none">
            #
          </span>
        </a>
      </Tag>
    );
  };

const markdownComponents = {
  h1: makeHeading("h1"),
  h2: makeHeading("h2"),
  h3: makeHeading("h3"),
  h4: makeHeading("h4"),
};

export const LearnPage = () => {
  const { topicId = "" } = useParams();
  const topic = getTopicById(topicId);
  const navigate = useNavigate();
  const markTheoryRead = useProgressStore((s) => s.markTheoryRead);
  const topicProgress = useProgressStore(
    (s) => (topic ? s.topicProgress[topic.id] : undefined),
  );

  const content = useMemo(
    () => (topic ? getTheoryCombined(topic.theoryFiles) : ""),
    [topic],
  );
  const toc = useMemo(() => extractToc(content), [content]);

  const handleAutoMarkRead = useCallback(() => {
    if (topic) markTheoryRead(topic.id);
  }, [topic, markTheoryRead]);

  if (!topic) {
    return (
      <div className="text-center py-12">
        <p className="text-ink-500">Không tìm thấy chủ đề: {topicId}</p>
        <Link to="/" className="text-quest-500 underline mt-2 inline-block">
          ← Về bản đồ
        </Link>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress onMarkRead={handleAutoMarkRead} />

      <div className="grid lg:grid-cols-[1fr_220px] gap-8">
        <div className="min-w-0 space-y-6">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <Link to="/" className="text-sm text-ink-500 hover:text-quest-500">
                ← Bản đồ
              </Link>
              <h1 className="font-display font-bold text-3xl mt-1">
                <span className="text-quest-500">{topic.id}</span> · {topic.title}
              </h1>
              <p className="text-ink-500 dark:text-ink-400 mt-1 max-w-xl">
                {topic.description}
              </p>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300">
                  <span className="material-symbols-rounded text-[1em]">timer</span>
                  ~{topic.estimatedMinutes} phút
                </span>
                {topicProgress?.theoryRead && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-correct/15 text-correct font-medium">
                    <span className="material-symbols-rounded text-[1em]">check_circle</span>
                    Đã đọc
                  </span>
                )}
              </div>
            </div>
            <Button
              icon="swords"
              onClick={() => {
                markTheoryRead(topic.id);
                navigate(`/practice/${topic.id}`);
              }}
            >
              Vào luyện tập
            </Button>
          </div>

          <article
            className="prose prose-ink dark:prose-invert max-w-none
                       prose-headings:font-display prose-headings:tracking-tight
                       prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base
                       prose-h2:text-quest-600 dark:prose-h2:text-quest-300
                       prose-h2:border-l-4 prose-h2:border-quest-500/60 prose-h2:pl-3
                       prose-h3:text-quest-700 dark:prose-h3:text-quest-200
                       prose-strong:text-ink-900 dark:prose-strong:text-ink-50
                       prose-em:text-ink-500
                       prose-table:text-sm prose-table:my-4 prose-table:rounded-lg prose-table:overflow-hidden
                       prose-th:bg-quest-100/50 dark:prose-th:bg-quest-900/30 prose-th:text-ink-800 dark:prose-th:text-ink-100
                       prose-th:font-semibold prose-th:py-2 prose-th:px-3
                       prose-td:py-2 prose-td:px-3 prose-td:align-top
                       prose-tr:border-ink-200 dark:prose-tr:border-ink-800
                       prose-code:text-quest-600 dark:prose-code:text-quest-300
                       prose-code:before:content-[''] prose-code:after:content-['']
                       prose-code:bg-ink-100 dark:prose-code:bg-ink-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                       prose-hr:border-ink-200 dark:prose-hr:border-ink-800
                       prose-blockquote:border-quest-400 prose-blockquote:text-ink-500
                       selection:bg-quest-300/40"
            data-translatable="true"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents as never}
            >
              {content}
            </ReactMarkdown>
          </article>

          <div className="border-t border-ink-200 dark:border-ink-800 pt-6 flex justify-end">
            <Button
              icon="swords"
              size="lg"
              onClick={() => {
                markTheoryRead(topic.id);
                navigate(`/practice/${topic.id}`);
              }}
            >
              Tới phần luyện tập →
            </Button>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={toc} />
          </div>
        </aside>
      </div>
    </>
  );
};
