import { CellComponent } from "@/types/cellTypes";
import { CellEnum, StorageIconState } from "@/types/enums";
import CategoryCell from '@/components/table/CategoryCell.vue';
import CurrencyCell from '@/components/table//CurrencyCell.vue';
import AvailabilityCell from '@/components/table/AvailabilityCell.vue';
import TextCell from '@/components/table//TextCell.vue';

export const getCell = <T extends CellEnum>(type: T): CellComponent<T> => {
  const cellMap = {
    [CellEnum.Category]: CategoryCell,
    [CellEnum.Currency]: CurrencyCell,
    [CellEnum.Availability]: AvailabilityCell,
    [CellEnum.Text]: TextCell,
  };

  return cellMap[type] as CellComponent<T>;
}

export const cellAlign = (type: CellEnum) => ({
  [CellEnum.Category]: 'flex-start',
  [CellEnum.Currency]: 'flex-end',
  [CellEnum.Availability]: 'center',
  [CellEnum.Text]: 'flex-start',
}[type])

export const availability = (val: number) => val > 1000 ? StorageIconState.Full : val > 500 ? StorageIconState.Ok : val > 20 && val > 0 ? StorageIconState.Low : StorageIconState.Empty