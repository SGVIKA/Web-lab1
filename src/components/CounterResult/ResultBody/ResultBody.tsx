import { useResultStore } from "../../../hooks/useResultStore";

export function ResultBody() {
  const { dailyCalories, targetCalories } = useResultStore();
  return (
    <div className="counter-result__body">
      <p className="counter-result__text text">
        Суточная норма - <strong>{dailyCalories}</strong>, необходимая организму
        для нормального функционирования.
      </p>
      <p className="counter-result__text text">
        Для поддержания веса нужно употреблять <strong>{targetCalories}</strong>{" "}
        в день.
      </p>
    </div>
  );
}
