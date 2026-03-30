import { useResultStore } from "../../hooks/useResultStore";
import { Heading2 } from "../ui/Headings/Heading2";
import { ResultBody } from "./ResultBody/ResultBody";

export function CounterResult() {
  const {dailyCalories, targetCalories} = useResultStore()
  const isVisibleResult = dailyCalories && targetCalories
  return (
    <div className={`counter-result ${isVisibleResult ? 'counter-result_active' : ''} wrapper`}>
      <Heading2 text="Ваш результат" className="counter-result__title" />

      <ResultBody />
    </div>
  );
}
