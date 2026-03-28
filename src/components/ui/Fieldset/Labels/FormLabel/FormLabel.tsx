import type { IFormLabel } from "./form-label.interface";

export function FormLabel({ forName, title, subTitle, className }: IFormLabel) {
  return (
    <label htmlFor={forName} className={className}>
      {title}{" "} <span className="text-light">{subTitle}</span>
    </label>
  );
}
