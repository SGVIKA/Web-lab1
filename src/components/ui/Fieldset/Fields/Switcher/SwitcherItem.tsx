import { useGenderStore } from "../../../../../hooks/useGenderStore";
import type { ISwitcherItem } from "./switcher.interface";

export function SwitcherItem({ value, label }: ISwitcherItem) {
  const { gender, setGender } = useGenderStore();

  const handleChange = () => setGender(value as "male" | "female");

  return (
    <div className="form__btn-radio" onClick={handleChange}>
      <input
        type="radio"
        id={value}
        name="gender"
        value={value}
        checked={value === gender}
        onChange={handleChange}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}
