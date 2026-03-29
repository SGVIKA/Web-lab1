import { useCallback, useState, type ChangeEvent } from "react";

export interface IUseValidation {
  minValue: number;
  maxValue?: number;
}

export function useValidation({ minValue, maxValue }: IUseValidation) {
  const [value, setValue] = useState(minValue);
  const [isError, setIsError] = useState(false);

  const clamp = useCallback(
    (num: number): number => {
      if (maxValue !== undefined) {
        return Math.max(minValue, Math.min(maxValue, num));
      }
      return Math.max(minValue, num);
    },
    [minValue, maxValue],
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const num = e.target.valueAsNumber;
      if (isNaN(num)) {
        setValue(minValue);
        setIsError(true);
        return;
      }

      const clampedNum = clamp(num);
      setValue(clampedNum);

      if (maxValue !== undefined && (num > maxValue || num < minValue)) {
        setIsError(true);
      } else if (num < minValue) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    },
    [minValue, maxValue, clamp],
  );

  const error = isError
    ? maxValue !== undefined
      ? `Значение не должно быть отрицательным или больше ${maxValue}`
      : `Значение не должно быть отрицательным`
    : '';

  return { value, onChange, isError, error };
}
