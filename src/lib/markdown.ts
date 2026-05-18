// ----------------------------------------------------------------------------
// Markdown helpers (no extra deps — kept tight)
// ----------------------------------------------------------------------------

/** Convert any string (Vietnamese diacritics, **bold**, …) to a stable URL slug. */
export const slugify = (input: string): string =>
  input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/\*/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/** Walk a React node tree and concatenate all text inside. */
export const nodeToText = (node: unknown): string => {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in (node as any)) {
    return nodeToText((node as any).props?.children);
  }
  return "";
};

export interface TocItem {
  level: 2 | 3 | 4;
  text: string;
  slug: string;
}

const HEADING_RE = /^(#{2,4})\s+(.+?)\s*$/gm;

/** Pull h2/h3/h4 headings out of raw markdown to drive the TOC sidebar. */
export const extractToc = (markdown: string): TocItem[] => {
  const items: TocItem[] = [];
  for (const match of markdown.matchAll(HEADING_RE)) {
    const level = match[1].length as 2 | 3 | 4;
    const text = match[2].replace(/\*+/g, "").trim();
    if (!text) continue;
    items.push({ level, text, slug: slugify(text) });
  }
  return items;
};
