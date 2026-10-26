import { DhikrCard } from "@/components/DhikrCard";
import { EmptyStateArt } from "@/components/EmptyStateArt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function Home() {
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
      {/* first page - no dhikr yet */}
      {/* <Empty className="border-2 border-border border-dashed bg-card  w-auto self-center">
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
      </Empty> */}
      {/* first page - no dhikr yet */}
      {/* card added page */}
      {/* <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] justify-items-center overflow-y-auto p-2 thin-scrollbar">
        <DhikrCard />
        <DhikrCard />
        <DhikrCard />
        <DhikrCard />
        <DhikrCard />
        <DhikrCard />
      </div> */}
      {/* card added page */}
      {/* Add a dhikr popup form */}

      <Dialog>
        <form>
          <DialogTrigger
            render={<Button variant="outline">Add a dhikr</Button>}
          />
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Add a dhikr</DialogTitle>
              <DialogDescription>
                Add new dhikr to your collection
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" placeholder="e.g. SubhanAllah" />
              </Field>
              <Field>
                <Label htmlFor="target-1">Target</Label>
                <Input id="target-1" name="target" placeholder="33" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      {/* Add a dhikr popup form */}
      {/* Edit a dhikr popup form */}
      <Dialog>
        <form>
          <DialogTrigger
            render={<Button variant="outline">Edit dhikr</Button>}
          />
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit dhikr</DialogTitle>
              <DialogDescription>Edit or Delete your dhikr</DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" placeholder="e.g. SubhanAllah" />
              </Field>
              <Field>
                <Label htmlFor="target-1">Target</Label>
                <Input id="target-1" name="target" placeholder="33" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit">Save changes</Button>
              <Button variant={"destructive"}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      {/* Edit a dhikr popup form */}
      {/* Dhikr Delete confirmation popup */}
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          Show Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete “Alhamdulillah”?</AlertDialogTitle>
            <AlertDialogDescription>
              This removes the dhikr and its current count of 12. This can't be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant={"destructive"}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Dhikr Delete confirmation popup */}
    </div>
  );
}
