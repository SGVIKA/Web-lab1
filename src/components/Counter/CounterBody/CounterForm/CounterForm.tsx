import { createContext } from "react";
import { FormGroup } from "../../../ui/Fieldset/Fields/FormGroup/FormGroup";
import { Switcher } from "../../../ui/Fieldset/Fields/Switcher/Switcher";
import { Fieldset } from "../../../ui/Fieldset/Fieldset";
import { PHYSICAL_ACTIVITY, USER_PARAMS } from "./counter-form.data";
import type { IFormGroupItem } from "../../../ui/Fieldset/Fields/FormGroup/form-group.interface";
import { FormRadio } from "../../../ui/Fieldset/Fields/FormRadio/FormRadio";
import { FormButtons } from "../FormButtons/FormButtond";
import { useGenderStore } from "../../../../hooks/useGenderStore";

export const UserParamsContext = createContext<IFormGroupItem>({
  id: "",
  title: "",
  unit: "",
  minValue: 0,
});

export function CounterForm() {
  // const { gender, setGender } = useGenderStore();

  return (
    <form className="form">
      <Fieldset title="Пол">
        <Switcher data={{ male: "Мужской", female: "Женский" }} />
      </Fieldset>

      <Fieldset
        className="form__row"
        title="Параметры человека"
        isHiddenLegend={true}
      >
        {USER_PARAMS.map((item) => (
          <UserParamsContext.Provider value={item}>
            <FormGroup />
          </UserParamsContext.Provider>
        ))}
      </Fieldset>

      <Fieldset title="Физическая активность">
        {PHYSICAL_ACTIVITY.map((item) => (
          <FormRadio item={item} />
        ))}
      </Fieldset>

      <FormButtons />
    </form>
  );
}
