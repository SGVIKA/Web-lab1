import { useErrorStore } from "../../../../../hooks/useErrorStore";

export function CalcButton() {
  const {isAgeError, isHeightError, isWeightError} = useErrorStore()
  return (
    <button className="form__submit btn" type="submit" disabled={isAgeError||isHeightError||isWeightError}>
      Рассчитать
    </button>
  );
}
