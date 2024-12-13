import { CellProps } from "./cellTypes";
import { CellEnum } from "./enums";

export type TableHeader = {
  id: string;
  cellType: CellEnum;
  title: string;
}

export type Row = {
  rowId: string,
  cells: CellProps[],
}

export type TableOptions = {
  columnTemplate?: string;
}

export type MenuOption = {
  id: string;
  label: string,
  value: string | null
}