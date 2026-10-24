import type { DhikrStatus } from "@/types/types";
import { Icon, type IconName } from "./Icon";

const LABEL: Record<DhikrStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  almost: "Almost there",
  done: "Completed",
};

const ICON: Record<DhikrStatus, IconName> = {
  "not-started": "status-not-started",
  "in-progress": "status-progress",
  almost: "status-almost",
  done: "check",
};

type Props = {
  status: DhikrStatus;
  /** Shown as "Almost there · N to go" when status is "almost". */
  remaining?: number;
};

/** Status is always icon + text, never colour alone. */
export function StatusBadge({ status, remaining }: Props) {
  const text =
    status === "almost" && remaining
      ? `${LABEL.almost} · ${remaining} to go`
      : LABEL[status];
  return (
    <span className={`status-badge status-badge--${status}`}>
      <Icon name={ICON[status]} />
      {text}
    </span>
  );
}
