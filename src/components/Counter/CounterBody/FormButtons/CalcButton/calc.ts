export interface ICalcCalory {
  gender: "male" | "female";
  age: number;
  height: number;
  weight: number;
  activity: string;
}

//      суточная норма
// Для мужчин: 66.5 + (13.75 * вес) + (5.003 * рост) - (6.775 * возраст)
// Для женщин: 655.1 + (9.563 * вес) + (1.85 * рост) - (4.676 * возраст)

// Чтобы получить суточную норму для поддержания веса надо предыдущий результат
// умножить на один из коэффициентов, которые зависят от физической активности:
// 1. Минимальный - 1.2
// 2. Низкий - 1.375
// 3. Средний - 1.55
// 4. Высокий - 1.7
// 5. Очень высокий - 1.9

export function calcCalory({ params }: { params: ICalcCalory }) {
  let dailyCalories;

  const activityMultiplier = {
    min: 1.2,
    low: 1.375,
    mid: 1.55,
    high: 1.7,
    "very-high": 1.9,
  };

  if (params.gender === "male") {
    dailyCalories =
      66.5 + 13.75 * params.weight + 5.003 * params.height - 6.775 * params.age;
  } else {
    dailyCalories =
      655.1 + 9.563 * params.weight + 1.85 * params.height - 4.676 * params.age;
  }

  const targetCalories =
    dailyCalories *
    (activityMultiplier[params.activity as keyof typeof activityMultiplier] ||
      1.2);
  return {
    dailyCalories: Math.round(dailyCalories),
    targetCalories: Math.round(targetCalories),
  };
}
