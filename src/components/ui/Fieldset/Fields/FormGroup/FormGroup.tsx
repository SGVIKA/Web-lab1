import { FormLabel } from "../../Labels/FormLabel/FormLabel";
import { FormControl } from "./FormControl/FormControl";
import { ErrorMessage } from "../../../ErrorMessage";
import { useValidation } from "../../../../../hooks/useValidation";
import type { IFormGroupItem } from "./form-group.interface";
import { useErrorStore } from "../../../../../hooks/useErrorStore";

export function FormGroup({ item }: { item: IFormGroupItem }) {
  const { onChange, errorMessage } = useValidation(item);
  const { isAgeError, isHeightError, isWeightError } = useErrorStore();
  const errorMap = {
    age: isAgeError,
    height: isHeightError,
    weight: isWeightError,
  };
  const isError = errorMap[item.id as keyof typeof errorMap];

  return (
    <div className="form__group">
      <FormLabel
        forName={item.id}
        title={item.title}
        subTitle={item.unit}
        className="form__label h2"
      />
      <FormControl
        id={item.id}
        maxValue={item.maxValue}
        minValue={item.minValue}
        isError={isError}
        onChange={onChange}
      />
      {isError ? <ErrorMessage message={errorMessage} /> : null}
    </div>
  );
}
