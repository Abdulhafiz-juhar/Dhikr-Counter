import { DhikrCard } from "@/components/DhikrCard";
import type { ReactNode } from "react";

export function DhikrContent(): ReactNode {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] justify-items-center overflow-y-auto p-2 thin-scrollbar">
      <DhikrCard />
      <DhikrCard />
      <DhikrCard />
      <DhikrCard />
      <DhikrCard />
      <DhikrCard />
    </div>
  );
}
