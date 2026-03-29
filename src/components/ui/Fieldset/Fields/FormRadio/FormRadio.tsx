import { useActivityStore } from "../../../../../hooks/useActivityStore";
import { FormLabel } from "../../Labels/FormLabel/FormLabel";
import type { IFormRadioItem } from "./form-radio.interface";

export function FormRadio({ item }: { item: IFormRadioItem }) {
  const { activity, setActivity } = useActivityStore();
  const handleChange = () => setActivity(item.id);
  return (
    <div className="form__radio">
      <input
        type="radio"
        id={item.id}
        name="activity"
        value={item.id}
        checked={item.id === activity}
        onChange={handleChange}
      />
      <FormLabel
        forName={item.id}
        title={item.title}
        subTitle={item.subText}
        className="text"
      />
    </div>
  );
}
