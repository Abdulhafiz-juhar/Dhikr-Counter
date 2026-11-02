import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeProvider";
import { AddDhikrPopUp } from "@/features/dhikr/components/AddDhikrPopUp";
import { DeleteDhikrDialog } from "@/features/dhikr/components/DeleteDhikrDialog";
import { DhikrContent } from "@/features/dhikr/components/DhikrContent";
import { EditDhikr } from "@/features/dhikr/components/EditDhikrPopUp";
import { EmptyDhikr } from "@/features/dhikr/components/EmptyDhikr";

export function Home() {
  const { theme, toggle } = useTheme();

  return (
    <div className="flex flex-col h-screen gap-4 p-4">
      <div className="flex flex-wrap justify-between gap-4 items-end ">
        <header>
          <h2 className="text-gold-strong font-semibold text-sm">
            DAILY REMEMBERANCE
          </h2>
          <h1 className="text-primary font-bold text-3xl">Dhikr Counter</h1>
          <h3 className="text-muted-foreground">Friday, 16 October</h3>
        </header>
        <Button size={"lg"} variant="default" className={"p-6 w-max"}>
          Add dhikr
        </Button>
      </div>
      <Button onClick={() => toggle()}>Theme changer</Button>
      <DhikrContent />
    </div>
  );
}

{
  /* first page - no dhikr yet */
}
{
  /* first page - no dhikr yet */
}
{
  /* card added page */
}
{
  /* card added page */
}
{
  /* Add a dhikr popup form */
}
{
  /* Add a dhikr popup form */
}
{
  /* Edit a dhikr popup form */
}
{
  /* Edit a dhikr popup form */
}
{
  /* Dhikr Delete confirmation popup */
}
{
  /* Dhikr Delete confirmation popup */
}
