import { create } from "zustand";

export interface IUseErrorStore {
  isAgeError: boolean;
  isHeightError: boolean;
  isWeightError: boolean;
  setIsAgeError: (isError: boolean) => void;
  setIsHeightError: (isError: boolean) => void;
  setIsWeightError: (isError: boolean) => void;
}

export const useErrorStore = create<IUseErrorStore>((set) => ({
  isAgeError: false,
  isHeightError: false,
  isWeightError: false,
  setIsAgeError: (isError) => set({ isAgeError: isError }),
  setIsHeightError: (isError) => set({ isHeightError: isError }),
  setIsWeightError: (isError) => set({ isWeightError: isError }),
}));
