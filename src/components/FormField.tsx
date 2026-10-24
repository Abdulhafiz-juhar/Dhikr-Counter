import type { InputHTMLAttributes } from "react";
import { cx } from "./cx";
import { Icon } from "./Icon";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  /** Required: links the <label> to the <input>. */
  id: string;
  label: string;
  /** Shown only while there is no error. */
  hint?: string;
  error?: string;
};

export function FormField({ id, label, hint, error, className, ...input }: Props) {
  const hintId = hint && !error ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cx("field", error && "field--error")}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={cx("field__input", className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...input}
      />
      {hintId && (
        <p className="field__hint" id={hintId}>
          {hint}
        </p>
      )}
      {errorId && (
        <p className="field__error" id={errorId}>
          <Icon name="alert" />
          <span>
            <span className="visually-hidden">Error: </span>
            {error}
          </span>
        </p>
      )}
    </div>
  );
}
