import type { SVGProps } from "react";
import { cx } from "./cx";

export type IconName =
  | "plus"
  | "pencil"
  | "check"
  | "trash"
  | "alert"
  | "status-not-started"
  | "status-progress"
  | "status-almost";

/** Render once near the top of the app. Icons are then <Icon name="plus" />. */
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <symbol id="i-plus" viewBox="0 0 24 24">
        <path d="M12 5v14M5 12h14" />
      </symbol>
      <symbol id="i-pencil" viewBox="0 0 24 24">
        <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z" />
        <path d="M14.5 6.5l3 3" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </symbol>
      <symbol id="i-trash" viewBox="0 0 24 24">
        <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-12M9 7V4h6v3" />
      </symbol>
      <symbol id="i-alert" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.5v5.5M12 16.5h.01" />
      </symbol>
      {/* status icons: empty, half, almost-full */}
      <symbol id="i-status-not-started" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </symbol>
      <symbol id="i-status-progress" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8V2.5A5.5 5.5 0 0 1 8 13.5Z" fill="currentColor" stroke="none" />
      </symbol>
      <symbol id="i-status-almost" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8V2.5A5.5 5.5 0 1 1 2.5 8Z" fill="currentColor" stroke="none" />
      </symbol>
    </svg>
  );
}

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & { name: IconName };

/** Decorative by default (aria-hidden). Put the accessible name on the parent button. */
export function Icon({ name, className, ...rest }: IconProps) {
  return (
    <svg className={cx("icon", className)} aria-hidden="true" focusable="false" {...rest}>
      <use href={`#i-${name}`} />
    </svg>
  );
}
