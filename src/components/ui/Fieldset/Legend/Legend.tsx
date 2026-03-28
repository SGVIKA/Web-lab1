import type { ILegend } from "./legend.interface";

export function Legend({ className, text }: ILegend) {
  return <legend className={`form__legend h2 ${className}`}>{text}</legend>;
}
