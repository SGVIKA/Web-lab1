import { Heading } from "../ui/Heading/Heading";
import { CounterBody } from "./CounterBody/CounterBody";

export function Counter() {
  return (
    <div className="counter">
      <Heading text="Счетчик калорий" className="counter__title" />
      <CounterBody />
    </div>
  );
}
