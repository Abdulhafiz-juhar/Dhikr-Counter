import type { ReactNode } from "react";

/** Page wrapper. `.app` is the container-query root that drives the 1 → 2 column layout. */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <div className="app__inner">{children}</div>
    </div>
  );
}
