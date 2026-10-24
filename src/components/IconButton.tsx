import type { ButtonHTMLAttributes } from "react";
import { cx } from "./cx";
import { Icon, type IconName } from "./Icon";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconName;
  /** Required: icon-only buttons need an accessible name, e.g. "Edit SubhanAllah". */
  label: string;
};

export function IconButton({ icon, label, type = "button", className, ...rest }: Props) {
  return (
    <button type={type} className={cx("icon-button", className)} aria-label={label} {...rest}>
      <Icon name={icon} />
    </button>
  );
}
