import { useId, useState, type FormEvent } from "react";
import type { DhikrFormErrors, DhikrFormValues } from "@/types/types";
import { validateDhikr } from "@/types/validate";
import { Button } from "./ui/button";
import { FormField } from "./FormField";
import { Icon } from "./Icon";

type Props = {
  mode: "add" | "edit";
  /** Pre-fill for edit mode. Give the form a `key={dhikr.id}` so it resets between items. */
  initial?: DhikrFormValues;
  onSubmit: (values: DhikrFormValues) => void;
  onCancel: () => void;
  /** Edit mode only. Should open the ConfirmDialog, not delete immediately. */
  onDelete?: () => void;
};

export function DhikrForm({
  mode,
  initial,
  onSubmit,
  onCancel,
  onDelete,
}: Props) {
  const uid = useId();
  const [errors, setErrors] = useState<DhikrFormErrors>({});
  const isEdit = mode === "edit";
  const errorCount = Object.keys(errors).length;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const result = validateDhikr({
      name: String(data.get("name") ?? ""),
      target: String(data.get("target") ?? ""),
    });

    if (!result.ok) {
      setErrors(result.errors);
      const first = result.errors.name ? "name" : "target";
      (form.elements.namedItem(first) as HTMLInputElement | null)?.focus();
      return;
    }
    setErrors({});
    onSubmit(result.values);
  }

  return (
    <form
      className="panel dhikr-form"
      noValidate
      aria-labelledby={`${uid}-title`}
      onSubmit={handleSubmit}
    >
      <h2 className="dhikr-form__title" id={`${uid}-title`}>
        {isEdit ? "Edit dhikr" : "Add a dhikr"}
      </h2>

      {errorCount > 0 && (
        <p className="dhikr-form__summary" role="alert">
          <Icon name="alert" />
          <span>
            Please fix {errorCount} {errorCount === 1 ? "problem" : "problems"}{" "}
            before saving.
          </span>
        </p>
      )}

      <div className="dhikr-form__fields">
        <FormField
          id={`${uid}-name`}
          name="name"
          label="Name"
          type="text"
          placeholder="e.g. SubhanAllah"
          autoComplete="off"
          defaultValue={initial?.name ?? ""}
          hint={isEdit ? undefined : "What you'd like to call this dhikr."}
          error={errors.name}
          required
        />
        <FormField
          id={`${uid}-target`}
          name="target"
          label="Target"
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          defaultValue={initial?.target ?? 33}
          hint={isEdit ? undefined : "Times to repeat (1 or more)."}
          error={errors.target}
          required
        />
      </div>

      <div className="dhikr-form__actions">
        <Button type="submit">{isEdit ? "Save changes" : "Save"}</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>

      {isEdit && onDelete && (
        <div className="dhikr-form__delete">
          <Button type="button" variant="danger" onClick={onDelete}>
            <Icon name="trash" />
            Delete this dhikr
          </Button>
        </div>
      )}
    </form>
  );
}
