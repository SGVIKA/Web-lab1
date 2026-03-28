import type { IHeading } from "./heading.interface";

export function Heading2({ text, className }: IHeading) {
  return <h2 className={`${className} h2`}>{text}</h2>;
}
