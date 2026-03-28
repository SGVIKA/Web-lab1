import type {ReactNode } from "react";

export interface IFieldset {
  className?: string;
  title: string;
  isHiddenLegend?: boolean;
  children: ReactNode;
}
