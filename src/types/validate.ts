import type { DhikrFormErrors, DhikrFormValues } from "./types";

export const NAME_MAX = 60;
export const TARGET_MAX = 100_000;

export type ValidationResult =
  | { ok: true; values: DhikrFormValues }
  | { ok: false; errors: DhikrFormErrors };

/** Takes the raw strings from the form (FormData gives you strings). */
export function validateDhikr(input: { name: string; target: string }): ValidationResult {
  const errors: DhikrFormErrors = {};
  const name = input.name.trim();
  const rawTarget = input.target.trim();
  const target = Number(rawTarget);

  if (!name) errors.name = "Enter a name for this dhikr.";
  else if (name.length > NAME_MAX) errors.name = `Keep the name to ${NAME_MAX} characters or fewer.`;

  if (rawTarget === "" || Number.isNaN(target)) errors.target = "Enter a target number.";
  else if (!Number.isInteger(target)) errors.target = "Target must be a whole number.";
  else if (target < 1) errors.target = "Target must be 1 or more.";
  else if (target > TARGET_MAX) errors.target = "Target must be 100,000 or less.";

  if (errors.name || errors.target) return { ok: false, errors };
  return { ok: true, values: { name, target } };
}
