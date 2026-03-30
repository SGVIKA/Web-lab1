import { useActivityStore } from "../../../../../hooks/useActivityStore";
import { useGenderStore } from "../../../../../hooks/useGenderStore";
import { useParamsStore } from "../../../../../hooks/useParamsStore";

export function ResetButton() {
  const { setGender } = useGenderStore();
  const {age, height, weight, setAge, setHeight, setWeight } = useParamsStore();
  const { setActivity } = useActivityStore();

  const handleReset = () => {
    (setGender("male"),
      setAge(0),
      setHeight(0),
      setWeight(0),
      setActivity("min"));
  };
  return (
    <button className="form__reset btn btn_transparent" onClick={handleReset}>
      Очистить поля
    </button>
  );
}
