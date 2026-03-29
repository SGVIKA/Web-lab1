import { FormButtons } from "../FormButtons/FormButtond";
import { GenderSelect } from "./GenderSelect/GenderSelect";
import { UserParams } from "./UserParams/UserParams";
import { PhysicalActivitySelect } from "./PhysicalActivitySelect/PhysicalActivitySelect";

export function CounterForm() {
  return (
    <form className="form">
      <GenderSelect />
      <UserParams />
      <PhysicalActivitySelect />

      <FormButtons />
    </form>
  );
}
