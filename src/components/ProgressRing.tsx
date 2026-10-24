import type { CSSProperties } from "react";
import { getProgress } from "@/types/status";
import { cx } from "./cx";
import { Icon } from "./Icon";

type Props = {
  count: number;
  target: number;
  done?: boolean;
};

export function ProgressRing({ count, target, done = false }: Props) {
  const style = { "--progress": getProgress(count, target) } as CSSProperties;
  return (
    <div
      className={cx("progress-ring", done && "progress-ring--done")}
      style={style}
      role="img"
      aria-label={`${count} of ${target} counted${done ? ", completed" : ""}`}
    >
      <svg
        className="progress-ring__svg"
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
      >
        <circle className="progress-ring__track" cx="50" cy="50" r="44" />
        <circle
          className="progress-ring__value"
          cx="50"
          cy="50"
          r="44"
          pathLength={100}
        />
      </svg>
      <p className="progress-ring__label" aria-hidden="true">
        <span className="progress-ring__count">{count}</span>
        <span className="progress-ring__target">of {target}</span>
      </p>
      {done && (
        <span className="progress-ring__seal" aria-hidden="true">
          <Icon name="check" />
        </span>
      )}
    </div>
  );
}
