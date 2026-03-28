import { useContext } from "react";
import { FormLabel } from "../../Labels/FormLabel/FormLabel";
import { FormControl } from "./FormControl/FormControl";
import { UserParamsContext } from "../../../../Counter/CounterBody/CounterForm/CounterForm";

export function FormGroup() {
  const item = useContext(UserParamsContext);
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
      />
    </div>
  );
}
