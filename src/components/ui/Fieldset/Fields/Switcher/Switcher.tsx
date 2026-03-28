import type { ISwitcher } from "./switcher.interface";
import { SwitcherItem } from "./SwitcherItem";

export function Switcher({ data }: ISwitcher) {
  return (
    <div className="form__btn-radios">
      {Object.entries(data).map(([key, value]) => (
        <SwitcherItem value={key} label={value} />
      ))}
    </div>
  );
}
