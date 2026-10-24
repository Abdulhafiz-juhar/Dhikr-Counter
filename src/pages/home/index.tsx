import { EmptyStateArt } from "@/components/EmptyStateArt";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function Home() {
  return (
    <div className="flex flex-col h-screen gap-4 p-4">
      <header>
        <h2 className="text-gold-strong font-semibold text-sm">
          DAILY REMEMBERANCE
        </h2>
        <h1 className="text-primary font-bold text-3xl">Dhikr Counter</h1>
        <h3 className="text-muted-foreground">Friday, 16 October</h3>
      </header>
      <Empty className="border-2 border-border border-dashed bg-card grow-0 w-auto self-center">
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
            Create Project
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}
