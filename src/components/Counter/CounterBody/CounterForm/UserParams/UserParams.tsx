import { createContext } from "react";
import { FormGroup } from "../../../../ui/Fieldset/Fields/FormGroup/FormGroup";
import { Fieldset } from "../../../../ui/Fieldset/Fieldset";
import { USER_PARAMS } from "../counter-form.data";
import type { IFormGroupItem } from "../../../../ui/Fieldset/Fields/FormGroup/form-group.interface";

export const UserParamsContext = createContext<IFormGroupItem>({
  id: "",
  title: "",
  unit: "",
  minValue: 0,
  maxValue: undefined,
});

export function UserParams() {
  return (
    <Fieldset
      className="form__row"
      title="Параметры человека"
      isHiddenLegend={true}
    >
      {USER_PARAMS.map((item) => (
        <UserParamsContext.Provider value={item} key={item.id}>
          <FormGroup />
        </UserParamsContext.Provider>
      ))}
    </Fieldset>
  );
}
