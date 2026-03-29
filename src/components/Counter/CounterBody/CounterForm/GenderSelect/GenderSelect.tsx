import { Switcher } from "../../../../ui/Fieldset/Fields/Switcher/Switcher";
import { Fieldset } from "../../../../ui/Fieldset/Fieldset";

export function GenderSelect() {
  return (
    <Fieldset title="Пол">
      <Switcher data={{ male: "Мужской", female: "Женский" }} />
    </Fieldset>
  );
}
