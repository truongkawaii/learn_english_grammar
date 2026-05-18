// Bundles all noidung/*.md as raw strings at build time.
// Vite glob is rooted at the project root with the leading "/".
const rawModules = import.meta.glob("/noidung/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const theoryByBasename: Record<string, string> = {};
for (const [path, content] of Object.entries(rawModules)) {
  const basename = path.split("/").pop()!;
  theoryByBasename[basename] = content;
}

export const getTheoryRaw = (basename: string): string | undefined =>
  theoryByBasename[basename];

export const getTheoryCombined = (basenames: string[]): string =>
  basenames
    .map((b) => theoryByBasename[b] ?? `> *(Thiếu nội dung: ${b})*`)
    .join("\n\n---\n\n");
