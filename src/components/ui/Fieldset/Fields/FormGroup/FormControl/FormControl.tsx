import type { IFormControl } from "./form-control.interface";

export function FormControl({ id, maxValue, minValue = 0, value }: IFormControl) {
  return (
    <input
      className="form__control"
      type="number"
      id={id}
      name={id}
      value={value}
      min={minValue}
      max={maxValue}
    />
  );
}
