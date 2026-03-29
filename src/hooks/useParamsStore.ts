import { create } from "zustand";

export interface IParamsStore {
  age: number;
  height: number;
  weight: number;

  setAge: (age: number) => void;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
}

export const useParamsStore = create<IParamsStore>((set) => ({
  age: 0,
  height: 0,
  weight: 0,
  setAge: (age) => set({ age }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
}));
