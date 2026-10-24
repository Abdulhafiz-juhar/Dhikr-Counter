import type { ReactNode } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

type Props = {
  eyebrow?: string;
  title?: string;
  /** e.g. "1 of 4 completed". Omit on the empty screen. */
  summary?: ReactNode;
  /** Omit to hide the button (empty state has its own add button). */
  onAdd?: () => void;
};

export function AppHeader({
  eyebrow = "Daily remembrance",
  title = "Dhikr Counter",
  summary,
  onAdd,
}: Props) {
  return (
    <header className="app-header">
      <div className="app-header__text">
        <p className="app-header__eyebrow">{eyebrow}</p>
        <h1 className="app-header__title">{title}</h1>
        {summary && <p className="app-header__summary">{summary}</p>}
      </div>
      {onAdd && (
        <Button onClick={onAdd}>
          <Icon name="plus" />
          Add dhikr
        </Button>
      )}
    </header>
  );
}
