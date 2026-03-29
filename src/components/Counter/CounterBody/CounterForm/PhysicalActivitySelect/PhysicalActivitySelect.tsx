import { FormRadio } from "../../../../ui/Fieldset/Fields/FormRadio/FormRadio";
import { Fieldset } from "../../../../ui/Fieldset/Fieldset";
import { PHYSICAL_ACTIVITY } from "../counter-form.data";

export function PhysicalActivitySelect() {

  return (
    <Fieldset title="Физическая активность">
      {PHYSICAL_ACTIVITY.map((item) => (
        <FormRadio key={item.id} item={item} />
      ))}
    </Fieldset>
  );
}
