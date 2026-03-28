import type { ISwitcherItem } from "./switcher.interface";

export function SwitcherItem({ value, label,}: ISwitcherItem) {
  return (
    <div className="form__btn-radio">
      <input
        type="radio"
        id={value}
        name="gender"
        value={value}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}
