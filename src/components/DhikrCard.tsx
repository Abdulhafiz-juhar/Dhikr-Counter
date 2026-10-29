"use client";

import * as React from "react";
import { Circle, CheckCircle2, Pencil, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * DhikrCard
 *
 * Themed ONLY with shadcn semantic tokens (primary, card, muted-foreground, ...),
 * so it follows your theme and dark mode with no color overrides.
 *
 * Requires: npx shadcn@latest add button card badge   +   npm i lucide-react
 * Assumes a Tailwind v4 shadcn theme (colors are full values like oklch(...)).
 * On a v3-style theme (bare "142 76% 36%" values) wrap the var()s: hsl(var(--primary)).
 */

type Status = "not-started" | "in-progress" | "completed";

export interface DhikrCardProps {
  /** Label shown at the top (e.g. "SubhanAllah") */
  title?: string;
  /** Number of counts to complete */
  target?: number;
  /** Controlled count (optional) */
  value?: number;
  /** Called with the new count (optional) */
  onChange?: (value: number) => void;
  /** Called when the pencil icon is pressed (optional) */
  onEdit?: () => void;
  className?: string;
}

// Badge look comes from the badge's own variants, not hard-coded colors.
const STATUS: Record<
  Status,
  { label: string; variant: "outline" | "secondary" | "default" }
> = {
  "not-started": { label: "Not started", variant: "outline" },
  "in-progress": { label: "In progress", variant: "secondary" },
  completed: { label: "Completed", variant: "default" },
};

export function DhikrCard({
  title = "SubhanAllah",
  target = 33,
  value,
  onChange,
  onEdit,
  className,
}: DhikrCardProps) {
  const [internal, setInternal] = React.useState<number>(0);
  const isControlled = value !== undefined;
  const count = isControlled ? value : internal;

  const status: Status =
    count === 0 ? "not-started" : count >= target ? "completed" : "in-progress";
  const done = status === "completed";

  const handleTap = () => {
    if (done) return;
    const next = count + 1;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  // Progress ring
  const size = 112;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(count / target, 1);
  const dashOffset = circumference * (1 - progress);

  return (
    <Card
      className={cn(
        "min-h-65 w-full max-w-md rounded-3xl shadow-sm",
        // gentle "done" look: a faint tint of the theme's primary
        done && "border-primary/30 bg-primary/5",
        className,
      )}
    >
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <Badge
              variant={STATUS[status].variant}
              className="gap-1.5 rounded-full px-3 py-1 text-sm font-semibold"
            >
              {done ? (
                <CheckCircle2 className="size-4" aria-hidden="true" />
              ) : (
                <Circle className="size-4" aria-hidden="true" />
              )}
              {STATUS[status].label}
            </Badge>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onEdit}
            aria-label={`Edit ${title}`}
            className="text-muted-foreground hover:text-foreground"
          >
            <Pencil className="size-5" aria-hidden="true" />
          </Button>
        </div>

        {/* Counter row */}
        <div className="mt-6 flex items-center gap-5">
          {/* Progress ring */}
          <div
            className="relative shrink-0"
            style={{ width: size, height: size }}
            role="progressbar"
            aria-label={`${title}: ${count} of ${target}`}
            aria-valuemin={0}
            aria-valuemax={target}
            aria-valuenow={count}
          >
            <svg
              width={size}
              height={size}
              className="-rotate-90"
              aria-hidden="true"
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                strokeWidth={stroke}
                className="stroke-primary/15"
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                className="stroke-primary transition-[stroke-dashoffset] duration-300 ease-out motion-reduce:transition-none"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
              <span className="text-3xl font-bold">{count}</span>
              <span className="mt-1 text-sm text-muted-foreground">
                of {target}
              </span>
            </div>
          </div>

          {/* Tap button: colors come from the Button's default variant (bg-primary);
              only the 3D edge is added, as a darker mix of the same token. */}
          <Button
            onClick={handleTap}
            disabled={done}
            className="h-28 flex-1 flex-col gap-1 rounded-3xl text-lg font-semibold shadow-[0_4px_0_0_color-mix(in_oklab,var(--primary)_70%,black)] transition-all active:translate-y-0.5 active:shadow-[0_2px_0_0_color-mix(in_oklab,var(--primary)_70%,black)] disabled:opacity-70 disabled:shadow-none motion-reduce:transition-none"
          >
            <Plus className="size-9" strokeWidth={2.5} aria-hidden="true" />
            {done ? "Completed" : "Tap to count"}
            <span className="sr-only">
              {" "}
              {title}, {count} of {target}
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// export default function Demo() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background p-6">
//       <DhikrCard title="SubhanAllah" target={33} />
//     </div>
//   );
// }
