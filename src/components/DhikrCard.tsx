import type { Dhikr } from "@/types/types";
import { getRemaining, getStatus } from "@/types/status";
import { cx } from "./cx";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";
import { ProgressRing } from "./ProgressRing";
import { StatusBadge } from "./StatusBadge";

export type DhikrCardProps = {
  dhikr: Dhikr;
  onIncrement: () => void;
  onEdit: () => void;
};

export function DhikrCard({ dhikr, onIncrement, onEdit }: DhikrCardProps) {
  const { name, count, target } = dhikr;
  const status = getStatus(count, target);
  const done = status === "done";

  return (
    <li className={`dhikr-card dhikr-card--${status}`}>
      <div className="dhikr-card__top">
        <div className="dhikr-card__heading">
          <h2 className="dhikr-card__name">{name}</h2>
          <StatusBadge
            status={status}
            remaining={getRemaining(count, target)}
          />
        </div>
        <IconButton icon="pencil" label={`Edit ${name}`} onClick={onEdit} />
      </div>

      <div className="dhikr-card__body">
        <ProgressRing count={count} target={target} done={done} />

        {/* Completed cards stay pressable so the user can keep counting. */}
        <button
          type="button"
          className={cx("button", "button--increment", done && "button--done")}
          onClick={onIncrement}
        >
          <Icon name={done ? "check" : "plus"} />
          <span>
            {done ? "Completed" : "Tap to count"}
            <span className="visually-hidden">
              {" "}
              {name}, {count} of {target}
              {done ? ". Tap to keep counting." : " so far"}
            </span>
          </span>
        </button>
      </div>

      {/* Announces the new count to screen readers after each tap. */}
      <span className="visually-hidden" role="status">
        {name}: {count} of {target}
      </span>
    </li>
  );
}
