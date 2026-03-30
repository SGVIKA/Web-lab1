// import { useContext } from "react";
import { FormLabel } from "../../Labels/FormLabel/FormLabel";
import { FormControl } from "./FormControl/FormControl";
import { ErrorMessage } from "../../../ErrorMessage";
import { useValidation } from "../../../../../hooks/useValidation";
// import { UserParamsContext } from "../../../../Counter/CounterBody/CounterForm/UserParams/UserParams";
import type { IFormGroupItem } from "./form-group.interface";

export function FormGroup({item}:{item:IFormGroupItem}) {
  // const item = useContext(UserParamsContext);
  const { value, onChange, isError, errorMessage } = useValidation(item);

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
        value={value}
        onChange={onChange}
      />
      {isError ? <ErrorMessage message={errorMessage} /> : null}
    </div>
  );
}
