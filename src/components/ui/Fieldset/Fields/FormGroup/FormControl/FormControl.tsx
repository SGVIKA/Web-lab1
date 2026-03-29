import type { IFormControl } from "./form-control.interface";

export function FormControl({
  id,
  maxValue,
  minValue = 0,
  isError,
  value,
  onChange
}: IFormControl) {
  
  return (
    <input
      className={`form__control ${isError ? "form__control_error" : ""}`}
      type="number"
      id={id}
      name={id}
      value={value}
      min={minValue}
      max={maxValue}
      onChange={onChange}
    />
    
  );
}
