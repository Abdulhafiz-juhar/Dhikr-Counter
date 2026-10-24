import type { DhikrStatus } from "./types";

/** How many counts left still count as "almost there" (10% of target, at least 1). */
export function almostThreshold(target: number): number {
  return Math.max(1, Math.floor(target * 0.1));
}

export function getRemaining(count: number, target: number): number {
  return Math.max(0, target - count);
}

/** 0-100, clamped. Feeds the ring's --progress custom property. */
export function getProgress(count: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(100, Math.max(0, (count / target) * 100));
}

export function getStatus(count: number, target: number): DhikrStatus {
  if (count >= target) return "done";
  if (count === 0) return "not-started";
  if (getRemaining(count, target) <= almostThreshold(target)) return "almost";
  return "in-progress";
}
