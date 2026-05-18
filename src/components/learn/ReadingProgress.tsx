import { useEffect, useState } from "react";

interface Props {
  /** Called once per mount when scroll progress first crosses `markReadThreshold`. */
  onMarkRead?: () => void;
  markReadThreshold?: number; // 0..1
}

export const ReadingProgress = ({ onMarkRead, markReadThreshold = 0.8 }: Props) => {
  const [progress, setProgress] = useState(0);
  const [hasMarked, setHasMarked] = useState(false);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const value = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      setProgress(value);
      if (!hasMarked && value >= markReadThreshold) {
        setHasMarked(true);
        onMarkRead?.();
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onMarkRead, markReadThreshold, hasMarked]);

  return (
    <div
      className="fixed top-[57px] left-0 right-0 h-1 z-10 pointer-events-none"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-quest-400 via-quest-500 to-quest-300 transition-[width] duration-100"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};
