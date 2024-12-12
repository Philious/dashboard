import { CellComponent } from "@/types/cellTypes";
import { CellEnum } from "@/types/enums";
import CategoryCell from '@/components/table/CategoryCell.vue';
import CurrencyCell from '@/components/table//CurrencyCell.vue';
import IntegerCell from '@/components/table//IntegerCell.vue';
import TextCell from '@/components/table//TextCell.vue';

export const getCell = <T extends CellEnum>(type: T): CellComponent<T> => {
  const cellMap = {
    [CellEnum.Category]: CategoryCell,
    [CellEnum.Currency]: CurrencyCell,
    [CellEnum.Integer]: IntegerCell,
    [CellEnum.Text]: TextCell,
  };

  return cellMap[type] as CellComponent<T>;
}

export const cellAlign = (type: CellEnum) => ({
  [CellEnum.Category]: 'flex-start',
  [CellEnum.Currency]: 'flex-end',
  [CellEnum.Integer]: 'flex-start',
  [CellEnum.Text]: 'flex-start',
}[type])