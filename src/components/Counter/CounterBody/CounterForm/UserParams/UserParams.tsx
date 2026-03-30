import { FormGroup } from "../../../../ui/Fieldset/Fields/FormGroup/FormGroup";
import { Fieldset } from "../../../../ui/Fieldset/Fieldset";
import { USER_PARAMS } from "../counter-form.data";


export function UserParams() {
  return (
    <Fieldset
      className="form__row"
      title="Параметры человека"
      isHiddenLegend={true}
    >
      {USER_PARAMS.map((item) => (
          <FormGroup item={item}/>
      ))}
    </Fieldset>
  );
}
