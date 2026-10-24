import type { Dhikr } from "@/types/types";
import { DhikrCard } from "./DhikrCard";

type Props = {
  items: Dhikr[];
  onIncrement: (id: string) => void;
  onEdit: (id: string) => void;
};

export function DhikrList({ items, onIncrement, onEdit }: Props) {
  return (
    <ul className="dhikr-list">
      {items.map((dhikr) => (
        <DhikrCard
          key={dhikr.id}
          dhikr={dhikr}
          onIncrement={() => onIncrement(dhikr.id)}
          onEdit={() => onEdit(dhikr.id)}
        />
      ))}
    </ul>
  );
}
