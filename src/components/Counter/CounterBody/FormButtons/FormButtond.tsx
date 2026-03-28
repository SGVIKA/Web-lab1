import { CalcButton } from "./CalcButton/CalcButton";
import { ResetButton } from "./ResetButton/ResetButton";

export function FormButtons() {
  return (
    <div className="form__btns">
      <CalcButton />
      <ResetButton />
    </div>
  );
}
