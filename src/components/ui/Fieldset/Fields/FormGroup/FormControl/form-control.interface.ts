import type { ChangeEvent } from "react";

export interface IFormControl {
  id: string;
  maxValue?: number;
  minValue?: number;
  isError: boolean;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
