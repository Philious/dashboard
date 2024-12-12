import CategoryCell from '@/components/table/CategoryCell.vue'
import CurrencyCell from '@/components/table/CurrencyCell.vue';
import IntegerCell from '@/components/table/IntegerCell.vue';
import TextCell from '@/components/table/TextCell.vue';
import { CellEnum } from './enums';

export type CatagoryCellComponent = typeof CategoryCell;
export type CurrencyCellComponent = typeof CurrencyCell;
export type IntegerCellComponent = typeof IntegerCell;
export type TextCellComponent = typeof TextCell;

export type CellComponent<T extends CellEnum> = T extends CellEnum.Category ? CatagoryCellComponent :
  T extends CellEnum.Currency ? CurrencyCellComponent :
  T extends CellEnum.Integer ? IntegerCellComponent :
  T extends CellEnum.Text ? TextCellComponent :
  never

export type CategoryCellProps = {
  id: string;
  cellType: CellEnum.Category;
  value: string[]
}

export type CurrencyCellProps = {
  id: string;
  cellType: CellEnum.Currency;
  value: number
}

export type IntegerCellProps = {
  id: string;
  cellType: CellEnum.Integer;
  value: number
}

export type TextCellProps = {
  id: string;
  cellType: CellEnum.Text;
  value: string
}

export type CellProps<T = CellEnum> = T extends CellEnum.Category ? CategoryCellProps :
  T extends CellEnum.Currency ? CurrencyCellProps :
  T extends CellEnum.Integer ? IntegerCellProps :
  T extends CellEnum.Text ? TextCellProps :
  never