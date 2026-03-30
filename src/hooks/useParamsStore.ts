import { create } from "zustand";

export interface IParamsStore {
  age: number;
  height: number;
  weight: number;

  setAge: (value: number) => void;
  setHeight: (value: number) => void;
  setWeight: (value: number) => void;

  setParam: (id: "age" | "height" | "weight", value: number) => void;

  }

export const useParamsStore = create<IParamsStore>((set) => ({
  age: 0,
  setAge: (value) => set({ age: value }),
  height: 0,
  setHeight: (value) => set({ height: value }),
  weight: 0,
  setWeight: (value) => set({ weight: value }),
  setParam: (id, value) =>
    set((state) => {
      if (id === "age") return { age: value };
      if (id === "height") return { height: value };
      if (id === "weight") return { weight: value };
      return state;
    }),
    
}));
