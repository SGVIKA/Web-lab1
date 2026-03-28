import { Heading2 } from "../ui/Heading/Heading2";
import { ResultBody } from "./ResultBody/ResultBody";

export function CounterResult() {
  return (
    <div className="counter-result counter-result_active wrapper">
      <Heading2 text="Ваш результат" className="counter-result__title" />

      <ResultBody />
    </div>
  );
}
