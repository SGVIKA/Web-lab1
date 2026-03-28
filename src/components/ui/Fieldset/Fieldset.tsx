import type { IFieldset } from "./fieldset.interface";
import { Legend } from "./Legend/Legend";

export function Fieldset({ className, title, isHiddenLegend=false, children }: IFieldset) {
  return (
    <fieldset className={`form__group ${className}`}>
      <Legend text={title} className={`${isHiddenLegend?'visually-hidden':''}`}/>
      {children}
    </fieldset>
  );
}
