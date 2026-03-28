import type { IFormGroupItem } from "../../../ui/Fieldset/Fields/FormGroup/form-group.interface";
import type { IFormRadioItem } from "../../../ui/Fieldset/Fields/FormRadio/form-radio.interface";

export const USER_PARAMS: IFormGroupItem[] = [
  { id: "age", title: "Возраст", unit: "лет", minValue: 0, maxValue: 150 },
  { id: "height", title: "Рост", unit: "см", minValue: 0 },
  { id: "weight", title: "Вес", unit: "кг", minValue: 0 },
];

export const PHYSICAL_ACTIVITY: IFormRadioItem[] = [
  {
    id: "min",
    title: "Минимальная",
    subText: "Сидячая работа, отсутствие физических нагрузок",
  },
  {
    id: "low",
    title: "Низкая",
    subText: "Редкие, нерегулярные тренировки, активность в быту",
  },
  {
    id: "mid",
    title: "Средняя",
    subText: "Тренировки 3-5 раз в неделю",
  },
  {
    id: "high",
    title: "Высокая",
    subText: "Тренировки 6-7 раз в неделю",
  },
  {
    id: "very-high",
    title: "Очень высокая",
    subText: "Больше 6 тренировок в неделю и физическая работа",
  },
];
