import { useActivityStore } from "../../../../../hooks/useActivityStore";
import { useGenderStore } from "../../../../../hooks/useGenderStore";
import { useParamsStore } from "../../../../../hooks/useParamsStore";
import { useResultStore } from "../../../../../hooks/useResultStore";

export function ResetButton() {
  const { setGender } = useGenderStore();
  const { setAge, setHeight, setWeight } = useParamsStore();
  const { setActivity } = useActivityStore();
  const { setDailyCalories, setTargetCalories } = useResultStore();

  const handleReset = () => {
    setGender("male");
    setAge(0);
    setHeight(0);
    setWeight(0);
    setActivity("min");
    setDailyCalories(undefined);
    setTargetCalories(undefined);
  };
  return (
    <button
      type="button"
      className="form__reset btn btn_transparent"
      onClick={handleReset}
    >
      Очистить поля
    </button>
  );
}
