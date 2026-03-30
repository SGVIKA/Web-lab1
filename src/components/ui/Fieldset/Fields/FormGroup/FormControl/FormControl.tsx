import type { ChangeEvent } from "react";
import { useParamsStore } from "../../../../../../hooks/useParamsStore";
import type { IFormControl } from "./form-control.interface";

export function FormControl({
  id,
  maxValue,
  minValue = 0,
  isError,
  value,
  onChange,
}: IFormControl) {
  const { setParam } = useParamsStore();
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setParam(id, e.target.valueAsNumber);
  };

  return (
    <input
      className={`form__control ${isError ? "form__control_error" : ""}`}
      type="number"
      id={id}
      name={id}
      value={value}
      min={minValue}
      max={maxValue}
      onChange={handleOnChange}
    />
  );
}
