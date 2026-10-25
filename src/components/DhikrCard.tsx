"use client";

import * as React from "react";
import { Circle, CheckCircle2, Pencil, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * DhikrCounterCard
 *
 * Requires shadcn/ui components: button, card, badge
 *   npx shadcn@latest add button card badge
 * and lucide-react:
 *   npm i lucide-react
 */

type Status = "not-started" | "in-progress" | "completed";

export interface DhikrCounterCardProps {
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

const STATUS_LABELS: Record<Status, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
};

export function DhikrCard({
  title = "SubhanAllah",
  target = 33,
  value,
  onChange,
  onEdit,
  className,
}: DhikrCounterCardProps) {
  const [internal, setInternal] = React.useState<number>(0);
  const isControlled = value !== undefined;
  const count = isControlled ? value : internal;

  const status: Status =
    count === 0 ? "not-started" : count >= target ? "completed" : "in-progress";

  const handleTap = () => {
    if (count >= target) return;
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
        "min-h-65 w-full max-w-md rounded-3xl border-stone-200 bg-white shadow-sm",
        className,
      )}
    >
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900">
              {title}
            </h2>
            <Badge
              variant="secondary"
              className={cn(
                "gap-1.5 rounded-full border px-3 py-1 text-sm font-semibold",
                status === "completed"
                  ? "border-emerald-200 bg-emerald-100 text-emerald-800"
                  : "border-stone-200 bg-[#f1ebdd] text-stone-600",
              )}
            >
              {status === "completed" ? (
                <CheckCircle2 className="size-4" />
              ) : (
                <Circle className="size-4" />
              )}
              {STATUS_LABELS[status]}
            </Badge>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onEdit}
            aria-label={`Edit ${title}`}
            className="text-stone-600 hover:bg-stone-100"
          >
            <Pencil className="size-5" />
          </Button>
        </div>

        {/* Counter row */}
        <div className="mt-6 flex items-center gap-5">
          {/* Progress ring */}
          <div
            className="relative shrink-0"
            style={{ width: size, height: size }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={target}
            aria-valuenow={count}
          >
            <svg width={size} height={size} className="-rotate-90">
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#e8e2d0"
                strokeWidth={stroke}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#1f5c47"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                className="transition-[stroke-dashoffset] duration-300 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
              <span className="text-3xl font-bold text-stone-900">{count}</span>
              <span className="mt-1 text-sm text-stone-500">of {target}</span>
            </div>
          </div>

          {/* Tap button */}
          <Button
            onClick={handleTap}
            disabled={count >= target}
            className="h-28 flex-1 flex-col gap-1 rounded-3xl bg-[#1f5c47] text-lg font-semibold text-white shadow-[0_4px_0_0_#154435] transition-all hover:bg-[#1a4f3d] active:translate-y-0.5 active:shadow-[0_2px_0_0_#154435] disabled:opacity-70"
          >
            <Plus className="size-9" strokeWidth={2.5} />
            Tap to count
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// export default function Demo() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-stone-50 p-6">
//       <DhikrCounterCard title="SubhanAllah" target={33} />
//     </div>
//   )
// }
