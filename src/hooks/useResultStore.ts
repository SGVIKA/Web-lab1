import { create } from "zustand";

export interface IUseResultStore {
  dailyCalories?: number;
  targetCalories?: number;

  setDailyCalories: (calories?: number) => void;
  setTargetCalories: (calories?: number) => void;
}

export const useResultStore = create<IUseResultStore>((set) => ({
  dailyCalories: undefined,
  targetCalories: undefined,
  setDailyCalories: (calories) => set({ dailyCalories: calories }),
  setTargetCalories: (calories) => set({ targetCalories: calories }),
}));
