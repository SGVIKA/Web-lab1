import type { ChangeEvent } from "react";
import { useParamsStore } from "../../../../../../hooks/useParamsStore";
import type { IFormControl } from "./form-control.interface";

export function FormControl({
  id,
  maxValue,
  minValue = 0,
  isError,
  onChange,
}: IFormControl) {
  const { age, height, weight, setParam } = useParamsStore();
  const paramMap = {
    age: age,
    height: height,
    weight: weight,
  };
  const currentParam = paramMap[id as keyof typeof paramMap];
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    let num = e.target.valueAsNumber;
    if (isNaN(num)) num = minValue;

    if (maxValue !== undefined) {
      num = Math.max(minValue, Math.min(maxValue, num));
    } else {
      num = Math.max(minValue, num);
    }

    onChange(e); // валидация
    setParam(id, num);
    // onChange(e);
    // setParam(id, e.target.valueAsNumber);
  };

  return (
    <input
      className={`form__control ${isError ? "form__control_error" : ""}`}
      type="number"
      id={id}
      name={id}
      value={currentParam}
      min={minValue}
      max={maxValue}
      onChange={handleOnChange}
    />
  );
}
