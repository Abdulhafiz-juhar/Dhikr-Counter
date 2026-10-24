export type Dhikr = {
  id: string;
  name: string;
  target: number;
  count: number;
};

export type DhikrStatus = "not-started" | "in-progress" | "almost" | "done";

export type DhikrFormValues = {
  name: string;
  target: number;
};

export type DhikrFormErrors = Partial<Record<keyof DhikrFormValues, string>>;
