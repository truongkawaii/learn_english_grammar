import { useEffect, useRef, useState } from "react";
import { useUserStore } from "@/store/userStore";
import { useTranslateCacheStore } from "@/store/translateCacheStore";
import { isGeminiEnabled, translateToVi } from "@/services/gemini";
import { tryAcquire } from "@/lib/rateLimit";
import { TranslationPopover, type PopoverData } from "./TranslationPopover";

const MIN_LEN = 2;
const MAX_LEN = 200;
const DEBOUNCE_MS = 320;

interface Popover {
  rect: DOMRect;
  data: PopoverData;
}

/**
 * Global selection-listener.
 * Mount once in AppShell. Shows a translation popover whenever the user
 * highlights text inside a `data-translatable="true"` ancestor.
 */
export const SelectionTranslator = () => {
  const enabled = useUserStore((s) => s.autoTranslateEnabled);
  const [popover, setPopover] = useState<Popover | null>(null);
  const cacheGet = useTranslateCacheStore((s) => s.get);
  const cachePut = useTranslateCacheStore((s) => s.put);
  const cacheHit = useTranslateCacheStore((s) => s.hit);
  const debounceRef = useRef<number | undefined>(undefined);
  const requestSeqRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setPopover(null);
      return;
    }

    const handleSelectionChange = () => {
      window.clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(() => {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
          setPopover(null);
          return;
        }
        const raw = sel.toString();
        const text = raw.trim();
        if (text.length < MIN_LEN || text.length > MAX_LEN) {
          setPopover(null);
          return;
        }
        // Selection must originate inside a translatable area
        const anchor = sel.anchorNode;
        const focus = sel.focusNode;
        const root = (
          anchor?.nodeType === Node.ELEMENT_NODE
            ? (anchor as Element)
            : anchor?.parentElement
        )?.closest('[data-translatable="true"]');
        const rootFocus = (
          focus?.nodeType === Node.ELEMENT_NODE
            ? (focus as Element)
            : focus?.parentElement
        )?.closest('[data-translatable="true"]');
        if (!root || !rootFocus) {
          setPopover(null);
          return;
        }

        const range = sel.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Mostly latin alphabetic; skip if Vietnamese (already in VI)
        const looksEnglish = /[a-zA-Z]/.test(text) && !/[ăâđêôơưĂÂĐÊÔƠƯàáạảãâầấậẩẫèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹÀ-ỹ]/.test(text);
        if (!looksEnglish) {
          setPopover(null);
          return;
        }

        const cached = cacheGet(text);
        if (cached) {
          cacheHit(text);
          setPopover({
            rect,
            data: {
              text,
              vi: cached.vi,
              pos: cached.pos,
              note: cached.note,
              status: "ready",
              fromCache: true,
            },
          });
          return;
        }

        // Show "loading" immediately
        const seq = ++requestSeqRef.current;
        setPopover({
          rect,
          data: { text, vi: "", status: "loading" },
        });

        // Rate-limit
        if (!tryAcquire("gemini-translate")) {
          setPopover({
            rect,
            data: { text, vi: "", status: "rate-limited" },
          });
          return;
        }

        if (!isGeminiEnabled()) {
          setPopover({
            rect,
            data: {
              text,
              vi: "",
              status: "error",
              errorMessage: "Gemini API chưa cấu hình (.env)",
            },
          });
          return;
        }

        translateToVi(text)
          .then((result) => {
            if (seq !== requestSeqRef.current) return; // stale
            if (!result.vi) {
              setPopover({
                rect,
                data: { text, vi: "", status: "error", errorMessage: "API trả về rỗng" },
              });
              return;
            }
            cachePut({ text, vi: result.vi, pos: result.pos, note: result.note });
            setPopover({
              rect,
              data: {
                text,
                vi: result.vi,
                pos: result.pos,
                note: result.note,
                status: "ready",
              },
            });
          })
          .catch((e) => {
            if (seq !== requestSeqRef.current) return;
            setPopover({
              rect,
              data: { text, vi: "", status: "error", errorMessage: (e as Error).message },
            });
          });
      }, DEBOUNCE_MS);
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      window.clearTimeout(debounceRef.current);
    };
  }, [enabled, cacheGet, cachePut, cacheHit]);

  if (!enabled || !popover) return null;
  return (
    <TranslationPopover
      rect={popover.rect}
      data={popover.data}
      onClose={() => setPopover(null)}
    />
  );
};
