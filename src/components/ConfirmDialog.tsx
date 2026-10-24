import { useEffect, useId, useRef } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

type Props = {
  open: boolean;
  name: string;
  count: number;
  onConfirm: () => void;
  onCancel: () => void;
};

/**
 * Uses the native <dialog>. showModal() gives you the focus trap, Escape handling,
 * inert page behind it and focus restore for free. Needs plain/dialog-native.css.
 * The first focusable element (Cancel) gets focus, which is the safe default.
 */
export function ConfirmDialog({ open, name, count, onConfirm, onCancel }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const uid = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      role="alertdialog"
      aria-labelledby={`${uid}-title`}
      aria-describedby={`${uid}-text`}
      onCancel={(e) => {
        // Escape: let React state decide whether it closes.
        e.preventDefault();
        onCancel();
      }}
    >
      <div className="dialog__icon" aria-hidden="true">
        <Icon name="trash" />
      </div>
      <h2 className="dialog__title" id={`${uid}-title`}>
        Delete “{name}”?
      </h2>
      <p className="dialog__text" id={`${uid}-text`}>
        This removes the dhikr and its current count of {count}. This can't be undone.
      </p>
      <div className="dialog__actions">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger-solid" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </dialog>
  );
}
