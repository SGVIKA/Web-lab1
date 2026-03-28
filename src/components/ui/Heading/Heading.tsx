import type { IHeading } from "./heading.interface";

export function Heading({text, className}:IHeading){
    return <h1 className={`${className} h1`}>{text}</h1>
}