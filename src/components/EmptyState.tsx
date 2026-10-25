import { useId } from "react";
import { Button } from "./ui/button";
import { Icon } from "./Icon";

/** 12 beads on a ring, with a tassel. Decorative only. */
const BEADS: Array<[number, number, "green" | "gold", number?]> = [
  [100, 60, "green"],
  [94.64, 80, "gold"],
  [80, 94.64, "green"],
  [60, 100, "gold", 7.5],
  [40, 94.64, "green"],
  [25.36, 80, "gold"],
  [20, 60, "green"],
  [25.36, 40, "gold"],
  [40, 25.36, "green"],
  [60, 20, "gold"],
  [80, 25.36, "green"],
  [94.64, 40, "gold"],
];

export function EmptyState({ onAdd }: { onAdd: () => void }) {
  const titleId = useId();
  return (
    <section className="empty-state" aria-labelledby={titleId}>
      <svg
        className="empty-state__art"
        viewBox="0 0 120 130"
        aria-hidden="true"
        focusable="false"
      >
        {BEADS.map(([cx, cy, tone, r = 6]) => (
          <circle
            key={`${cx}-${cy}`}
            className={`empty-state__bead empty-state__bead--${tone}`}
            cx={cx}
            cy={cy}
            r={r}
          />
        ))}
        <path className="empty-state__cord" d="M60 108v12" />
        <ellipse
          className="empty-state__bead empty-state__bead--green"
          cx="60"
          cy="124"
          rx="4"
          ry="5"
        />
      </svg>
      <h2 className="empty-state__title" id={titleId}>
        Begin your remembrance
      </h2>
      <p className="empty-state__text">
        You haven't added any dhikr yet. Add one, like SubhanAllah 33 times,
        then tap to count as you go.
      </p>
      <Button size="large" onClick={onAdd}>
        <Icon name="plus" />
        Add your first dhikr
      </Button>
    </section>
  );
}
