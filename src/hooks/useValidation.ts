import { useCallback, useState, type ChangeEvent } from "react";
import type { IFormGroupItem } from "../components/ui/Fieldset/Fields/FormGroup/form-group.interface";
import { useErrorStore } from "./useErrorStore";

// export interface IUseValidation {
//   minValue: number;
//   maxValue?: number;
//   id: string;
// }

export function useValidation({ minValue, maxValue, id }: IFormGroupItem) {
  const [value, setValue] = useState(minValue);
  const [isError, setIsError] = useState(false);
  const { setIsAgeError, setIsHeightError, setIsWeightError } = useErrorStore();

  const clamp = useCallback(
    (num: number): number => {
      if (maxValue !== undefined) {
        return Math.max(minValue, Math.min(maxValue, num));
      }
      return Math.max(minValue, num);
    },
    [minValue, maxValue],
  );

  const error = useCallback(
    (id: string, isError: boolean) => {
      if (id === "age") {
        setIsAgeError(isError);
      } else if (id === "height") {
        setIsHeightError(isError);
      } else if (id === "weight") {
        setIsWeightError(isError);
      }
    },
    [setIsAgeError, setIsHeightError, setIsWeightError],
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const num = e.target.valueAsNumber;
      if (isNaN(num)) {
        setValue(minValue);
        setIsError(true);
        error(id, true);
        return;
      }

      const clampedNum = clamp(num);
      setValue(clampedNum);

      if (maxValue !== undefined && (num > maxValue || num < minValue)) {
        setIsError(true);
        error(id, true);
      } else if (num < minValue) {
        setIsError(true);
        error(id, true);
      } else {
        setIsError(false);
        error(id, false);
      }
    },
    [minValue, maxValue, clamp],
  );

  const errorMessage = isError
    ? maxValue !== undefined
      ? `Значение не должно быть отрицательным или больше ${maxValue}`
      : `Значение не должно быть отрицательным`
    : "";

  return { value, onChange, isError, errorMessage };
}
