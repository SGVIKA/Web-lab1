import { create } from "zustand";

export interface IGenderStore {
  gender: "male" | "female";
  setGender: (gender: "male" | "female") => void;
}

export const useGenderStore = create<IGenderStore>((set) => ({
  gender: "male",
  setGender: (gender) => set({ gender }),
}));
