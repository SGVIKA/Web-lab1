import { create } from "zustand";

export interface IActivityStore {
  activity: string;
  setActivity: (activity: string) => void;
}

export const useActivityStore = create<IActivityStore>((set) => ({
  activity: "min",
  setActivity: (activity) => set({ activity }),
}));
