import { Fragment, type ReactElement } from "react";

/**
 * Tiny inline markdown renderer for question text.
 * Supports `**bold**` and ` ___ ` (renders as gap pill).
 * Avoids pulling react-markdown into the hot path.
 */
export const renderInline = (text: string): ReactElement => {
  // Split on **bold** first
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {segments.map((seg, i) => {
        const bold = seg.match(/^\*\*([^*]+)\*\*$/);
        if (bold) {
          return (
            <strong key={i} className="text-quest-600 dark:text-quest-300">
              {bold[1]}
            </strong>
          );
        }
        // Then within plain text, replace ___ with a styled gap
        const parts = seg.split(/(___+)/g);
        return (
          <Fragment key={i}>
            {parts.map((p, j) =>
              /^___+$/.test(p) ? (
                <span
                  key={j}
                  className="inline-block min-w-[3em] mx-1 px-2 align-middle border-b-2 border-dashed border-quest-400 text-transparent"
                >
                  ___
                </span>
              ) : (
                <Fragment key={j}>{p}</Fragment>
              ),
            )}
          </Fragment>
        );
      })}
    </>
  );
};
