import { EmptyStateArt } from "@/components/EmptyStateArt";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

export function EmptyDhikr(): ReactNode {
  return (
    <Empty className="border-2 border-border border-dashed bg-card  w-auto self-center">
      <EmptyHeader>
        <EmptyStateArt />

        <EmptyTitle className="text-primary font-bold text-3xl">
          Begin your remembrance
        </EmptyTitle>
        <EmptyDescription>
          You haven't added any dhikr yet. Add one, like SubhanAllah 33 times,
          then tap to count as you go.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button size={"lg"} variant="default" className={"p-6"}>
          Add dhikr
        </Button>
      </EmptyContent>
    </Empty>
  );
}
