import { FormLabel } from "../../Labels/FormLabel/FormLabel";
import type { IFormRadioItem } from "./form-radio.interface";

export function FormRadio({ item }: { item: IFormRadioItem }) {
  return (
    <div className="form__radio">
      <FormLabel
        forName={item.id}
        title={item.title}
        subTitle={item.subText}
        className="text"
      />

      <input type="radio" name="activity" id={item.id} />
    </div>
  );
}
