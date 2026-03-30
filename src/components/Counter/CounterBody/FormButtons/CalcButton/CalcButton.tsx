import { useErrorStore } from "../../../../../hooks/useErrorStore";
import { useGenderStore } from "../../../../../hooks/useGenderStore";
import { useParamsStore } from "../../../../../hooks/useParamsStore";
import { useActivityStore } from "../../../../../hooks/useActivityStore";
import { calcCalory } from "./calc";
import { useResultStore } from "../../../../../hooks/useResultStore";

export function CalcButton() {
  const { isAgeError, isHeightError, isWeightError } = useErrorStore();
  const { gender } = useGenderStore();
  const { age, height, weight } = useParamsStore();
  const { activity } = useActivityStore();
  const { setDailyCalories, setTargetCalories } = useResultStore();

  const isDisabled = isAgeError || isHeightError || isWeightError;

  const handleOnClick = () => {
    const result = calcCalory({
      params: { gender, age, height, weight, activity },
    });
    setDailyCalories(result.dailyCalories);
    setTargetCalories(result.targetCalories);
  };
  
  return (
    <button
      className="form__submit btn"
      type="button"
      disabled={isDisabled}
      onClick={handleOnClick}
    >
      Рассчитать
    </button>
  );
}
