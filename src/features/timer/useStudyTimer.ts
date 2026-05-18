import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";

const IDLE_MS = 60_000;            // pause after 60s no interaction
const TICK_INTERVAL_MS = 1_000;
const FLUSH_INTERVAL_MS = 5_000;   // batch writes to localStorage

/**
 * Track active study seconds, write to `userStore.studySecondsByDate[today]`.
 *
 * Counts a second only when ALL of:
 *  - `document.visibilityState === "visible"`
 *  - user interacted (mouse / key / scroll / touch) within last 60s
 *
 * Designed to be mounted exactly once globally (currently AppShell).
 */
export const useStudyTimer = () => {
  const addStudySeconds = useUserStore((s) => s.addStudySeconds);

  useEffect(() => {
    let lastInteraction = Date.now();
    let lastTick = Date.now();
    let accumulatedMs = 0;
    let lastFlushAt = Date.now();

    const markInteraction = () => {
      lastInteraction = Date.now();
    };

    const flush = (force = false) => {
      const now = Date.now();
      if (!force && now - lastFlushAt < FLUSH_INTERVAL_MS) return;
      if (accumulatedMs < 1000) return;
      const seconds = Math.floor(accumulatedMs / 1000);
      addStudySeconds(seconds);
      accumulatedMs = accumulatedMs - seconds * 1000;
      lastFlushAt = now;
    };

    const tick = () => {
      const now = Date.now();
      const elapsed = now - lastTick;
      lastTick = now;

      const visible = document.visibilityState === "visible";
      const active = now - lastInteraction <= IDLE_MS;

      if (visible && active) {
        // cap each tick at 2s to avoid sleeping-tab over-count
        accumulatedMs += Math.min(elapsed, 2000);
      }
      flush();
    };

    const interval = setInterval(tick, TICK_INTERVAL_MS);

    const events: Array<keyof WindowEventMap> = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
      "click",
    ];
    events.forEach((e) =>
      window.addEventListener(e, markInteraction, { passive: true }),
    );
    document.addEventListener("visibilitychange", markInteraction);

    return () => {
      clearInterval(interval);
      events.forEach((e) => window.removeEventListener(e, markInteraction));
      document.removeEventListener("visibilitychange", markInteraction);
      flush(true);
    };
  }, [addStudySeconds]);
};
