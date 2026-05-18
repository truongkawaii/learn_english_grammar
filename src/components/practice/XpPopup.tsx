import { useEffect, useState } from "react";

interface Props {
  amount: number;
  triggerKey: string | number;  // changes force re-fire
}

export const XpPopup = ({ amount, triggerKey }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!amount) return;
    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    const timeout = setTimeout(() => setVisible(false), 1100);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(timeout);
    };
  }, [triggerKey, amount]);

  if (!visible || !amount) return null;
  return (
    <div
      key={triggerKey}
      className="pointer-events-none fixed left-1/2 top-1/3 -translate-x-1/2 z-30 animate-xp-rise"
    >
      <div className="px-4 py-2 rounded-2xl bg-xp text-ink-950 font-display font-extrabold text-2xl shadow-glow-xp inline-flex items-center gap-1">
        <span className="material-symbols-rounded">bolt</span>+{amount} XP
      </div>
    </div>
  );
};
